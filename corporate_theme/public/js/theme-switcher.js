frappe.provide("frappe.ui");

frappe.ui.ThemeSwitcher = class CustomThemeSwitcher extends frappe.ui.ThemeSwitcher {
    constructor() {
        super()
    }

    fetch_themes() {
		return new Promise((resolve) => {
			this.themes = [
				{
					name: "Light",
					label:("Frappe Light"),
					info:("Light Theme"),
				},
				{
					name: "Dark",
					label:"Timeless Night",
					info:"Dark Theme",
				},
        {
          name:"corporate_theme",
          label: "Corporate Theme",
          info: "Corporate Theme"
        },
				{
					name: "Automatic",
					label:"Automatic",
					info:"Uses system's theme to switch between light and dark mode",
				}
			];

			resolve(this.themes);
		});
	}
}
