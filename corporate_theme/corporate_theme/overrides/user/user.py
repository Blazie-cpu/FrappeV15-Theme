import frappe

# @frappe.whitelist()
# def switch_theme(theme):
# 	if theme in ["Dark", "Light", "Automatic", "corporate_theme"]:
# 		frappe.db.set_value("User", frappe.session.user, "desk_theme", theme)
#
#Testing debugging code below, original code above.
import frappe

@frappe.whitelist()
def switch_theme(theme):
    if theme in ["Dark", "Light", "Automatic", "corporate_theme"]:
        frappe.db.set_value("User", frappe.session.user, "desk_theme", theme)
        frappe.msgprint(f"Theme switched to {theme} successfully!")
    else:
        frappe.throw("Invalid theme selected.")
