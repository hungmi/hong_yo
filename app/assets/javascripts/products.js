document.addEventListener("turbolinks:before-cache", function() {
  $("select#product_category").select2('destroy')
	$("select#product_brand").select2('destroy')
	$("select#product_series").select2('destroy')
	$("select#product_variety_name").select2('destroy')
});

document.addEventListener("turbolinks:load", function() {
	var $product_category = $("select#product_category")
	var $product_brand = $("select#product_brand")
	var $product_series = $("select#product_series")
	var $product_model = $("select#product_variety_name")
	$product_category.select2({ minimumResultsForSearch: Infinity })
	$product_brand.select2({ minimumResultsForSearch: Infinity })
	$product_series.select2({ minimumResultsForSearch: Infinity })
	$product_model.select2({ minimumResultsForSearch: Infinity })
	$(document).on('select2:select', $product_category, function (e) {
	  // console.log(e.params.data)
	  if (e.target.id == "product_category") {
	  	updateRelatedOptions('product_brand', e.params.data.id)
	  	getCategoryProducts(e.params.data.id)
	  }
	});
	$(document).on('select2:select', $product_brand, function (e) {
	 	if (e.target.id == "product_brand") {
		  updateRelatedOptions('product_series', e.params.data.id)
		  getCategoryProducts(e.params.data.id)
	 	} else if (e.target.id !== "product_series") {
	 		$("select#product_series option").remove();
	 	}
	});
	$(document).on('select2:select', $product_series, function (e) {
	 	if (e.target.id == "product_series") {
		  getCategoryProducts(e.params.data.id)
	 	}
	});
	if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= 768 || document.querySelector("body").classList.contains("mobile")) {
		moveImagesSectionToMobilePostion()
	}
})

$(document).on("click", ".product_image_thumb img", function(e) {
	document.querySelector("#product_active_image").style.backgroundImage = `url('${e.target.src}')`
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