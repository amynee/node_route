const ArticleModel = require('../models/article.model');

const getArticles = async (filter, limit) => {
    const result = await ArticleModel.find(filter).limit(limit);
    return result;
};
  
const createArticle = async (article) => {
    const result = await ArticleModel.create({
        name: article.name,
        content: article.content,
        date: article.date
    });

    return result;
};
  
module.exports = {
    getArticles,
    createArticle
};