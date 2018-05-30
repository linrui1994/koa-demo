const Koa = require('koa')
const body = require('koa-body')
const app = new Koa()

app.use(body())

app.use(ctx => {
  const { body } = ctx.request
  console.log(body)
  ctx.body = {
    data: body
  }
  ctx.type = 'json'
})

app.listen(3000)
