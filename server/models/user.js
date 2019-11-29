const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: String,
    pw: String
});

module.exports = mongoose.model('user', userSchema);