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
							$[6] || _1('div',$,6,5).flag('item').setContent([
								_1('div',$,7,6).flag('image').setContent(
									$[8] || _1('img',$,8,7).flag('picture').setAlt("Fiesta")
								,2),
								_1('div',$,9,6).flag('content').setContent([
									_1('h2',$,10,9).setText("Fiesta"),
									_1('div',$,11,9).flag('meta').setContent(
										$[12] || _1('span',$,12,11).setText("Wed, Feb 12th, 2020")
									,2),
									_1('div',$,13,9).flag('description').setContent(
										$[14] || _1('p',$,14,13).setContent(["I hope all of you are planning to be in San Antonio on April 18th!  We have Lyn and Gene coming from California and Kathy coming from Illinois so this reunion is a BIG DEAL!!  You don’t want to miss it! Our famous Fiesta! will just be beginning so you might want to make a weekend of it and attend some of the events.  Here’s a link to the ",$[15] || _1('a',$,15,14).setHref("https://fiestasanantonio.org/official-fiesta-event-calendar").setText("Fiesta Calendar. "),
										"See you soon, I hope!!"],2)
									,2),
									_1('div',$,16,9).flag('extra').setText("Karen D")
								],2)
							],2)
						,2)
					,2),
					_1('section',$,17,2).setContent([
						_1('h2',$,18,17).setText("April 18th Date Set For Reunion"),
						_1('p',$,19,17).setText("It has been over 3 years (Nov. 2016) since the Cunys have gotten together. And it has been over 12 years since our big reunion in July 2007. We have a lot of catching up to do!"),
						_1('p',$,20,17).setText("The date is Saturday, April 18, 2020. The place is Grace Lutheran Church Fetter Hall in San Antonio, Texas. The time is 10am, with lunch served at noon. Put this info on your calendar NOW!"),
						_1('p',$,21,17).setText("We have a committee of Cunys working on making this a joyous, fun, memorable reunion. We've only just begun! We will send out this newsletter with more info as things develop.")
					],2),
					_1('section',$,22,2).setContent([
						_1('h2',$,23,22).setText("A Great Time to be in San Antonio"),
						_1('p',$,24,22).setText("For out-of-town visitors, April is a great time to visit San Antonio. The weather is nice, meaning the terrible heat has not yet started! Also April is the month of FIESTA! So if you have the time, plan to participate in some early events. PLUS, San Antonio is a tourist city, with tons of sites to see and things to do. Grace Lutheran Church is located in downtown San Antonio so many sites are close by."),
						_1('p',$,25,22).setText("For native Texas and San Antonians, the reunion weekend would be a good time to revisit some of the old sites and discover some new ones!")
					],2),
					_1('section',$,26,2).setContent([
						_1('h2',$,27,26).setText("PLEASE RSVP!!"),
						_1('p',$,28,26).setText("We will be serving a barbeque lunch of 2 meats, potato salad, beans, cole slaw, bread, pickles, onions and tea. Price is $10 for adults and $5 for kids under 10.")
					],2),
					_1('section',$,29,2).setContent([
						_1('h2',$,30,29).setText("Hotel Information"),
						_1('table',$,31,29).flag('ui').flag('celled').flag('table').setContent([
							_1('thead',$,32,31).setContent(
								$[33] || _1('tr',$,33,32).setContent([
									_1('th',$,34,33).setText("Hotel"),
									_1('th',$,35,33).setText("Address"),
									_1('th',$,36,33).setText("Friday"),
									_1('th',$,37,33).setText("Saturday")
								],2)
							,2),
							_1('tbody',$,38,31).setContent([
								_1('tr',$,39,38).setContent([
									_1('td',$,40,39).setText("Embassy Suite"),
									_1('td',$,41,39).setText("125 E Houston St"),
									_1('td',$,42,39).setText("$230"),
									_1('td',$,43,39).setText("$278")
								],2),
								_1('tr',$,44,38).setContent([
									_1('td',$,45,44).setText("􏰜􏰦􏰞􏰬􏰥􏱝􏱝􏰡Contessa"),
									_1('td',$,46,44).setText("306 W Market St"),
									_1('td',$,47,44).setText("$223"),
									_1('td',$,48,44).setText("$314")
								],2),
								_1('tr',$,49,38).setContent([
									_1('td',$,50,49).setText("DoubleTree Downtown"),
									_1('td',$,51,49).setText("502 W Cesar E Chavez"),
									_1('td',$,52,49).setText("$92"),
									_1('td',$,53,49).setText("$95")
								],2),
								_1('tr',$,54,38).setContent([
									_1('td',$,55,54).setText("Hampton Inn River Riverwalk"),
									_1('td',$,56,54).setText("118 Soledade St"),
									_1('td',$,57,54).setText("$242"),
									_1('td',$,58,54).setText("$239")
								],2),
								_1('tr',$,59,38).setContent([
									_1('td',$,60,59).setText("Marriot Riverwalk"),
									_1('td',$,61,59).setText("889 E Market St"),
									_1('td',$,62,59).setText("$246"),
									_1('td',$,63,59).setText("$309")
								],2),
								_1('tr',$,64,38).setContent([
									_1('td',$,65,64).setText("Holiday Inn Downtown"),
									_1('td',$,66,64).setText("318 W Cesar E Chavez"),
									_1('td',$,67,64).setText("$125"),
									_1('td',$,68,64).setText("$130")
								],2),
								_1('tr',$,69,38).setContent([
									_1('td',$,70,69).setText("Hilton Palacio Del Rio"),
									_1('td',$,71,69).setText("200 S Alamo St"),
									_1('td',$,72,69).setText("$164"),
									_1('td',$,73,69).setText("$181")
								],2),
								_1('tr',$,74,38).setContent([
									_1('td',$,75,74).setText("Home 2 Suites"),
									_1('td',$,76,74).setText("94 NE 410 (Airport)"),
									_1('td',$,77,74).setText("$110"),
									_1('td',$,78,74).setText("$127")
								],2),
								_1('tr',$,79,38).setContent([
									_1('td',$,80,79).setText("Double Tree (Airport)"),
									_1('td',$,81,79).setText("37 NE Loop 410 @ McCullough"),
									_1('td',$,82,79).setText("$96"),
									_1('td',$,83,79).setText("$102")
								],2),
								_1('tr',$,84,38).setContent([
									_1('td',$,85,84).setText("Embassy Suites (Airport)"),
									_1('td',$,86,84).setText("11011 US Hwy 281 N"),
									_1('td',$,87,84).setText("$136"),
									_1('td',$,88,84).setText("$122")
								],2),
								_1('tr',$,89,38).setContent([
									_1('td',$,90,89).setText("Hilton Garden Inn"),
									_1('td',$,91,89).setText("12828 San Pedro Ave"),
									_1('td',$,92,89).setText("$89"),
									_1('td',$,93,89).setText("$103")
								],2)
							],2)
						],2)
					],2),
					_1('section',$,94,2).setContent([
						_1('h2',$,95,94).setText("Requests"),
						_1('p',$,96,94).setText("􏰻􏰥􏰻􏰥We need family pictures for display at the Reunion. If you can share any, please send them to Margaret Cuny by mail or email by March 18th. 2311 Stoney Trail Cr. San Antonio, TX 78231 (mcuny110@hotmail.com)"),
						_1('p',$,97,94).setText("We also need family stories! Please send them to Melodye Aldrich: PO Box 475 Adkins, TX 78201 (melladrich@gmail.com)")
					],2)
				],2),
				_1('aside',$,98,1).setContent([
					// <div.sun-icon>
					//   <i.sun.icon>
					_1('img',$,99,98).flag('right5deg').flag('picture').setAlt("Chicago Cousins"),
					_1('img',$,100,98).flag('left5deg').flag('picture').setAlt("Basil Family"),
					_1('img',$,101,98).flag('right5deg').flag('picture').setAlt("Louise Children"),
					_1('div',$,102,98).flag('location').setContent([
						_1('h2',$,103,102).setText("Cuny Reunion"),
						_1('p',$,104,102).setContent([
							_1('div',$,105,104).setText("April 18, 2020"),
							_1('div',$,106,104).setContent(
								$[107] || _1('a',$,107,106).setHref("http://www.gracesa.org").setText("Grace Lutheran Church")
							,2),
							
							_1('div',$,108,104).setContent(
								$[109] || _1('a',$,109,108).setHref("https://goo.gl/maps/zUi6mGKyL5eFDNoj7").setContent([
									"504 Avenue E",
									_1('br',$,110,109),
									"San Antonio, Texas",
									_1('br',$,111,109),
									"78215"
								],2)
							,2)
						],2)
					],2),
					_1('div',$,112,98).flag('message').setContent([
						_1('h2',$,113,112).setText("More Info Coming"),
						_1('p',$,114,112).setText("We will be communicating more in the coming weeks - by email, on FACEBOOK, and by mail. So look for it! We want ALL of you there!")
					],2),
					
					_1('img',$,115,98).flag('right5deg').flag('picture').setAlt("Lena Cuny"),
					_1('img',$,116,98).flag('left5deg').flag('picture').setAlt("Camping"),
					_1('img',$,117,98).flag('right5deg').flag('picture').setAlt("90th"),
					_1('img',$,118,98).flag('left5deg').flag('picture').setAlt("Reunion 2016")
				],2)
			],2),
			_1('footer',$,119,this)
		],2).synced((
			$[8].setSrc((fiestaImage)).end(),
			$[15].end(),
			$[99].setSrc((chicagoImage)).end(),
			$[100].setSrc((basilImage)).end(),
			$[101].setSrc((louiseImage)).end(),
			$[107].end(),
			$[109].end(),
			$[115].setSrc((lenaImage)).end(),
			$[116].setSrc((campingImage)).end(),
			$[117].setSrc((birthdayImage)).end(),
			$[118].setSrc((reunionImage)).end()
		,true));
	};
});

Imba.mount((_1(App)).end());
