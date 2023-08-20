const router = require('express').Router();


router.get('/', (req, res) => {

    res.send('API')
})

router.get('/signup', (req, res) => {

    res.send('Signup')
})


module.exports = router