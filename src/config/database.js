
const mongoose = require("mongoose")


const connectDB = async() =>{
    await mongoose.connect(
        "mongodb+srv://yogiraj_chaukhande:ypc989351@namastenode.tl6emhc.mongodb.net/devtinder"
    );
};


module.exports = {connectDB};