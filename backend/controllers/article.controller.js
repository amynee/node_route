const ArticleModel = require('../models/article.model');

module.exports.getArticles = async (req, res) => {
    let filter = {};
    let limit;
    // Get filter fields if exist
    if (req.query.filter) {
    try {
        // Convert string to json
        filter = JSON.parse(req.query.filter);
    } catch (error) {
        return res.status(400).send("Invalid filter format");
    }
    }

    // Get limit attribute if exist
    if (req.query.limit) {
        limit = parseInt(req.query.limit);
    };

    // Get articles
    await ArticleModel.find(filter)
      .limit(limit)
      .then((articles) => {
        res.status(200).json({
            success: true,
            length: articles.length,
            articles
          });
       }).catch((error) => {
            res.status(500).send(error);
       });
}

module.exports.setArticle = async (req, res) => {
    // Check if all data is exist
    const {name, content, date} = {...req.body};
    if (!name || !content || !date) {
        res.status(400).json({
            error:  true,
            error_message: 'Some fields are missing. '
        });
    } else {
        try {
            // Insert article data
            const article = await ArticleModel.create({
                name: req.body.name,
                content: req.body.content,
                date: req.body.date
            });
    
            res.status(200).json(article);
        }  catch (error) {
            res.status(404).json({
                error: true,
                error_message: error.message
            });
        }
    }
};