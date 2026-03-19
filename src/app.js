const express = require("express")
const {connectDB} = require("./config/database")
const app = express();
const User = require("./models/user")

// const {authAdmin,authuser} = require('./middleware/auth');

// app.use('/admin',authAdmin);


// app.use('/user',authuser,(req,res)=>{
//     res.send("Welcome");
// })


// app.use('/admin/getalldata',(req,res)=>{
//     res.send("All data send");
// })


// app.use('/admin/delete',(req,res)=>{
//     res.send("deleted");
// })


app.post('/signup',async(req,res)=>{
    const user = new User({
        firstname  : "Yogiraj",
        lastname  : "Chaukhande",
        emailId :  "Ypc@gmail.com",
        password  : "Ypcjjsn",
        age : "20",
        gender  :"Male"
    })

    try{
        await user.save();
        res.send("User added succesfully");
    }catch{
        res.status(400).send("Error");
    }
})



connectDB().then(
    ()=>{
        console.log("Database connection succesfull");
        app.listen(3000,()=>{
        console.log("welcome");
})
})
 .catch((err)=>{
    console.error("Connection failed");
 })




