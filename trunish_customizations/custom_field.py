from frappe.custom.doctype.custom_field.custom_field import create_custom_fields
import frappe

def setup_custom_fields():
    custom_fields = {
        "Sales Invoice Item": [
            dict(
                fieldname='discount_screen',
                label='Discount Screen',
                fieldtype='Data',
                insert_after='discount_percentage',
            ),
        ],

    }
    try:
        create_custom_fields(custom_fields)
    except:
        print("Exception while createing customfield")
        frappe.error_log()