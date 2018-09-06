import isScrolledIntoView from 'packs/view_helper';

document.addEventListener("scroll", function() {
	var els = document.querySelectorAll('[data-animated]')
	if (els !== null) {
		for (let el of els) {
			if ( isScrolledIntoView(el, 100) ) {
				el.classList.remove("invisible")
				el.classList.add( el.getAttribute("data-animated") )
			} else {
				// el.classList.remove("fadeInRight", "fadeInLeft")
			}
		}
	}
	// var els = document.querySelectorAll('.about-hong-u1__text')
	// if (els !== null) {
	// 	for (let el of els) {
	// 		if ( isScrolledIntoView(el, 100) ) {
	// 			el.classList.remove("invisible")
	// 			el.classList.add("fadeInRight")
	// 		} else {
	// 			// el.classList.remove("fadeInRight", "fadeInLeft")
	// 		}
	// 	}
	// }
	// var els = document.querySelectorAll('.about-hong-u1__img')
	// if (els !== null) {
	// 	for (let el of els) {
	// 		if ( isScrolledIntoView(el, 100) ) {
	// 			el.classList.remove("invisible")
	// 			el.classList.add("fadeIn")
	// 		} else {
	// 			// el.classList.remove("fadeInRight", "fadeInLeft")
	// 		}
	// 	}
	// }
	// var els = document.querySelectorAll('.about-hong-u1__red-bg')
	// if (els !== null) {
	// 	for (let el of els) {
	// 		if ( isScrolledIntoView(el, 100) ) {
	// 			el.classList.remove("invisible")
	// 			el.classList.add("fadeInLeft")
	// 		} else {
	// 			// el.classList.remove("fadeInRight", "fadeInLeft")
	// 		}
	// 	}
	// }
})