import builder from "frappe-builder-extension-sdk";
import "./index.css";

import { vueAdapter } from "frappe-builder-extension-sdk/vue";

// how a component becomes DOM, named once. The SDK ships no framework
builder.use(vueAdapter);

builder.popover.register({ component: () => import("./popover/LucideIconPicker.vue") });

// what the Open button in this extension's details pane opens
builder.open.register({ kind: "popover" });

const open = () => builder.ui.openPopover({ title: "Lucide icons" });

// the button carries the function, and the SDK holds it under the button's name
// builder.toolbar.register({
// 	name: "lucide-icon-picker",
// 	region: "right",
// 	icon: "lucide-shapes",
// 	tooltip: "Choose a Lucide icon",
// 	action: open,
// });
