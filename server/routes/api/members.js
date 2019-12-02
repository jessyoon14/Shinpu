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
    console.log(req.body.text);
    posts.findOne({ nickname: req.body.nickname }, async (err, user) => {
        if (err) {
            console.log(err);
            res.status(997).send();//print message here
        }
        else if (user != null) {
            console.log('nickname already exists');
            res.status(998).send();
        }
        else {
            console.log(req.body.nickname);
            await posts.insertOne({
                text: req.body.text,
                nickname: req.body.nickname,
            });
            res.status(201).send();
        }
    })

});
//Delete Post
router.delete('/deletemember/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send();
});
//add chosen member
router.post('/addchosen', async (req, res) => {
    const date = new Date();
    const prettydate = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + (date.getDay() + 1);
    const past = await loadHistoryCollection();
    await past.insertOne({
        createdAt: prettydate,
        p1: req.body.p1,
        p2: req.body.p2,
        p3: req.body.p3,
        p4: req.body.p4,
        p5: req.body.p5,
        p6: req.body.p6,
        p7: req.body.p7,
        p8: req.body.p8,
        p9: req.body.p9,
        p10: req.body.p10,
        //createdAt: new Date()
    });
    res.status(201).send();
});

//get history members
router.get('/retrievehistory', async (req, res) => {
    const historyposts = await loadHistoryCollection();
    res.send(await historyposts.find({}).toArray());
});

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect
        ('mongodb://localhost:27017/shinp'
            , {
                useNewUrlParser: true
            });

    return client.db('shinp').collection('members');
}


async function loadHistoryCollection() {
    const client = await mongodb.MongoClient.connect
        ('mongodb://localhost:27017/shinp'
            , {
                useNewUrlParser: true
            });

    return client.db('shinp').collection('history');
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