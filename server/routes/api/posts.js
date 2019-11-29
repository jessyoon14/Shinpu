const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get Posts
router.get('/', (req, res) => {
    res.send('hello');
})

//Add Post


//Delete Post

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect('')
}

module.exports = router;