# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Product.destroy_all
Review.destroy_all
Tag.destroy_all
Category.destroy_all

# Seed users

demouser = User.create(username: 'demo', email: 'DemoUser', password: 'password')
u1 = User.create(username: 'Jamie', email: 'jamie@cc.com', password: 'password', store_name: 'Jamie-store')
u2 = User.create(username: 'Winston', email: 'winston@cc.com', password: 'password', store_name:'Winston-store')
u3 = User.create(username: 'Fred', email: 'fred@cc.com', password: 'password', store_name:'Fred-store')
u4 = User.create(username: 'Mindy', email: 'mindy@cc.com', password: 'password', store_name: 'Mindy-store')
u5 = User.create(username: 'Sean', email: 'sean@cc.com', password: 'password', store_name: 'Sean-store')
u6 = User.create(username: 'Jerry', email: 'jerry@cc.com', password: 'password', store_name: 'Jerry-store')
u7 = User.create(username: 'June', email: 'june@cc.com', password: 'password')
u8 = User.create(username: 'Emmy', email: 'emmy@cc.com', password: 'password')
u9 = User.create(username: 'Kyle', email: 'kyle@cc.com', password: 'password', store_name:'Kyle-store')
u10 = User.create(username: 'Peter', email: 'peter@cc.com', password: 'password')
u11 = User.create(username: 'Jenna', email: 'jenna@cc.com', password: 'password', store_name:'Jenna-store')
u12 = User.create(username: 'Arthur', email: 'arthur@cc.com', password: 'password', store_name: 'Arthur-store')
u13 = User.create(username: 'Justin', email: 'justin@cc.com', password: 'password', store_name:'Justin-store')
u14 = User.create(username: 'Dianne', email: 'dianne@cc.com', password: 'password')
u15 = User.create(username: 'Harold', email: 'harold@cc.com', password: 'password', store_name:'Harold-store')
u16 = User.create(username: 'Valeria', email: 'valeria@cc.com', password: 'password')
u17 = User.create(username: 'Vanessa', email: 'vanessa@cc.com', password: 'password', store_name: 'Vanessa-store')
u18 = User.create(username: 'Joel', email: 'joel@cc.com', password: 'password')
u19 = User.create(username: 'Michaela', email: 'michaela@cc.com', password: 'password', store_name: 'Michaela-store')

