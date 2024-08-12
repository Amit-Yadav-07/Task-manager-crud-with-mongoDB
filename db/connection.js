let mongoose = require('mongoose');

const connectString =
    "";


const connectDB = (url) => {
    return mongoose.connect(url)

}


module.exports = connectDB;



