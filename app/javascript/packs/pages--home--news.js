import isScrolledIntoView from 'packs/view_helper';

document.addEventListener("scroll", function() {
	// var wrapperTitle = document.querySelector('#wrapper2 .section_title_wrapper')
	var wrapperTitle = document.querySelector('.js-latest-news-section .section_title_wrapper')
	if (wrapperTitle !== null) {
		if ( isScrolledIntoView(wrapperTitle, 200) ) {
			wrapperTitle.classList.remove("invisible")
			wrapperTitle.classList.add("fadeIn")
		} else {
			// wrapperTitle.classList.remove("fadeInRight", "fadeInLeft")
		}
	}

	var el = document.querySelector('.js-latest-news-section #see_more_btn')
	if (el !== null) {
		if ( isScrolledIntoView(el, 100) ) {
			el.classList.remove("invisible")
			el.classList.add("fadeInLeft")
		} else {
			// el.classList.remove("fadeInRight", "fadeInLeft")
		}
	}
})