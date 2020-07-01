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

pic1 = open('https://virtualshop-dev.s3-us-west-1.amazonaws.com/detective.jpg')
pic2 = open('https://virtualshop-dev.s3-us-west-1.amazonaws.com/Glass%2BTropic%2BWave.jpg')
pic3 = open('https://virtualshop-dev.s3-us-west-1.amazonaws.com/batbecon.jpg')
pic4 = open('https://virtualshop-dev.s3-us-west-1.amazonaws.com/batcase.jpg')
pic5 = open('https://virtualshop-dev.s3-us-west-1.amazonaws.com/batman-superman-comics.jpg')
pic6 = open('https://virtualshop-dev.s3-us-west-1.amazonaws.com/batmobile.jpg')
pic7 = open("https://virtualshop-dev.s3-us-west-1.amazonaws.com/bluetree-art.jpg")
pic8 = open('https://virtualshop-dev.s3-us-west-1.amazonaws.com/bookAtomic.jpg')
pic9 = open('https://virtualshop-dev.s3-us-west-1.amazonaws.com/chekie.jpg')
pic10 = open('https://virtualshop-dev.s3-us-west-1.amazonaws.com/outdoor-lamp.jpeg')

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

 


 








