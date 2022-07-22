const mongoose = require('mongoose')
const path = require('path');
const uri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
var cors = require('cors');
const authRoute = require('./routes/auth.js');
const publicPath = path.join(__dirname,'..','public');
const express = require('express')

const app = express()
app.use(cors());

const port = process.env.PORT ||5000;
app.use(express.json())
app.listen(port, () => {
    console.log(`Inotebook backened listening on port ${port}`)
})
mongoose.connect(uri, () => {
    console.log("Connected Succesfully")
}).catch(err=>console.log(err))

app.get('*',(req,res)=>{
    res.sendFile(path.join(publicPath,'index.html'));
})
app.use('/api/auth',authRoute);

