document.addEventListener("DOMContentLoaded", function() {
	if (document.querySelector("body").classList.contains("en")) {
		window.locale = "en"
	} else {
		window.locale = "zh"
	}
	if (document.querySelector(".js-rec.active") !== null)
		document.querySelector(".js-rec.active").click()
})

window.historyData = {
	"en": {
		"1998": 'Hongyou Technology Co., Ltd. was founded in 1998 and is the ex&#8208;clusive agent of Japan ASTEC (DNA Amplifier, CO2 Incubator) in Taiwan. The company also represents and sells cutting-edge equipment related to biotechnology/medical research and has obtained various research units in China. The adoption of pharmaceutical related industries. In the field of reproductive centers, we have successfully sold small carbon dioxide / three gas incubators, VOC filters, vitrified rapid freezing / thawing reagents and other related products. Distribution of ADVANTEC filtration related products such as filter membranes, filter paper, filter and pressure tanks and other filtration equipment. In the semiconductor division, we have added various types of PFA products, designed and manufactured stainless steel filtration equipment, various pressure vessels, and agita- tion filtration equipment, and our sales performance customers include major semiconductors, special chemicals, and photovoltaic power plants.',
		"2002": 'this is 2002!'
	},
	"zh": {
		"1998": "1998 弘優科技創立於台北<br>銷售日本ADVANTEC<br>◎ 濾心、濾紙、過濾設備、快速接頭等",
		"2002": ""
	},
}

$(document).on("click", ".js-rec", function(e) {
	for (let active_one of document.querySelectorAll(".js-rec.active")) {
		active_one.classList.remove("active")
	}
	e.target.classList.add("active")
	var active_year = e.target.getAttribute("data-year")
	var historyHTML = window.historyData[window.locale][active_year]
	console.log(active_year)
	console.log(historyHTML)
	if ( historyHTML !== undefined && historyHTML.length > 0 ) {
		document.querySelector(".history-section").querySelector(".year--active").innerHTML = active_year
		document.querySelector(".history-section").querySelector(".history__text > p").innerHTML = historyHTML
		document.querySelector(".history-section").querySelector(".years .year_anchor").style.top = e.target.style.top
	}
})