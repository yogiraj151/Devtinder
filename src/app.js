const express = require("express")

const app = express();


const {authAdmin,authuser} = require('./middleware/auth');

app.use('/admin',authAdmin);


app.use('/user',authuser,(req,res)=>{
    res.send("Welcome");
})


app.use('/admin/getalldata',(req,res)=>{
    res.send("All data send");
})
app.use('/admin/delete',(req,res)=>{
    res.send("deleted");
})











app.listen(3000,()=>{
    console.log("welcome");
})

