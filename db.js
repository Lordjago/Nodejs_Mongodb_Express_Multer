const mongoose = require('mongoose');

require('dotenv').config()
module.exports = () => {
    mongoose.connect(process.env.CONNECTION_STRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    )
    .then(()=> {
        console.log("Database connection successful");
    })
    .catch((err) => {
        console.log(err);
    });
}