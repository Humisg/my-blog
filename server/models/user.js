const { defineModel } = require('./index')

const User = defineModel(
    'User',
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    }
)

module.exports = User