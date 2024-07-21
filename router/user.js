const express = require('express');
const router = express.Router({mergeParams :true});
const User = require('../model/User')
const asyncWrap = require('../utils/asyncWrap');
const listing = require('../model/model')
const passport = require('passport');
const {isregister,saveredirect} = require('../utils/middleware')

router.get('/signup',asyncWrap(async(req,res)=>{
    res.render("./user/signup.ejs")
}))


router.post('/signup/:id',async(req,res)=>{
    try{
        const {username,email,password} = req.body;
        // console.log(username + email + password);
         const newUser = new User({username,email});
        const resultuser= await User.register(newUser,password);

        const r = req.login(resultuser,(err)=>{
            if(err){
                return next(err);
            };
        

        console.log(r);
        req.flash("success","Welcome to RuralNights");
        res.redirect('/listing');
    });
    }catch(err){
        req.flash("failure","User is already exists .");
        res.redirect('/signup');
    }
    }
);

// login

router.get('/login',(async(req,res)=>{
    res.render('./user/login.ejs');
}))

router.post('/login',saveredirect,passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), function(req, res) {
    req.flash("success","you are logged in . Welcome to RuralNights ");
    if(res.locals.redirecturl){
       return  res.redirect(res.locals.redirecturl);
    }
    res.redirect('/listing')
  
});


//log out
router.get('/logout',(req, res,next)=>{
    req.logout((err)=>{
        if(err){
            next(err);
        }
    });
    req.flash('success',"you are successfully logout")
    res.redirect('/listing');
  });


module.exports = router;