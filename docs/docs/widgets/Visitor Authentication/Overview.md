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

Keep expiration time short, regenerate token on each request. Token is used only for the initial handshake.

## Set-up

Visitor Authentications requires access to server side code of your application. If you're not sure how to do this, please contact us.

In order to stop bad actors from impersonating your visitors, we require the data sent to the widget to be encrypted.

### Obtain your encryption secret

Navigate to [Settings → General → Visitor Authentication](https://app.algomo.com/settings/general?highlight=visitor-authentication) and copy your secret.

### Encrypt your user data on the server

Whenever a user is authorised in your application, encrypt their data using your secret, and include the token in the response to the client.

#### JavaScript/TypeScript

Using [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) package.

```js
import jwt from "jsonwebtoken";

const secret = "<YOUR_ALGOMO_SECRET>";

const user = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
};

const visitorToken = jwt.sign(user, secret, {
  algorithm: "HS256",
  expiresIn: "30s",
});
```

#### Python

Using [PyJWT](https://pypi.org/project/PyJWT/) package.

```python
import jwt

secret = '<YOUR_ALGOMO_SECRET>'
user = {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
}

visitor_token = jwt.encode(user, secret, algorithm='HS256', expires_in=30)
```

#### Rust

Using [jsonwebtoken](https://crates.io/crates/jsonwebtoken) crate.

```rust
extern crate jsonwebtoken as jwt;
use jwt::{encode, Header, Algorithm};
use serde::{Serialize, Deserialize};
use std::time::{SystemTime, Duration};

#[derive(Debug, Serialize, Deserialize)]
struct User {
    id: i32,
    name: String,
    email: String,
    exp: usize,
}

fn main() {
    let secret = "<YOUR_ALGOMO_SECRET>".as_bytes();

    let expiration = SystemTime::now()
        .duration_since(SystemTime::UNIX_EPOCH).unwrap()
        .as_secs() + 30; // 30 seconds from now

    let user = User {
        id: 1,
        name: "John Doe".to_string(),
        email: "john@example.com".to_string(),
        exp: expiration as usize,
    };

    let visitor_token = encode(&Header::new(Algorithm::HS256), &user, secret).unwrap();
}
```

#### Java

Using [jjwt](https://github.com/jwtk/jjwt).

```java
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;

String secret = "<YOUR_ALGOMO_SECRET>";
long expirationTime = 30000; // 30 seconds in milliseconds

String visitorToken = Jwts.builder()
    .claim("id", 1)
    .claim("name", "John Doe")
    .claim("email", "john@example.com")
    .setExpiration(new Date(System.currentTimeMillis() + expirationTime))
    .signWith(SignatureAlgorithm.HS256, secret)
    .compact();
```

#### C#

Using [System.IdentityModel.Tokens.Jwt](https://www.nuget.org/packages/System.IdentityModel.Tokens.Jwt/) package.

```csharp
using System;
using System.Collections.Generic;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;

string secret = "<YOUR_ALGOMO_SECRET>";
var securityKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(secret));
var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

var claims = new List<Claim>
{
    new Claim("id", "1"),
    new Claim("name", "John Doe"),
    new Claim("email", "john@example.com")
};

var token = new JwtSecurityToken(
    issuer: "your_domain.com",
    audience: "your_domain.com",
    claims: claims,
    expires: DateTime.Now.AddHours(10),
    signingCredentials: credentials
);

string visitorToken = new JwtSecurityTokenHandler().WriteToken(token);
```

### Ruby

Using [jwt](https://rubygems.org/gems/jwt) gem.

```ruby
require 'jwt'

secret = '<YOUR_ALGOMO_SECRET>'
user = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com'
}

expiration_time = Time.now.to_i + 30 # 30 seconds from now

visitor_token = JWT.encode(user.merge({exp: expiration_time}), secret, 'HS256')
```

#### Forward visitor token to the Algomo widget

On client side, include the encrypted visitor token in each page you want to use the widget with visitor authentication.

```html
<script>
  window.algomoSettings = {
    visitorToken: <GENERATED_VISITOR_TOKEN>
  }
</script>
```

You can place the snippet anywhere in your HTML page, but make sure it happens before the widget is initialised.
