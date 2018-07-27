$(document).on("click", ".toggler", function() {
	var body = document.querySelector("body")
	body.classList.toggle("active")
	if (body.classList.contains("active")) {
		console.log("scroll to top")
	}
})