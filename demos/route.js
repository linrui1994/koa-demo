const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
  if (ctx.path === '/') {
    ctx.body = 'root'
  } else {
    ctx.body = ctx.path
  }
})

app.listen(3000, () => {
  console.log('server listening on port 3000')
})
