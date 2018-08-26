$(document).on("click", ".js-image--thumb", function(e) {
	document.querySelector(".js-image--active").style.backgroundImage = `url('${e.target.src}')`
	document.querySelector(".js-image--blur-bg").style.backgroundImage = `url('${e.target.src}')`
})