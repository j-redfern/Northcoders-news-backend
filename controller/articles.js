const {Articles, Comments} = require('../models/models');

const getAllArticles = (req,res,next) => {
    Articles.find()
    .then((articles)=> {
        res.send({articles})
    })
    .catch(err => next(err))
}

const getCommentsByArtId = (req,res,next) => {
    Articles.findById(req.params.article_id)  
        .then((articles) => {
            return Comments.find()
            .where("belongs_to")
            .equals(articles._id)
        })
        .then((comments) => {
            res.send({comments})
        })
        .catch(err => next(err))
}

module.exports = {getAllArticles, getCommentsByArtId}