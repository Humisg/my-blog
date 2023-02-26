const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

// 获取所有博客文章
router.get('/', (req, res) => {
    Blog.find({}, (err, blogs) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(blogs);
        }
    });
});

// 创建新博客文章
router.post('/', (req, res) => {
    console.log('reqreqreqreq', req.body)
    const { title, content } = req.body;
    const blog = new Blog({ title, content });

    blog.save((err, newBlog) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201)
                .json({ message: 'New blog created', data: newBlog });
        }
    });
});

// 获取单篇博客文章
router.get('/:id', (req, res) => {
    const { id } = req.params;

    Blog.findById(id, (err, blog) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (!blog) {
            res.status(404).json({ error: 'Blog not found' });
        } else {
            res.json(blog);
        }
    });
});

// 更新博客文章
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    Blog.findByIdAndUpdate(
        id,
        { title, content },
        { new: true, runValidators: true },
        (err, updatedBlog) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else if (!updatedBlog) {
                res.status(404).json({ error: 'Blog not found' });
            } else {
                res.json({ message: 'Blog updated', data: updatedBlog });
            }
        }
    );
});

// 删除博客文章
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Blog.findByIdAndDelete(id, (err, deletedBlog) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (!deletedBlog) {
            res.status(404).json({ error: 'Blog not found' });
        } else {
            res.json({ message: 'Blog deleted', data: deletedBlog });
        }
    });
});

module.exports = router;