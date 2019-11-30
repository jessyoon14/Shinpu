const express = require('express');
const mongodb = require('mongodb');
const bodyParser = require('body-parser')
const router = express.Router();
//const User = require('./models/user.js');
//const db = require('..../index.js');

//Get Posts
router.get('/retrieve', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});


//Add Post
router.post('/addmember', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});
//Delete Post
router.delete('/deletemember/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send();
});

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect
        ('mongodb://localhost:27017/shinp'
            , {
                useNewUrlParser: true
            });

    return client.db('shinp').collection('members');
}

module.exports = router;




// router.get('/', (req, res) => {
//     User.find({}, (err, user) => {
//         if (err) {
//         }
//         /* id가 존재하면 pw를 알려준다 */
//         else {
//             res.json(user);
//         }
//     });
// });