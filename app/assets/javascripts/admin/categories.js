document.addEventListener("turbolinks:before-cache", function() {
  $("select#category_parent_id").select2('destroy')
});

document.addEventListener("turbolinks:load", function() {
	var $category_parent_id = $("select#category_parent_id")
	$category_parent_id.select2({})
})