// document.addEventListener("turbolinks:before-cache", function() {
//   $("select.select2").select2('destroy')
// });

document.addEventListener("DOMContentLoaded", function() {
	$("select.select2").select2({ minimumResultsForSearch: Infinity })
	var $product_category = $("select#product_category")
	var $product_brand = $("select#product_brand")
	var $product_series = $("select#product_series")

	$(document).on('select2:select', $product_category, function (e) {
	  if (e.target.id == "product_category" && e.params.data.id.length !== 0) {
	 		console.log("updating")
		  let selected_option_original_element = e.target.querySelector(`option[value='${e.params.data.id}']`)
		  document.querySelector("[data-target='root_id']").innerHTML = selected_option_original_element.getAttribute("data-id")
		  document.querySelector("[data-target='root_name']").innerHTML = simpleFormat(selected_option_original_element.getAttribute("data-name"))
		  document.querySelector("[data-target='root_description']").innerHTML = selected_option_original_element.getAttribute("data-description")
		  selected_option_original_element.getAttribute("data-bg") !== null ?
		  	document.querySelector("[data-target='root_bg']").style.background = "url('" + selected_option_original_element.getAttribute("data-bg") + "') #ef0105" :
		  	document.querySelector("[data-target='root_bg']").style.background = "#ef0105"
		  // selected_option_original_element.getAttribute("data-id")
	  	updateRelatedOptions('product_brand', e.params.data.id)
	  	getCategoryProducts(e.params.data.id)
	  	history.pushState(null, '', `${location.pathname}?root_id=${$product_category.val()}`);
	  }
	});
	$(document).on('select2:select', $product_brand, function (e) {
	 	if (e.target.id == "product_brand" && e.params.data.id.length !== 0) {
		  updateRelatedOptions('product_series', e.params.data.id)
		  getCategoryProducts(e.params.data.id)
		  history.pushState(null, '', `${location.pathname}?root_id=${$product_category.val()}&brand_id=${$product_brand.val()}`);
	 	} else if (e.target.id !== "product_series") {
	 		$("select#product_series option").remove();
	 	}
	});
	$(document).on('select2:select', $product_series, function (e) {
	 	if (e.target.id == "product_series" && e.params.data.id.length !== 0) {
		  getCategoryProducts(e.params.data.id)
		  history.pushState(null, '', `${location.pathname}?root_id=${$product_category.val()}&brand_id=${$product_brand.val()}&series_id=${e.params.data.id}`);
	 	}
	});
})

function updateRelatedOptions(target, ref) {
	$.ajax({
		url: `/categories/${ref}/children`,
		dataType: "script",
		data: {
			target: target
		}
	}).done(function(children) {
		if (children === undefined) {
			console.log("no children")
			document.querySelector(`#${target}`).innerHTML = ""
		}
	}).fail(function() {
		console.log("failed")
	})
}

function getCategoryProducts(category_id) {
	$.ajax({
		url: `/categories/${category_id}/products`,
		dataType: "script"
	}).done(function(products) {
		if (products === undefined) {
			console.log("no products")
		}
	}).fail(function() {
		console.log("failed")
	})
}