const express = require('express');
const router = express.Router();
const verifyToen = require('../middlewares/auth')
const Blog = require('../models/blog');

// 获取所有博客文章
router.get('/', verifyToen, (req, res) => {
    Blog.find({}).populate('author', 'username').exec((err, blogs) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error getting blogs');
        } else {
          res.status(200).send(blogs);
        }
      });
});

// // 分页获取博客文章
// router.get('/', verifyToen, (req, res) => {
//   const { page = 1, perPage = 10 } = req.query; // 默认值为第一页，每页10篇文章
//   Blog.find({})
//     .populate('author', 'username')
//     .skip((page - 1) * perPage) // 跳过之前的文章
//     .limit(perPage) // 返回一定数量的文章
//     .exec((err, blogs) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send('Error getting blogs');
//       } else {
//         res.status(200).send(blogs);
//       }
//     });
// });

// 创建新博客文章
router.post('/', (req, res) => {
    const { title, content, username } = req.body;
    const newBlog = { title, content }
    Blog.findOneAndUpdate(
        { author: username },
        { $push: { blogs: newBlog}},
        { new: true, upsert: true },
        (err, updatedBlog) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else if (!updatedBlog) {
                res.status(404).json({ error: 'Blog not found' });
            } else {
                res.json({ message: 'Blog updated', data: updatedBlog });
            }
        }
    )
});

// 获取某个作者的所有博客文章
router.get('/author/:username', (req, res) => {
    Blog.find({ author: req.params.username }).populate('author', 'username').exec((err, blogs) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error getting blogs');
        } else {
          res.status(200).send(blogs[0]);
        }
      });
})

// // 获取单篇博客文章
// router.get('/:id', verifyToen, (req, res) => {
//     const { id } = req.params;

//     Blog.findById(id, (err, blog) => {
//         if (err) {
//             res.status(500).json({ error: err.message });
//         } else if (!blog) {
//             res.status(404).json({ error: 'Blog not found' });
//         } else {
//             res.json(blog);
//         }
//     });
// });

// // 更新博客文章
// router.put('/:id', verifyToen, (req, res) => {
//     const { id } = req.params;
//     const { title, content } = req.body;

//     Blog.findByIdAndUpdate(
//         id,
//         { title, content },
//         { new: true, runValidators: true },
//         (err, updatedBlog) => {
//             if (err) {
//                 res.status(500).json({ error: err.message });
//             } else if (!updatedBlog) {
//                 res.status(404).json({ error: 'Blog not found' });
//             } else {
//                 res.json({ message: 'Blog updated', data: updatedBlog });
//             }
//         }
//     );
// });

// // 删除博客文章
// router.delete('/:id', verifyToen, (req, res) => {
//     const { id } = req.params;

//     Blog.findByIdAndDelete(id, (err, deletedBlog) => {
//         if (err) {
//             res.status(500).json({ error: err.message });
//         } else if (!deletedBlog) {
//             res.status(404).json({ error: 'Blog not found' });
//         } else {
//             res.json({ message: 'Blog deleted', data: deletedBlog });
//         }
//     });
// });

module.exports = router;