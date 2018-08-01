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
	e.target.classList.toggle("active")
	var active_year = e.target.getAttribute("data-year")
	if ( historyData[active_year] !== undefined ) {
		document.querySelector("#wrapper.history").querySelector(".paragraph_wrapper span.year_active").innerHTML = active_year
		document.querySelector("#wrapper.history").querySelector(".paragraph_wrapper > p").innerHTML = historyData[active_year]
		document.querySelector("#wrapper.history").querySelector(".years_wrapper .year_anchor").style.top = e.target.style.top
	}
})

var historyData = {
	1998: 'Hongyou Technology Co., Ltd. was founded in 1998 and is the ex&#8208;clusive agent of Japan ASTEC (DNA Amplifier, CO2 Incubator) in Taiwan. The company also represents and sells cutting-edge equipment related to biotechnology/medical research and has obtained various research units in China. The adoption of pharmaceutical related industries. In the field of reproductive centers, we have successfully sold small carbon dioxide / three gas incubators, VOC filters, vitrified rapid freezing / thawing reagents and other related products. Distribution of ADVANTEC filtration related products such as filter membranes, filter paper, filter and pressure tanks and other filtration equipment. In the semiconductor division, we have added various types of PFA products, designed and manufactured stainless steel filtration equipment, various pressure vessels, and agita- tion filtration equipment, and our sales performance customers include major semiconductors, special chemicals, and photovoltaic power plants.',
	2002: 'this is 2002!'
}

document.addEventListener("turbolinks:load", function() {
	if (document.querySelectorAll(`#wrapper_home_top > .root`).length > 0) {
		let start = 1
		var timer = setInterval(function() {
			if (document.querySelectorAll(`#wrapper_home_top > .root`).length > 0) {
				start = (start % 4) + 1
				console.log(start)
				for (root of document.querySelectorAll(`#wrapper_home_top > .root`)) {
					root.classList.remove("d-flex")
					root.classList.add("d-none")
				}
				if (document.querySelectorAll(`#wrapper_home_top > .root${start}`))
				document.querySelector(`#wrapper_home_top > .root${start}`).classList.remove("d-none")
			} else {
				console.log("clear")
				clearInterval(timer)
			}
		}, 6000)
	}
})