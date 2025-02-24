const Comment = require('../models/models');

exports.addComment = async (req, res) => {
  const { content } = req.body;
  const comment = new Comment({ content, author: req.user.id, article: req.params.articleId });
  await comment.save();
  res.redirect(`/articles/${req.params.articleId}`);
};

exports.deleteComment = async (req, res) => {
  await Comment.findByIdAndDelete(req.params.commentId);
  res.redirect(`/articles/${req.params.articleId}`);
};