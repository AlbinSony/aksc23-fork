const bcrypt = require('bcryptjs')
const User = require('../models/users')


const Auth = {
    register: async (req, res) => {
        try {
            const{name,email,password}=req.body;

            const existing = await User.findOne({
                email: email.toLowerCase()
            })
            if(existing){
                return res.status(210).send("User already exits");
            }
            const hashPassword = await bcrypt.hash(password, 10)

            const userdata =User.create({
                name,
                email:email.toLowerCase(),
                password:hashPassword
            })
            return res.status(200).send("User Registered");
        }
        catch (err){
            console.log(err);
            return res.status(500).send("Server Error")
        }


    },

}
module.exports=Auth;
