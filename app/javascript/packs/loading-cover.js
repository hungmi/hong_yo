document.addEventListener("DOMContentLoaded", function() {
	setTimeout(function(){
		// document.querySelector("body.front.loading").classList.remove("loading")
		document.querySelector("body.front").classList.add("loaded")
		document.querySelector("#contact_btn").classList.add("animated", "tada", "delay-1s")
		for (let news of document.querySelectorAll("body.pages.about .news")) {
			news.classList.add("flipInX", "delay-2s")
		}
	}, 1000)
})