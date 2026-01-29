const mongoose = require('mongoose');

const connectDb = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Mongodb Connected Successfully");
    }catch(err){
       console.error("Mongodb Connection Fail",err);
       process.exit(1);
    }
};

module.exports = connectDb; 