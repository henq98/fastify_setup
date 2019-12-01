import { FastifyInstance } from 'fastify'
import testRoute from 'fastify-plugin'

import testRouteSchema from './schema'

export default testRoute(
  (server: FastifyInstance, options: {}, next: testRoute.nextCallback) => {
    server.get('/test', testRouteSchema, (request, reply) => {
      const { num } = request.query

      if (!num) {
        reply.code(400).send({ erro: 'Request malformated' })
      }

      reply.code(200).send({ num })
    })

    next()
  }
)
