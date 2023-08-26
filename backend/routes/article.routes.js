const express = require('express');
const { setArticle, getArticles } = require('../controllers/article.controller');

const router = express.Router();

// Create the GET endpoint
router.get('/', getArticles);

// Create the POST endpoint
router.post('/', setArticle);

module.exports = router;