const express = require('express');
const router = express.Router({mergeParams :true});
const asyncWrap = require('../utils/asyncWrap');
const { listingschema, reviewSchema } = require('../server-error');
const Rate = require('../model/review')
const listing = require('../model/model')
const {isregister,deletereview} = require('../utils/middleware');


// server validation 
const validateRate = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        throw new ExpressError(400, error);
    } else {
        next();
    }
}


// for review - rating post 
router.post('/',isregister, validateRate,asyncWrap(async (req, res) => {
    let { id } = req.params;
    let post = await listing.findById(id);
    let body = new Rate(req.body.Rate);
    body.author = req.user.username;

    const r = await body.save();
    console.log(r);
    post.review.push(body);
    await post.save();    // for existing model exist and we want change 
    res.redirect(`/listing/${id}`);
}))

// for deleting review 

router.delete('/:reviewid',deletereview,isregister,asyncWrap(async(req,res)=>{
    let {id,reviewid} = req.params;
    await listing.findByIdAndUpdate(id, {$pull:{review : reviewid}});       // in review except review id all update and that reviewid deleted
    await Rate.findByIdAndDelete(reviewid);
    res.redirect(`/listing/${id}`);
}))


module.exports = router;