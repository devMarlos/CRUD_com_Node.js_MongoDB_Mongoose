const mongoose = require('mongoose');

async function startDB(){
    await mongoose.connect('mongodb+srv://xxxxx:xxxxx@cluster0.gsnt7xo.mongodb.net/test');
}

module.exports = startDB;