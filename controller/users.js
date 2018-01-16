const { Users } = require('../models');

const getAllUsers = (req,res,next) => {
    Users.find()
    .then((users) => {
        res.send(users);
    })
    .catch(err => next(err));
};

const getUserData = (req,res,next) => {
    Users.find({username : req.params.username})
    .then((users) => {
        res.send(users);
    })
    .catch(err => next(err));
};

module.exports = {getUserData, getAllUsers};