let client = require('../dbConnection');

let collection = client.db().collection('Cat');

function postCat(cat, callback) {
    collection.insertOne(cat,callback);
}

function getAllCats(callback) {
    collection.find({}).toArray(callback);
}

function deleteCat(cat, callback) {
    collection.deleteOne(cat,callback);
}

function getHeading(theHeading) {
    document.getElementById("h1").innerHTML = theHeading;
}

module.exports = {postCat,getAllCats,deleteCat, getHeading}