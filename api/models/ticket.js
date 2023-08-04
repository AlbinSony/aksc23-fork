const mongoose = require('mongoose')
const Schema= mongoose.Schema
const uniqid= require('uniqid')

const ticketSchema = new Schema({
    ticketid:{
        type:String,
        default:uniqid('aksc23-')
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phno:{
        type:String,
        required:true
    },
    // memid:{
    //     type:String,
    //     required:true
    // },
    // clg:{
    //     type:String,
    //     required:true
    // },
    // paymentstatus:{
    //     type:String,
    //     required:true
    // },
    date:{
        type:Date,
        default:Date.now
    },
    // amount:{
    //     type:Number,
    //     required:true
    // },
    razorpayid:{
        type:String,
        required:true
    }


})

module.exports = mongoose.model('Ticket',ticketSchema)

