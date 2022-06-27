const { Router } = require('express')
const router = Router()
const server = require('../server')

// Get home page
router.get('/', (req, res) => {
    // res.send('<h1> Here is home page </h1>')
    res.render('index', {
        title: 'Home page'
    })
})

router.get('/products', (req, res) => {
    res.render('products', {
        title: "Products",
        server
    })
})

module.exports = router