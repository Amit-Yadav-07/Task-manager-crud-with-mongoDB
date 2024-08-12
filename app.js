
const connectDB = require('./db/connection');
const express = require('express');
const route = require('./route/route');
require('dotenv').config();
const app = express();
const notFound = require('./middleware/notFound')


app.use(express.json());
app.use(express.static('./Public'))
app.use('/api/v1/tasks', route)
app.use(notFound)

const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)

        app.listen(5000, () => {
            console.log(`Server is Listening no Port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }

}


start()


