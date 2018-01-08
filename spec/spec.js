process.env.NODE_ENV = "test";

const mongoose = require('mongoose');
const {expect} = require('chai');
const request = require('supertest');
const saveTestData = require('../seed/test.seed.js')
const app = require('../server.js');
const {Topics, Articles, Users, Comments} = require('../models/models.js');

mongoose.Promise = Promise;

describe('/api', () => {
    let usefulData;
    beforeEach(() => {
        return mongoose.connection.dropDatabase()
            .then(saveTestData)
            .then((data) => {
                usefulData = data;
            }).catch((err) => next(err));
})

describe('GET /topics', () => {
    it('sends back the correct object with a status code of 200', () => {
        return request(app)
            .get('/api/topics')
            .expect(200)
            .then((res) => {
                expect(res.body.topics).to.be.an('array');
                expect(res.body.topics.length).to.equal(3);
                expect(res.body.topics[0].title).to.be.a("string");
            })
    })
})

describe('GET /topics/:topic_id/articles', () => {
    it('returns all articles from topic id', () => {
        return request(app)
            .get(`/api/topics/${usefulData.topics[0]._id}/articles`)
            .expect(200)
            .then((res) => {
                expect(res.body.articles).to.be.an('array');
                expect(res.body.articles[0].title).to.be.a("string");
                expect(res.body.articles[0].body).to.be.a("string");
            })
    })
})

describe('GET /articles', () => {
    it('returns all articles', () => {
        return request(app)
            .get(`/api/articles`)
            .expect(200)
            .then((res) => {
                expect(res.body.articles).to.be.an('array');
                expect(res.body.articles[0]._id).to.be.a("string");
                expect(res.body.articles[0].title).to.be.a("string");
            })
    })
})

describe ('GET /articles/:article_id/comments', () => {
    it('returns all the comments from the article',()=> {
        return request(app)
        .get(`/api/articles/${usefulData.articles[0]._id}/comments`)
        .expect(200)
        .then((res) => {
            expect(res.body.comments).to.be.an('array');
            expect(res.body.comments[0]._id).to.be.a("string");
            expect(res.body.comments[0].body).to.be.a("string");
        })
    })
})

describe ('POST /articles/:article_id/comments', () => {
    it('adds comment to an article',()=> {
        return request(app)
        .post(`/api/articles/${usefulData.articles[0]._id}/comments`)
        .send({ 'comment' : 'new comment added' })
        .expect(200)
        .then((res) => {
            expect(res.body.comment).to.be.an('object');
            expect(res.body.comment.body).to.be.a("string");
        })
    })
})

})