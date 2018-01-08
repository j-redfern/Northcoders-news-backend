
const router = require('express').Router();

const {getAllArticles, getCommentsByArtId, addComments} = require('../controller/articles');

router.get('/', getAllArticles);
router.get('/:article_id/comments', getCommentsByArtId);
router.post('/:article_id/comments', addComments);

module.exports = router;