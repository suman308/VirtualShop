# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Store.destroy_all 
Product.destroy_all
# Seed users

DemoUser = User.create(username: 'demo', email: 'DemoUser', password: 'password')
u1 = User.create(username: 'Jamie', email: 'jamie@cc.com', password: 'password')
u2 = User.create(username: 'Winston', email: 'winston@cc.com', password: 'password')
u3 = User.create(username: 'Fred', email: 'fred@cc.com', password: 'password')
u4 = User.create(username: 'Mindy', email: 'mindy@cc.com', password: 'password')
u5 = User.create(username: 'Sean', email: 'sean@cc.com', password: 'password')
u6 = User.create(username: 'Jerry', email: 'jerry@cc.com', password: 'password')
u7 = User.create(username: 'June', email: 'june@cc.com', password: 'password')
u8 = User.create(username: 'Emmy', email: 'emmy@cc.com', password: 'password')
u9 = User.create(username: 'Kyle', email: 'kyle@cc.com', password: 'password')
u10 = User.create(username: 'Peter', email: 'peter@cc.com', password: 'password')
u11 = User.create(username: 'Jenna', email: 'jenna@cc.com', password: 'password')
u12 = User.create(username: 'Arthur', email: 'arthur@cc.com', password: 'password')
u13 = User.create(username: 'Justin', email: 'justin@cc.com', password: 'password')
u14 = User.create(username: 'Dianne', email: 'dianne@cc.com', password: 'password')
u15 = User.create(username: 'Harold', email: 'harold@cc.com', password: 'password')
u16 = User.create(username: 'Valeria', email: 'valeria@cc.com', password: 'password')
u17 = User.create(username: 'Vanessa', email: 'vanessa@cc.com', password: 'password')
u18 = User.create(username: 'Joel', email:'joel@cc.com', password: 'password')
u19 = User.create(username: 'Michaela', email: 'michaela@cc.com', password:'password')

store1 = Store.create(name:'Jamie-store', owner_id:u1.id)
store2 = Store.create(name:'Winston-store', owner_id: u2.id)
store3 = Store.create(name:'Fred-store', owner_id: u3.id)
store4 = Store.create(name:'Mindy-store', owner_id:u4.id)
store5 = Store.create(name:'Sean-store', owner_id:u5.id)
store6 = Store.create(name:'Jerry-store', owner_id:u6.id)
store7 = Store.create(name:'Kyle-store', owner_id:u9.id)
store8 = Store.create(name:'Jenna-store', owner_id:u11.id)
store9 = Store.create(name:'Arthur-store', owner_id:u12.id)
store10 = Store.create(name:'Justin-store', owner_id:u13.id)


# ======================================================== ALL PICTURES WE HAVE IN DATABASE================================================================


# ------------------pictureS from the art folder------------------------

# beach
beach = "https://virtualshop-dev.s3-us-west-1.amazonaws.com/art/"
picArtBeach1 = open("#{beach}beach1.jpg")
picArtBeach2 = open("#{beach}beach2.jpg")
picArtBeach3 = open("#{beach}beach3.jpg")
picArtBeach4 = open("#{beach}beach4.jpg")

# gana
gana = "https://virtualshop-dev.s3-us-west-1.amazonaws.com/art/"
picArtGana1= open("#{gana}gana1.jpg")
picArtGana2= open("#{gana}gana2.jpg")
picArtGana3= open("#{gana}gana3.jpg")
picArtGana4= open("#{gana}gana4.jpg")

# ganesh 
ganesh = "https://virtualshop-dev.s3-us-west-1.amazonaws.com/art/"
picArtGanesh1 = open("#{ganesh}ganesh.jpg")
picArtGanesh2 = open("#{ganesh}ganesh2.jpg")
picArtGanesh3 = open("#{ganesh}ganesh3.jpg")

# jesus 
jesus = "https://virtualshop-dev.s3-us-west-1.amazonaws.com/art/"
picArtJesus1 = open("#{jesus}jesus1.jpg")
picArtJesus2 = open("#{jesus}jesus2.jpg")
picArtJesus3 = open("#{jesus}jesus3.jpg")
picArtJesus4 = open("#{jesus}jesus4.jpg")

# kali 
kali = "https://virtualshop-dev.s3-us-west-1.amazonaws.com/art/"
picArtKali1 = open("#{kali}kali1.jpg")
picArtKali2 = open("#{kali}kali2.jpg")

# sf 
sf = "https://virtualshop-dev.s3-us-west-1.amazonaws.com/art/"
picArtSf1 = open("#{sf}sf1.jpg")
picArtSf2 = open("#{sf}sf2.jpg")
picArtSf3= open("#{sf}sf3.jpg")
picArtSf4 = open("#{sf}sf4.jpg")

# ------------------picture from the book folder------------------------
# book 
bookselves = "https://virtualshop-dev.s3-us-west-1.amazonaws.com/books/"
picBookBookselves1 = open("#{bookselves}bookselves1.jpg")
picBookBookselves2 = open("#{bookselves}bookselves2.jpg")

# calender
calender = "https://virtualshop-dev.s3-us-west-1.amazonaws.com/books/"
picBookCalender1 = open("#{calender}calender1.jpg")
picBookCalender2 = open("#{calender}calender2.jpg")
picBookCalender3 = open("#{calender}calender3.jpg")
picBookCalender4 = open("#{calender}calender4.jpg")

# colorfulbook 
colorfulbook = "https://virtualshop-dev.s3-us-west-1.amazonaws.com/books/"
picBookColorfulbook1 =  open("#{colorfulbook}colorfulbook1.jpg")
picBookColorfulbook2 =  open("#{colorfulbook}colorfulbook2.jpg")
picBookColorfulbook3 =  open("#{colorfulbook}colorfulbook3.jpg")
picBookColorfulbook4 =  open("#{colorfulbook}colorfulbook4.jpg")

# hukkabook 
hukkabook = "https://virtualshop-dev.s3-us-west-1.amazonaws.com/books/"
picBookHukkabook1 = open("#{hukkabook}hukkabook.jpg")
picBookHukkabook2 = open("#{hukkabook}hukkabooks2.jpg")
picBookHukkabook3 = open("#{hukkabook}hukkabook3.jpg")
picBookHukkabook4 = open("#{hukkabook}hukkabooks4.jpg")

# leatherbook 
leatherbook = "https://virtualshop-dev.s3-us-west-1.amazonaws.com/books/"
picBookLeatherbook1 = open("#{leatherbook}leatherbook1.jpg")
picBookLeatherbook2 = open("#{leatherbook}leatherbook2.jpg")
picBookLeatherbook3 = open("#{leatherbook}leatherbook3.jpg")
picBookLeatherbook4 = open("#{leatherbook}leatherbook4.jpg")

# plannerbook
plannerbook = "https://virtualshop-dev.s3-us-west-1.amazonaws.com/books/"
picBookPlannerbook1 = open("#{plannerbook}plannerbook1.jpg")
picBookPlannerbook2 = open("#{plannerbook}plannerbook2.jpg")
picBookPlannerbook3 = open("#{plannerbook}plannerbook3.jpg")


# shakesparebook 
shakesparebook = "https://virtualshop-dev.s3-us-west-1.amazonaws.com/books/"
picBookShakesparebook1 = open("#{shakesparebook}shakesparebook1.jpg")
picBookShakesparebook2 = open("#{shakesparebook}shakesparebook2.jpg")
picBookShakesparebook3 = open("#{shakesparebook}shakesparebook3.jpg")



# ------------------picture from the clothes folder------------------------
#hoodies
hoodies = "https://virtualshop-dev.s3-us-west-1.amazonaws.com/clothes/"
picClothesHoodies1 = open("#{hoodies}hoodies1.jpg")
picClothesHoodies2 = open("#{hoodies}hoodies2.jpg")
picClothesHoodies3 = open("#{hoodies}hoodies3.jpg")
picClothesHoodies4 = open("#{hoodies}hoodies4.jpg")

# menjeans 
menjeans = "https://virtualshop-dev.s3-us-west-1.amazonaws.com/clothes/"
picClothesMenjeans1 = open("#{menjeans}menjeans1.jpg")
picClothesMenjeans2 = open("#{menjeans}menjeans2.jpg")
picClothesMenjeans3 = open("#{menjeans}menjeans3.jpg")
picClothesMenjeans4 = open("#{menjeans}menjeans4.jpg")

#shoes
shoes = "https://virtualshop-dev.s3-us-west-1.amazonaws.com/clothes/"
picClothesShoes1 = open("#{shoes}shoes1.jpg")
picClothesShoes2 = open("#{shoes}shoes2.jpg")
picClothesShoes3 = open("#{shoes}shoes3.jpg")
picClothesShoes4 = open("#{shoes}shoes4.jpg")

# t-shirts 
tshirt  = "https://virtualshop-dev.s3-us-west-1.amazonaws.com/clothes/"
picClothesTshirt1 = open("#{tshirt}tshirt1.jpg")
picClothesTshirt2 = open("#{tshirt}tshirt2.jpg")
picClothesTshirt3 = open("#{tshirt}tshirt3.jpg")

# ------------------picture from the electronics folder------------------------

#  ironglass
ironglass = "https://virtualshop-dev.s3-us-west-1.amazonaws.com/electronic+/"
picElectronicsIronglass1 = open("#{ironglass}ironglass1.jpg")
picElectronicsIronglass2 = open("#{ironglass}ironglass2.jpg")
picElectronicsIronglass3 = open("#{ironglass}ironglass3.jpg")
picElectronicsIronglass4 = open("#{ironglass}ironglass4.jpg")

# joystick 
joystick = "https://virtualshop-dev.s3-us-west-1.amazonaws.com/electronic+/"
picElectronicsJoystick1 = open("#{joystick}joystick1.jpg")
picElectronicsJoystick2 = open("#{joystick}joystick2.jpg")
picElectronicsJoystick3 = open("#{joystick}joystick3.jpg")

# lightsaber 
lightsaber = "https://virtualshop-dev.s3-us-west-1.amazonaws.com/electronic+/"
picElectronicsLightsaber1 = open("#{lightsaber}lightsaber1.jpg")
picElectronicsLightsaber2 = open("#{lightsaber}lightsaber2.jpg")
picElectronicsLightsaber3 = open("#{lightsaber}lightsaber3.jpg")
picElectronicsLightsaber4= open("#{lightsaber}lightsaber4.jpg")

# pendrives 
pendrives = "https://virtualshop-dev.s3-us-west-1.amazonaws.com/electronic+/"
picElectronicsPendrive1 = open("#{pendrives}pendrive1.jpg")
picElectronicsPendrive2 = open("#{pendrives}pendrive2.jpg")
picElectronicsPendrive3 = open("#{pendrives}pendrive3.jpg")
picElectronicsPendrive4 = open("#{pendrives}pendrive4.jpg")


#  ------------------picture from the  jewelry folder------------------------
# bluediamonds

bluediamonds = "https://virtualshop-dev.s3-us-west-1.amazonaws.com/jewelry/"
picJewelryBluediamonds1 = open("#{bluediamonds}bluediamond1.jpg")
picJewelryBluediamonds2 = open("#{bluediamonds}bluediamond2.jpg")
picJewelryBluediamonds3 = open("#{bluediamonds}bluediamond3.jpg")
picJewelryBluediamonds4 = open("#{bluediamonds}bluediamond4.jpg")

# crystaldiamonds 
crystaldiamond = "https://virtualshop-dev.s3-us-west-1.amazonaws.com/jewelry/"
picJewelryCrystaldiamonds1 = open("#{crystaldiamond}crystaldiamond1.jpg")
picJewelryCrystaldiamonds2 = open("#{crystaldiamond}crystaldiamond2.jpg")
picJewelryCrystaldiamonds3 = open("#{crystaldiamond}crystaldiamond3.jpg")
picJewelryCrystaldiamonds4 = open("#{crystaldiamond}crystaldiamond4.jpg")

#diamond 
diamond = "https://virtualshop-dev.s3-us-west-1.amazonaws.com/jewelry/"
picJewelryDiamonds1 = open("#{diamond}diamond1.jpg")
picJewelryDiamonds2 = open("#{diamond}diamond2.jpg")
picJewelryDiamonds3 = open("#{diamond}diamond3.jpg")
picJewelryDiamonds4 = open("#{diamond}diamond4.jpg")

#golddiamond 
golddiamond = "https://virtualshop-dev.s3-us-west-1.amazonaws.com/jewelry/"
picJewelryGoldDiamonds1 = open("#{diamond}golddiamond1.jpg")
picJewelryDiamonds2 = open("#{diamond}golddiamond2.jpg")
picJewelryDiamonds3 = open("#{diamond}golddiamond3.jpg")
picJewelryDiamonds4 = open("#{diamond}golddiamond4.jpg")

#topaz
topaz= "https://virtualshop-dev.s3-us-west-1.amazonaws.com/jewelry/"
picJewelryTopaz1 = open("#{diamond}topaz1.jpg")
picJewelryTopaz2 = open("#{diamond}topaz2.jpg")
picJewelryTopaz3 = open("#{diamond}topaz3.jpg")
picJewelryTopaz4 = open("#{diamond}topaz4.jpg")



# --------------------------the product under the art categroy -----------------------------------
product1= Product.create(name:"Beach-painting", details:"the greatest detective of the world is facing the greatest challenge can he save the day", price:10.23, category:'Art', store_id: store1.id)
product2= Product.create(name:"Ganesh-statue", details:"The medium sizd marble statue of the lord ganesh ", price:180.23, category:'Art', store_id:store2.id)
product3= Product.create(name:"Jesus-painting", details: "The oil painting of the jesus of 55inch * 55inch perfect for the living room wall", price:1380.23, category:'Art', store_id:store3.id)
product4= Product.create(name:"Kali-paiting", details:"The bright oil painting of the hindu goddess of power and destruction. It is painted on the 1 inch thick canvas.it is deliverd free ", price:7.23, category:'Art', store_id: store5.id)
product5= Product.create(name:"San Fransisco-painting", details:"The large scale of expressionist painting of the Iconic golden gate bridge of san fransisco", price:180.23, category:'Art', store_id: store4.id)
product26= Product.create(name:"Ganesh-painting", details:"The large scale of post-modern painting of the lord ganesh", price:180.23, category:'Art', store_id: store6.id)

# --------------------------the product under the book categroy --------------------------------------
product6= Product.create(name:"Bookselves-cover", details:"The cover of the laptop with the design of the  Bookselves  ", price:80.23, category:'Books', store_id:store6.id)
product7= Product.create(name:"Table-calender", details:"Perfect small turning calender for the working table with 10 yrs of the data. ", price:23.34, category:'Books', store_id: store7.id)
product8= Product.create(name:"Colorful-bookselves", details:"The 4 feets * 4 feets colorful bookselves.The perfect decorative piece for the home libraty or any living room ", price:56.23, category:'Books', store_id: store8.id)
product9= Product.create(name:"Hukka", details:"Beautiful art piecefrom the Mugal sclupture.Sparkling and colorful decorative Hukka vase", price:146.23, category:'Books', store_id: store9.id)
product10= Product.create(name:"Leather-book", details:"Classical leather cover book for the man with taste.It has 100 percent cow leather with 2 years warrenty attached", price:1400.23, category:'Books', store_id: store10.id)
product11= Product.create(name:"Planner-book", details:"The perfect tool to plan and document the events. It has days , date and years with japanese paper", price:1400.23, category:'Books', store_id: store10.id)
product12= Product.create(name:"Shakespare-play", details:"The collection of the most popular Shakespare's plays with the leather cover and nylon binding for the protection ", price:1400.23, category:'Books', store_id: store10.id)

# --------------------------the product under the clothes categroy --------------------------------------
product13= Product.create(name:"Hoodies", details:"The medium size hoodies with  varied color of choice ", price:14.23, category:'Clothes', store_id: store9.id)
product14= Product.create(name:"Men-jeans", details:"The blue dark  jeans for men with 100 percent cotton from america.It is stretchy and comfortable", price:14.23, category:'Clothes', store_id: store10.id)
product15= Product.create(name:"sneakers", details:"Super cool design sneakers with colorful options", price:44.23, category:'Clothes', store_id: store9.id)
product16= Product.create(name:"T-shirt", details:"The 100 percent cotton T-shirt with different color choices and comes in three standard size small, medium and large", price:20.45, category:'Clothes', store_id: store4.id)

# --------------------------the product under the Electronics categroy --------------------------------------

product17= Product.create(name:"Polar-glass", details:"The stylish glass for the men with strong polymer frame and hardened glass ", price:20.45, category:'Electronics', store_id: store4.id)
product18= Product.create(name:"Joystick", details:"The DUALSHOCK Wireless Controller for PS4 gives you what you want in your gaming from precision control over your games to sharing your greatest gameplay moments with your friends while providing easy recharging so you are always ready.", price:96.60, category:'Electronics', store_id: store4.id)
product19= Product.create(name:"Lightsaber", details:"KYBERS RGB 11 Colors Changeable Metal Hilt Light Saber with 3 Mode Sound Force FX Dueling Lightsaber available in red, blue and green ", price:120.49, category:'Electronics', store_id: store2.id)
product20= Product.create(name:"Pendrive", details:"the glass and shiny metal pendrive, perfect for as gift. It has 300 GB memory.", price:20.45, category:'Electronics', store_id: store4.id)

#  --------------------------------------picture from the  jewelry folder-----------------------------------

product21= Product.create(name:"bluediamonds", details:"The Sparkling blue dimanond of AAA Quality", price:40000, category:'Jewelry', store_id: store4.id)
product22= Product.create(name:"Dimaond", details:"The Crystal colorless shining dimanond of AAA Quality", price:50000, category:'Jewelry', store_id: store4.id)
product23= Product.create(name:"golddiamond", details:"The Golden shining dimanond of AAA Quality", price:60000, category:'Jewelry', store_id: store4.id)
product24= Product.create(name:"Topaz", details:"The pure topaz of the afican mine ", price:70000, category:'Jewelry', store_id: store4.id)

# ================================================ attach the picture to the products ==============================================

# the picture of beach
product1.images.attach(io:picArtBeach1, filename: 'beach1.jpg')
product1.images.attach(io:picArtBeach2, filename: 'beach2.jpg')
product1.images.attach(io:picArtBeach3, filename: 'beach3.jpg')
product1.images.attach(io:picArtBeach4, filename: 'beach4.jpg')

# The statue  of ganesh 
product2.images.attach(io:picArtGana1, filename: 'gana1.jpg')
product2.images.attach(io:picArtGana2, filename: 'gana2.jpg')
product2.images.attach(io:picArtGana3, filename: 'gana3.jpg')
product2.images.attach(io:picArtGana4, filename: 'gana4.jpg')

# The painting of ganesh 
product26.images.attach(io:picArtGanesh1, filename: 'ganesh.jpg')
product26.images.attach(io:picArtGanesh2, filename: 'ganesh2.jpg')
product26.images.attach(io:picArtGanesh3, filename: 'ganesh3.jpg')

# The painting of Jesus 
product3.images.attach(io:picArtJesus1, filename: 'jesus1.jpg')
product3.images.attach(io:picArtJesus2, filename: 'jesus2.jpg')
product3.images.attach(io:picArtJesus3, filename: 'jesus3.jpg')
product3.images.attach(io:picArtJesus4, filename: 'jesus4.jpg')

# The painting of Jesus 
product4.images.attach(io:picArtKali1 , filename: 'kali1.jpg')
product4.images.attach(io:picArtKali2 , filename: 'kali2.jpg')
 
# The painting of sf-bridge
product5.images.attach(io:picArtSf1 , filename: 'sf1.jpg')
product5.images.attach(io:picArtSf2 , filename: 'sf2.jpg')
product5.images.attach(io:picArtSf3 , filename: 'sf3.jpg')
product5.images.attach(io:picArtSf4 , filename: 'sf4.jpg')

# The bookselves  
product6.images.attach(io:picBookBookselves1 , filename: 'bookselves1.jpg')
product6.images.attach(io:picBookBookselves2 , filename: 'bookselves2.jpg')

#  the calender 
product7.images.attach(io:picBookCalender1, filename: 'calender1.jpg')
product7.images.attach(io:picBookCalender2, filename: 'calender2.jpg')
product7.images.attach(io:picBookCalender3, filename: 'calender3.jpg')
product7.images.attach(io:picBookCalender4, filename: 'calender4.jpg')

#  colorfulbook 
product8.images.attach(io:picBookColorfulbook1, filename: 'colorfulbook1.jpg')
product8.images.attach(io:picBookColorfulbook2, filename: 'colorfulbook2.jpg')
product8.images.attach(io:picBookColorfulbook3, filename: 'colorfulbook3.jpg')
product8.images.attach(io:picBookColorfulbook4, filename: 'colorfulbook4.jpg')

# hukkabook
product9.images.attach(io:picBookHukkabook1, filename: 'hukkabook.jpg')
product9.images.attach(io:picBookHukkabook2, filename: 'hukkabook2.jpg')
product9.images.attach(io:picBookHukkabook3, filename: 'hukkabook3.jpg')
product9.images.attach(io:picBookHukkabook4, filename: 'hukkabook4.jpg')

# leatherbook
product10.images.attach(io:picBookLeatherbook1 , filename: 'leatherbook1.jpg')
product10.images.attach(io:picBookLeatherbook2 , filename: 'leatherbook2.jpg')
product10.images.attach(io:picBookLeatherbook3 , filename: 'leatherbook3.jpg')
product10.images.attach(io:picBookLeatherbook4 , filename: 'leatherbook4.jpg')

# plannerbook
product11.images.attach(io:picBookPlannerbook1 , filename: 'plannerbook1.jpg')
product11.images.attach(io:picBookPlannerbook2 , filename: 'plannerbook2.jpg')
product11.images.attach(io:picBookPlannerbook3, filename: 'plannerbook3.jpg')

# shakesparebook
product12.images.attach(io:picBookShakesparebook1 , filename: 'shakesparebook1.jpg')
product12.images.attach(io:picBookShakesparebook2, filename: 'shakesparebook2.jpg')
product12.images.attach(io:picBookShakesparebook3, filename: 'shakesparebook3.jpg')

# hoodies
product13.images.attach(io:picClothesHoodies1, filename: 'hoodies1.jpg')
product13.images.attach(io:picClothesHoodies2, filename: 'hoodies2.jpg')
product13.images.attach(io:picClothesHoodies3, filename: 'hoodies3.jpg')
product13.images.attach(io:picClothesHoodies4, filename: 'hoodies4.jpg')

# Menjeans
product14.images.attach(io:picClothesMenjeans1, filename: 'menjeans1.jpg')
product14.images.attach(io:picClothesMenjeans2, filename: 'menjeans2.jpg')
product14.images.attach(io:picClothesMenjeans3, filename: 'menjeans3.jpg')
product14.images.attach(io:picClothesMenjeans4, filename: 'menjeans4.jpg')

# shoes
product15.images.attach(io:picClothesShoes1, filename: 'shoes1.jpg')
product15.images.attach(io:picClothesShoes2, filename: 'shoes2.jpg')
product15.images.attach(io:picClothesShoes3, filename: 'shoes3.jpg')
product15.images.attach(io:picClothesShoes4, filename: 'shoes4.jpg')

# t-shirt
product16.images.attach(io:picClothesTshirt1, filename: 'tshirt1.jpg')
product16.images.attach(io:picClothesTshirt2, filename: 'tshirt2.jpg')
product16.images.attach(io:picClothesTshirt3, filename: 'tshirt3.jpg')

# IronGlass
product17.images.attach(io:picElectronicsIronglass1, filename: 'ironglass1.jpg')
product17.images.attach(io:picElectronicsIronglass2, filename: 'ironglass2.jpg')
product17.images.attach(io:picElectronicsIronglass3, filename: 'ironglass3.jpg')
product17.images.attach(io:picElectronicsIronglass4, filename: 'ironglass4.jpg')

# joystick
product18.images.attach(io:picElectronicsIronglass1, filename: 'joystick1.jpg')
product18.images.attach(io:picElectronicsIronglass2, filename: 'joystick2.jpg')
product18.images.attach(io:picElectronicsIronglass3, filename: 'joystick3.jpg')

# lightsaber
product19.images.attach(io:picElectronicsLightsaber1, filename: 'lightsaber1.jpg')
product19.images.attach(io:picElectronicsLightsaber2, filename: 'lightsaber2.jpg')
product19.images.attach(io:picElectronicsLightsaber3, filename: 'lightsaber3.jpg')
product19.images.attach(io:picElectronicsLightsaber4, filename: 'lightsaber4.jpg')

# Pendrive
product20.images.attach(io:picElectronicsPendrive1, filename: 'pendrive1.jpg')
product20.images.attach(io:picElectronicsPendrive2, filename: 'pendrive2.jpg')
product20.images.attach(io:picElectronicsPendrive3, filename: 'pendrive3.jpg')
product20.images.attach(io:picElectronicsPendrive4, filename: 'pendrive4.jpg')

# bluediamond
product21.images.attach(io:picJewelryBluediamonds1 , filename: 'bluediamond1.jpg')
product21.images.attach(io:picJewelryBluediamonds2 , filename: 'bluediamond2.jpg')
product21.images.attach(io:picJewelryBluediamonds3, filename: 'bluediamond3.jpg')
product21.images.attach(io:picJewelryBluediamonds4, filename: 'bluediamond4.jpg')


# diamond
product22.images.attach(io:picJewelryCrystaldiamonds1  , filename: 'diamond1.jpg')
product22.images.attach(io:picJewelryCrystaldiamonds2, filename: 'diamond2.jpg')
product22.images.attach(io:picJewelryCrystaldiamonds3, filename: 'diamond3.jpg')
product22.images.attach(io:picJewelryCrystaldiamonds4, filename: 'diamond4.jpg')

# golddiamond
product23.images.attach(io:picJewelryGoldDiamonds1, filename: 'golddiamond1.jpg')
product23.images.attach(io:picJewelryGoldDiamonds2, filename: 'golddiamond2.jpg')
product23.images.attach(io:picJewelryGoldDiamonds3, filename: 'golddiamond3.jpg')
product23.images.attach(io:picJewelryGoldDiamonds4, filename: 'golddiamond4.jpg')

# golddiamond
product24.images.attach(io:picJewelryTopaz1, filename: 'topaz1.jpg')
product24.images.attach(io:picJewelryTopaz2, filename: 'topaz2.jpg')
product24.images.attach(io:picJewelryTopaz3, filename: 'topaz3.jpg')
product24.images.attach(io:picJewelryTopaz4, filename: 'topaz4.jpg')
# =====================================================================



 








