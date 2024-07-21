const mongoose = require('mongoose');
const Rate = require('./review')
const listingmodel = new mongoose.Schema({
    title: {
        type: String,

    },

    description: {
        type: String,

    },

    image: [{
        type: String,
        set: (v) => {
            return v === "" ? "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : v;
        },
    }],
    price: {
        type: Number,
    },
    location: {
        type: String,

    },
    country: {
        type: String,

    },
    category: {
        type: String,
        enum: ['mountains', 'rivers', 'beaches', 'rooms', 'farms']
    },

    review: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Rate,
    }] ,

    
    geometry:{ 
        type:{
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true
    }
},

    username :{
    type:String,
    required:true,
}


})

listingmodel.post('findOneAndDelete', async (listing) => {
    if (listing) {
        await Rate.deleteMany({ _id: { $in: listing.review } })  // when findbyId and delete call it automatically called and delete review ids when id is in review 
    }
});
const listing = new mongoose.model("listing", listingmodel);

module.exports = listing;


