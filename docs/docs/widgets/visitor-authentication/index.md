---
title: Visitor Authentication
sidebar_position: 1
---

Visitor Authentication lets you link Algomo visitors to your own users.

### Benefits

- Confirms the visitor's identity, making it more difficult for unauthorized users to impersonate legitimate ones.
- Provides an additional measure to counteract malicious activities.
- Allows conversation history to be consistent and accessible across multiple devices.

## How it works

You can send us data about your users, and we'll use it to link Algomo visitors to your users. Once a visitor is authenticated, you will be able to access their data in Algomo.

### Security

The data you receive from us is signed with a secret key to ensure its authenticity and prevent bad actors from impersonating users. While the data is encoded to prevent tampering, it's important to note that this encoding is not the same as encryption. The data is not hidden, so you should not send any sensitive information.

### Upgrading Anonymous Visitors to Authenticated Users

Anonymous visitors can be seamlessly upgraded to authenticated visitors. This is useful if you want to allow visitors to start a conversation without logging in, but require them to log in before they can access their conversation history.

Once a visitor is authenticated, they will only be able to access their conversations after logging in. This is to prevent unauthorized users from accessing conversations of other users, simply by knowing their ID.

## Setup

> **Note:** Visitor Authentications requires access to server side code of your application. If you're not sure how to do this, please contact us.

To set up Visitor Authentication, you need to:

### 1. Obtain your widget secret

Navigate to [Widgets](https://app.algomo.com/widgets) in Algomo, pick a widget, and click on the "Installation" tab. You will find your widget secret under "Visitor Authentication" section.

In case your secret is compromised, you can generate a new one at any time. This will invalidate the old secret, and you will need to update your server code.

### 2. Encode your user data on the server

Whenever a user is authenticated in your application, generate a JWT token with the user data, and include the token in the response to the client. Make sure the token is signed with your widget secret using HS256 algorithm

See [Encoding user data](./Encoding%20user%20data.md) for examples on how generate the JWT in different programming languages.

Make sure to set a short expiration time for the token (we recommend 30 seconds), and generate a new token for each page load. Token is used only during widget initialisation.

### 3. Forward visitor token to the Algomo widget

On client side, include the encrypted visitor token in each page you want to use the widget with visitor authentication.

```html
<script>
  window.algomoSettings = {
    authToken: "<GENERATED_AUTH_TOKEN>",
  };
</script>
```

You can place the snippet anywhere in your HTML page, but make sure it happens before the widget is initialised.

## Supported fields

We support the following user fields:

- `id`
- `name`
- `email`
- `avatar`
- `companyId`
- `companyName`
- `customData` - This field allows you to add any additional user-specific information in a format where each piece of information is identified by a unique key.

**ID field is required.** It is used to link the visitor to your user. Different ID means a different user.

All fields must be strings. If you need to pass a number, convert it to a string first.

### Example user data

```json
{
  "id": "1",
  "name": "John Doe",
  "email": "john@example.com",
  "avatar": "https://example.com/avatar.png",
  "companyId": "1",
  "companyName": "Acme Inc.",
  "customData": {
    "key1": "value1",
    "key2": "value2"
  }
}
```
