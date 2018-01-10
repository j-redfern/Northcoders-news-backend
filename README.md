# Northcoders-news-api 
Building a northcoders-news-api to talk to the database for front end to use.

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
1. npm install (installs all dependencies needed)
2. run mongodb and mongo in terminal
3. node seed/seed.js (seeds the data)

## To run unit test
1. Run npm test

## Main NPM packages used

1. mocha
2. chai
3. supertest
4. express
5. mongoose

Please view package.json file for full npm package list
