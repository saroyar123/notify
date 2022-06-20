const express=require('express');
const connection=require("./connection/mongo");
const {createdog}=require("./routes/post")

const router=express.Router();
const app=express();
const port=3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}))
console.log(createdog);

app.post('/post',createdog)

app.listen(port,()=>{
    console.log("server is connected");
})