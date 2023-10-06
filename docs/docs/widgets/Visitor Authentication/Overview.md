---
sidebar_position: 1
---

Visitor Authentication lets you link Algomo visitors to your own users.

- Visitor identity is known
- Prevents bad actors from impersonating your users
- Visitor conversations are preserved between devices

## Notes

ID is the primary key.

Supported fields: id, name, email, companyId, companyNamy
Custom fields are not supported yet.

## Set-up

Visitor Authentications requires access to server side code of your application. If you're not sure how to do this, please contact us.

In order to stop bad actors from impersonating your visitors, we require the data sent to the widget to be sent as a signed JWT token.

### 1. Obtain your encryption secret

Navigate to [Settings → General → Visitor Authentication](https://app.algomo.com/settings/general?highlight=visitor-authentication) in Algomo and copy your secret.

### 2. Encrypt your user data on the server

Whenever a user is authorised in your application, encrypt their data using your secret, and include the token in the response to the client.

See [Encrypting user data](./Encrypting%user%20data) for examples in popular programming languages.

### 3. Forward visitor token to the Algomo widget

On client side, include the encrypted visitor token in each page you want to use the widget with visitor authentication.

```html
<script>
  window.algomoSettings = {
    visitorToken: <GENERATED_VISITOR_TOKEN>
  }
</script>
```

You can place the snippet anywhere in your HTML page, but make sure it happens before the widget is initialised.

### Best practices

- Use a short expiration time for the token, e.g. 30 seconds. This token is used only during widget initialisation, and should not be reused.

##
