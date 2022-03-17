const express = require('express')
const router = express.Router()
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))
router.use(express.static('public'))

const simpsonsRoutes = require('./api/simpsonsRoutes')

router.use('/characters',simpsonsRoutes)

// HOME
router.get('/', (req, res) => {
    const URL = 'https://api.sampleapis.com/simpsons/characters'
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/home', {
                title: 'Home',
                name: 'The Simpsons',
                data
            })
        })
})

router.get('*', (req, res) => {
    if(req.url == '/favicon.ico') {
        res.end()
    } else {
        res.render('pages/404', {
            title: '404 Error = No Page Here',
            name: '404 Error'
        })
    }
})

module.exports = router;