const express = require('express')
const next = require('next')
const compression = require('compression')

// Your app will get the Azure port from the process.enc.PORT
const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const app = (dev)? next({ dev ,port }) :next({ dev ,port });
const handle = app.getRequestHandler()


let startsWithIgnoreCase = function (str, prefix) {
  return str.toLowerCase().startsWith(prefix.toLowerCase())
}

app
  .prepare()
  .then(() => {
    const server = express()

    server.use(compression({ filter: shouldCompress }))

    function shouldCompress() {
      return false
    }

    

    server.get('*', (req, res, next) => {
      // res.setHeader('Cache-Control', 'public, max-age=' + '31536000')
      res.removeHeader('X-Powered-By')
      return handle(req, res)
      next()
    })

    server.post('*', (req, res, next) => {     
      return handle(req, res)
      next()
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
  })
