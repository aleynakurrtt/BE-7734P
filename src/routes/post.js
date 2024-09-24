const express = require('express')
const router = express.Router()
const Post = require('../models/post')


router.get('/', async (req, res) => {
    try {
        const posts = await Post.getAll(req.query)
        res.json(posts)
    } catch (error) {
        res.status(400).json({ message: 'HATA' })
    }
}),
    router.get('/:id', async (req, res) => {
        try {
            const post = await Post.getById(req.params.id);
            if (!post) {
                return res.status(404).json({ message: "Kayıt bulunamamaktadır" })
            }
            res.json(post)
        } catch (error) {
            res.status(400).json({ message: 'HATA' })
        }
    }),
    router.post('/', async (req, res) => {
        try {
            const newPost = await Post.create(req.body)
            res.status(201).json(newPost)
        } catch (error) {
            res.status(400).json({ message: 'HATA' })
        }
    }),
    router.put('/:id', async (req, res) => {
        try {
            const updatedPosts = await Post.update(req.params.id.req.body)
            res.status(updatedPosts)

        } catch (error) {
            console.log(error)
            res.status(400).json({ message: 'HATA' })
        }
    })
router.delete('/:id', async (req, res) => {
    try {
        const deletePost = await Post.delete(req.params.id)
        res.status(201).json(deletePost)
    } catch (error) {
        res.status(400).json({ message: 'HATA' })
    }
})

module.exports = router