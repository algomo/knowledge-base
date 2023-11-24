---
description: ""
---

Refer to the examples below on how to encode user data in different programming languages.

Feel free to contact us if you're having trouble or there is a language you would like to see added to the list.

## JavaScript/TypeScript

Using [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) package.

```js
import jwt from "jsonwebtoken";

const secret = "<YOUR_WIDGET_AUTH_SECRET>";

const user = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  customData: {
    key1: "value1",
    key2: "value2",
  },
};

const authToken = jwt.sign(user, secret, {
  algorithm: "HS256",
  expiresIn: "30s",
});
```

## Python

Using [PyJWT](https://pypi.org/project/PyJWT/) package.

```python
import jwt
import time

secret = '<YOUR_WIDGET_AUTH_SECRET>'
current_time = int(time.time())

user = {
    "id": "1",
    "name": "John Doe",
    "email": "john@example.com",
	 "customData": {
        "key1": "value1",
        "key2": "value2",
    },
    "exp": current_time + 30  # 30 seconds from now
}

auth_token = jwt.encode(user, secret, algorithm='HS256')
```

## Go

Using [jwt-go](https://pkg.go.dev/github.com/golang-jwt/jwt/v4) package.

```go
package main

import (
	"time"

	"github.com/golang-jwt/jwt/v4"
)

var secret = []byte("<YOUR_WIDGET_AUTH_SECRET>")

type UserClaims struct {
	ID    string `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
	CustomData map[string]string `json:"customData"`
	jwt.RegisteredClaims
}

func main() {
	claims := UserClaims{
		ID:    "1",
		Name:  "John Doe",
		Email: "john@example.com",
		CustomData: map[string]string{
			"key1": "value1",
			"key2": "value2",
		},
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(30 * time.Second)),
		},
	}

	unsignedToken := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	token, err := unsignedToken.SignedString(secret)
}
```
