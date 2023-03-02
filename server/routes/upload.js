const express = require('express');
const router = express.Router();
const multer = require('multer');
const verifyToen = require('../middlewares/auth')

const uoload = multer({ dest: 'public\\uploads\\' });

router.post('/upload',verifyToen, uoload.single('file'), (req, res, next) => {
    // 返回上传成功的信息
    res.json({
      success: true,
      message: '文件上传成功',
      // 返回文件的访问路径
      url: `/public/uploads/${req.file.filename}`
    })
})

module.exports = router