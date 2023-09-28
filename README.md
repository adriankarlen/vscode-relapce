<h2 align="center">
    <img src="https://raw.githubusercontent.com/adriankarlen/vscode-relapce/main/assets/relapce.webp" alt="Relapce" width="200"/>
    <br/>
    <img src="https://raw.githubusercontent.com/adriankarlen/vscode-relapce/main/assets/transparent.png" height="30" width="0px"/>
    VS Code Relapce
    <img src="https://raw.githubusercontent.com/adriankarlen/www/main/assets/transparent.png" height="30" width="0px"/>
</h2>

This is a compilation of VS Code custom css and js files that can be used to
customize the look and feel of VS Code. It is based on
[Lapce](https://lapce.dev) but ultimately styled according to my own personal
preference.

&nbsp;

## 📷 Examples

<details>
    <summary>Catppuccin Mocha</summary>
    <img src="https://raw.githubusercontent.com/adriankarlen/vscode-relapce/main/assets/preview.png"/>
</details>

&nbsp;

## 📋 Pre-requisites

#### [Custom CSS and JS Loader](https://github.com/be5invis/vscode-custom-css)

> **Extension documentation**\
> Please read the documentation provided by the extension author on how to install
> and use the extension.

#### [Inter Font](https://rsms.me/inter/) (optional)

&nbsp;

## 🚀 Installation

1.  Clone this repository.
2.  Add the contents of `src/settings/settings.json` to your VS Code
    `settings.json` file.
3.  Update the `>> PATH TO YOUR CLONED REPO <<` to point to the location of your
    cloned repository.
4.  Apply the custom css and js files to VS Code via the Custom CSS and JS
    Loader extension.

#### Want to use the default activity bar?

Remove the `horizontal_activity_bar`-files from the `vscode_custom_css.imports`
in `settings.json`.

#### Want to use another font?

Update the `font-family` in `src/css/vars.css`.

&nbsp;

> **Note**\
> You might need to tweak your theme settings to get the best experience. Below is
> an example of my customizations using [Catppuccin Mocha](https://github.com/catppuccin/vscode).

```json
"workbench.colorCustomizations": {
    "editorGroupHeader.tabsBackground": "#1e1e2e",
    "editorGroupHeader.tabsBorder": "#11111b",
    "widget.border": "#11111b",
    "titleBar.activeBackground": "#181825",
    "panel.background": "#1e1e2e",
    "panel.border": "#11111b",
    "panelTitle.activeBorder": "#cba6f7",
    "sideBar.border": "#11111b",
    "sideBarSectionHeader.background": "#1e1e2e",
    "sideBarSectionHeader.border": "#11111b",
    "activityBar.background": "#181825",
    "activityBar.border": "#11111b",
    "scrollbarSlider.hoverBackground": "#313244",
    "scrollbarSlider.activeBackground": "#313244",
    "statusBar.background": "#181825",
    "statusBar.foreground": "#bac2de",
    "commandCenter.border": "#11111b",
    "commandCenter.background": "#1e1e2e",
    "commandCenter.activeBorder": "#11111b",
    "commandCenter.activeBackground": "#1e1e2e",
    "commandCenter.activeForeground": "#bac2de",
    "input.background": "#1e1e2e",
    "editorWidget.border": "#11111b",
    "editorSuggestWidget.border": "#11111b",
    "list.hoverBackground": "#11111b",
    "list.activeSelectionBackground": "#313244",
    "notifications.border": "#11111b",
    "notifications.background": "#181825",
    "notificationToast.border": "#11111b"
}
```

&nbsp;

## 📚 License

Licensed under the [MIT License](./LICENSE).
