const router = require('express').Router();
const {getUserData} = require('../controller/users');

router.get('/:username', getUserData);

module.exports = router;