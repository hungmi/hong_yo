document.addEventListener("turbolinks:load", function() {
	var $category_parent_id = $("select#category_parent_id")
	$category_parent_id.select2({})
})