const express = require('express');
const router = express.Router();
const multer = require('multer');
const verifyToen = require('../middlewares/auth')

// const uoload = multer({ dest: 'public\\uploads\\' });
const upload = multer({
  storage: multer.diskStorage({
      destination: function (req, file, cb) {
          cb(null, './public/uploads')
      },
      filename: function (req, file, cb) {
          // fieldname是表单的name值，也就是我们设定的“logo”，
          // originalname是文件上传时的名字，可以根据它获取后缀，
          // encoding，mimetype 我就不详细介绍了，可以自行输出查看。
          console.log(file,'file!@#@(U#*')
          const { fieldname, originalname, encoding, mimetype } = file
          const timestamp = new Date().getTime().toString()
          const after = originalname.split('.')[1] ? '.' + originalname.split('.')[1] : '.jpg'
          cb(null, fieldname + timestamp + after);
      }
  })
})

router.post('/upload', upload.single('file'), (req, res, next) => {
  try {
    const host = req.hostname
    const port = req.socket.localPort
    const url = `http://${host}:${port}/public/uploads/${req.file.filename}`
    // 返回上传成功的信息
    res.json({
      error: 0,
      data: { url },
      message: '文件上传成功'
    })
    // res.send(req.file)
  } catch (err) {
    console.log(err);
    res.status(500).send({
      "error": 1, 
      "message": "上传失败"
    });
  }
})

module.exports = router