const Koa = require('koa')
const compose = require('koa-compose')
const app = new Koa()

function main (ctx, next) {
  ctx.body = 'koa-compose'
  next()
}

function logger (ctx, next) {
  console.log(`${new Date()} ${ctx.url} ${ctx.method}`)
}

app.use(compose([main, logger]))

app.listen(3000, () => {
  console.log('server listening on port 3000')
})
