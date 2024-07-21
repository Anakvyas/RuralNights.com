// for server validation 
const Joi = require('joi');
const listing = require('./model/model');
const Rate = require('./model/review');
const User = require('./model/User');

const listingschema = Joi.object({
    listing : Joi.object({
        title:Joi.string().required(),
        description :Joi.string().required(),
        price:Joi.number().required().min(0),
        country:Joi.string().required(),
        location:Joi.string().required(),
        image:Joi.string().allow("",null),  
        category:Joi.string(),
        username:Joi.string(),
        review:Joi.array(),
    }
    ).required(),
})

const reviewSchema  = Joi.object({
    Rate  : Joi.object({
        rating:Joi.number(),
        content:Joi.string().required(),
    }).required(),
})

module.exports = {listingschema,reviewSchema};