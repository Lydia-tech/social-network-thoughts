// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const moment = require('moment');

//module.exports = 

// const User = require('./User');
//const Thought = require('./Thought');

//module.exports = { User, Thought };

module.exports = {
    Thought: require('./Thought'),    
    User: require('./User'),
    ReactionModel: require('./Reaction')
}