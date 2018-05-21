const path = require('path')
const Koa = require('koa')
const static = require('koa-static')
const app = new Koa()

app.use(static(path.resolve(__dirname, '../demos')))

app.listen(3000, () => {
  console.log('server listening on port 3000')
})
