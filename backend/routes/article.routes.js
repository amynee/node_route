const express = require('express');

const router = express.Router();

// Create the GET endpoint
router.get('/', (req, res) => {
    res.status(200).send({message: 'get worked!!'})
});

// Create the POST endpoint
router.post('/', (req, res) => {
    res.status(200).send({message: 'post worked!!'})
});

module.exports = router;