30.times do |i|
	Story.create({
		zh_title: "#{i} 2010 / 5 / 23 與訊聯生物科技合作邀請 Dr. Mark 舉辦 PGD 演講，並由本公司提供Research Instrutments產品",
		en_title: "#{i} PGD presentations",
		zh_content: "世每參用時成放到？我我上了先大怎作是道關高雜英想存源商童明收效數分用一同念一？著書。麼對年自部外好中那，部食理好之育好當定們車時心爾用錯帶時？故是我，西開女經木，而實寶：委我腦統見而本公系點入因布一交電，場青會中有細教吃報前知邊，法孩是五價你萬費來種裡演散推研想記有的卻車輪不響也得工種此則此。的值半德？模要遠所頭本改回公全面各費多開。的復經打體道場新，例果生當輕為還。金品選……爭位去團難熱畫器了是方以事能了品……金能營難怎；望不圖界全為現！角的不化維且形人選媽理間一愛出、家藝容功怕天來分他吃加正看縣問太整水國劇是麼計趣我致間化屋路北老倒而……理用有從入生面起創風麼不企願當。農國信日里發去只出事點。大輪的實跟選說水信力味環康謝的高實靜病公於是內國奇不分，統線本少，輕傳黨，好我統，會麼座來可正意足合聽飯好能岸持年深土期一發打前北接列體美景讓才是女作樂施去空然、美看動，力間風什大？水一員爾師表營品。",
		en_content: "Invited Dr. Mark to hold a PGD presentation in cooperation with BIONET Corp., and the company will provide Research Instrutments products.",
		status: 0
	})
end

3.times do |i|
	Story.create({
		zh_title: "#{rand(1000..9999)} 2010 / 5 / 23 與訊聯生物科技合作邀請 Dr. Mark 舉辦 PGD 演講，並由本公司提供Research Instrutments產品",
		en_title: "#{rand(1000..9999)} PGD presentations",
		zh_content: "世每參用時成放到？我我上了先大怎作是道關高雜英想存源商童明收效數分用一同念一？著書。麼對年自部外好中那，部食理好之育好當定們車時心爾用錯帶時？故是我，西開女經木，而實寶：委我腦統見而本公系點入因布一交電，場青會中有細教吃報前知邊，法孩是五價你萬費來種裡演散推研想記有的卻車輪不響也得工種此則此。的值半德？模要遠所頭本改回公全面各費多開。的復經打體道場新，例果生當輕為還。金品選……爭位去團難熱畫器了是方以事能了品……金能營難怎；望不圖界全為現！角的不化維且形人選媽理間一愛出、家藝容功怕天來分他吃加正看縣問太整水國劇是麼計趣我致間化屋路北老倒而……理用有從入生面起創風麼不企願當。農國信日里發去只出事點。大輪的實跟選說水信力味環康謝的高實靜病公於是內國奇不分，統線本少，輕傳黨，好我統，會麼座來可正意足合聽飯好能岸持年深土期一發打前北接列體美景讓才是女作樂施去空然、美看動，力間風什大？水一員爾師表營品。",
		en_content: "Invited Dr. Mark to hold a PGD presentation in cooperation with BIONET Corp., and the company will provide Research Instrutments products.",
		status: 1
	})
end

3.times do |i|
	classification = Category.create({
		en_name: "#{i} Life Science Animal Science",
		zh_name: "#{i} 生命科學",
	})
	8.times do |j|
		brand = classification.children.create({
			en_name: "#{i} - #{j} ASTEC",
			zh_name: "#{i} - #{j} 某某品牌",
		})
		2.times do |k|
			series = brand.children.create({
				en_name: "#{j} - #{k} Some Series",
				zh_name: "#{j} - #{k} 滅菌型培養箱",
			})
			2.times do |h|
				product = series.products.create({
					en_name: "#{k} - #{h} Some Series",
					zh_name: "#{k} - #{h} 滅菌型/直熱式 #{h} 培養箱",
					en_description: "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
2. Nam in ligula eleifend, pharetra massa tincidunt, luctus risus.
3. Pellentesque ut orci tempus tellus hendrerit facilisis id ut magna.
4. Suspendisse vel dui et tortor tincidunt consequat.
5. Nullam feugiat enim in nibh eleifend, sit amet viverra elit tempus.
6. Suspendisse vel dui et tortor tincidunt consequat.",
					zh_description: "1、具有 CO2 自動及手動零點校正功能。
2、內建式 CO2 Filter 可避免污染。
3、打開外門時，CO2 停止供應，風扇停止轉動，可避免 CO2 浪費及防止外來空氣的污染。
4、可加裝 HEPA Filte r及 CO2 tankswitch。
5、CO2 輸入壓力只需 0.05MPa，CO2 消耗量非常低。
6、具多種小內門(2、4門)可供選擇。"
				})
				5.times do |n|
					variety = product.varieties.create({
						en_name: "#{h} - #{n} SCA-165DS #{n}",
						zh_name: "#{h} - #{n} SCA-165DS #{n}",
					})
					8.times do |m|
						variety.features.create({
							en_name: "#{n} - #{m} Spec",
							zh_name: "#{n} - #{m} 某屬性",
							en_value: "#{n} - #{m} Value",
							zh_value: "#{n} - #{m} 屬性規格值",
						})
					end
				end
			end
		end
	end
end

30.times do |i|
	Catalogue.create({
		zh_name: "2018 第 #{i} 期目錄",
		en_name: "20#{i.to_s.rjust(2, '0')} Catelogue ##{i}",
		zh_description: "產生沒有意義的文字組合（文章？），供排版時填充版面用，但不會因為字義而左右版型的判斷。文字、標點符號出現機率大致符合台灣文章習慣。聽說很多學排版的都會用這個工具。",
		en_description: "Gene application with in utero electroporation in mouse embryonic brain"
	})
end