const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const User = require('./models/user.js');
const router = require('./routes/router.js')(app, User);
//const router = require('./posts.js');

//DB connection setting
const mongoose = require('mongoose');
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {
  console.log('DB connection good.');
})
mongoose.connect("mongodb://localhost/shinp", { useNewUrlParser: true });


//Middle ware setting
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts');
app.use('/api/posts', posts);

const server = app.listen(8000, () => {
  console.log('server is running at port 8000');
});
//app.listen(port, ()=>console.log(`Server started on port ${port}`));