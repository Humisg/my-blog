const { defineModel } = require('./index')

const Blog  = defineModel(
    'Blog',
    {
        author: {
            type: String,
            required: true
        },
        blogs: [
            {
                title: {
                    type: String,
                    required: true
                },
                content: {
                    type: String,
                    required: true
                },
                createdAt: {
                    type: Date,
                    default: Date.now
                }
            }
        ]
    }
)

module.exports = Blog;
