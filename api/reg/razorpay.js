const Razorpay = require('razorpay')
const crypto =require('crypto')
require('dotenv').config()

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
})

const option1 ={
    amount:500,
    currency:"INR",
    receipt: crypto.randomBytes(10).toString("hex")
}
const option2 ={
    amount:500,
    currency:"INR",
    receipt: crypto.randomBytes(10).toString("hex")
}
const option3 ={
    amount:500,
    currency:"INR",
    receipt: crypto.randomBytes(10).toString("hex")
}
module.exports={razorpay, option1, option2, option3}