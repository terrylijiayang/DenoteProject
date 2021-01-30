const next = require('next');
const { createServer } = require('http');
const { parse } = require('url')
const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 3000;
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare().then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true)
      handle(req, res, parsedUrl)
    }).listen(port, err => {
        console.log(err, port)
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })