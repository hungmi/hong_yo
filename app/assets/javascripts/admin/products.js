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
  $("select.select2").select2('destroy')
});

document.addEventListener("turbolinks:load", function() {
	$("select.select2:not('.searchable')").select2({ minimumResultsForSearch: Infinity })
	$("select.select2.searchable").select2()
	var $product_twin = $("select#product_twin_id")
	$(document).on('select2:select', $product_twin, function (e) {
	  if (e.target.id == "product_twin_id") {
	  	if (e.params.data.id.length !== 0) {
			  $("form .twins_disable").addClass("d-none")
		  } else {
		  	$("form .twins_disable").removeClass("d-none")
		  }
	  }
	});
})