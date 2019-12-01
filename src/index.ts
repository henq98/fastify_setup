import createServer from './server'

const PORT = process.env.PORT || '3000'
const server = createServer()

server.listen(PORT, err => {
  if (err) throw err
})
