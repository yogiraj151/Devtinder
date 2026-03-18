const authAdmin = (req,res,next)=>{
    console.log("Working middleware");
    const token  = "xyz";
    const isauthorized = token === "xyz";

    if(isauthorized){
        next();
    }else{
        res.status(401).send("Unothorized");
    }
}

const authuser = (req,res,next)=>{
    console.log("Middleware user");
    const token  = "xyz";
    const isauthorized = token === "xyz";

    if(isauthorized){
        next();
    }else{
        res.status(401).send("Unothorized");
    }
}
module.exports = 
{
    authAdmin,
    authuser
}