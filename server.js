const express = require('express');
const app = express();
const auth = require('./auth');
const cors = require('cors');

const port = process.env.PORT || 8080;

app.use(cors());

// Public endpoint
app.get('/', function (req, res) {
  res.send('Public Resource');
});

// Use the auth middleware to protect the /protected endpoint
app.get('/protected', auth, function (req, res) {
  res.send('Secured Resource');
});

// Error-handling middleware for unauthorized requests
app.use(function (err, req, res, next) {
  switch (err.name) {
    case 'UnauthorizedError':
      res.status(401).send('Unauthorized');
      break;
    case 'InvalidTokenError':
      res.status(401).send('Invalid Token');
      break;
    default:
      next(err);
  }
});

app.listen(port);

console.log('Running on port ', port);
