document.addEventListener("DOMContentLoaded", function() {
	if (document.querySelector("body.admin") == null) {
		combineFeatures()
	}
})
document.addEventListener("turbolinks:load", function() {
	if (document.querySelector("body.admin") !== null) {
		combineFeatures()
	}
})

function combineFeatures() {
	let feature_names = []
	for (let feature_name of document.querySelectorAll(".js-product-comparison__table-wrapper table:not(.copied_header) tr.attribute_names th")) {
		feature_names.push(feature_name.innerHTML)
	}
	// console.log(feature_names)
	for (let feature_name of feature_names) {
		let now_val = ''
		let expanding = true
		let tds = document.querySelectorAll(`td[data-name='${feature_name}']`)
		for (j = 0; j < tds.length; j++) {
			let current_td = tds[j]
			now_val = current_td.innerHTML
			expanding = true
			// console.log(now_val)
			for (i = 1 + j; i < tds.length; i++) {
				if (expanding && now_val !== '') {
					expanding = expanding && (now_val === tds[i].innerHTML)
					if (expanding) {
						tds[i].classList.add("d-none")
						current_td.rowSpan += 1
						current_td.classList.add("combined")
					}
				}
			}
		}
	}

	for (let feature_name of feature_names) {
		let now_bg = ''
		let tds = document.querySelectorAll(`td[data-name='${feature_name}']:not(.d-none)`)
		for (j = 0; j < tds.length; j++) {
			if (j % 2 == 0) {
				tds[j].style.backgroundColor = "#f2f2f2"
			} else {
				tds[j].style.backgroundColor = "white"
			}
		}
	}
}