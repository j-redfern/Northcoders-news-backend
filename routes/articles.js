
const router = require('express').Router();

const {getAllArticles, getCommentsByArtId, addComments, editVotes, getArticleByArtId} = require('../controller/articles');

router.get('/', getAllArticles);
route.get('/:article_id', getArticleByArtId);
router.get('/:article_id/comments', getCommentsByArtId);
router.post('/:article_id/comments', addComments);
router.put('/:article_id', editVotes);

module.exports = router;