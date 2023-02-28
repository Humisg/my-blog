const express = require('express')
const blogsRouter = require('./blog')
const loginRouter = require('./login')

const router = express.Router()

router.use('/api/blogs', blogsRouter)
router.use('/api/login', loginRouter)

module.exports = router