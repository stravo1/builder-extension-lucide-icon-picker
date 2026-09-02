<template>
	<div class="flex h-full min-h-0 flex-col gap-3 bg-surface-base p-3">
		<div>
			<p class="text-base font-semibold text-ink-gray-9">Lucide icons</p>
			<p class="mt-1 text-p-sm text-ink-gray-6">Choose an icon for the selected block.</p>
		</div>

		<TextInput v-model="query" placeholder="Search icons" icon-left="lucide-search" />

		<div class="min-h-0 flex-1 overflow-y-auto">
			<div class="grid grid-cols-5 gap-1.5">
				<Button
					v-for="icon in filteredIcons"
					:key="icon"
					:icon="`lucide-${icon}`"
					:tooltip="labelFor(icon)"
					:variant="icon === selectedIcon ? 'subtle' : 'ghost'"
					class="w-full"
					@click="selectedIcon = icon" />
			</div>
		</div>

		<div class="flex items-center justify-between border-t border-outline-gray-2 pt-3">
			<p class="text-p-xs text-ink-gray-5">{{ blockId ? "Selected block ready" : "Select a block first" }}</p>
			<Button
				label="Apply icon"
				:disabled="!blockId || !selectedIcon || context.readOnly"
				:loading="applying"
				@click="apply" />
		</div>
	</div>
</template>

<script setup>
import builder from "frappe-builder-extension-sdk";
import { useBuilderContext } from "frappe-builder-extension-sdk/vue";
import { Button, TextInput } from "frappe-ui";
import { computed, ref } from "vue";
import { LUCIDE_ICONS } from "../icons.js";

const context = useBuilderContext(["selection", "readOnly"]);
const blockId = computed(() => context.selection.blockId);
const query = ref("");
const selectedIcon = ref("sparkles");
const applying = ref(false);

const labelFor = (icon) => icon.replace(/-/g, " ").replace(/^./, (letter) => letter.toUpperCase());
const filteredIcons = computed(() => {
	const term = query.value.trim().toLowerCase();
	return term ? LUCIDE_ICONS.filter((icon) => icon.includes(term)) : LUCIDE_ICONS;
});

const apply = async () => {
	if (!blockId.value || !selectedIcon.value) return;

	applying.value = true;
	try {
		await builder.block.update(blockId.value, { attributes: { "data-lucide-icon": selectedIcon.value } });
		await builder.ui.toast(`${labelFor(selectedIcon.value)} applied to the selected block.`, { type: "success" });
		await builder.ui.closePopover(selectedIcon.value);
	} finally {
		applying.value = false;
	}
};
</script>
