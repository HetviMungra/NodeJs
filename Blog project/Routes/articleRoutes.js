const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');
const { authenticate, authorize } = require('../middleware/authMiddleware');

// Get all articles
router.get('/', articleController.getAllArticles);

// Get articles by the logged-in user
router.get('/my-articles', authenticate, articleController.getMyArticles);

// Create a new article
router.get('/new', authenticate, articleController.renderArticleForm);
router.post('/new', authenticate, articleController.createArticle);

// Edit an article
router.get('/:id/edit', authenticate, articleController.renderEditForm);
router.post('/:id/edit', authenticate, articleController.updateArticle);

// Delete an article
router.post('/:id/delete', authenticate, articleController.deleteArticle);

module.exports = router;