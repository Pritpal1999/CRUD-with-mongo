import express from "express";
import connectDB from "./database/connectDB.js";
import {join} from "path";
import router from "./routes/web.js";


const app=express();
const port=process.env.PORT || 3001;
const url="mongodb://0.0.0.0:27017";
//Database connection
connectDB(url);

app.use(express.urlencoded({extended:false}))
//ejs
app.set("view engine","ejs")
//static files
app.use("/student",express.static(join(process.cwd(),"public")))
app.use("/student/edit",express.static(join(process.cwd(),"public")))



//loading routes
app.use("/student",router);



app.use("/student",router)







app.listen(port,()=>{
    console.log(`server running at http://localhost${port}`)
})