const Koa = require('koa')
const app = new Koa()

const one = async (ctx, next) => {
  console.log('>> one')
  await next()
  console.log('<< one')
}

const two = async (ctx, next) => {
  console.log('>> two')
  await next()
  console.log('<< two')
}

const three = async (ctx, next) => {
  console.log('>> three')
  await next()
  console.log('<< three')
}

app.use(one)
app.use(two)
app.use(three)

app.listen(3000)
