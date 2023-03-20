
import studentModel from "../models/studentSchema.js";
class StudentController{
    static createDoc=async(req,res)=>{
        console.log("hllo")
       try{
        
        const {name,age,fees}=req.body
        console.log(req.body)
        const doc=new studentModel({
            name:name,
            age:age,
            fees:fees
        })
        const result=await doc.save()
        console.log(result)
        res.redirect("/student")
       }catch(err){
        console.log(err);
       }
    }
    static getAllDoc=async(req,res)=>{
        try{
            const result=await studentModel.find();
            console.log(result)
            res.render("index",{data:result});
        }catch(err){
            console.log(err);
        }
    }
    static editDoc=async(req,res)=>{
        try{
            const id=req.params.id;
            const result=await studentModel.findById(id);
            res.render("edit",{data:result});

        }catch(err){
            console.log(err)
        }
    }
    static updateDocById=async(req,res)=>{
        try{
            const result=await studentModel.findByIdAndUpdate(req.params.id,req.body)
            console.log(result)
        }catch(err){
            console.log(err);
        }
        res.redirect("/student")     
    }
    static deleteDocById=async(req,res)=>{
        try{
            const result=await studentModel.findByIdAndDelete(req.params.id,req.body)
            console.log(result)
        }catch(err){
            console.log(err);
        }
        res.redirect("/student")  
    }

}

export default StudentController