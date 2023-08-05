var express = require("express");
var router = express.Router();
const Auth= require('../auth/auth')
const passport =require('../auth/passport-config')
const next= require('next')


/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", {
        title: "AKSC'23 - All Kerala Students Congress 2023",
    });
});

router.get("/signup",function(req, res){
    res.render('pages/signup',{
        title: "Signup",
    })
})
router.get("/login",function(req, res){
    res.render('pages/login',{
        title: "Login",
    })
})














// BACKEND API ROUTES

router.post("/register",Auth.register);

router.post('/login',passport.authenticate('local-login'),(req, res, next) => {
    console.log(req.user)
   return res.status(200).send(req.user)
})




module.exports = router;
