const mongoose =require('mongoose')

const Schema =mongoose.Schema;
const userSchema =new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    // college:{
    //     type:String,
    //     required:true,
    // },
    // Phone:{
    //     type:String,
    //     required:true,
    // },
    // memid:{
    //     type:String,
    // },
    password:{
        type:String,
        required:true,
    },
    // events:{
    //     type:[String],
    // },
    // blocks:{
    //     type:Number,
    //     required:true
    // },
    // ticket:{
    //     type:String,
    //     required:true
    // }


});
module.exports=mongoose.model('User',userSchema);