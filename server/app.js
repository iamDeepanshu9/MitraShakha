const { REFUSED } = require('dns')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000

//password : yi1goVOG1IdEaM9W

// app.use(customMiddleware)
const { MONGOURI } = require('./keys')


require('./models/user')


mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{ 
    console.log("connected to mongo ....")
})


mongoose.connection.on('error',(err)=>{
    console.log("error connecting",err)
})

app.listen(PORT,()=>{
    console.log("server is running on ",PORT)
})