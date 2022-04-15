const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    favourites: {
        type: Array,
        required: false
    }
});

userSchema.index({ username: 1 });
const User = mongoose.model('user', userSchema);
//collection: users

module.exports = User;