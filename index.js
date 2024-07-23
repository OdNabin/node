const express = require("express")
const app = express()
const mongoose = require("mongoose")
const router = require("./route/userroute")
const bodyparser = require("body-parser")
const cors = require("cors")
const routers = require("./route/carearroute")
const routerss = require("./route/postcarear")
const routersss = require("./route/loginroute")
app.use(bodyparser.json())

app.use(cors())

mongoose.connect("mongodb+srv://amazon:amazon@amazon.pyoc4qb.mongodb.net/mern?retryWrites=true&w=majority")
.then((res)=>{
   console.log("mongodbconnect successfully")
})
.catch((err)=>{
    console.log(err)
})

app.use("/user",router)
app.use("/carear",routers)
app.use("/postcarear",routerss)
app.use("/login",routersss)
app.listen(8000,()=>{
    console.log("port run successfully")
})