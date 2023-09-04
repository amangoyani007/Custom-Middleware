const express = require('express');
const app = express();

const connectDB = require('./db/connect')



const port = process.env.PORT || 3001;

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`port is listening on port ${port}...`);
            if (connectDB) {
                console.log("database conected");
            }
        })
    } catch (err) {
        console.log(err);
    }
}

start();