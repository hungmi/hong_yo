300.times do |i|
	Story.create(title: "#{rand(1000..9999)} 2010 / 5 / 23 與訊聯生物科技合作邀請 Dr. Mark 舉辦 PGD 演講，並由本公司提供Research Instrutments產品", content: "世每參用時成放到？我我上了先大怎作是道關高雜英想存源商童明收效數分用一同念一？著書。

	麼對年自部外好中那，部食理好之育好當定們車時心爾用錯帶時？

	故是我，西開女經木，而實寶：委我腦統見而本公系點入因布一交電，場青會中有細教吃報前知邊，法孩是五價你萬費來種裡演散推研想記有的卻車輪不響也得工種此則此。的值半德？模要遠所頭本改回公全面各費多開。的復經打體道場新，例果生當輕為還。金品選……爭位去團難熱畫器了是方以事能了品……金能營難怎；望不圖界全為現！角的不化維且形人選媽理間一愛出、家藝容功怕天來分他吃加正看縣問太整水國劇是麼計趣我致間化屋路北老倒而……理用有從入生面起創風麼不企願當。農國信日里發去只出事點。大輪的實跟選說水信力味環康謝的高實靜病公於是內國奇不分，統線本少，輕傳黨，好我統，會麼座來可正意足合聽飯好能岸持年深土期一發打前北接列體美景讓才是女作樂施去空然、美看動，力間風什大？水一員爾師表營品。",
	status: 0)
end

300.times do |i|
	Story.create(title: "#{rand(1000..9999)} 2010 / 5 / 23 與訊聯生物科技合作邀請 Dr. Mark 舉辦 PGD 演講，並由本公司提供Research Instrutments產品", content: "世每參用時成放到？我我上了先大怎作是道關高雜英想存源商童明收效數分用一同念一？著書。

	麼對年自部外好中那，部食理好之育好當定們車時心爾用錯帶時？

	故是我，西開女經木，而實寶：委我腦統見而本公系點入因布一交電，場青會中有細教吃報前知邊，法孩是五價你萬費來種裡演散推研想記有的卻車輪不響也得工種此則此。的值半德？模要遠所頭本改回公全面各費多開。的復經打體道場新，例果生當輕為還。金品選……爭位去團難熱畫器了是方以事能了品……金能營難怎；望不圖界全為現！角的不化維且形人選媽理間一愛出、家藝容功怕天來分他吃加正看縣問太整水國劇是麼計趣我致間化屋路北老倒而……理用有從入生面起創風麼不企願當。農國信日里發去只出事點。大輪的實跟選說水信力味環康謝的高實靜病公於是內國奇不分，統線本少，輕傳黨，好我統，會麼座來可正意足合聽飯好能岸持年深土期一發打前北接列體美景讓才是女作樂施去空然、美看動，力間風什大？水一員爾師表營品。",
	status: 1)
end

4.times do |i|
	l1_cat = Category.create(name: "root #{rand(100..999)}")
	4.times do |i|
		l2_cat = l1_cat.children.create(name: "level 2 #{rand(100..999)}")
		4.times do |j|
			l3_cat = l2_cat.children.create(name: "level 3 #{rand(100..999)}")
			4.times do |j|
				l4_cat = l3_cat.children.create(name: "level 4 #{rand(100..999)}")
				4.times do |j|
					l4_cat.products.create(name: "products #{rand(100..999)}")
				end
			end
		end
	end
end

600.times do |i|
	Catalogue.create(name: "2018 第 #{i} 期目錄", description: "產生沒有意義的文字組合（文章？），供排版時填充版面用，但不會因為字義而左右版型的判斷。文字、標點符號出現機率大致符合台灣文章習慣。聽說很多學排版的都會用這個工具。")
end