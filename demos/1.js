const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
  ctx.body = 'hello world!'
})

app.listen(3000, () => {
  console.log('server listening on port 3000')
})
