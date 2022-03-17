const express = require('express')
const router = express.Router()
const fetch = (...args)=> import('node-fetch').then(({default: fetch}) => fetch(...args))

// All Simpsons Character
// localhost:3000/cartoons
router.get('/', (req, res)=> {
    const URL = 'https://api.sampleapis.com/simpsons/characters'

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/characters', {
                title: 'All Simpsons Character',
                name: 'Character List',
                data
            })
        })
})

// single-character
// localhost:3000/:id
router.get('/:id'), (req, res)=> {
    const id = req.params.id
    const URL =`https://api.sampleapis.com/simpsons/characters/${id}`

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/single-character', {
                title:`{data.title}`,
                name: `${data.title}`,
                data
            })
        })
}

module.exports = router