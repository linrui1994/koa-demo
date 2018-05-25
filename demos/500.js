const Koa = require('Koa')
const app = new Koa()

app.use(ctx => {
  ctx.throw(500)
})

app.listen(3000)
