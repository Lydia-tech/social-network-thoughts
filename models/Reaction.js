const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const reactionSchema = require('./Reaction');
const moment = require('moment');

const reactionSchema = new Schema({
    reactionId: {
        type: mongoose.Types.ObjectId,
        default: new mongoose.Types.ObjectId
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    }
},
{
    toJSON: {
        getters: true
    }
    // id: false
});

const ReactionModel = mongoose.model('Reaction', reactionSchema);
module.exports = ReactionModel