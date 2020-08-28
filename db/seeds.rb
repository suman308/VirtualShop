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
#clothes 
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









product1= Product.create(name:"detecive-duo", details:"the greatest detective of the world is facing the greatest challenge can he save the day", price:10.23, category:'Books', store_id: store1.id)
product2= Product.create(name:"glasswave", details:"the lead crystal glass wave artestry", price:180.23, category:'Others', store_id:store2.id)
product3= Product.create(name:"Batbecon", details: "BatBecon straight form the gotham, now no chance for the criminal", price:1380.23, category:'Others', store_id:store3.id)
product5= Product.create(name:"batman&Sup", details:"two titans are clashing first time in the history.this is the comic you've been waiting for", price:7.23, category:'Books', store_id: store5.id)
product4= Product.create(name:"Batcase", details:"this is the suitcase for the bat crazy,batty head,ohhh batman is here with the case to sell", price:180.23, category:'Others', store_id: store4.id)
product6= Product.create(name:"batmobile", details:"the hightech batmobile is here for the batman crzy junkies", price:980.23, category:'Others', store_id:store6.id)
product7= Product.create(name:"bluetree", details:"the nostalgia and gloom that the cold blue color invove gives no meaning to the impressionist art", price:23.34, category:'Art', store_id: store7.id)
product8= Product.create(name:"the atomic book", details:"the details explaination of the actomic energy in the most simplest word ", price:56.23, category:'Books', store_id: store8.id)
product9= Product.create(name:"the classic check", details:"perfect blend of color and the finest fiber, durable and stylish", price:6.23, category:'Clothes', store_id: store9.id)
product10= Product.create(name:"Outdoor lamp", details:"Lamp with the vintage design perfect for the classic castle", price:1400.23, category:'Other', store_id: store10.id)


product1.image.attach(io:pic1, filename: 'detective.jpg')
product2.image.attach(io:pic2, filename:'Glass%2BTropic%2BWave.jpimage')
product3.image.attach(io:pic3, filename: 'batbecon.jpg')
product4.image.attach(io:pic4, filename: 'batcase.jpg')
product5.image.attach(io:pic5, filename: 'batman-superman-comics.jpg')
product6.image.attach(io:pic6, filename:'batmobile.jpg')
product7.image.attach(io:pic7, filename:'bluetree-art.jpg')
product8.image.attach(io:pic8, filename:'bookAtomic.jpg')
product9.image.attach(io:pic9, filename:'chekie.jpg')
product10.image.attach(io:pic10, filename:'outdoor-lamp.jpeg')

 


 








