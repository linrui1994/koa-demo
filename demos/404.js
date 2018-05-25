const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
  ctx.status = 404
  ctx.body = '404 Not Found'
})

app.listen(3000)
