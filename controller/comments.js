const {Comments} = require('../models/models')

const editVotes = (req,res,next) => {

    let num = 0;
    if(req.query.votes === "up") num = 1;
    if(req.query.votes === "down") num = -1;

    Comments.findByIdAndUpdate(req.params.comment_id, {$inc:{votes:num}},{new:true})
    .then((comments)=> {
        res.send({comments})
    })
    .catch(err => next(err))
}

module.exports = {editVotes};