# Northcoders-news-api 
Northcoders-news-api is a Reddit style website with C.R.U.D method API endpoints with a fully tested backend API created using: Node.js (v8.3.0), Express.js(v4.14.0) and MongoDB (v3.4.7). 

The database has been deployed to [mLab](https://mlab.com/home "mLab homepage")

The API has been deployed to [Heroku](mongodb://moana:disney123@ds247327.mlab.com:47327/jredfern-northcoders-news-db "Northcoders News API").

## API Routes

```
GET /api/topics
```
Get all the topics

```
GET /api/topics/:topic_id/articles
```
Return all the articles for a certain topic

```
GET /api/articles
```
Returns all the articles

```
GET /api/articles/:article_id/comments
```
Get all the comments for a individual article

```
POST /api/articles/:article_id/comments
```
Add a new comment to an article. 

```
PUT /api/articles/:article_id
```
Increment or Decrement the votes of an article by one.

```
PUT /api/comments/:comment_id
```
Increment or Decrement the votes of a comment by one.

```
DELETE /api/comments/:comment_id
```
Deletes a comment

```
GET /api/users/:username
```
Returns a JSON object with the profile data for the specified user.

## How to run Northcoders-news-api
1. install latest version of node for your operating system [node](https://nodejs.org/en/download/)
2. npm install (installs all dependencies needed)
3. run mongod and mongo in terminal
4. node seed/seed.js (seeds the data)
5. npm start (to review responses from api using api routes listed below)

## To run unit test
1. Run npm test

## Main NPM packages used

1. mocha
2. chai
3. supertest
4. express
5. mongoose

Please view package.json file for full npm package list
