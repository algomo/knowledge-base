---
sidebar_position: 1
---

Visitor Authentication lets you link Algomo visitors to your own users.

- Visitor identity is known
- Prevents bad actors from impersonating your users
- Visitor conversations are preserved between devices

## How it works

Data about your users is securely transmitted to the widget.

We link the visitor to your user based on the `id` field. If the visitor is not linked to a user, we create a new user.

Anonymous visitors can be promoted to authenticated visitors by providing a visitor token. Once a visitor is linked to a user, their conversations cannot be accessed without authentication.

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

## Supported fields

- id
- name
- email
- companyId
- companyName

ID is the only required field. It is used to link the visitor to your user -- different ID means a different user.

Fields can be either strings or numbers.

### Example

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "companyId": 1,
  "companyName": "Acme Inc."
}
```

### Custom fields

Custom fields are not supported yet. Please contact us if you need this feature.

## Best practices

- Use a short expiration time for the token, e.g. 30 seconds. This token is used only during widget initialisation. A new token should be generated for each page load.

## Troubleshooting

(We should probably return some meaningful errors when visitor authentication fails)
