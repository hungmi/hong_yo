import isScrolledIntoView from 'packs/view_helper';

document.addEventListener("scroll", function() {
	var wrapperTitle = document.querySelector('.js-categories-section .section_title_wrapper')
	if (wrapperTitle !== null) {
		if ( isScrolledIntoView(wrapperTitle, 200) ) {
			wrapperTitle.classList.remove("invisible")
			wrapperTitle.classList.add("fadeIn")
		} else {
			// wrapperTitle.classList.remove("fadeInRight", "fadeInLeft")
		}
	}

	var els = document.querySelectorAll('.home_product')
	if (els !== null) {
		for (let el of els) {
			if ( isScrolledIntoView(el, 100) ) {
				el.classList.remove("invisible")
				if (el.classList.contains("even")) {
					el.classList.add("fadeInLeft")
				} else if (el.classList.contains("odd")) {
					el.classList.add("fadeInRight")
				}
			} else {
				// el.classList.remove("fadeInRight", "fadeInLeft")
			}
		}
	}

	var els2 = document.querySelectorAll('.home_product_wrapper')
	if (els2 !== null) {
		for (let el of els2) {
			if ( isScrolledIntoView(el, 100) ) {
				el.classList.remove("invisible")
				if (el.classList.contains("even")) {
					el.classList.add("fadeInRight")
				} else if (el.classList.contains("odd")) {
					el.classList.add("fadeInLeft")
				}
			} else {
				// el.classList.remove("fadeInRight", "fadeInLeft")
			}
		}
	}
})