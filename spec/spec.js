process.env.NODE_ENV = "test";

const mongoose = require('mongoose');
const {expect} = require('chai');
const request = require('supertest');
const saveTestData = require('../seed/test.seed.js')
const app = require('../server.js');
const {Topics}= require('../models/models.js');

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

describe('GET /topics' ,() => {
    it('sends back the correct object with a status code of 200' , () => {
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
})