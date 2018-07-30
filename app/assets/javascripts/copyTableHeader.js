document.addEventListener("turbolinks:before-cache", function() {
	let copied_header = document.querySelector(".product_comparison_table_wrapper table.table.copied_header")
	if (copied_header !== null) {
		copied_header.parentNode.removeChild(copied_header)	
		console.log("silently remove!")
	}
})

document.addEventListener("turbolinks:load", function() {
	let target_table = document.querySelector(".product_comparison_table_wrapper table.table")
	if (target_table !== null) {
		copyTableHeader(target_table);
	}
})

function copyTableHeader(target_table) {
	let first_tr = target_table.querySelector("tr.attribute_names th:first-child")
	let header_width = first_tr.clientWidth
	let copied_header_html = ""
	if (header_width !== undefined && header_width > 0) {
		for (tr of target_table.querySelectorAll("tr")) {
			copied_header_html += `<tr style="height: ${tr.clientHeight}px;">${tr.querySelector("th").outerHTML}</tr>`
		}
		copied_header_html = `<table class="table copied_header text-center" style="max-width: ${header_width + 9}px;">${copied_header_html}</table>`
	}
	target_table.insertAdjacentHTML('beforebegin', copied_header_html)
}