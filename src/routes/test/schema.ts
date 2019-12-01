import { RouteShorthandOptions } from 'fastify'

const testRouteSchema: RouteShorthandOptions = {
  schema: {
    summary: 'Endpoint test',
    tags: ['Rotas'],
    querystring: {
      type: 'object',
      required: ['num'],
      properties: {
        num: {
          type: 'integer',
          description: 'Número'
        }
      }
    },
    response: {
      200: {
        description: 'Sucesso na requisição',
        type: 'object',
        properties: {
          num: {
            type: 'integer'
          }
        }
      },
      400: {
        description: 'Falha na requisição',
        type: 'object',
        properties: {
          erro: {
            type: 'string'
          }
        }
      }
    }
  }
}

export default testRouteSchema
