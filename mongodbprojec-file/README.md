# How to build a restful API using nodejs and mongodb - Project
# Project - build and API to perform CRUD operation on books

> node --version
> npm --version			// node package manager




# Steps
1. create a project directory
> mkdir books-api
> cd books-api
> code .		// open vscode 
> npm init -y		// create package.json file



2. install required packages
> npm i express		// express is a framework for nodejs




3. create index.js

// import express
const express = require('express')

// initialize the express app
const app = express();

// create a api url   http://localhost:3000/hello
app.get('/hello', (req, res) => {
    res.send('Get Method')
})

app.post('/hello', (req, res) => {
    res.send('Post Method')
})

app.put('/hello', (req, res) => {
    res.send('Put Method')
})

app.delete('/hello', (req, res) => {
    res.send('Delete Method')
})

// setup server
app.listen(3000, () => {
    console.log('server is running')
})



4. start the server
> node index


5. test the api
open the browser and write the url

http://localhost:3000/hello





HTTP Methods

1. get - read the data
2. post - create / insert data
3. put - update
4. delete - delete



http://localhost:3000/books	- Get - all books
http://localhost:3000/books/id 	- Get - single book
http://localhost:3000/books	- Post- insert book
http://localhost:3000/books/id	- Put - update
http://localhost:3000/books/id	- Delete - delete

# Exercise: intergrated mongodb with node

Step 1: install required package
> npm i mongoose	// ORM - object relational mapper


Mongoose it is ORM to connect mongodb with node app
it also provide all method to perform database operations on mongodb
