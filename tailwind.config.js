import frappeUIPreset from "frappe-ui/tailwind";
import { LUCIDE_ICONS } from "./src/icons.js";

export default {
	presets: [frappeUIPreset],
	content: ["./src/**/*.{vue,js}", "./node_modules/frappe-ui/src/**/*.{vue,js,ts}"],
	safelist: LUCIDE_ICONS.map((icon) => `lucide-${icon}`),
};
