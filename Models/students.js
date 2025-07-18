const mongoose=require('mongoose');


//create student schema
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:Number,//his shorthand only works if you’re not using required, default, unique, etc.
    isActive:{
        type:Boolean,
        required:true
    },
    gender:{
        type:String,
        enum:['male','female'],
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    educationLevel: {
        type: String,
        enum: ['highschool', 'bachelor', 'master', 'phd'],
        required: true
    }
    
})


//create student model 
const studentModel=mongoose.model('student',studentSchema);
module.exports=studentModel;


