const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
  ctx.cookies.set('test-cookie', 123)
  ctx.body = 'test cookie'
})

app.listen(3000)
