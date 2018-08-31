$(document).on("click", ".js-dot", function(e) {
	console.log(e.target)
	var active_page = e.target.getAttribute("data-page")
	var active_news_group = document.querySelector(`.js-news-group[data-page='${active_page}']`)
	if ( document.querySelectorAll(`.js-news-group[data-page='${active_page}']`) !== undefined ) {
		for (let dot of document.querySelectorAll(".js-dot")) { dot.classList.remove("active") }
		e.target.classList.add("active")
		console.log(e.target)
		for (let group of document.querySelectorAll(".js-news-group")) { group.classList.remove("active") }
		active_news_group.classList.add("active")
	}
})