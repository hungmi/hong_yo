$(document).on("click", ".dot_wrapper", function(e) {
	console.log(e.target)
	var active_page = e.target.getAttribute("data-page")
	var active_news = document.querySelectorAll(`#news_wrapper .news[data-page='${active_page}']`)
	if ( document.querySelectorAll(`#news_wrapper .news[data-page='${active_page}']`) !== undefined ) {
		for (let dot of document.querySelectorAll(".dot_wrapper")) { dot.classList.remove("active") }
		e.target.classList.add("active")
		console.log(e.target)
		for (let single_one of document.querySelectorAll("#news_wrapper .news")) { single_one.classList.remove("active") }
		for (let active_one of active_news) { active_one.classList.add("active") }
	}
})

$(document).on("click", ".red_rec", function(e) {
	e.target.classList.add("active")
	var active_year = e.target.getAttribute("data-year")
	if ( historyData[active_year] !== undefined ) {
		document.querySelector("#wrapper.history").querySelector(".paragraph_wrapper span.year_active").innerHTML = active_year
		document.querySelector("#wrapper.history").querySelector(".paragraph_wrapper > p").innerHTML = historyData[active_year]
		document.querySelector("#wrapper.history").querySelector(".years_wrapper .year_anchor").style.top = e.target.style.top
	}
})

var historyData = {
	en: {
		1998: 'Hongyou Technology Co., Ltd. was founded in 1998 and is the ex&#8208;clusive agent of Japan ASTEC (DNA Amplifier, CO2 Incubator) in Taiwan. The company also represents and sells cutting-edge equipment related to biotechnology/medical research and has obtained various research units in China. The adoption of pharmaceutical related industries. In the field of reproductive centers, we have successfully sold small carbon dioxide / three gas incubators, VOC filters, vitrified rapid freezing / thawing reagents and other related products. Distribution of ADVANTEC filtration related products such as filter membranes, filter paper, filter and pressure tanks and other filtration equipment. In the semiconductor division, we have added various types of PFA products, designed and manufactured stainless steel filtration equipment, various pressure vessels, and agita- tion filtration equipment, and our sales performance customers include major semiconductors, special chemicals, and photovoltaic power plants.',
		2002: 'this is 2002!'
	},
	zh: {
		1998: "1998 弘優科技創立於台北<br>銷售日本ADVANTEC<br>◎ 濾心、濾紙、過濾設備、快速接頭等",
		2002: ""
	},
}

document.addEventListener("turbolinks:load", function() {
	let waitfadeIn = 2000
	let loopTime = 6000

	setTimeout(function(){
		document.querySelector(`ul.slider > li.index-bg1`).classList.remove("fadeIn")
		document.querySelector(`#wrapper_home_top > .root1`).classList.remove("fadeInLeft")
		document.querySelector(`ul.slider > li.index-bg1`).className += ' fadeOut delay-3s'
		document.querySelector(`#wrapper_home_top > .root1`).className += ' fadeOutLeft delay-3s'
	}, waitfadeIn)

	let start = 1
	var fadeInTimer = setInterval(function() {
		if (document.querySelectorAll(`ul.slider`).length > 0 && document.querySelectorAll(`#wrapper_home_top > .root`).length > 0) {
			start = (start % 4) + 1
			for (indexBg of document.querySelectorAll(`ul.slider > li`)) {
				indexBg.classList.remove("fadeIn", "fadeOut", "delay-3s")
				indexBg.classList.add("d-none")
			}
			if (document.querySelectorAll(`ul.slider > li.index-bg${start}`)) {
				document.querySelector(`ul.slider > li.index-bg${start}`).classList.remove("d-none")
				document.querySelector(`ul.slider > li.index-bg${start}`).className += ' fadeIn'
			}

			for (root of document.querySelectorAll(`#wrapper_home_top > .root`)) {
				root.classList.remove("d-flex", "fadeInLeft", "fadeOutLeft", "delay-3s")
				root.classList.add("d-none")
			}
			if (document.querySelectorAll(`#wrapper_home_top > .root${start}`)) {
				document.querySelector(`#wrapper_home_top > .root${start}`).classList.remove("d-none")
				document.querySelector(`#wrapper_home_top > .root${start}`).className += ' fadeInLeft'
			}

			for (seeMoreBtn of document.querySelectorAll(`#wrapper_home_top > .root${start} #see_more_btn`)) {
				seeMoreBtn.classList.remove("d-flex", "fadeInLeft", "fadeOutLeft", "delay-3s", "delay-1s", "faster")
				seeMoreBtn.classList.add("d-none")
			}
			if (document.querySelectorAll(`#wrapper_home_top > .root${start} #see_more_btn`)) {
				document.querySelector(`#wrapper_home_top > .root${start} #see_more_btn`).classList.remove("d-none")
				document.querySelector(`#wrapper_home_top > .root${start} #see_more_btn`).className += ' d-flex fadeInLeft delay-1s faster'
			}

			// 等待兩秒，讓進入的動畫完成後，移除進入 class，加上出去 class 搭配 delay
			setTimeout(function(){
				document.querySelector(`ul.slider > li.index-bg${start}`).classList.remove("fadeIn")
				document.querySelector(`#wrapper_home_top > .root${start}`).classList.remove("fadeInLeft")
				document.querySelector(`ul.slider > li.index-bg${start}`).className += ' fadeOut delay-3s'
				document.querySelector(`#wrapper_home_top > .root${start}`).className += ' fadeOutLeft delay-3s'
			}, waitfadeIn)
		} else {
			console.log("clear fade in")
			clearInterval(fadeInTimer)
		}
	}, loopTime)
})