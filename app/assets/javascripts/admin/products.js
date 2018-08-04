$(document).on('cocoon:after-insert', function(e, insertedItem) {
	if (document.querySelector("body.admin.varieties") !== undefined) {
		var zh_name_input = $(insertedItem).find("input.awesomplete.zh_name")[0]
		var en_name_input = $(insertedItem).find("input.awesomplete.en_name")[0]
		new Awesomplete(zh_name_input, { list: "feature_zh_name_list" });
		new Awesomplete(en_name_input, { list: "feature_en_name_list" });
		var zh_value_input = $(insertedItem).find("input.awesomplete.zh_value")[0]
		var en_value_input = $(insertedItem).find("input.awesomplete.en_value")[0]
		new Awesomplete(zh_value_input, { list: "feature_zh_value_list" });
		new Awesomplete(en_value_input, { list: "feature_en_value_list" });
	}
});
$(document).on("change keydown", ".admin.products.edit input, .admin.products.edit textarea, .admin.products.new input, .admin.products.new textarea", function(input) {
	window.onbeforeunload = function() {
	  return true;
	};
})

document.addEventListener("turbolinks:before-cache", function() {
  $("select#product_category_id").select2('destroy')
});

document.addEventListener("turbolinks:load", function() {
	var $product_category_id = $("select#product_category_id")
	$product_category_id.select2({})
})