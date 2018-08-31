document.addEventListener("turbolinks:load", function() {
	let waitfadeIn = 2000
	let loopTime = 6000
	// console.log(window.pagesHomeTimers)
	window.pagesHomeTimers = []

	setTimeout(function(){
		if (document.querySelectorAll(`ul.slider`).length > 0 && document.querySelectorAll(`#wrapper_home_top > .root`).length > 0) {
			document.querySelector(`ul.slider > li.index-bg1`).classList.remove("fadeIn", "delay-1s")
			document.querySelector(`#wrapper_home_top > .root1`).classList.remove("fadeInLeft", "delay-1s")
			document.querySelector(`ul.slider > li.index-bg1`).className += ' fadeOut delay-3s'
			document.querySelector(`#wrapper_home_top > .root1`).className += ' fadeOutLeft delay-3s'
		}
	}, waitfadeIn)

	let start = 1
	var fadeInInterval = setInterval(function() {
		console.log("timer is working")
		if (document.querySelectorAll(`ul.slider`).length > 0 && document.querySelectorAll(`#wrapper_home_top > .root`).length > 0) {
			start = (start % 4) + 1
			for (let indexBg of document.querySelectorAll(`ul.slider > li`)) {
				indexBg.classList.remove("fadeIn", "fadeOut", "delay-3s")
				indexBg.classList.add("d-none")
			}
			if (document.querySelectorAll(`ul.slider > li.index-bg${start}`)) {
				document.querySelector(`ul.slider > li.index-bg${start}`).classList.remove("d-none")
				document.querySelector(`ul.slider > li.index-bg${start}`).className += ' fadeIn'
			}

			for (let root of document.querySelectorAll(`#wrapper_home_top > .root`)) {
				root.classList.remove("d-flex", "fadeInLeft", "fadeOutLeft", "delay-3s")
				root.classList.add("d-none")
			}
			if (document.querySelectorAll(`#wrapper_home_top > .root${start}`)) {
				document.querySelector(`#wrapper_home_top > .root${start}`).classList.remove("d-none")
				document.querySelector(`#wrapper_home_top > .root${start}`).className += ' fadeInLeft'
			}

			for (let seeMoreBtn of document.querySelectorAll(`#wrapper_home_top > .root${start} #see_more_btn`)) {
				seeMoreBtn.classList.remove("d-flex", "fadeInLeft", "fadeOutLeft", "delay-3s", "delay-1s", "faster")
				seeMoreBtn.classList.add("d-none")
			}
			if (document.querySelectorAll(`#wrapper_home_top > .root${start} #see_more_btn`)) {
				document.querySelector(`#wrapper_home_top > .root${start} #see_more_btn`).classList.remove("d-none")
				document.querySelector(`#wrapper_home_top > .root${start} #see_more_btn`).className += ' d-flex fadeInLeft delay-1s faster'
			}

			// 等待兩秒，讓進入的動畫完成後，移除進入 class，加上出去 class 搭配 delay
			setTimeout(function(){
				if (document.querySelectorAll(`ul.slider`).length > 0 && document.querySelectorAll(`#wrapper_home_top > .root`).length > 0) {
					document.querySelector(`ul.slider > li.index-bg${start}`).classList.remove("fadeIn")
					document.querySelector(`#wrapper_home_top > .root${start}`).classList.remove("fadeInLeft")
					document.querySelector(`ul.slider > li.index-bg${start}`).className += ' fadeOut delay-3s'
					document.querySelector(`#wrapper_home_top > .root${start}`).className += ' fadeOutLeft delay-3s'
				}
			}, waitfadeIn)
		} else {
			console.log("clear fade in")
			clearInterval(fadeInInterval)
		}
	}, loopTime)
	window.pagesHomeTimers.push(fadeInInterval)
})

document.addEventListener("turbolinks:before-cache", function() {
	// console.log(window.pagesHomeTimers.length)
	for (let i = 0; i < window.pagesHomeTimers.length; i++) {
		clearInterval(window.pagesHomeTimers[i]);
	}
	if (document.querySelectorAll(`ul.slider`).length > 0 && document.querySelectorAll(`#wrapper_home_top > .root`).length > 0) {
		for (let slide of document.querySelectorAll(`ul.slider > li`)) {
			slide.classList.remove("fadeIn", "delay-1s", "fadeOut", "delay-3s", "fadeOutLeft", "fadeInLeft")
		}
	}
	// console.log(window.pagesHomeTimers)
})