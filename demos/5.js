const Koa = require('koa')
const route = require('koa-route')
const app = new Koa()

app.use(route.get('/', (ctx, next) => {
  ctx.body = 'root'
  next()
}))

app.use(route.get('/about', (ctx, next) => {
  ctx.body = 'about'
  next()
}))

app.use(ctx => {
  console.log(`${new Date()} ${ctx.url} ${ctx.method}`)
})

app.listen(3000)
