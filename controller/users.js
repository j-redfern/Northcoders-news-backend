const { Users } = require('../models/models');

const getUserData = (req,res,next) => {
    Users.find({username : req.params.username})
    .then((users) => {
        res.send(users);
    })
    .catch( err => next(err))
}

module.exports = {getUserData};