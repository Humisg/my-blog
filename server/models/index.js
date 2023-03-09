const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    imgurl: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User', userSchema)
const Post = mongoose.model('Post', postSchema)

module.exports = { User, Post }
// const mongoose = require('mongoose')

// const defineModel = (modelName, schemaDefinition) => {
//      const schema = new mongoose.Schema(schemaDefinition)
//     return mongoose.model(modelName,schema)
// }

// module.exports = { defineModel }
