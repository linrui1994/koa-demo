const Koa = require('koa')
const app = new Koa()

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now()
  console.log('before')
  await next()
  const ms = Date.now() - start
  console.log('-time')
  ctx.set('X-Response-Time', `${ms}ms`)
})

// logger

app.use(async (ctx, next) => {
  const start = Date.now()
  console.log('before time')
  await next()
  const ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}`)
})

// response

app.use(async ctx => {
  console.log('???')
  ctx.body = 'Hello World'
})

app.listen(3000)
