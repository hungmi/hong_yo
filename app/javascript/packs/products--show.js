$(document).on("click", ".js-image--thumb", function(e) {
	document.querySelector(".js-image--active").style.backgroundImage = `url('${e.target.src}')`
	document.querySelector(".js-image--blur-bg").style.backgroundImage = `url('${e.target.src}')`
})

var $product_model = $("select#product_variety_name")
$(document).on('select2:select', $product_model, function (e) {
	console.log(e.params.data)
	for (let feature of document.querySelectorAll(`.product-comparison [data-highlight]`)) {
		feature.classList.remove("feature--highlight")
	}
	for (let feature of document.querySelectorAll(`.product-comparison [data-highlight='${e.params.data.id}']:not(.combined)`)) {
		feature.classList.add("feature--highlight")
	}
})

document.addEventListener("scroll", function() {
	if (document.querySelector("#products_finder_wrapper") !== null) {
		var starter = document.querySelector("#products_finder_wrapper").getBoundingClientRect().top
	}
	if (document.querySelector("#products_section") !== null) {
		var ender = document.querySelector("#products_section").getBoundingClientRect().top
	}
	if (ender >= 210) {
		document.querySelector("body").classList.remove("fixed-finder")
	} else if (starter <= 0) {
		document.querySelector("body").classList.add("fixed-finder")
	}
})