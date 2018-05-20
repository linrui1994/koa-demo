const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
  if (ctx.accepts('xml')) {
    ctx.type = 'xml'
    ctx.body = '<data>xml</data>'
  } else if (ctx.accepts('json')) {
    ctx.type = 'json'
    ctx.body = { data: 'json' }
  } else if (ctx.accepts('html')) {
    ctx.type = 'html'
    ctx.body = '<p>html</p>'
  } else {
    ctx.type = 'text'
    ctx.body = 'text'
  }
})

app.listen(3000, () => {
  console.log('server listening on port 3000')
})
