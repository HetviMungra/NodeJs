const Comment = require('../model/Comment');


exports.addComment = async (req, res) => {
  try {
      const { content } = req.body;
      const comment = new Comment({
          content,
          author: req.user.id,
          article: req.params.articleId
      });
      await comment.save();
      res.redirect(`/articles/${req.params.articleId}`);
  } catch (error) {
      res.status(500).json({ message: 'Error adding comment', error: error.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
      await Comment.findByIdAndDelete(req.params.commentId);
      res.redirect(`/articles/${req.params.articleId}`);
  } catch (error) {
      res.status(500).json({ message: 'Error deleting comment', error: error.message });
  }
};;