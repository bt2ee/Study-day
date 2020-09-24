let Koa = require('koa')
let Router = require('koa-router')
let borderparser = require('koa-bodyparser')
let jwt = require('jwt-simple')
let router = new Router()
let app = new Koa()

app.use(borderparser())
let sercet = 'xiaochen'

router.post('/login', async(ctx) => {
  let { username, password } = ctx.request.body
  if (username === 'username' && password === 'admin') {
    let token = jwt.encode(username, sercet)
    ctx.body = {
      code: 200,
      username,
      token
    }
  }
})

router.get('/validate', async(ctx) => {
  let Authorization = ctx.get('authorization')
  let [, token] = Authorization.split(' ')
  if (token) {
    try {
      let username = jwt.decode(token, sercet)
      ctx.body = {
        code: 200,
        username,
        token
      }
    } catch (e) {
      ctx.body = {
        code: 401,
        msg: '无权限'
      }
    }
  } else {
    ctx.body = {
      code: 401,
      msg: '无权限'
    }
  }
})

app.use(router.routes())
app.listen(4000, '127.0.0.1')