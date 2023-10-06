Refer to the examples below on how to encrypt user data in different programming languages.

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
    "exp": current_time + 30  # 30 seconds from now
}

auth_token = jwt.encode(user, secret, algorithm='HS256')
```
