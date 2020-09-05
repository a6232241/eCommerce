const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const logger = require('koa-logger')
const fs = require('fs')

app.use(logger())
// logger 使用者請求反應時間
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(require('koa-static')(__dirname + '/build'))

router.get('/', async (ctx, next) => {
  let html = fs.readFileSync(__dirname + '/build/index.html', 'binary')
  ctx.body = html
})

const PORT = process.env.PORT || '3000'
app.listen(PORT)
