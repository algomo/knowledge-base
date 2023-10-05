---
sidebar_position: 1
---

Visitor Authentication lets you link Algomo visitors to your own users.

- Visitor identity is known
- Prevents bad actors from impersonating your users
- Visitor conversations are preserved between devices

## How does it work

ID is the primary key.

## Set-up

Visitor Authentications requires access to server side code of your application. If you're not sure how to do this, please contact us.

In order to stop bad actors from impersonating your visitors, we require the data sent to the widget to be encrypted.

### Obtain your encryption secret

Navigate to [Settings → General → Visitor Authentication](https://app.algomo.com/settings/general?highlight=visitor-authentication) and copy your secret.

### Encrypt your user data on the server

Whenever a user is authorised in your application, encrypt their data using your secret, and include the token in the response to the client.

#### JavaScript/TypeScript

You can use [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) package to encrypt the data.

```
import jwt from 'jsonwebtoken';

const secret = '<YOUR_ALGOMO_SECRET>';

const user = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
};

const visitorToken = jwt.sign(user, secret, {
  algorithm: "HS256",
  expiresIn: "10h",
});
```

#### Forward visitor token to the Algomo widget

On client side, include the encrypted visitor token in each page you want to use the widget with visitor authentication.

```
<script>
  window.algomoSettings = {
    visitorToken: <GENERATED_VISITOR_TOKEN>
  }
</script>
```

You can place the snippet anywhere in your HTML page, but make sure it happens before the widget is initialised.
