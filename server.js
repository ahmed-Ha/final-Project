const express = require('express');
const connectDb = require('./config/connectDb');
const app = express();
const cors = require('cors');
 const authRouter = require('./routes/auth')



require('dotenv').config()
app.use(cors());
app.use(express.json());

app.use("/",authRouter)

connectDb()




const port =  5000; 
app.listen(port, (err) =>{
    err ? console.log(err) :  

    console.log(`our server is listening on ${port}`);
   
} 

);  








