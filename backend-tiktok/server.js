import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Data from './data.js';
import Videos from './dbModel.js'

// app config
const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use(cors());


// DB config
const connection_url = `mongodb+srv://admin:3E5eC0T3EkSX9xyI@cluster0.m4508.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(connection_url, 
    async(err) => {
        if(err) throw err;
        console.log('DB connected');
    });

// API endpoints
app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

app.get('/v1/posts/', (req, res) => {
    // go in to the data file and get the data
    res.status(200).send(Data);
});

app.post('/v2/posts/', (req, res) => {
    const dbVideos = req.body

    Videos.create(dbVideos, (err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

app.get('/v2/posts/', (req, res) => {
    Videos.find({}, (err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

// Listener
app.listen(port, () => {console.log(`Server is listening on localhost: ${port}`);});