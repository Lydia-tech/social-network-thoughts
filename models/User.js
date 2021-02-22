const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const reactionSchema = require('./Reaction');
const moment = require('moment');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match a valid email address!']
    },
    thoughts: [
        { 
            type: mongoose.Types.ObjectId, 
            ref: 'Thought' 
        }
    ],
    friends: [
        { 
            type: mongoose.Types.ObjectId, 
            ref: 'User' 
        }
    ]
},
{
    toJSON: {
        virtuals: true
    }
    // id: false
});

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = mongoose.model('User', userSchema);

module.exports = User;``