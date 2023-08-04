const Event =require('../models/event')

const Events={
    add:async(req,res)=>{
        try{
           const dup= await Event.findOne({idd:req.body.idd});
           if(dup){
               return res.status(400).json({message:"Event with this idd already exists"})
           }

           const event=Event.create(req.body);
           return res.status(200).json({message:"Event is created"})

        }
        catch(err){
            return res.status(500).json({message:"Internal server error"})
        }
    },
    getAll:async(req,res)=>{
        try{
            const events=await Event.find();
            return res.status(200).json(events)
        }
        catch(err){
            return res.status(500).json({message:"Internal server error"})
        }
    },
    inc:async(req,res)=>{
       try {
           const event=await Event.findOneAndUpdate({idd:req.params.idd},{$inc:{occupied:1}})

       }
       catch(err){
           return res.status(500).json({message:"Internal server error"})
       }
    }
}