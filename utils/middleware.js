const listing = require('../model/model');
const Rate = require('../model/review');

module.exports.isregister = (req,res,next)=>{
   
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("failure","you must be loggged in.");
        return res.redirect('/login');
    }
    next();
}

module.exports.saveredirect = (req,res,next)=>{

    if(req.session.redirectUrl ){
        res.locals.redirecturl = req.session.redirectUrl ; 
    }
    next();
}


module.exports.ispermission =async(req,res,next)=>{
    let {id} = req.params;
    let list= await listing.findById(id)
    // console.log(res.locals.curruser.username);
    // console.log("-----------------------");
    // console.log(list.username);

    if(  res.locals.curruser &&( res.locals.curruser.username )!=( list.username)){
        req.flash('failure',"You are not owner of this listing . ");
        return res.redirect(`/listing/${id}`);
    }
    next();
}


module.exports.deletereview  = async(req,res,next)=>{
    let {id,reviewid} = req.params;
    let review = await Rate.findById(reviewid);

    if(res.locals.curruser &&( res.locals.curruser.username )!=( review.author)){
        req.flash('failure',"You are not author of this review . ");
        return res.redirect(`/listing/${id}`);
    }
    next();
}