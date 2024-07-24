frappe.ui.form.on("Sales Invoice Item", {
    discount_screen: function (frm, cdt, cdn) {
        var row = locals[cdt][cdn];
        const discounts = row.discount_screen.split("+")
        var final_discount = 0;
        var item_price = row.base_price_list_rate
        discounts.forEach(discount => {
            item_price = item_price * (1 - (discount /100))

        });
        final_discount = row.base_price_list_rate - item_price
        frappe.model.set_value(
			cdt,
			cdn,
			"discount_amount",
			final_discount
		);
    }
})