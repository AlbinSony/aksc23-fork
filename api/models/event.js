const mongoose = require('mongoose')
const Schema=mongoose.Schema

const Event = new Schema({
    name:{
        type:String,
        required:true
    },
    idd:{
        type:Number,
        required:true
    },
    on:{
        type:Boolean,
        default: false,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    Time:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    seats:{
        type:Number,
        required:true
    },
    occupied:{
        type:Number,
        default:0,
        required:true
    }

})

module.exports=mongoose.model('Event',Event)