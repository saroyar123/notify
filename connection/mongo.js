const mongoose=require('mongoose');
var url = "mongodb://localhost:27017/animal";

mongoose.connect(url,(err)=>{

  if(!err)
  {
    console.log("mongodb is connected");
  }
  else
  {
    console.log("error ")
  }

})