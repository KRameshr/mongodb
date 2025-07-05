
// import express
const express = require('express');
const mongoose = require('mongoose')

const Book = require('./bookModule')

mongoose.connect('mongodb://localhost:27017/bookdb')
.then(()=>{
    console.log('mongodb Conneted Success');
})
// initialize the express app
const app = express();


// middle ware
app.use(express.json())

const dataInformation = [
    {
        id : 1,
        name : 'Ramesh',
        address:{
            village:'thimmaganipalli',
            postcode:515331,
            mande:'lepakshi',
            country: "IND ANDRAPRADESH,ANANTHAPURAM",
        },
        Education : {
            SCC: "ZPHS",
            INter :'SBJC',
            DEGREE:"MITS"
        }
    },
    {
        id : 2,
        name : 'Suresh',
        address:{
            village:'BEGAMPETA',
            postcode:515301,
            mande:'lepakshi',
            country: "IND ANDRAPRADESH,ANANTHAPURAM",
        },
        Education : {
            SCC: "ZPHS",
            INter :'SBJC',
            DEGREE:"MITS"
        }
    },
    {
        id : 3,
        name : 'PAVAM KALYAN',
        address:{
            village:'PETAPURAM',
            postcode:515331,
            mande:'OGALU',
            country: "IND ANDRAPRADESH,ONGOLU",
        },
        Education : {
            SCC: "DIRU BAI AMBANI INTERNATION SCHOOL",
            INter :'COLAMBIO',
            DEGREE:"CALIPONIO"
        }
    }
]

let book = [
    {
        id:1,
        title:'LAW OF INDIA',
        author: 'DEMOCRATIC OF INDIA',
        pice:'INR 250'
    },
    {
        id:2,
        title:'HAPPYEST MINDSET',
        author: 'JONE REO',
        pice:'INR 230'
    },
    {
        id:3,
        title:'WOMEN EMPOERMENT',
        author: 'SUDHAMURTY',
        pice:'INR 200'
    },
]


// setup server 
app.get('/books',async(req,res)=>{
        const books = await Book.find({})
        res.json({
            error:false,
            message:'Data is fetch sucess',
            data:books,
        });
     
    
   
})

app.get('/books/:id',async(req,res)=>{
  
    let book = await Book.findById(req.params.id)
    if(!book){
       return res.json({
        error:true,
        message:'error',
       })
    }
    res.json({
        error:false,
        message:'Data is fetch sucess',
        data:book,
    });
})


app.post('/books',async(req,res)=>{
    try{
        let book = await Book.create(req.body);
        res.json({
            error:false,
            message:'book create successfull',
            data : book
        })
    }catch(ex){
        res.json({
            error:true,
            message:ex.message
        })
    }
   
})



app.put('/books/:id',async(req,res)=>{
    try{
        let book = await Book.findByIdAndUpdate(req.params.id,req.body)
        if(!book){
           return res.json({
            error:true,
            message:'Opps! something went wrong try again',
           })
        }
        res.json({
            error:true,
            message:'record update successfully'
        })
    }catch(ex){
        res.json({
            error:true,
            message:ex.message
        })
    }
})

app.delete('/books/:id',async(req,res)=>{
    try{
        let book = await Book.findByIdAndDelete(req.params.id)
        if(!book){
           return res.json({
            error:true,
            message:'Opps! something went wrong try again',
           })
        }
        res.json({
            error:true,
            message:'record delete successfully'
        })
    }catch(ex){
        res.json({
            error:true,
            message:ex.message
        })
    }
})



// server setup 
app.listen(3000,()=>{
    console.log('server is running at 3000')
})

