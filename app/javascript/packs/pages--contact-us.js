import isScrolledIntoView from 'packs/view_helper';

document.addEventListener("DOMContentLoaded", function() {
	setTimeout(function(){
		var els = document.querySelectorAll('[data-animated]')
		if (els !== null) {
			for (let el of els) {
				if ( isScrolledIntoView(el, 100) ) {
					el.classList.remove("invisible")
					console.log(el.classList)
					el.classList.add( el.getAttribute("data-animated") )
				} else {
					// el.classList.remove("fadeInRight", "fadeInLeft")
				}
			}
		}
	}, 1800)
})