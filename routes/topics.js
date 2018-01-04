const router = require('express').Router();
const {getAllTopics} = require('../controller/topics')

router.use('/', getAllTopics);

module.exports = router;