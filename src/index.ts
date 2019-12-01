import createServer from './server'

// const PORT = process.env.PORT || 3000
const server = createServer()

server.listen(3000, '0.0.0.0', err => {
  if (err) throw err
})
