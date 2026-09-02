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
yarn install
yarn dev
```

The Vite config expects Builder at `http://builder.localhost:8080`.

## Build and package

```sh
yarn build
yarn package
```

The package command validates the repository and writes
`release/builder-lucide-icon-picker-1.0.0.builderext`. Push a tag matching the manifest
version exactly to let the release workflow publish that package.
