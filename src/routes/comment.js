const express = require('express')
const router = express.Router()
const Comment = require('../models/comment')

router.get('/', async (req, res) => {
    try {
        const comment = await Comment.getAll(req.query)
        res.json(comment)
    } catch (error) {
        res.status(400).json({ message: 'HATA' })
    }
}),
    router.get('/:id', async (req, res) => {
        try {
            const comments = await Comment.getById(req.params.id);
            if (!comments) {
                return res.status(404).json({ message: "Kayıt bulunamamaktadır" })
            }
            res.json(comments)
        } catch (error) {
            res.status(400).json({ message: 'HATA' })
        }
    }),
    router.post('/', async (req, res) => {
        try {
            const newComment = await Comment.create(req.body)
            res.status(201).json(newComment)
        } catch (error) {
            res.status(400).json({ message: 'HATA' })
        }
    }),
    router.put('/:id', async (req, res) => {
        try {
            const updatedComments = await Comment.update(req.params.id.req.body)
            res.status(updatedComments)

        } catch (error) {
            console.log(error)
            res.status(400).json({ message: 'HATA' })
        }
    }),
    router.delete('/:id', async (req, res) => {
        try {
            await Comment.delete(req.params.id)
            res.status(202)
        } catch (error) {
            res.status(400).json({ message: 'HATA' })
        }
    })



module.exports = router