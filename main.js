require("dotenv").config();


const express = require('express');
const app = express();
app.use(express.json())

const connectDB = require('./db/connect');
const router = require('./routes/route');

app.use('/api', router);

const port = process.env.PORT

const start = async () => {
    try {
        // await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {            
            console.log(`port is listening on port ${port}...`);
            // if (connectDB) {
            //     console.log("database conected");
            // }
        })
    } catch (err) {
        console.log(err);
    }
}

start();