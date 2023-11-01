const express = require('express')  


const app = express()


const port =5001


const datefunc= require('./middle/date')


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/home.html')
})


app.get('/services', datefunc ,(req,res)=>{
    res.sendFile(__dirname+'/public/services.html')
})


app.get('/contact', datefunc ,(req,res)=>{
    res.sendFile(__dirname+'/public/contact.html')
})


app.listen(port,err=>{
    err?console.log(err):console.log('you did a great job')
})

app.use(express.static(__dirname + '/public'));

