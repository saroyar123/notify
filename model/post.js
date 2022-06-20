const mongoose=require('mongoose');


const animal=new mongoose.Schema({
  name:String,
  weight:String,
  color:String,
});
console.log("post call");
const dog=mongoose.model('dog',animal);
module.exports=dog;

