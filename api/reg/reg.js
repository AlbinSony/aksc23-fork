const Ticket =require('../models/ticket')
const {razorpay,option1,option2,option3}=require('./razorpay')

const Reg={
    register:async(req,res)=>{
        try{
            const {name,email,phno,cat}=req.body;

            const duplicate = await Ticket.findOne({
                email: email
            })
            if(duplicate){
                return res.status(210).send("Email already exists")
            }
            var order=NULL

            if(cat =="student"){
                order =await razorpay.orders.create(option1)
            }
            const ticket = Ticket.create({
                name,
                email,
                phno,
                cat,
                razorpayid:order.id
            })
            if(ticket){
                return res.status(200).send("Registeration Successfull")
            }
            else{
                return res.status(410).send("Something went wrong")
            }


        }
        catch(err){
            console.log(err)
            return res.status(410).send("Something went wrong")
        }

    }
}

module.exports=Reg