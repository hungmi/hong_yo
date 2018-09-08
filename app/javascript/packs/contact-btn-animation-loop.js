document.addEventListener("DOMContentLoaded", function() {
	var ca_btn = document.getElementById("contact_btn")
	var interval = Math.floor(Math.random() * Math.floor(3) + 2) * 2000 + 1000
	var availableAnimations = ["tada", "swing", "shake", "pulse", "jello", "flash"]
	var integerIndex = 0
	if (ca_btn !== null) {
		setInterval(function(){
			integerIndex = Math.floor(Math.random() * Math.floor(availableAnimations.length))
			console.log(interval)
			ca_btn.classList.remove("tada", "swing", "shake", "pulse", "jello", "flash")
			ca_btn.classList.add(availableAnimations[integerIndex])
		}, interval)
	}
})