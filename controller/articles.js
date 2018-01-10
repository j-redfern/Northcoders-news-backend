const {Articles, Comments} = require('../models/models');

const getAllArticles = (req,res,next) => {
    Articles.find()
    .then((articles)=> {
        res.send({articles})
    })
    .catch(err => next(err))
}

const getArticleByArtId = (req,res,next) => {
    Articles.findById(req.params.article_id)
        .then ((articles) => {
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

const addComments = (req,res,next) => {
    let comments = new Comments ({
        body: req.body.comment,
        belongs_to: req.params.article_id,
        created_by: "j-redfern"
    })
    comments.save()
    .then ((comment)=> {
        res.send({comment})
    })
    .catch(err => next(err))
}

const editVotes = (req,res,next) => {
    let num = 0;
    if(req.query.votes === "up") num = 1
    if(req.query.votes === "down") num = -1
    
    Articles.findByIdAndUpdate(req.params.article_id, {$inc: {votes:num}},{new:true})
    .then((articles)=> {
        res.send({articles})
    })
    .catch(err => next(err))
}

module.exports = {getAllArticles, getArticleByArtId, getCommentsByArtId, addComments, editVotes}