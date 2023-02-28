const { defineModel } = require('./index')

const User = defineModel(
    'User',
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    }
)

module.exports = User