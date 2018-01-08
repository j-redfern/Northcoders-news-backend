
const router = require('express').Router();

const {getAllArticles, getCommentsByArtId} = require('../controller/articles');

router.get('/', getAllArticles);
router.get('/:article_id/comments', getCommentsByArtId);

module.exports = router;