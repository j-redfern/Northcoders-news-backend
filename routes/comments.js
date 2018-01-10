const router = require('express').Router();
const {editVotes} = require('../controller/comments');

router.put('/:comment_id', editVotes);

module.exports = router;