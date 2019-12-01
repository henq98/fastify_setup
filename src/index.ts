import createServer from './server'

const PORT = Number(process.env.PORT) || 3000
const server = createServer()

server.listen(PORT, '0.0.0.0', err => {
  if (err) throw err
})
