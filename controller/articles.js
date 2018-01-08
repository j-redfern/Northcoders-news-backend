const {Articles} = require('../models/models');

const getAllArticles = (req,res,next) => {
    Articles.find()
    .then((articles)=> {
        res.send({articles})
    })
    .catch(err => next(err))
}

module.exports = {getAllArticles};