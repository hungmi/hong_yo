document.addEventListener("turbolinks:load", function() {
	console.log('load')
	$("select#product_category").select2({ minimumResultsForSearch: Infinity })
	$("select#product_brand").select2({ minimumResultsForSearch: Infinity })
	$("select#product_series").select2({ minimumResultsForSearch: Infinity })
	$("select#product_model").select2({ minimumResultsForSearch: Infinity })
})