const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const { authenticate } = require('../Middlwer/jwtAuth');

router.post('/:articleId/comments', authenticate, commentController.addComment);
router.post('/:articleId/comments/:commentId/delete', authenticate, commentController.deleteComment);

module.exports = router;

