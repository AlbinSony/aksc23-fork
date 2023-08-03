const Ticket = require('../models/ticket')
const razorpay = require('../reg/razorpay')
const crypto = require('crypto')
require('dotenv').config()
const secret = process.env.SECRET

const Pay = {
    verify: async (req, res) => {
        try {
            const shasum = crypto.createHmac("sha256", secret);
            shasum.update(JSON.stringify(req.body));
            const digest = shasum.digest("hex");
            if (digest !== req.headers["x-razorpay-signature"]) {
                return res.status(200).json({msg: "Transaction is not legit"})
            }
            if (!req.body.payload.payment.entity.captured) {
                await Ticket.findOneAndUpdate({
                    razorpayorderid: req.body.payload.payment.entity.order_id
                }, {
                    paymentstatus: "failed"
                });
                return res.status(200).json({msg: "Transaction failed"})
            }
            await Ticket.findOneAndUpdate({
                razorpayorderid: req.body.payload.payment.entity.order_id
            }, {
                paymentstatus: "success"
            });
            return res.status(200).json({msg: "Transaction success"})

        }catch (error){
            console.log(error)
            return res.status(200).json({message: "Innternal server Error!"})
        }

    },
}

module.exports = Pay