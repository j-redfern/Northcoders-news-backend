const router = require('express').Router();
const {getUserData, getAllUsers} = require('../controller/users');

router.get('/', getAllUsers);
router.get('/:username', getUserData);

module.exports = router;