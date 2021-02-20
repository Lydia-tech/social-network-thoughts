const { Schema, model } = require('mongoose');

const UserSchema = new Schema({

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
            ref: "Thought",
            type: Schema.Types.ObjectId
        }
    ],
    friends: [{
        ref: "User",
        type: Schema.Types.ObjectId
    }
        
    ]
},
{
    toJSON: {
        virtuals:true
    },
    id: false
}); 

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;