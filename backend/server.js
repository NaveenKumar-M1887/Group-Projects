const express =require("express")
const cors =require("cors")
const app=express()
app.use(cors())
app.use(express.json())
app.get("/api/get",(req,res) =>{
    res.status(200).json({
        message:"ok success"
    })
})
app.listen(5000,()=>{
    console.log("Server is running on port 5000")
    console.log("ok success....")
})