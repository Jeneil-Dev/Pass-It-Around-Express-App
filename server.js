require('dotenv').config()
const express = require('express')
// express app
const app = express()
// hard coded port num
// const PORT = 4000
// http://localhost:4000/ in browser not http://localhost:4000

//middleware - will log requests as they come in
// app.use((req,res,next)=>{
//     console.log(req..path, req.method)
//     next()
// })

let starterNum = 99
// routes
app.get('/', (req,res)=>{
 res.send(`<h1> ${starterNum} Bottles of Cashew Milk in the fridge</h1>
 <a href="${starterNum}">take one down, pass it around</a>`)
// res.json({mssg: '99 bottles of Cashew Milk in the fridge'}) // returns a json object with a string 
})
app.get('/:bottles_on_wall', (req,res)=>{
    let currentNum = req.params.bottles_on_wall
   if(currentNum>1 ){
        res.send(`<h1> ${currentNum} Bottles of Cashew Milk in the fridge</h1>
        <a href="${currentNum - 1} ">take one down, pass it around</a>`)  
    }else if(currentNum == 1){
        res.send(`<h1> ${currentNum} Bottle of Cashew Milk in the fridge</h1>
        <a href="${currentNum - 1} ">take the last one down, pass it around</a>`)
    }else{
        res.send(`<h1> Wanna play again??</h1>
        <a href="/">Restart</a>`)
    }
   
})

// listening for requests
app.listen(process.env.PORT,()=>{
    console.log('Listening on port ' + process.env.PORT + ' =-D ')
})