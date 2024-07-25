from frappe.custom.doctype.custom_field.custom_field import create_custom_fields
import frappe

def setup_custom_fields():
    custom_fields = {
        "Sales Order Item": [
            dict(
                fieldname='discount_screen',
                label='Trade Discount',
                fieldtype='Data',
                insert_after='discount_percentage'
            ),
        ],
        "Sales Invoice Item": [
            dict(
                fieldname='discount_screen',
                label='Trade Discount',
                fieldtype='Data',
                insert_after='discount_percentage'
            ),
        ],
        "Item Price": [
            dict(
                fieldname='discount_screen',
                label='Trade Discount',
                fieldtype='Data',
                insert_after='price_list_rate',
            ),
        ],

    }
    try:
        create_custom_fields(custom_fields)
    except:
        print("Exception while createing customfield")
        frappe.error_log()