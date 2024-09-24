const express = require('express')
const router = express.Router()
const Category = require('../models/category')

router.get('/', async (req, res) => {
    try {
        const categories = await Category.getAll(req.query)
        res.json(categories)
    } catch (error) {
        res.status(400).json({ message: 'HATA' })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const category = await Category.getById(req.params.id)
        if (!category) {
            return res.status(404).json({ message: "Kayıt bulunamamaktadır" })
        }
        res.json(category)
    } catch (error) {
        res.status(400).json({ message: 'HATA' })
    }
})

router.post('/', async (req, res) => {
    try {
        const newCategory = await Category.create(req.body)
        res.status(201).json(newCategory)
    } catch (error) {
        res.status(400).json({ message: 'HATA' })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const updateCategory = await Category.update(req.params.id.req.body)
        res.json(updateCategory)
    } catch (error) {
        res.status(400).json({ message: 'HATA' })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deleteCategory = await Category.delete(req.params.id)
        res.json(deleteCategory)
    } catch (error) {
        res.status(400).json({ message: 'HATA' })
    }
})

module.exports = router