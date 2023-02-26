const express = require('express')
const blogsRouter = require('./blog')

const router = express.Router()

router.use('/api/blogs', blogsRouter)

module.exports = router