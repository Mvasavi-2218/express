const express=require("express")
const app=express()
const port=4000
const emp={name:"vasavi",id:1,position:"ceo"}
const students=require("./data.js")
const cors=require("cors")
app.use(cors())
app.get("/",(req,res)=>{
	res.send("hi i am server")
})
app.get("/user",(req,res)=>{
	res.send("how are you")
})
app.get("/emp",(req,res)=>{
	res.json(emp)
})
app.get("/students",(req,res)=>{
	res.json(students)
})
app.listen(port,()=>console.log("server is start at port 4000"))