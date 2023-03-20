import mongoose from "mongoose";

const connectDB=async(URL)=>{
    try{
        const dbOptions={
            dbName:"college",
            user:"super",
            pass:"user",
            authSource:"admin"
        }
        await mongoose.connect(URL,dbOptions);
        console.log("connected successfully")
    }
    catch(err){
        console.log(err);
    }

}

export default connectDB