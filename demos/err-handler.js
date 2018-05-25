const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  try {
    await next()
  } catch(err) {
    ctx.body = err.message || 'Internal Server Error'
    ctx.status = err.statusCode || err.status || 500
  }
})

app.use(ctx => {
  ctx.throw(500)
})

app.listen(3000)
