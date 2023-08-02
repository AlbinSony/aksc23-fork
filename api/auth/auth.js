const Auth = {
    //auth with passportjs
    auth: (req, res, next) => {
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect('/login');
    }
    signup: (req, res, next) => {
        passport.authenticate('local-signup', {
            successRedirect: '/dashboard',
            failureRedirect: '/signup',
            failureFlash: true
        })(req, res, next);
        
