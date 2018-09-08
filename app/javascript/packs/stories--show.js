$(document).on("click", ".js-story-image--thumb", function(e) {
	for (let thumb of document.querySelectorAll(".js-story-image--thumb")) {
		thumb.classList.remove("img-thumb--active")
	}
	e.target.classList.add("img-thumb--active")
	document.querySelector(".js-bg").style.background = `url('${e.target.src}'), linear-gradient(-45deg, #ef0105 0%,#ffd2ad 100%)`
	document.querySelector(".js-bg").style.backgroundSize = 'contain'
	document.querySelector(".js-bg").style.backgroundRepeat = 'no-repeat'
	document.querySelector(".js-bg").style.backgroundPosition = 'center'
})