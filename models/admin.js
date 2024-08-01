const mongoose=require("mongoose")
const loginScheema=mongoose.Schema(
    {
        name:String,
        username:String,
        password:String

    }
)

const loginModel = mongoose.model("login data",loginScheema)
module.exports=loginModel