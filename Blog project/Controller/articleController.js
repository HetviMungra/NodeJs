const Article = require('../models/models');

exports.getAllArticles = async (req, res) => {
  const articles = await Article.find().populate('author');
  res.render('articleList', { articles });
};

exports.getMyArticles = async (req, res) => {
  const articles = await Article.find({ author: req.user.id }).populate('author');
  res.render('myArticles', { articles });
};

exports.renderArticleForm = (req, res) => {
  res.render('articleForm', { formTitle: 'Create Article', formAction: '/articles/new', buttonText: 'Create' });
};

exports.createArticle = async (req, res) => {
  const { title, content } = req.body;
  const article = new Article({ title, content, author: req.user.id });
  await article.save();
  res.redirect('/');
};

exports.renderEditForm = async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.render('articleForm', { formTitle: 'Edit Article', formAction: `/articles/${req.params.id}/edit`, buttonText: 'Update', article });
};

exports.updateArticle = async (req, res) => {
  const { title, content } = req.body;
  await Article.findByIdAndUpdate(req.params.id, { title, content });
  res.redirect('/my-articles');
};

exports.deleteArticle = async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.redirect('/my-articles');
};