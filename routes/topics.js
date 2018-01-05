const router = require('express').Router();
const {getAllTopics, getArticlesByTopicId} = require('../controller/topics');

router.get ('/', getAllTopics);
router.get('/:topic_id/articles', getArticlesByTopicId);

module.exports = router;