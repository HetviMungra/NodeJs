const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const { authenticate } = require('../middleware/authMiddleware');

// Add a comment
router.post('/:articleId/comments', authenticate, commentController.addComment);

// Delete a comment
router.post('/:articleId/comments/:commentId/delete', authenticate, commentController.deleteComment);

module.exports = router;