require('dotenv').config()


const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
var methodOverride = require('method-override')
const ExpressError = require('./utils/ExpressError');
const listing = require('./router/listing');
const review  = require('./router/review')
const userautho  = require('./router/user')
const session = require('express-session');
const flash  = require('connect-flash');
const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require('./model/User')
engine = require('ejs-mate'),

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(methodOverride('_method'))
app.engine('ejs', engine);

const sessionOptions = {
    secret:'mySecretCOde',
    resave:false,
    saveUninitialized :true,
    cookie:{
        expires: Date.now() + 7*24*60*60*1000,
        maxAge: 7*24*60*60*1000,
        http:true,
    },
}
// flash 
app.use(session(sessionOptions));  // cookies 
app.use(flash());

//passport middlware 
app.use(passport.initialize());
app.use(passport.session());
// passport-local-mongoose



//mongoose - local
// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




app.use((req,res,next)=>{
    res.locals.success = req.flash('success');
    res.locals.failure = req.flash('failure');
    res.locals.curruser = req.user;
    next();
})


app.use('/listing',listing);
app.use('/listing/:id/review',review);
app.use('/',userautho);






async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/listing');
}
main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => {
        console.log("ERROR IS : " + err);
    })








app.all('*', (req, res, next) => {
    throw new ExpressError(404, "PAGE NOT FOUND")
})

// for handle err
app.use((err, req, res, next) => {
    let { statusCode, message } = err;
    res.render('error.ejs', { message });
});

app.listen(3000, (req, res) => {
    console.log("app is listening on 3000 port");
})


