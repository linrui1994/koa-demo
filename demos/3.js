const fs = require('fs')
const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
  ctx.type = 'html'
  ctx.body = fs.createReadStream('./template.html')
})

app.listen(3000, () => {
  console.log('server listening on port 3000')
})
