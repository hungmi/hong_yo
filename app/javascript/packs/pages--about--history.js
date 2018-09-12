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
		"1998": 'Hong U Scientific Corporation was founded in Taipei.<br>Selling ADVANTEC Japan.<br><br>◎ Filter, Filter paper, Membrance filter, Fraction collector, etc.',
		"2002": 'Act on a sole agency basis for ASTEC from Japan.<br><br>◎ Real-time Cultured cell monitoring system, PCR machine, CO2 incubators, Dry incubators,etc.',
		"2004": "Act on a agency basis for Denver from Germany.<br><br>◎ Balance",
		"2006": "Act on a sole agency basis for KITAZATO from Japan.<br><br>◎ Vitrification Kit for IVF, Microwarm/cool plate, OPU needle, catheter",
		"2007": "Act on an agency basis for Thermo Fisher from Finland.<br>Act on an agency basis for QSP from USA.<br><br>◎ Finnpipette, Pipette’s tip, micro tube.",
		"2008": "Act on an agency basis for MPW from Poland.<br>Act on a sole agency basis for BEX from Japan.<br>Act on an distrubator basis for CESCO BIOENGINEERING in Taiwan.<br><br>◎  Centrifuge, Electro cell fusion generator, In-Vivo Electroporator, High density cell culture system for protein expression, virus and monoclonal antibody production.",
		"2009": "Act on an sole agency basis for Research Instrument(RI) from UK.<br><br>◎ micromanipulators, and laser hatching and biopsy systems, consumables",
		"2010": "Act on a agency basis for GeneOn from Germany.<br>Act on an sole agency basis for Cryos international from Denmark<br><br>◎ spectrophotometer, spermcryo / spermfilter"
	},
	"zh": {
		"1998": "弘優科技創立於台北<br>銷售日本 ADVANTEC<br><br>◎ 濾心、濾紙、過濾設備、快速接頭等",
		"2002": "獨家代理日本 ASTEC<br><br>◎ 即時細胞培養影像記錄系統、聚合酶(脢)連鎖反應器, CO2 培養箱, 乾浴器等",
		"2004": "德國 Denver 代理商<br><br>◎ 天秤",
		"2006": "獨家代理日本 KITAZATO<br><br>◎ IVF 冷凍試劑、顯微加熱板/冷卻板、取卵針、植入管",
		"2007": "芬蘭 Thermo Fisher 代理商<br>美國 QSP 代理商<br><br>◎ Finnpipette 微量分注器、Pipette’s tip, micro tube.",
		"2008": "波蘭 MPW 代理商<br>獨家代理日本 BEX<br>經銷台灣 CESCO BIOENGINEERINER<br><br>◎離心機、 細胞活體電穿孔、細胞融合儀、生物反應器、大量細胞培養系統、連續式細胞培養系統",
		"2009": "獨家代理英國Research Instrument<br><br>◎顯微操作儀、雷射輔助孵化系統、耗材",
		"2010": "德國GeneOn代理商<br>獨家代理丹麥Cryos international<br><br>◎ 分光光度計、精蟲冷凍 / 分離培養基",
		"2011": "代理 德國 PreSens<br>O2 / CO2 /pH 測量儀",
		"2012": "代理 丹麥 SparMed<br>清潔劑、培養皿"
	},
}

$(document).on("click", ".js-rec, .js-year", function(e) {
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
		console.log(e.target.getAttribute("data-top"))
		if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= 414 || document.querySelector("body").classList.contains("mobile")) {
			document.querySelector(".history-section").querySelector(".years .year_anchor").style.top = (parseInt(e.target.getAttribute("data-top")) - 4).toString() + "px"
		} else {
			document.querySelector(".history-section").querySelector(".years .year_anchor").style.top = e.target.getAttribute("data-top")
		}
	}
})