const express = require('express');
const router = express.Router({mergeParams :true});
const asyncWrap = require('../utils/asyncWrap');
const ExpressError = require('../utils/ExpressError');
const listing = require('../model/model')
const Rate = require('../model/review')
const { listingschema, reviewSchema } = require('../server-error');
const {isregister,ispermission}= require('../utils/middleware');

const mbxStyles = require('@mapbox/mapbox-sdk/services/geocoding');
const mytoken = process.env.ACCESS_TOKEN ;

const geocodingClient = mbxStyles({ accessToken: mytoken});






// server -error schema listingscheme using - joi 
const validateserver = (req, res, next) => {
    let { error } = listingschema.validate(req.body);   // in req when we pass error 
    if (error) {
        throw new ExpressError(400, error);
    } else {
        next();
    }
}



// for home page
router.get('/', asyncWrap(async (req, res) => {
    let listings = await listing.find();
    res.render('home.ejs', { listings });
}))

router.get('/all/:value',asyncWrap(async(req,res)=>{
    let {value} = req.params;
    let listings = await listing.find({category:value});
     res.render('home.ejs',{listings});
}))


// search
router.post('/search',asyncWrap(async(req,res)=>{
    let {s} = req.body;
    var string = (s[0].toUpperCase()+s.slice(1).toLowerCase());
    let listings = await listing.find({location:string}); // array
    if(!listings.length){
        req.flash("failure","No search Found");
        return res.redirect('/listing');
    }else{
        res.render('home.ejs',{listings});
    }

   
}))

// for new page
router.get('/new',isregister,asyncWrap(async (req, res) => {
    res.render('new.ejs');
}))
router.post('/',  validateserver,asyncWrap(async (req, res) => {

    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 2
      })
    .send()
  
    let data = new listing(req.body.listing);
    data.geometry = (response.body.features[0].geometry);
    data.username = req.user.username;

    let r = await data.save();
    // console.log(r)

    req.flash('success',"New Listing Created");
    res.redirect('/listing');

}));


// for show page 
router.get('/:id', asyncWrap(async (req, res) => {
    let { id } = req.params;
    let list = await listing.findById(id).populate('review');
    if (!list) {
        throw new ExpressError(404, "page not found");
    }
    res.render('show.ejs', { list });

}))



// edit

router.get('/edit/:id',isregister,ispermission,asyncWrap(async (req, res) => {
    // let {id} = req.params;
    // let list = await listing.findById(id);
    let { id } = req.params;// Assuming the ID is coming from query pa
    let list = await listing.findById(id);
    if (!list) {
        throw new ExpressError(404, "page not found");
    }
    // res.status(200).send(result);
    res.render('edit.ejs', { list })

}))

router.put('/:id', validateserver, asyncWrap(async (req, res) => {
    let { id } = req.params;
    if (!req.body.listing) {
        throw new ExpressError('SEND VALID REQUEST')
    }
    await listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash('success',"Listing is Updated ");
    res.redirect('/listing');
}))

//for delete 
router.delete('/:id', isregister,ispermission,asyncWrap(async (req, res) => {
    let { id } = req.params;
    await listing.findByIdAndDelete(id);
    req.flash('success',"Listing is Deleted ");
    res.redirect('/listing');
}))








module.exports = router;