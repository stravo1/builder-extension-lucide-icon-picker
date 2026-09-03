# Lucide icon picker

Browse Lucide icons and insert the selected SVG into the active Builder block.

Open the extension from its details page. Search by icon name, choose an icon, and the picker
writes the SVG markup to the current selection.

## Capabilities

- `context.read` follows the active block selection.
- `block.update` writes the chosen SVG to that block.
- `ui.popover` lets extension actions open the picker.

## Develop

```sh
npm install
npm run dev
```

The Vite config expects Builder at `http://builder.localhost:8080`.

## Build and package

```sh
npm run build
npm run package
```

The package command validates the repository and writes
`release/builder-lucide-icon-picker-1.0.0.builderext`. Push `v1.0.0`, or create a
GitHub release with that tag, to let the release workflow publish that package.
