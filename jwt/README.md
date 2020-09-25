## JWT
#### 定义
jwt 是 json web token 的全称。
优点是服务器不保存任何会话数据，即服务器变为无状态，使其更容易扩展。轻便，开销小。

#### 原理
服务器认证以后，生成一个 JSON 对象，发挥给用户，服务器靠着这个对象认定用户身份，为了防止篡改，服务器生成对象时，会加上签名

#### 认证流程
- 浏览器发起请求登陆，携带用户名和密码；
- 服务端根据用户名和明码到数据库验证身份，根据算法，将用户标识符打包生成 token,
- 服务器返回JWT信息给浏览器，JWT不应该包含敏感信息，这是很重要的一点
- 浏览器发起请求获取用户资料，把刚刚拿到的 token一起发送给服务器，一般放在header里面，字段为authorization
- 服务器发现数据中有 token，decode token的信息，然后再次签名，验明正身；
- 服务器返回该用户的用户资料；
- 服务器可以在payload设置过期时间， 如果过期了，可以让客户端重新发起验证。

#### jwt 的数据结构
**Header 头部**
```
{ "alg": "HS256", "typ": "JWT"}
// algorithm => HMAC SHA256
// type => JWT
```

这是固定的写法，alg 要用的是 HS256 算法

**Payload 负载**
Payload 负载，规定了七个字段
```
iss (issuer)：签发人
exp (expiration time)：过期时间
sub (subject)：主题
aud (audience)：受众
nbf (Not Before)：生效时间
iat (Issued At)：签发时间
jti (JWT ID)：编号
```

**Signature 签名**
对前两部分 header 和 payload 进行签名，防止数据篡改

```
HMACSHA256(base64UrlEncode(header) + '.' + base64UrlEncode(payload), secret)
```

secret 是一段字符串，后端保存，有些场合会放到 url 中。

Base64 有三个自负 +、/、= 在 url 中有特殊含义，所以会被替换掉，= 被省略，+ 替换成 -，/ 替换成 _。

#### 使用方式
HTTP 请求头信息 Authorization 字段中， Bearer 也是规定好的
```
Authorization: Bearer <token>
```
> 不建议放入 url 中，防止 csrf 攻击

#### 使用
👉 [demo](./demo/index.js)

#### 优缺点
- JWT 默认不加密，但可以在生成原始令牌后使用改令牌再次加密
- 当 JWT 未加密时，一些隐私数据无法通过 JWT 传播
- JWT 最大的缺点时不会保存会话状态，一旦签发，有效期内将会一直有效
- JWT 本身包含认证信息，一旦信息泄漏，任何人都可以获得令牌的权限
- 为了减少盗用和窃取，JWT 不建议使用 HTTP 协议传输，建议使用 HTTPS 进行传输
