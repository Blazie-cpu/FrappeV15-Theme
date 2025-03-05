# import frappe

# @frappe.whitelist()
# def switch_theme(theme):
# 	if theme in ["Dark", "Light", "Automatic", "corporate_theme"]:
# 		frappe.db.set_value("User", frappe.session.user, "desk_theme", theme)
#
#Testing debugging code below,

import frappe

@frappe.whitelist()
def switch_theme(theme=None):  # Default to None to avoid the TypeError
    if not theme:
        frappe.throw("Theme is required!")  # debugging to give a clear error message

    if theme in ["Dark", "Light", "corporate_theme", "Automatic"]:
        frappe.db.set_value("User", frappe.session.user, "desk_theme", theme)
        frappe.db.commit()
        frappe.msgprint(f"Theme switched to {theme} successfully!")
    else:
        frappe.throw("Invalid theme selected.")
)
