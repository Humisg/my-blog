const express = require('express')
const blogsRouter = require('./blog')
const loginRouter = require('./login')
const uploadRouter = require('./upload')

const router = express.Router()

router.use('/api/blogs', blogsRouter)
router.use('/api/login', loginRouter)
router.use('/api/upload', uploadRouter)

module.exports = router