# source
https://www.mongodb.com/docs/manual/crud/

# show db/collections
`show dbs`

`show collections`

# create db
`use {dbName}`

# CRUD
`db.{collectionName}.insert([{json}])`

`db.{collectionName}.find({json})`

`db.{collectionName}.update({json}, {json})`

`db.dogs.updateOne({name:"Charlie"}, {$set:{age:5, breed:'lab'}})`

`db.dogs.updateMany({catFriendly: true}, {$set: {isAvailable: false}})`

`db.cats.updateOne({age:6}, {$set: {age:7}, $currentDate:{lastChanged:true}})`

`db.cats.deleteOne({name: 'blue steele'})`

`db.dogs.deleteMany({isAvailable: false})`

`db.dogs.deleteMany({})`

# Operators
`db.{collectionName}.find({'person.name': 'Max', age: 10})`

`db.{collectionName}.find({age: {$gt: 10}})`

`db.{collectionName}.find({age: {$lt: 10}})`

`db.{collectionName}.find({breed: {$in: ['lab', 'poodle']}, age: {$gt: 5}})`

`db.{collectionName}.find({breed: {$nin: ['lab', 'poodle']}, age: {$gt: 5}})`

`db.{collectionName}.find({$or: [{breed: 'lab'}, {age: {$gt: 10}}]})`