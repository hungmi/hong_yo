document.addEventListener("turbolinks:before-cache", function() {
  $("select.select2").select2('destroy')
});

document.addEventListener("turbolinks:load", function() {
	$("select.select2").select2({ minimumResultsForSearch: Infinity })
	var $product_category = $("select#product_category")
	var $product_brand = $("select#product_brand")
	var $product_series = $("select#product_series")
	var $product_model = $("select#product_variety_name")
	$(document).on('select2:select', $product_category, function (e) {
	  if (e.target.id == "product_category" && e.params.data.id.length !== 0) {
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
	  }
	});
	$(document).on('select2:select', $product_brand, function (e) {
	 	if (e.target.id == "product_brand" && e.params.data.id.length !== 0) {
		  updateRelatedOptions('product_series', e.params.data.id)
		  getCategoryProducts(e.params.data.id)
	 	} else if (e.target.id !== "product_series") {
	 		$("select#product_series option").remove();
	 	}
	});
	$(document).on('select2:select', $product_series, function (e) {
	 	if (e.target.id == "product_series" && e.params.data.id.length !== 0) {
		  getCategoryProducts(e.params.data.id)
	 	}
	});
	if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= 768 || document.querySelector("body").classList.contains("mobile")) {
		moveImagesSectionToMobilePostion()
	}
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

function moveImagesSectionToMobilePostion() {
	let product_images_section = document.querySelector("#product_images_section");
	let someHTML = product_images_section.outerHTML;
	product_images_section.parentNode.removeChild(product_images_section);
	document.querySelector("h2.product_name").insertAdjacentHTML('afterend', someHTML)
}