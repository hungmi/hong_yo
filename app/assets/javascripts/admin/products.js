$(document).on('cocoon:after-insert', function(e, insertedItem) {
	if (document.querySelector("body.admin.varieties") !== undefined) {
		var zh_name_input = $(insertedItem).find("input.awesomplete.zh_name")[0]
		var en_name_input = $(insertedItem).find("input.awesomplete.en_name")[0]
		new Awesomplete(zh_name_input, { list: "feature_zh_name_list" });
		new Awesomplete(en_name_input, { list: "feature_en_name_list" });
	}
});