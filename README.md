<h2 align="center">
    <img src="https://raw.githubusercontent.com/adriankarlen/vscode-relapce/main/assets/transparent.png" height="30" width="0px"/>
    VS Code Relapce
    <img src="https://raw.githubusercontent.com/adriankarlen/www/main/assets/transparent.png" height="30" width="0px"/>
</h2>

This is a compilation of VS Code custom css and js files that can be used to
customize the look and feel of VS Code. It is started as a project to mimic the
styling of [Lapce](https://lapce.dev), however in the end it became something I
styled according to my own personal preference.

&nbsp;

## 🌟 Features

-   Centralized command center
-   Colored background on suggestion
-   Removal of overview ruler decorations
-   Uniform text color on tabs
-   Thicker border on active tab
-   Theme color on color picker border

&nbsp;

## 📷 Examples

<details>
    <summary>Catppuccin Mocha</summary>
    <img src="https://raw.githubusercontent.com/adriankarlen/vscode-relapce/main/assets/preview.webp"/>
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
> You might need to tweak your theme settings to get the best experience.

<details>
    <summary>My catppuccin theme overrides</summary>

```json
"catppuccin.customUIColors": {
    "all": {
        "editorGroupHeader.tabsBackground": "base",
        "editorGroupHeader.tabsBorder": "crust",
        "editorGroup.border": "crust",
        "widget.border": "crust",
        "titleBar.activeBackground": "mantle",
        "panel.background": "base",
        "panel.border": "crust",
        "panelTitle.activeBorder": "accent",
        "sideBar.border": "crust",
        "sideBarSectionHeader.background": "base",
        "sideBarSectionHeader.border": "crust",
        "activityBar.background": "mantle",
        "activityBar.border": "crust",
        "scrollbarSlider.background": "surface0",
        "scrollbarSlider.hoverBackground": "surface1",
        "scrollbarSlider.activeBackground": "surface1",
        "statusBar.background": "mantle",
        "statusBar.foreground": "subtext1",
        "commandCenter.border": "crust",
        "commandCenter.background": "base",
        "commandCenter.activeBorder": "crust",
        "commandCenter.activeBackground": "base",
        "commandCenter.activeForeground": "subtext1",
        "commandCenter.inactiveBorder": "crust",
        "input.background": "base",
        "editorWidget.border": "crust",
        "editorHoverWidget.border": "crust",
        "editorSuggestWidget.border": "crust",
        "list.hoverBackground": "crust",
        "list.activeSelectionBackground": "surface0",
        "notifications.border": "crust",
        "notifications.background": "mantle",
        "notificationToast.border": "crust",
        "tab.inactiveForeground": "subtext0",
        "titleBar.border": "crust",
        "tab.border": "crust",
        "merge.border": "crust"
    },
},
```

</details>

&nbsp;

## 📜 License

Licensed under the [MIT License](./LICENSE).
