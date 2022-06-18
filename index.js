const { json } = require('express');
const express=require('express')

const app=express();
const port=3000;
app.use(json());

app.get('/',(req,res)=>{
    console.log(req.body.name);
    res.send(`<h1>${req.body.name}</h1>`)
});

app.listen(port,()=>{
    console.log("server is connected");
})