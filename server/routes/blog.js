const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
const verifyToen = require('../middlewares/auth')
const { Post, User } = require('../models/index.js');

router.post('/', async (req, res) => {
    try {
      const { title, content, username } = req.body;
      const author = await User.findOne({ username }).select('_id')
      if (!author) {
        return res.status(400).json({ message: '用户不存在！' });
      }
      const post = await Post.create({ title, content, author });
      res.json(post);
    } catch (err) {
      console.log(err);
      res.status(500).send('Server Error');
    }
  });
  
  // 获取所有文章列表
  router.get('/', async (req, res) => {
    try {
      const posts = await Post.find().populate('author', 'username')
      res.json(posts);
    } catch (err) {
      console.log(err);
      res.status(500).send('Server Error');
    }
  })

  // 获取某个作者的全部文章
  router.get('/author/:userid', async (req, res) => {
    try {
      const posts = await Post.find({ author: req.params.userid }).populate('author', 'username')
      res.json(posts)
    } catch (err) {
      console.log(err);
      res.status(500).send('Server Error');
    }
  })

  // 根据id获取文章
  router.get('/postDetail/:id', async (req, res) => {
    try {
      const post = await Post.findById(req.params.id).populate('author', 'username')
      // res.json(post)
      res.json({
        ...post.toObject(),
        author: post.author.username
      })
    } catch (err) {
      console.log(err);
      res.status(500).send('Server Error');
    }
  })

// router.get('/', async (req, res) => {
//     try {
//         const posts = await Post.find();
//         res.json(posts);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// })


// // // 获取所有博客
// // router.get('/', async (req, res) => {
// //     try {
// //       const blogs = await Blog.find();
// //       res.json(blogs);
// //     } catch (error) {
// //       res.status(500).json({ message: error.message });
// //     }
// //   });
  
//   // 创建新的博客
//   router.post('/', async (req, res) => {
//     const blog = new Blog({
//       author: req.body.author,
//       blogs: req.body.blogs,
//     });
  
//     try {
//       const newBlog = await blog.save();
//       res.status(201).json(newBlog);
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//     }
//   });
  
//   // 获取特定博客
//   router.get('/:id', getBlog, (req, res) => {
//     res.json(res.blog);
//   });
  
//   // 更新特定博客
//   router.patch('/:id', getBlog, async (req, res) => {
//     if (req.body.author != null) {
//       res.blog.author = req.body.author;
//     }
  
//     if (req.body.blogs != null) {
//       res.blog.blogs = req.body.blogs;
//     }
  
//     try {
//       const updatedBlog = await res.blog.save();
//       res.json(updatedBlog);
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//     }
//   });
  
//   // 删除特定博客
//   router.delete('/:id', getBlog, async (req, res) => {
//     try {
//       await res.blog.remove();
//       res.json({ message: '博客已删除' });
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });
  
//   // 定义中间件函数，用于获取特定博客
//   async function getBlog(req, res, next) {
//     let blog;
  
//     try {
//       blog = await Blog.findById(req.params.id);
  
//       if (blog == null) {
//         return res.status(404).json({ message: '未找到博客' });
//       }
//     } catch (error) {
//       return res.status(500).json({ message: error.message });
//     }
  
//     res.blog = blog;
//     next();
//   }

// // // 获取所有博客文章
// // router.get('/', (req, res) => {
// //     Blog.find({}).populate('author', 'username').exec((err, blogs) => {
// //         if (err) {
// //           console.error(err);
// //           res.status(500).send('Error getting blogs');
// //         } else {
// //           res.status(200).send(blogs);
// //         }
// //       });
// // });

// // // 分页获取博客文章
// // router.get('/', verifyToen, (req, res) => {
// //   const { page = 1, perPage = 10 } = req.query; // 默认值为第一页，每页10篇文章
// //   Blog.find({})
// //     .populate('author', 'username')
// //     .skip((page - 1) * perPage) // 跳过之前的文章
// //     .limit(perPage) // 返回一定数量的文章
// //     .exec((err, blogs) => {
// //       if (err) {
// //         console.error(err);
// //         res.status(500).send('Error getting blogs');
// //       } else {
// //         res.status(200).send(blogs);
// //       }
// //     });
// // });

// // // 创建新博客文章
// // router.post('/', (req, res) => {
// //     const { title, content, username } = req.body;
// //     const newBlog = { title, content }
// //     Blog.findOneAndUpdate(
// //         { author: username },
// //         { $push: { blogs: newBlog}},
// //         { new: true, upsert: true },
// //         (err, updatedBlog) => {
// //             if (err) {
// //                 res.status(500).json({ error: err.message });
// //             } else if (!updatedBlog) {
// //                 res.status(404).json({ error: 'Blog not found' });
// //             } else {
// //                 res.json({ message: 'Blog updated', data: updatedBlog });
// //             }
// //         }
// //     )
// // });

// // 获取某个作者的所有博客文章
// router.get('/author/:username', (req, res) => {
//     Blog.find({ author: req.params.username }).populate('author', 'username').exec((err, blogs) => {
//         if (err) {
//           console.error(err);
//           res.status(500).send('Error getting blogs');
//         } else {
//           res.status(200).send(blogs[0]);
//         }
//       });
// })

// // // 获取单篇博客文章
// // router.get('/:id', (req, res) => {
// //     const { id } = req.params;

// //     Blog.findById(id, (err, blog) => {
// //         if (err) {
// //             res.status(500).json({ error: err.message });
// //         } else if (!blog) {
// //             res.status(404).json({ error: 'Blog not found' });
// //         } else {
// //             res.json(blog);
// //         }
// //     });
// // });

// // // 更新博客文章
// // router.put('/:id', verifyToen, (req, res) => {
// //     const { id } = req.params;
// //     const { title, content } = req.body;

// //     Blog.findByIdAndUpdate(
// //         id,
// //         { title, content },
// //         { new: true, runValidators: true },
// //         (err, updatedBlog) => {
// //             if (err) {
// //                 res.status(500).json({ error: err.message });
// //             } else if (!updatedBlog) {
// //                 res.status(404).json({ error: 'Blog not found' });
// //             } else {
// //                 res.json({ message: 'Blog updated', data: updatedBlog });
// //             }
// //         }
// //     );
// // });

// // // 删除博客文章
// // router.delete('/:id', verifyToen, (req, res) => {
// //     const { id } = req.params;

// //     Blog.findByIdAndDelete(id, (err, deletedBlog) => {
// //         if (err) {
// //             res.status(500).json({ error: err.message });
// //         } else if (!deletedBlog) {
// //             res.status(404).json({ error: 'Blog not found' });
// //         } else {
// //             res.json({ message: 'Blog deleted', data: deletedBlog });
// //         }
// //     });
// // });

module.exports = router;