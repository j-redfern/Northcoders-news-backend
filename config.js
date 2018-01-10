const password = process.env.MONGO_PASS;

module.exports = {
    DB: {
      test: 'mongodb://localhost/northcoders-news-api-test',
      dev: 'mongodb://moana:disney123@ds247327.mlab.com:47327/jredfern-northcoders-news-db'
    },
    PORT: {
      test: 3090,
      dev: 3000
    }
  };
  