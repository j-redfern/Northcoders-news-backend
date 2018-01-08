const router = require('express').Router();
const {getAllArticles} = require('../controller/articles')

router.use('/',getAllArticles)

module.exports = router;