const LocalStrategy = require('passport-local')
const bcrypt = require('bcrypt')
const passport = require('passport')
const User = require('../models/users')

passport.use('local-login', new LocalStrategy({
    usernameField: 'email', passwordField: 'password', passReqToCallback: true
}, async (req, email, password, done) => {
    try {
        const user = await User.findOne({email: email})
        if (user) {


            const match = await bcrypt.compare(password, user.password)
            if (match) {

                return done(null, user)
            } else {
                console.log("Invalid password")
                return done(null, false)
            }
        } else {
            console.log("Invalid email")
            return done(null, false)
        }
    } catch (err) {
        console.log(err)
        return res.status(401).send({message: "unauthenticated"})
    }

}));

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user)
    })
})

module.exports = passport



