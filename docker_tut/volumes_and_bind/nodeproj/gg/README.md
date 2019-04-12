# express-auth-generator

## A starter project template that includes the following
<br />

- [X] Basic login/signup
- [X] Google Oauth
- [X] Facebook Oauth
- [X] Connection to mongoDB
- [X] Json-web-tokens
- [X] express-session


<br />


## Installing CLI  
___

### For Linux and Mac

<br />

```
 $ curl -L https://fileserve.herokuapp.com/download/express_auth_generator | bash
 $ authgen google_auth
```

<br />
<br />


## What then ?
___



1. Select the name of the project, then
<br />

```
 $ cd projectname
 $ npm install
```

<br />

2. Insert the API credentials for Oauth and URL for mongoDB connection in secret.js
<br />
<br />

```javascript
 module.exports = {
     mongoURL:"your mongoDB url",
     salt:10,
     secretKey:"your session secret",
     gclientID:'your google client ID',
     gclientSecret:'your google client secret',
     gcallbackURL:'your google callback URL',
 };

```

<br />
<br />

3. You are good to go
<br />

```
 $ nodemon app
```

<br />

![Alt text](https://blog.christopherianmurphy.com/assets/images/posts/publishing-npm-packages/publishing-npm-packages.png)
