

# Data
- a piece of information which you want to preserve for your future reference

Schema  means  = the structure of the  table,

# Type of Data
- Structured Data - Table - RDBMS - SQL Server, MySQL, Oracle etc
- Semi-Structured - NoSQL - SchemaLess - MongoDB, Redis, Cassandra, Neo4J etc
- UnStructured - Pictures, Audio, Video, file etc - GoogleDrive, OneDrive, AWS S3, Azure Blobs etc

What is RDBMS Relational database Management system
In RDBMS data stored in tables  ,the data is often stored in many tables also called relations..
There are million of row but columns are made up of one specific data type

NoSQL 
Not required a fixed schema…

# SQL vs NoSQL

Order
- OrderId - Primary key
- Date
- Amount
- CustId - Foreign Key
- AddressId

Customer
- CustId - FK
- FirstName
- LastName
- Mobile
- Email


Address
- AddressId
- House_Number
- City
- Country
- Pincode



OrderItems
- OrderId
- ItemId
- ProductName
- Price
- Qty


# JSON - Javascript Object Notation
it is easy to understand and light weight
it is universal format which can be read and write by any programming language like java, javascript, php, python, C#


JSON Object - {} - used for single object or record
JSON Array - [] - used for multiple object or records

JSON object
{
  "key" : "",
  "key" : ""
}


JSON Array
[
 {
   "key": "value",
   "key": "value"
 },
{
   "key": "value",
   "key": "value"
 }
]


- MongoDB - JSON
 Orders - Collection collection = tables
{
  "orderId": "101",
  "date" : "",
  "amount": "",
  "customer" : {
     "custId" : "",
     "name" : ""
  },
  "address" : {
     "house_number" : "",
     "city" : ""
  },
  items: [
   {
     "pid" : "",
     "pname" : ""
   }
  ]
}

int a;
string b;

[
{
   Fields….
   fields….
}
…………..record
{
   Fields….
   fields….
}
……………..record
]





var a;





# Bank
A	100
B	100

A : 100 - 10
B : 100 + 10


https://onedrive.live.com/?authkey=%21AGiOVE4odt6q5cg&id=BC6BE38067F07690%212394602&cid=BC6BE38067F07690


noSql types


– Key-value                            redis, Riak
  Key-value pair bases 
  Designs for processing dictionary
  Dictionary contain of records having fields containing data
 
– Graph database                  ne04j, hyper graph BD


– Document -oriented            mongo DB , couch DB
The database  stores and retrieves doc in key-pair

– Big table/column families    Rapache Hbase, cassandra
It stored data as column families containing rows that have many columns associated with a row key Each row can have different columns




Cap theorem
C — Consistency
A —  Availability
P —  Partition
   


— Replication 
2s heart beat
10s 

                                Client 
                         Write        read
                              Primary


Secondary                                          secondary

  Cluster is data in server
Shad share data to all among  the servers
 

CA no partition
AP partition majority connected
Cp  partition majority not connected
Vertical increasing the capacity like ROM POWER
Horizontal  will increasing the servers

Conflict server contain the 3 servers


Acii 
Recorded 

Avantages  mongoDB 
Support API
Reduced the Map for aggregation 

RDMS 

Database server is big container
It is a common type of  database the stores in data in tables
The data is often stored in many tables also called relations
These  tables are divided into rows(records) and columns(fields)
There can be millions of rows but columns are made up of one specific data type.

Inside the server having a lot of tables  tables are inter related is called relation RDBMS 
Ex example RDMS  
POSt grade ,sql

RDMS        MONGODB(document based NOSql Database)
Database = database
Table,view = collection
Row = document
Column = field
Primary key = _id field
Foreign key = references
Index = index
Join = embedded document
Partition = shard

# MongoDB shell- installation
1. download the zip folder 
https://www.mongodb.com/try/download/shell

2. unzip the folder and copy mongosh exe from bin folder

3. paste the mongosh exe into C:/programme files/mongodb/server/<version>/bin

4. set environment variable

>  cls is clean the chat in cmd

# Basic Commands
Mongod
> mongosh

> show dbs		// list of databases
> db			// current database name default is test is selected
> use <db_name>		// select or create db
> db.dropDatabase()	// drop database but make sure you already database which you want to delete 


> show collections				// list of collections
> db.createCollection("collection_name")	// create collection
> db.<collection_name>.drop()			// delete a collection



# Collection can be of two types
1. capped collection
2. uncapped or normal collection


# Capped collection (restriction)
when you want to create restricted collection that called capped collection

restriction in terms of
1. size
2. max document

> db.createCollection("<collection_name>", { options })
Options 
capped - true
size - 64000
max - 100(document)

> db.createCollection("employees", { capped: true, size: 64000, max: 100  })
Note: Once you made a capped collection we cannot remove capping or change settings
Use case : i want to create a collection for logs 

Checking for capped collections
>  db.<collection_name>.stats()
Ex
> db.users.stats()



# CRUD (create Retrieve Update Delete)
C - create / insert
R - read / get
U - update / edit
D - delete


# Insert 
> db.<collection_name>.insert({"key": "value", "key": "value"})
> db.employees.insert({ "name": "mark" })
> db.employees.insert({ "name": "paul", "email": "m@gmail.com" })
> db.employees.insert({ "firstName": "john" })


> db.<collection>.insert()	// single or multiple doc
> db.employee.insert({"name":"sbjc"},{"father":"bagallure"})
> db.employee.insert({"name":"sbjc"})
> db.employee.insert([{"name":"sbjc"},{"father":"bagallure"}])

> db.<collection>.insertOne()	// single
> db.employee.insertOne({"name":"sbjc"})
> db.<collection>.insertMany()	// multiple
> db.employee.insert([{"name":"sbjc"},{"father":"bagallure"},{“email”:”@com”}])
>db.employee.insert([{_id:”001”,name:"sbjc"},{_id:”002”,name:"sbjc"},{_id:”003”,name:"sbjc"})

> db.employees.find()
>db.employees.find().pretty()
>db.employees.limite(3).find().pretty()


# Object Id
it is a unique value given to every document 
it is 12 byte unique value

4 bytes - timestamp
5 bytes - process and machine id
3 bytes - incrementing counter


_id can be anything but need to be unique 

Every entity in mongoDb is look like in document

Document in joson(java script Object Notation)
{
    Key : ‘value’, 
}

we can also give our own _id value but you have to make sure value should be unique bcoz does not allow duplicate values


demo> db.employees.insert([{name: "a"}, {name: "b"}, {name: "c"}])

demo> db.employees.insert([{_id: 1, name: "a"}, {_id: 1, name: "b"}, {_id: 2, name: "c"}], { ordered: false })

Ordered :false so second one is exited.

Retrieve 

# Find
> db.<collection>.find()		// select * from employees
> db.<collection>.find({ id: 1 })	// select * from employees where id = 1
> db.<collection>.findOne()		// single document


demo> db.employees.find()
demo> db.employees.find({ name: "mark" })
demo> db.employees.find({ status: true })


# Update

// update employee set name = '' where id = 1

> db.<collection>.updateOne()
$set
> db.<collection>.updateOne({filter}, {updated data})
demo> db.employees.updateOne({ name: "mark" }, { $set: { email: "m2@gmail.com" } })

  {
    _id: 1,
    name: 'ramesh',
    email: 'kramesh@gaacom',
    age: 30,
    number: '251344',
    status: true
  },
  { _id: 2, name: 'suresh', email: 'esh@gmail.com' }


Even records are not there also will add new record
demo> db.employees.updateOne({ name: 'ramesh' }, { $set: {country:”India” })

  {
    _id: 1,
    name: 'ramesh',
    email: 'kramesh@gaacom',
    age: 30,
    number: '251344',
    status: true
   Country: India
  },



$unset
demo> db.employees.updateOne({ name: "mark" }, { $unset: { email: "m2@gmail.com" } })
When using the unset the object email record are deleted
  {
    _id: 1,
    name: 'ramesh',
    email: 'kramesh@gaacom',
    age: 30,
    number: '251344',
    status: true
  },
  { _id: 2, name: 'suresh' }



> db.<collection>.updateMany()
$set
$unset

demo> db.employees.updateMany({ status: true }, { $set: { age: 100 } })

demo> db.employees.updateMany({ status: true }, { $set: { country: "india" } })
demo> db.employees.updateMany({ status: true }, { $unset: { country: "" } })







# Delete

> db.<collection>.deleteOne({ filter })
> db.<collection>.deleteMany({ filter })

demo> db.employees.deleteOne({name: "mark" })
demo> db.employees.deleteMany({ status: true })












# Operator

- and - it will return all the documents which matches with both condition
- or - it will return all documents either match condition


name = a and age = 30	// only those users where name is a and age is 30

name = a or age = 30	// only those users where name is a and all users where age is 30 





db.<collection>.find({ $and: [{name: "mark"}, { age: 30 }] })




demo> db.employees.find({ $and: [ { name: "mark" }, { age: 30 } ] })
[
  {
    _id: ObjectId("65ad4d63353d4997fc4fd513"),
    name: 'mark',
    email: 'm@gmail.com',
    status: true,
    age: 30
  }
]
demo> db.employees.find({ $and: [ { name: "mark" }, { age: 32 } ] })

demo> db.employees.find({ $or: [ { name: "mark" }, { age: 32 } ] })
[
  {
    _id: ObjectId("65ad4d63353d4997fc4fd513"),
    name: 'mark',
    email: 'm@gmail.com',
    status: true,
    age: 30
  },
  {
    _id: ObjectId("65ad4d6e353d4997fc4fd514"),
    name: 'paul',
    email: 'p@gmail.com',
    status: true,
    age: 32
  }
]
demo>



> db.<collection>.find({ $and: [{name: "mark"}, { age: 30 }] })
> db.<collection>.find({ name: "mark", age: 30 })


> db.<collection>.find({ $or: [{name: "mark"}, { age: 30 }] })






# comparison operator

$eq - equal to
$ne - not equal to
$gt - greather then
$lt - less then
$gte - greather then equal
$lte - less then equal

demo> db.employees.find({ age: { $eq: 32 } })
demo> db.employees.find({ age: { $ne: 32 } })
demo> db.employees.find({ age: { $gt: 32 } })
demo> db.employees.find({ age: { $lt: 32 } })
demo> db.employees.find({ age: { $gte: 32 } })
demo> db.employees.find({ age: { $lte: 32 } })



# element operators
they are used to find document based on field type and existence

- exists - matches documents that have the specified field
- type - select documents if a field is of specified type

demo> db.employees.insert({ name: "mark", email: "m@gmail.com", phone: "9999" })
DeprecationWarning: Collection.insert() is deprecated. Use insertOne, insertMany, or bulkWrite.
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("65b5162448c310112dcae7ad") }
}
demo> db.employees.insert({ name: "paul", email: "p@gmail.com", phone: "8888" })
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("65b5163248c310112dcae7ae") }
}
demo> db.employees.insert({ name: "watson", email: "w@gmail.com" })
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("65b5164348c310112dcae7af") }
}
demo> db.employees.find()
[
  {
    _id: ObjectId("65b5162448c310112dcae7ad"),
    name: 'mark',
    email: 'm@gmail.com',
    phone: '9999'
  },
  {
    _id: ObjectId("65b5163248c310112dcae7ae"),
    name: 'paul',
    email: 'p@gmail.com',
    phone: '8888'
  },
  {
    _id: ObjectId("65b5164348c310112dcae7af"),
    name: 'watson',
    email: 'w@gmail.com'
  }
]
demo> db.employees.find({ phone: null })
[
  {
    _id: ObjectId("65b5164348c310112dcae7af"),
    name: 'watson',
    email: 'w@gmail.com'
  }
]
demo> db.employees.find({ phone: { $exists: true } })
[
  {
    _id: ObjectId("65b5162448c310112dcae7ad"),
    name: 'mark',
    email: 'm@gmail.com',
    phone: '9999'
  },
  {
    _id: ObjectId("65b5163248c310112dcae7ae"),
    name: 'paul',
    email: 'p@gmail.com',
    phone: '8888'
  }
]
demo> db.employees.find({ phone: { $exists: false } })
[
  {
    _id: ObjectId("65b5164348c310112dcae7af"),
    name: 'watson',
    email: 'w@gmail.com'
  }
]
demo>




# type

demo> db.employees.find()
[
  {
    _id: ObjectId("65b5162448c310112dcae7ad"),
    name: 'mark',
    email: 'm@gmail.com',
    phone: '9999'
  },
  {
    _id: ObjectId("65b5163248c310112dcae7ae"),
    name: 'paul',
    email: 'p@gmail.com',
    phone: '8888'
  },
  {
    _id: ObjectId("65b5164348c310112dcae7af"),
    name: 'watson',
    email: 'w@gmail.com'
  },
  {
    _id: ObjectId("65b516ec48c310112dcae7b0"),
    name: 'smith',
    email: 's@gmail.com',
    phone: 9999
  }
]
demo> db.employees.find({ phone: "9999" })
[
  {
    _id: ObjectId("65b5162448c310112dcae7ad"),
    name: 'mark',
    email: 'm@gmail.com',
    phone: '9999'
  }
]
demo> db.employees.find({ phone: 9999 })
[
  {
    _id: ObjectId("65b516ec48c310112dcae7b0"),
    name: 'smith',
    email: 's@gmail.com',
    phone: 9999
  }
]
demo> db.employees.find({ phone: { $type: "string" } })
[
  {
    _id: ObjectId("65b5162448c310112dcae7ad"),
    name: 'mark',
    email: 'm@gmail.com',
    phone: '9999'
  },
  {
    _id: ObjectId("65b5163248c310112dcae7ae"),
    name: 'paul',
    email: 'p@gmail.com',
    phone: '8888'
  }
]
demo> db.employees.find({ phone: { $type: "number" } })
[
  {
    _id: ObjectId("65b516ec48c310112dcae7b0"),
    name: 'smith',
    email: 's@gmail.com',
    phone: 9999
  }
]
demo>



# array operators
$all - matches array that contain all elements specified in the query - like and operator
$elemMatch - select documents of element in the array field matches all specified condition
$size - select document if the array field is a specified size



demo> db.results.insert({ name: "a", scores: [ 50, 65, 70 ] })
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("65b5182348c310112dcae7b1") }
}
demo> db.results.insert({ name: "b", scores: [ 60, 70, 80 ] })
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("65b5183448c310112dcae7b2") }
}
demo> db.results.insert({ name: "c", scores: [ 90, 95, 100 ] })
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("65b5184048c310112dcae7b3") }
}
demo> db.results.find()
[
  {
    _id: ObjectId("65b5182348c310112dcae7b1"),
    name: 'a',
    scores: [ 50, 65, 70 ]
  },
  {
    _id: ObjectId("65b5183448c310112dcae7b2"),
    name: 'b',
    scores: [ 60, 70, 80 ]
  },
  {
    _id: ObjectId("65b5184048c310112dcae7b3"),
    name: 'c',
    scores: [ 90, 95, 100 ]
  }
]
demo> db.results.find({ scores: { $elemMatch: { $gte: 50, $lte: 80 } } })
[
  {
    _id: ObjectId("65b5182348c310112dcae7b1"),
    name: 'a',
    scores: [ 50, 65, 70 ]
  },
  {
    _id: ObjectId("65b5183448c310112dcae7b2"),
    name: 'b',
    scores: [ 60, 70, 80 ]
  }
]
demo> db.results.find({ scores: { $elemMatch: { $gte: 50, $lte: 59 } } })
[
  {
    _id: ObjectId("65b5182348c310112dcae7b1"),
    name: 'a',
    scores: [ 50, 65, 70 ]
  }
]
demo> db.results.find({ scores: { $elemMatch: { $gte: 50, $lte: 100 } } })
[
  {
    _id: ObjectId("65b5182348c310112dcae7b1"),
    name: 'a',
    scores: [ 50, 65, 70 ]
  },
  {
    _id: ObjectId("65b5183448c310112dcae7b2"),
    name: 'b',
    scores: [ 60, 70, 80 ]
  },
  {
    _id: ObjectId("65b5184048c310112dcae7b3"),
    name: 'c',
    scores: [ 90, 95, 100 ]
  }
]




# all
demo> db.temp.insert({ tags: [ 'a', 'b', 'c' ] })
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("65b518fd48c310112dcae7b4") }
}
demo> db.temp.insert({ tags: [ 'b', 'c', 'd' ] })
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("65b5190548c310112dcae7b5") }
}
demo> db.temp.insert({ tags: [ 'd', 'e', 'f' ] })
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("65b5190f48c310112dcae7b6") }
}
demo> db.temp.find()
[
  {
    _id: ObjectId("65b518fd48c310112dcae7b4"),
    tags: [ 'a', 'b', 'c' ]
  },
  {
    _id: ObjectId("65b5190548c310112dcae7b5"),
    tags: [ 'b', 'c', 'd' ]
  },
  {
    _id: ObjectId("65b5190f48c310112dcae7b6"),
    tags: [ 'd', 'e', 'f' ]
  }
]
demo> db.temp.find({ tags: { $all: [ 'a', 'b' ] } })
[
  {
    _id: ObjectId("65b518fd48c310112dcae7b4"),
    tags: [ 'a', 'b', 'c' ]
  }
]
demo> db.temp.find({ tags: { $all: [ 'b', 'c' ] } })
[
  {
    _id: ObjectId("65b518fd48c310112dcae7b4"),
    tags: [ 'a', 'b', 'c' ]
  },
  {
    _id: ObjectId("65b5190548c310112dcae7b5"),
    tags: [ 'b', 'c', 'd' ]
  }
]
demo> db.temp.find({ tags: { $all: [ 'b', 'c', 'f' ] } })


# size
demo> db.hotels.insert({ name: 'taj', amenties: ['wifi', 'gym', 'food'] })
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("65b51b9048c310112dcae7b7") }
}
demo> db.hotels.insert({ name: 'ITC', amenties: ['wifi', 'pool', 'food'] })
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("65b51ba048c310112dcae7b8") }
}
demo> db.hotels.insert({ name: 'oberio', amenties: ['wifi', 'smoking'] })
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("65b51bb548c310112dcae7b9") }
}
demo> db.hotels.insert({ name: 'abc', amenties: ['wifi', 'smoking', 'pool', 'food'] })
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("65b51bcb48c310112dcae7ba") }
}
demo> db.hotels.find()
[
  {
    _id: ObjectId("65b51b9048c310112dcae7b7"),
    name: 'taj',
    amenties: [ 'wifi', 'gym', 'food' ]
  },
  {
    _id: ObjectId("65b51ba048c310112dcae7b8"),
    name: 'ITC',
    amenties: [ 'wifi', 'pool', 'food' ]
  },
  {
    _id: ObjectId("65b51bb548c310112dcae7b9"),
    name: 'oberio',
    amenties: [ 'wifi', 'smoking' ]
  },
  {
    _id: ObjectId("65b51bcb48c310112dcae7ba"),
    name: 'abc',
    amenties: [ 'wifi', 'smoking', 'pool', 'food' ]
  }
]
demo> db.hotels.find({ amenties: { $size: 3 }  })
[
  {
    _id: ObjectId("65b51b9048c310112dcae7b7"),
    name: 'taj',
    amenties: [ 'wifi', 'gym', 'food' ]
  },
  {
    _id: ObjectId("65b51ba048c310112dcae7b8"),
    name: 'ITC',
    amenties: [ 'wifi', 'pool', 'food' ]
  }
]
demo> db.hotels.find({ amenties: { $size: 2 }  })
[
  {
    _id: ObjectId("65b51bb548c310112dcae7b9"),
    name: 'oberio',
    amenties: [ 'wifi', 'smoking' ]
  }
]
demo> db.hotels.find({ amenties: { $size: 4 }  })
[
  {
    _id: ObjectId("65b51bcb48c310112dcae7ba"),
    name: 'abc',
    amenties: [ 'wifi', 'smoking', 'pool', 'food' ]
  }
]


# array opeartors
$push - append an element to the end of the array
$pop - removes one element from the end of the array
$pull - remove all element in the array that match a specified value
$pullAll - remove all elements in the array that match any of the specified condition
$addToSet - append an element to the array if not already present



demo> db.students.updateOne({ name: "a"},  { $push : { scores: 40 } } )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
demo> db.students.find()
[
  {
    _id: ObjectId("65b51d1b48c310112dcae7bb"),
    name: 'a',
    scores: [ 10, 20, 30, 40 ]
  }
]
demo> db.students.updateOne({ name: "a"},  { $pull : { scores: 1 } } )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 0,
  upsertedCount: 0
}
demo> db.students.find()
[
  {
    _id: ObjectId("65b51d1b48c310112dcae7bb"),
    name: 'a',
    scores: [ 10, 20, 30, 40 ]
  }
]
demo> db.students.find()
[
  {
    _id: ObjectId("65b51d1b48c310112dcae7bb"),
    name: 'a',
    scores: [ 10, 20, 30, 40 ]
  }
]
demo> db.students.updateOne({ name: "a"},  { $pull : { scores: 40 } } )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
demo> db.students.find()
[
  {
    _id: ObjectId("65b51d1b48c310112dcae7bb"),
    name: 'a',
    scores: [ 10, 20, 30 ]
  }
]
demo> db.students.find()
[
  {
    _id: ObjectId("65b51d1b48c310112dcae7bb"),
    name: 'a',
    scores: [ 10, 20, 30 ]
  }
]
demo> db.students.updateOne({ name: "a"},  { $pull : { scores: 30 } } )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
demo> db.students.find()
[
  {
    _id: ObjectId("65b51d1b48c310112dcae7bb"),
    name: 'a',
    scores: [ 10, 20 ]
  }
]
demo> db.students.updateOne({ name: "a"},  { $pull : { scores: 10 } } )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
demo> db.students.find()
[
  {
    _id: ObjectId("65b51d1b48c310112dcae7bb"),
    name: 'a',
    scores: [ 20 ]
  }
]


$set
$unset

demo> db.employees.insert({ name: 'a', status: true })
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("65b51ddc48c310112dcae7bc") }
}
demo> db.employees.find()
[
  {
    _id: ObjectId("65b51ddc48c310112dcae7bc"),
    name: 'a',
    status: true
  }
]
demo> db.employees.updateOne({ name: 'a' }, { $set: { status: false } })
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
demo> db.employees.find()
[
  {
    _id: ObjectId("65b51ddc48c310112dcae7bc"),
    name: 'a',
    status: false
  }
]
demo> db.employees.updateOne({ name: 'a' }, { $set: { country: 'india' } })
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
demo> db.employees.find()
[
  {
    _id: ObjectId("65b51ddc48c310112dcae7bc"),
    name: 'a',
    status: false,
    country: 'india'
  }
]
demo> db.employees.updateOne({ name: 'a' }, { $unset: { country: 'india' } })
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
demo> db.employees.find()
[
  {
    _id: ObjectId("65b51ddc48c310112dcae7bc"),
    name: 'a',
    status: false
  }
]



$inc
$min
$max
$mul
$rename
$currentData

demo> db.users.find()
[
  { _id: ObjectId("65b51f3e48c310112dcae7bd"), name: 'a', age: 30 },
  { _id: ObjectId("65b51f4348c310112dcae7be"), name: 'b', age: 40 },
  { _id: ObjectId("65b51f4848c310112dcae7bf"), name: 'c', age: 50 }
]
demo> db.users.updateMany({  }, { $inc: { age: 100 } })
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 3,
  modifiedCount: 3,
  upsertedCount: 0
}
demo> db.users.find()
[
  { _id: ObjectId("65b51f3e48c310112dcae7bd"), name: 'a', age: 130 },
  { _id: ObjectId("65b51f4348c310112dcae7be"), name: 'b', age: 140 },
  { _id: ObjectId("65b51f4848c310112dcae7bf"), name: 'c', age: 150 }
]
demo>




# Projection

select * from table			// return all row and all columns
select id, name, email from table	// return all rows and limited columns


by default queries in mongodb return all fields in matching documents. to limit the amount of data that mongodb send to application you can include a projection to specify or restrict field to return



 db.<collection>.find({ filter }, { projection })


inclusion - 1 / true
exclusion - 0 / false


demo> db.employees.find()
[
  {
    _id: ObjectId("65b520d648c310112dcae7c0"),
    name: 'mark',
    email: 'm@gmaiul.com',
    age: 30,
    status: true
  },
  {
    _id: ObjectId("65b520e048c310112dcae7c1"),
    name: 'paul',
    email: 'p@gmaiul.com',
    age: 32,
    status: true
  },
  {
    _id: ObjectId("65b520ee48c310112dcae7c2"),
    name: 'john',
    email: 'j@gmaiul.com',
    age: 28,
    status: true
  },
  {
    _id: ObjectId("65b520fd48c310112dcae7c3"),
    name: 'watson',
    email: 'w@gmaiul.com',
    age: 25,
    status: true
  }
]
demo> db.employees.find({}, { status: 0 })
[
  {
    _id: ObjectId("65b520d648c310112dcae7c0"),
    name: 'mark',
    email: 'm@gmaiul.com',
    age: 30
  },
  {
    _id: ObjectId("65b520e048c310112dcae7c1"),
    name: 'paul',
    email: 'p@gmaiul.com',
    age: 32
  },
  {
    _id: ObjectId("65b520ee48c310112dcae7c2"),
    name: 'john',
    email: 'j@gmaiul.com',
    age: 28
  },
  {
    _id: ObjectId("65b520fd48c310112dcae7c3"),
    name: 'watson',
    email: 'w@gmaiul.com',
    age: 25
  }
]
demo> db.employees.find({}, { status: 0, age: 0 })
[
  {
    _id: ObjectId("65b520d648c310112dcae7c0"),
    name: 'mark',
    email: 'm@gmaiul.com'
  },
  {
    _id: ObjectId("65b520e048c310112dcae7c1"),
    name: 'paul',
    email: 'p@gmaiul.com'
  },
  {
    _id: ObjectId("65b520ee48c310112dcae7c2"),
    name: 'john',
    email: 'j@gmaiul.com'
  },
  {
    _id: ObjectId("65b520fd48c310112dcae7c3"),
    name: 'watson',
    email: 'w@gmaiul.com'
  }
]
demo> db.employees.find({}, { status: 0, age: 0, email: 0 })
[
  { _id: ObjectId("65b520d648c310112dcae7c0"), name: 'mark' },
  { _id: ObjectId("65b520e048c310112dcae7c1"), name: 'paul' },
  { _id: ObjectId("65b520ee48c310112dcae7c2"), name: 'john' },
  { _id: ObjectId("65b520fd48c310112dcae7c3"), name: 'watson' }
]
demo> db.employees.find({}, { name: 1})
[
  { _id: ObjectId("65b520d648c310112dcae7c0"), name: 'mark' },
  { _id: ObjectId("65b520e048c310112dcae7c1"), name: 'paul' },
  { _id: ObjectId("65b520ee48c310112dcae7c2"), name: 'john' },
  { _id: ObjectId("65b520fd48c310112dcae7c3"), name: 'watson' }
]
demo> db.employees.find({}, { _id: 0, name: 1})
[
  { name: 'mark' },
  { name: 'paul' },
  { name: 'john' },
  { name: 'watson' }
]
demo> db.employees.find({}, { name: 1, age: 0 })
MongoServerError: Cannot do exclusion on field age in inclusion projection
demo> db.employees.find({}, { _id: 0, name: 1})
[
  { name: 'mark' },
  { name: 'paul' },
  { name: 'john' },
  { name: 'watson' }
]
demo> db.employees.find({}, { _id: false,  name: true})
[
  { name: 'mark' },
  { name: 'paul' },
  { name: 'john' },
  { name: 'watson' }
]




# Indexes

# What are indexes?
Are used to B-tree
- speed up queries and update
- avoid disk i/o
- reduce overall computation

# how do indexes work
- data in an index is order
- values in a mongoDB index points to document identity


# when do you use an index
- a good index should support every query or update


# type of indexes
- single field indexes
- compound indexes
- multi-key indexes
- text indexes
- wild card indexes


# single field index
- optimise finding values for a given field
- specified as field name and direction
- the field itself can be any type
- indexing an object type does not index all the value separately



> db.<collection>.getIndexes()
> db.<collection>.createIndex({ field_name : direction })
> db.<collection>.dropIndexes()			// drop all indexes
> db.<collection>.dropIndex("<index_name>")	// drop individual index
> db.<collection>.dropIndex({ field_key },{name})

direction: 1 or 0
1 - ascending
0 - descending

Every collection only have one index… 

# explain()

explain() - default - show the winning query plan but does not execute query
explain("executeStats") - execute query and gather statistics
explain("allPlansExecution") - run all candidate plan and gather statistics



  stage: 'IXSCAN',  - target 
  stage: 'COLLSCAN',  - try to avoid collection scan

> db.employees.find({ name: "mark" }).explain()
> db.employees.find({ name: "mark" }).explain("executionStats")


 nReturned: 1,
    executionTimeMillis: 0,
    totalKeysExamined: 0,
    totalDocsExamined: 4,
    executionStages: {
      stage: 'COLLSCAN',



before index
1 : 4

after index
1 : 1


 nReturned: 1,
    executionTimeMillis: 25,
    totalKeysExamined: 1,
    totalDocsExamined: 1,
 stage: 'IXSCAN',




# limitation of indexes
- you can have upto 64 indexes per collection
- you should never be anywhere close to the upper limit
- write performance will degrade
- 4 to 5 is a good number to aim for indexes per collection

- every query should use an index
- every index should be used by a query
- indexes require RAM
- be mindful about the choice of key



# index options
- index can enforce a unique constraint

> db.<collection>.createIndex({ field_name: 1 }, { unique: true })
 In collection any field is fixed with index and unique then we cannot insert  field again 

> db.users.dropIndex("name_1")
> db.users.dropIndex({ email: 1 })
> db.users.dropIndexes()	// delete all index except _id index



# Compound index
- we can create an index based on more then one field
- mongodb commonly uses one index per query
- compound indexes are most common type of indexes
- they are conceptually same as used in RDBMS
- you can use up 32 fields in a compound index
- you can create them like a single field index but with field specified
- instead of having multiple single field indexes we can consider creating a compound index

> db.<collection>.createIndex({ name: 1, email: 1 })



# multi-key index
- a multi key index is an index on any array field
- an index entry is created on each value found in the array
- you can make an index createIndex() just as you create on ordinary single field index
- if there is an array as a value for an indexes field the index will be multi key index


demo> db.race_result.insert({ lap_time: [ 3,5,7 ] })
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("65c8e88f4b731f1a95d0cb62") }
}
demo> db.race_result.insert({ lap_time: [ 1,6,4 ] })
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("65c8e89a4b731f1a95d0cb63") }
}
demo> db.race_result.insert({ lap_time: [ 2,8,9 ] })
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("65c8e8a24b731f1a95d0cb64") }
}
demo> db.race_result.find()
[
  { _id: ObjectId("65c8e88f4b731f1a95d0cb62"), lap_time: [ 3, 5, 7 ] },
  { _id: ObjectId("65c8e89a4b731f1a95d0cb63"), lap_time: [ 1, 6, 4 ] },
  { _id: ObjectId("65c8e8a24b731f1a95d0cb64"), lap_time: [ 2, 8, 9 ] }
]
demo>


> db.race_result.createIndex({ lap_time: 1 })
> db.race_result.find({ lap_time:2  }).explain("executionStats")

> use <db_name>
> db.dropDatabase()


# How to install mongodb database tools
1. download zip folder from https://www.mongodb.com/try/download/database-tools

2. extract the files and paste to C:\Program Files\MongoDB\Server\7.0\bin


- mongodump
- mongorestore
- mongoexport
- mongoimport


# mongodump - it is used to take the dump of the database  copy the database from mongodb 
> mongodump --uri="mongodb://localhost:27017"			// all database
	
> mongodump --uri="mongodb://localhost:27017/demo"	// dump only one database


# mongorestore - it is use to restore database from dump
> mongorestore dump/


# mongoexport - it is used to export collection from mongodb into csv or json format
> mongoexport --collection=<col_name> --db=<db_name> --out=employee.json
> mongoexport --collection=employees --db=demo --out=employee.json

> use demo
> db.employees.drop()	// delete collection

# mongoimport - it is use to import data into mongodb from json or csv file
  Open the terminal in data file
> mongoimport -c employees --uri="mongodb://localhost:27017/demo" employee.json


demo> db.employees.find({ name: "mark" }).explain()
demo> db.employees.getIndexes()
demo> db.employees.createIndex({ name: 1 })




# Replication

- multiple copies of each collection
- on different physical server
- as far away from each other as possible

# reason of replication
- high availability
- reducing read latency
- support different access pattern

# high availability
- data still available if equipment failure, data centre failure
- this is achieved through automatic failover
- the remaining servers have an election


# reduce read latency
- reading from a copy that is geographically nera to you



# component of a replica set
- primary member
handle all write operation and most read
election by consensus


- secondary member
handley only read operation
help to elect a primary

- non voting members
hold additional copies for analysis 


we do not define who will be the primary
we provide an odd number of voting member



# demo - create a three node replica set

1. create 3 different folder for each node 
node1 - 27001 mongodb instances 
node2 - 27002  mongodb instances 
node3 - 27003 mongodb instances is type of server

2. create a data folder inside each node folder for database directory
node1/data
node2/data
node3/data

3. generate a key file for authentication
> openssl rand -base64 741 > my-key
  $cat my-key  cat is command to see the content
> chmod 400 my-key to change the permission read only


4. create a config file for each node
note: make sure to modify different dbPath, port, log file but same key file

mongod.conf

storage:
    dbPath: "C:/Users/Varun Gupta/OneDrive/Desktop/demo/node1/data"
net:
    bindIp: localhost:
    port: 27001
security:
    authorization: enabled
    keyFile: "C:/Users/Varun Gupta/OneDrive/Desktop/demo/my-key"
systemLog:
    destination: file
    path: "C:/Users/Varun Gupta/OneDrive/Desktop/demo/node1/mongod.log"
    logAppend: true
replication:
    replSetName: myrepl


5. start the mongodb server with config file
> mongod --config mongod.conf


6. connect with mongo server using mongosh 
> mongosh --port 27001


7. initialize replica set
> rs.initiate()

> rs.status()


8. create a user
> use admin
> db.createUser({user: "admin", pwd: "admin123", roles: [{ role: "root", db: "admin" }]})
> exit

9. reconnect as authentic user
> mongosh --port 27001 -u admin -p admin123 --authenticationDatabase admin


10. add members in replicaset
> rs.add("localhost:27002")

> rs.add("localhost:27003")
rs.status()
rs.stepDown()


Remove physical server  

Aggregation 
The process of data records and return computed results.
$sum, $avg ,$ min , $ max…

Pipeline 
input 1>output1,
Stages
$protect select specific fields from a collection
$match  filtering operation
$group  groups docu
$sort sorts documents
$skip 

Map function
Reduced function
—-----------------------------------------------------------------------------------------

Sharding 
 Sharding means partition data all machine(server) diving the data put into all servers
Create a cluster many machin  is called sharding allowed to  break up connect put data each of meachin are sharding 
Types 
Manually
Auto

Cluster a group of independent server are connected through a  dedicated network to centralised data processing
Load balanced cluster
High available cluster
High performance 

Routing process is query Router
Is mongos
                                      Application
                                               .
                                               .
                                    Router (mongosh)
                                                 ,           .                 ‘
                                               .             .                   .
                                             .               .                     .
                                  Sharding        sharding           sharding

                  Overview of
                 sh.status()
                 sh.help()
                  sh.enableSharding()
To shard a collection,choose a shard key

Why shard
Increases available RAM,dicspace
Reduced load on server
read or write data with grater throughput


Chunk is section enter a  range

Type of distribution based on sherd key
 Ascending shed key
Random Location based GridFs chunksSharding chunks

Shordkey is immutable
Shordkey value is immutable
Limits up 512 bytes


Scram-sha-1
Mongodb challenge and Response(MongoDB-CR)
SCRAM:Salted challenge Response Authentication Mechanism

—-----------------------------------------------------------------------------------------
Version 2.0
Relational database use notion of databases separated into tables where each colum 


Traditional database are 
  Ibm 
 Microserver


Limitation RDbms database
 Scale-up   server : 8bg-54gb
Datacomplexity
   Store the staturedata will in rbms

    
  What is NoSQl 
A form of database management system that is Non-relational database
More complex
   
Ex  mongoDb redis cassandra,Neo4J
  
Big data
 Volume variety velocity value veracity
  Data increases continuously
  Data is both structured /un structured
  Difficult to analyze
  Within a certain tolerable time limit
 1 pb in one week
Blu -ray disc movie
2gb of space for 2 hours of movie


Document database is MongoDB
key/value is redis
Column is cassandra
Graph  is neo4j

one -to one relational database

Address : {
   key:value
}
 
one -to Many relational database

Address : [{
   key:value
},
{
   key:value
},
{
   key:value
}
]
 















































