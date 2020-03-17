var _t1, Imba = require('imba'), _1 = Imba.createElementFactory(/*SCOPEID*/), _2 = Imba.createTagScope(/*SCOPEID*/);
var fiestaImage = require('./fiesta.png');
var reunionImage = require('./reunion-2016.jpg');
var chicagoImage = require('./chicago-cousins.jpg');
var basilImage = require('./basil-family.jpg');
var louiseImage = require('./louise-children.jpg');
var lenaImage = require('./lena-cuny.jpg');
var campingImage = require('./lerichs-johnson-camping-1980.jpg');
var birthdayImage = require('./lois-90.jpg');

var App = _2.defineTag('App', function(tag){
	tag.prototype.render = function (){
		var _t1, _t2, $ = this.$, _t3, _t4, _t5, _t6, _t7, _t8, _t9, _t10;
		return this.$open(0).setChildren($.$ = $.$ || [
			_1('header',$,0,this),
			_1('div',$,1,this).flag('container').setContent([
				_1('main',$,2,1).setContent([
					_1('h1',$,3,2).setText("Cuny Family Reunion"),
					_1('section',$,4,2).setContent(
						$[5] || _1('div',$,5,4).flag('ui').flag('items').setContent(
							$[6] || _1('div',$,6,5).flag('item').setContent(
								$[7] || _1('div',$,7,6).flag('content').setContent([
									_1('h2',$,8,7).setText("Reunion Postponed"),
									_1('div',$,9,7).flag('meta').setContent(
										$[10] || _1('span',$,10,9).setText("Mon, Mar 17th, 2020")
									,2),
									_1('div',$,11,7).flag('description').setContent(
										$[12] || _1('p',$,12,11).setText("Regretfully, we've decided to postpone our Reunion until the danger of the COVID-19 situation has passed. We are extremely disappointed, but protecting our family, especially our elderly members, is the most important thing. This situation will not last forever, and we will definitely reschedule!")
									,2),
									_1('div',$,13,7).flag('extra').setText("Karen D")
								],2)
							,2)
						,2)
					,2),
					_1('section',$,14,2).setContent(
						$[15] || _1('div',$,15,14).flag('ui').flag('items').setContent(
							$[16] || _1('div',$,16,15).flag('item').setContent([
								_1('div',$,17,16).flag('image').setContent(
									$[18] || _1('img',$,18,17).flag('picture').setAlt("Fiesta")
								,2),
								_1('div',$,19,16).flag('content').setContent([
									_1('h2',$,20,19).setText("Fiesta"),
									_1('div',$,21,19).flag('meta').setContent(
										$[22] || _1('span',$,22,21).setText("Wed, Feb 12th, 2020")
									,2),
									_1('div',$,23,19).flag('description').setContent(
										$[24] || _1('p',$,24,23).setContent(["I hope all of you are planning to be in San Antonio on April 18th!  We have Lyn and Gene coming from California and Kathy coming from Illinois so this reunion is a BIG DEAL!!  You don’t want to miss it! Our famous Fiesta! will just be beginning so you might want to make a weekend of it and attend some of the events.  Here’s a link to the ",$[25] || _1('a',$,25,24).setHref("https://fiestasanantonio.org/official-fiesta-event-calendar").setText("Fiesta Calendar. "),
										"See you soon, I hope!!"],2)
									,2),
									_1('div',$,26,19).flag('extra').setText("Karen D")
								],2)
							],2)
						,2)
					,2),
					_1('section',$,27,2).setContent([
						_1('h2',$,28,27).setText("April 18th Date Set For Reunion"),
						_1('p',$,29,27).setText("It has been over 3 years (Nov. 2016) since the Cunys have gotten together. And it has been over 12 years since our big reunion in July 2007. We have a lot of catching up to do!"),
						_1('p',$,30,27).setText("The date is Saturday, April 18, 2020. The place is Grace Lutheran Church Fetter Hall in San Antonio, Texas. The time is 10am, with lunch served at noon. Put this info on your calendar NOW!"),
						_1('p',$,31,27).setText("We have a committee of Cunys working on making this a joyous, fun, memorable reunion. We've only just begun! We will send out this newsletter with more info as things develop.")
					],2),
					_1('section',$,32,2).setContent([
						_1('h2',$,33,32).setText("A Great Time to be in San Antonio"),
						_1('p',$,34,32).setText("For out-of-town visitors, April is a great time to visit San Antonio. The weather is nice, meaning the terrible heat has not yet started! Also April is the month of FIESTA! So if you have the time, plan to participate in some early events. PLUS, San Antonio is a tourist city, with tons of sites to see and things to do. Grace Lutheran Church is located in downtown San Antonio so many sites are close by."),
						_1('p',$,35,32).setText("For native Texas and San Antonians, the reunion weekend would be a good time to revisit some of the old sites and discover some new ones!")
					],2),
					_1('section',$,36,2).setContent([
						_1('h2',$,37,36).setText("PLEASE RSVP!!"),
						_1('p',$,38,36).setText("We will be serving a barbeque lunch of 2 meats, potato salad, beans, cole slaw, bread, pickles, onions and tea. Price is $10 for adults and $5 for kids under 10.")
					],2),
					_1('section',$,39,2).setContent([
						_1('h2',$,40,39).setText("Hotel Information"),
						_1('table',$,41,39).flag('ui').flag('celled').flag('table').setContent([
							_1('thead',$,42,41).setContent(
								$[43] || _1('tr',$,43,42).setContent([
									_1('th',$,44,43).setText("Hotel"),
									_1('th',$,45,43).setText("Address"),
									_1('th',$,46,43).setText("Friday"),
									_1('th',$,47,43).setText("Saturday")
								],2)
							,2),
							_1('tbody',$,48,41).setContent([
								_1('tr',$,49,48).setContent([
									_1('td',$,50,49).setText("Embassy Suite"),
									_1('td',$,51,49).setText("125 E Houston St"),
									_1('td',$,52,49).setText("$230"),
									_1('td',$,53,49).setText("$278")
								],2),
								_1('tr',$,54,48).setContent([
									_1('td',$,55,54).setText("􏰜􏰦􏰞􏰬􏰥􏱝􏱝􏰡Contessa"),
									_1('td',$,56,54).setText("306 W Market St"),
									_1('td',$,57,54).setText("$223"),
									_1('td',$,58,54).setText("$314")
								],2),
								_1('tr',$,59,48).setContent([
									_1('td',$,60,59).setText("DoubleTree Downtown"),
									_1('td',$,61,59).setText("502 W Cesar E Chavez"),
									_1('td',$,62,59).setText("$92"),
									_1('td',$,63,59).setText("$95")
								],2),
								_1('tr',$,64,48).setContent([
									_1('td',$,65,64).setText("Hampton Inn River Riverwalk"),
									_1('td',$,66,64).setText("118 Soledade St"),
									_1('td',$,67,64).setText("$242"),
									_1('td',$,68,64).setText("$239")
								],2),
								_1('tr',$,69,48).setContent([
									_1('td',$,70,69).setText("Marriot Riverwalk"),
									_1('td',$,71,69).setText("889 E Market St"),
									_1('td',$,72,69).setText("$246"),
									_1('td',$,73,69).setText("$309")
								],2),
								_1('tr',$,74,48).setContent([
									_1('td',$,75,74).setText("Holiday Inn Downtown"),
									_1('td',$,76,74).setText("318 W Cesar E Chavez"),
									_1('td',$,77,74).setText("$125"),
									_1('td',$,78,74).setText("$130")
								],2),
								_1('tr',$,79,48).setContent([
									_1('td',$,80,79).setText("Hilton Palacio Del Rio"),
									_1('td',$,81,79).setText("200 S Alamo St"),
									_1('td',$,82,79).setText("$164"),
									_1('td',$,83,79).setText("$181")
								],2),
								_1('tr',$,84,48).setContent([
									_1('td',$,85,84).setText("Home 2 Suites"),
									_1('td',$,86,84).setText("94 NE 410 (Airport)"),
									_1('td',$,87,84).setText("$110"),
									_1('td',$,88,84).setText("$127")
								],2),
								_1('tr',$,89,48).setContent([
									_1('td',$,90,89).setText("Double Tree (Airport)"),
									_1('td',$,91,89).setText("37 NE Loop 410 @ McCullough"),
									_1('td',$,92,89).setText("$96"),
									_1('td',$,93,89).setText("$102")
								],2),
								_1('tr',$,94,48).setContent([
									_1('td',$,95,94).setText("Embassy Suites (Airport)"),
									_1('td',$,96,94).setText("11011 US Hwy 281 N"),
									_1('td',$,97,94).setText("$136"),
									_1('td',$,98,94).setText("$122")
								],2),
								_1('tr',$,99,48).setContent([
									_1('td',$,100,99).setText("Hilton Garden Inn"),
									_1('td',$,101,99).setText("12828 San Pedro Ave"),
									_1('td',$,102,99).setText("$89"),
									_1('td',$,103,99).setText("$103")
								],2)
							],2)
						],2)
					],2),
					_1('section',$,104,2).setContent([
						_1('h2',$,105,104).setText("Requests"),
						_1('p',$,106,104).setText("􏰻􏰥􏰻􏰥We need family pictures for display at the Reunion. If you can share any, please send them to Margaret Cuny by mail or email by March 18th. 2311 Stoney Trail Cr. San Antonio, TX 78231 (mcuny110@hotmail.com)"),
						_1('p',$,107,104).setText("We also need family stories! Please send them to Melodye Aldrich: PO Box 475 Adkins, TX 78201 (melladrich@gmail.com)")
					],2)
				],2),
				_1('aside',$,108,1).setContent([
					// <div.sun-icon>
					//   <i.sun.icon>
					_1('img',$,109,108).flag('right5deg').flag('picture').setAlt("Chicago Cousins"),
					_1('img',$,110,108).flag('left5deg').flag('picture').setAlt("Basil Family"),
					_1('img',$,111,108).flag('right5deg').flag('picture').setAlt("Louise Children"),
					_1('div',$,112,108).flag('location').setContent([
						_1('h2',$,113,112).setText("Cuny Reunion"),
						_1('p',$,114,112).setContent([
							_1('div',$,115,114).setText("April 18, 2020"),
							_1('div',$,116,114).setContent(
								$[117] || _1('a',$,117,116).setHref("http://www.gracesa.org").setText("Grace Lutheran Church")
							,2),
							
							_1('div',$,118,114).setContent(
								$[119] || _1('a',$,119,118).setHref("https://goo.gl/maps/zUi6mGKyL5eFDNoj7").setContent([
									"504 Avenue E",
									_1('br',$,120,119),
									"San Antonio, Texas",
									_1('br',$,121,119),
									"78215"
								],2)
							,2)
						],2)
					],2),
					_1('div',$,122,108).flag('message').setContent([
						_1('h2',$,123,122).setText("More Info Coming"),
						_1('p',$,124,122).setText("We will be communicating more in the coming weeks - by email, on FACEBOOK, and by mail. So look for it! We want ALL of you there!")
					],2),
					
					_1('img',$,125,108).flag('right5deg').flag('picture').setAlt("Lena Cuny"),
					_1('img',$,126,108).flag('left5deg').flag('picture').setAlt("Camping"),
					_1('img',$,127,108).flag('right5deg').flag('picture').setAlt("90th"),
					_1('img',$,128,108).flag('left5deg').flag('picture').setAlt("Reunion 2016")
				],2)
			],2),
			_1('footer',$,129,this)
		],2).synced((
			$[18].setSrc((fiestaImage)).end(),
			$[25].end(),
			$[109].setSrc((chicagoImage)).end(),
			$[110].setSrc((basilImage)).end(),
			$[111].setSrc((louiseImage)).end(),
			$[117].end(),
			$[119].end(),
			$[125].setSrc((lenaImage)).end(),
			$[126].setSrc((campingImage)).end(),
			$[127].setSrc((birthdayImage)).end(),
			$[128].setSrc((reunionImage)).end()
		,true));
	};
});

Imba.mount((_1(App)).end());
