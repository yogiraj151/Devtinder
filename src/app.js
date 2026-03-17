const express = require("express")

const app = express();

app.listen(3000,()=>{
    console.log("welcome");
})


app.get('/user',(req,res)=>{
    res.send({Username : "Yogiraj",Lastname : "Chaukhande"});
})

app.post('/user',(req,res)=>{
    res.send("Added to server");
})

app.delete('/user',(req,res)=>{
    res.send("Deleted!");
})