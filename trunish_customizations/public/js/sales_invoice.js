frappe.ui.form.on("Sales Invoice Item", {
    discount_screen: calculate_discount,
    price_list_rate: function(frm, cdt, cdn){
        var row = locals[cdt][cdn];
        frappe.db.get_value(
            "Item Price",
            { 
                item_code: row.item_code, 
                price_list: frm.doc.selling_price_list
            },
            "discount_screen",
            (r) => {
                frappe.model.set_value(
                    cdt,
                    cdn,
                    "discount_screen",
                    r.discount_screen
                );
                cur_frm.script_manager.trigger("discount_screen", cdt, cdn)
            }
        );
    }
})

function calculate_discount (frm, cdt, cdn) {
    var row = locals[cdt][cdn];
    const discounts = row.discount_screen.split("+")
    var final_discount = 0;
    var item_price = row.price_list_rate
    discounts.forEach(discount => {
        item_price = item_price * (1 - (discount /100))

    });
    final_discount = row.price_list_rate - item_price
    frappe.model.set_value(
        cdt,
        cdn,
        "discount_amount",
        final_discount
    );
}