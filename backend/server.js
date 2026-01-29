const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require('./db');
const Userrouter  = require("./Routes/UserRoutes")
const productRouter = require('./Routes/ProductRoutes')
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = 9000;


//Connect The Database
connectDb();

app.get("/",(req,res)=>{
    res.send("WELCOME TO SHOPY WEBSITE API");
});



//api routes
app.use("/users",Userrouter);
app.use("/product",productRouter);

app.listen(PORT,()=>{
    console.log(`Server Is Running On http://localhost:${PORT}`);
});