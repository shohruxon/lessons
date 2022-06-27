const express = require('express')
const router = express.Router()
const server = require('../server')

router.get('/products', (req, res) => {
    // res.send('Products');
    res.render('productAdd')
})

router.post('/productAdd', (req, res) => {
    const newProduct = {
        name: req.body.name,
        photo: req.body.photo,
        id: server.length + 1
    }

    server.push(newProduct)

    res.redirect('/products')
})






module.exports = router
