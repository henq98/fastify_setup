const swaggerConfigs = {
  routePrefix: '/docs',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Teste',
      description: 'Documentação da API',
      version: '0.1.0'
    },
    servers: [{ url: 'http://localhost:3000', description: 'desenvolvimento' }],
    host: 'localhost',
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [{ name: 'Rotas', description: 'Rotas da API' }]
  }
}

export default swaggerConfigs
