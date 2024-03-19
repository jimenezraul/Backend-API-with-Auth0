const { auth } = require('express-oauth2-jwt-bearer');

const jwtCheck = auth({
  audience: 'YOUR_API_IDENTIFIER',
  issuerBaseURL: 'YOUR_AUTH0_DOMAIN',
  tokenSigningAlg: 'YOUR_SIGNING_ALGORITHM',
});

module.exports = jwtCheck;
