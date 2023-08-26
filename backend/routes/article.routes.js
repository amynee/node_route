const express = require('express');
const articleController = require('../controllers/article.controller');

const router = express.Router();

// Create the GET endpoint
router.get('/', articleController.getArticles);

// Create the POST endpoint
router.post('/', articleController.setArticle);

module.exports = router;