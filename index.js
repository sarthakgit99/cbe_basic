require('dotenv').config()
const express=require('express');
const app=express();
const port=4000;
app.get('/',(req,res)=>{
    res.send("Hello world backend restart")
})
app.get('/login',(req,res)=>{
    res.send("login to www.devknit.com")
})
app.get('/homw',(req,res)=>{
    res.send("<h2>Welcome home homies</h2>")
})
app.listen(process.env.PORT,()=>{
    console.log(`sample app listening on port ${port}`)
})