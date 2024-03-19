# Fortifying Your Express.js Backend API with Auth0 Security

![Fortifying Your Express.js Backend API with Auth0 Security](/express-auth-min.jpg)

This is the code for the blog post [Fortifying Your Express.js Backend API with Auth0 Security](https://raulwebdev.com/fortifying-your-express-js-backend-api-with-auth0-security/). In this blog post, we show you how to secure your Express.js backend API using Auth0.

## Clone the repository

by https
```bash
git clone https://github.com/jimenezraul/Backend-API-with-Auth0.git
```
by ssh
```bash
git clone git@github.com:jimenezraul/Backend-API-with-Auth0.git
```
or download the zip file.

## Install the dependencies

```bash
cd Backend-API-with-Auth0
npm install
```

## Configuring Auth0

- Sign Up/Login to Auth0: If you haven’t already, sign up for an Auth0 account or log in to your existing one. [Auth0](https://auth0.com/)
- Create an API: Once logged in, navigate to Applications and then to APIs section in the Auth0 dashboard and click on the “Create API” button.
- Fill in API Information: Provide a name for your API, such as “My Express.js Backend API,” and set an identifier (audience). This identifier will be used by Auth0 to recognize your API. It’s typically in URL format, like https://example.com/api.
- Choose Token Settings: Under the “Signing Algorithm” section, select the appropriate algorithm based on your preferences. Auth0 supports RS256 by default, which is recommended for most use cases.
- Define Scopes (Optional): You can define scopes to restrict access to certain parts of your API. This step is optional but useful for fine-grained access control.
- Save Changes: Once you’ve filled in the necessary information, click on the “Create” button to save your API settings.

## Modify the configuration inside the auth_config.json file

```json
{
  "audience": 'YOUR_API_IDENTIFIER', // audience
  "issuerBaseURL": 'YOUR_AUTH0_DOMAIN', // issuerBase
  "tokenSigningAlg": 'YOUR_SIGNING_ALGORITHM', // tokenSigning
}
```

## Run the application

```bash
npm start
```

## Author
Raul Jimenez

## Blog Post
[Fortifying Your Express.js Backend API with Auth0 Security](https://raulwebdev.com/fortifying-your-express-js-backend-api-with-auth0-security/)