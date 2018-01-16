const { Topics, Articles } = require('../models');

const getAllTopics = (req, res, next) => {
    Topics.find()
        .then((topics) => {
            res.send({ topics });
        })
        .catch(err => {
            next(err);
        });
};
const getArticlesByTopicId = (req, res, next) => {
    Topics.findById(req.params.topic_id)
        .then((topic) => {
            return Articles.find()
                .where("belongs_to")
                .equals(topic.slug);
        })
        .then ((articles) => {
            res.send({articles});
        })
        .catch(err => {
            next(err);
        });
}; 

module.exports = { getAllTopics, getArticlesByTopicId };