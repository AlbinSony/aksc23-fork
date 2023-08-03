var express = require("express");
var router = express.Router();
const Auth= require('../auth/auth')
const passport =require('../auth/passport-config')
const next= require('next')


/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", {
        title: "IEEE LINK - Local Integrated Network of Kerala",
    });
});

router.post("/register",Auth.register);

router.post('/login',passport.authenticate('local-login'),(req, res, next) => {
    console.log(req.user)
   return res.status(200).send(req.user)
})




module.exports = router;
