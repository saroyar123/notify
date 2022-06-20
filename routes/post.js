const Post=require("../model/post");
exports.createdog=async(req,res)=>
{
    //    console.log(req.body);
        
    try {
       
        const newDog={
            name:req.body.name,
            weight:req.body.weight,
            color:req.body.color,
        }   
        console.log("route call");
        const post=await Post.create(newDog);
       
        res.status(201).json({
          success:true,
          post,
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            massage:error.massage,
        })
    }
}

