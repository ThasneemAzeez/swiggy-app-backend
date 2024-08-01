const mongoose=require("mongoose")
const cors=require("cors")
const bcrypt=require( "bcrypt")
const express=require( "express")
const loginModel = require("./models/admin")
const app =express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://thasneemazeez:thasneem38@cluster0.uk9okno.mongodb.net/swiggydb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/adminsignup",(req,res)=>{
    let input=req.body
    let hashedpassword = bcrypt.hashSync(input.password,10)
   // console.log(hashedpassword)
   input.password=hashedpassword
   console.log(input)
   let result = new loginModel(input)//passing input into logicModel
   result.save()//saving result
   res.json({"status":"success"})


})

app.get("/test",(req,res)=>{
    res.json({"status":"sucess"})
})

app.listen(5050,()=>{
    console.log("server started")
})