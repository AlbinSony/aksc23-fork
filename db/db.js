const mongoose = require('mongoose')
require('dotenv').config();
const mongo_uri = process.env.MONGO;

mongoose.set(`strictQuery`, false)
const connect = () => {
    // console.log(mongo_uri);
    mongoose
        .connect(`${mongo_uri}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("successfully connected to database");
        })
        .catch((err) => {
            console.log("Connection failed......");
            console.log(err);
        });

};



module.exports = connect;