const router = require('express').Router();
const {editVotes, deleteComment} = require('../controller/comments');

router.put('/:comment_id', editVotes);
router.delete('/:comment_id', deleteComment);

module.exports = router;