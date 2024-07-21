const mongoose = require('mongoose');
const listing = require('../model/model')
const Rate = require('../model/review')
const databasedata = require('./data.js');

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/listing');
}
main()
.then(async ()=>{
    console.log("connection successful");
    await listing.deleteMany({});
    await listing.insertMany(databasedata.data);
})
.then(()=>{
    console.log("data is inserted..")
})
.catch((err)=>{
    console.log("ERROR IS : "+err);
})

