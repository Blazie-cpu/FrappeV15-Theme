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

frappe.call({
  method: "corporate_theme.corporate_theme.overrides.user.user.switch_theme",
    args: { theme: "corporate_theme" },
    callback: function (r) {
        if (!r.exc) {
            frappe.show_alert({ message: "Theme switched successfully!", indicator: "green" });
            location.reload();
        }
    }
});
