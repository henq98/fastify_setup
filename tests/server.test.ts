import createServer from '../src/server'

describe('Teste server', () => {
  const server = createServer()
  beforeEach(async () => {
    await server.ready()
  })
  afterAll(() => server.close())

  test('should return http status code 200', done =>
    server
      .inject({
        method: 'GET',
        url: '/test',
        query: {
          num: 6
        }
      })
      .then(res => {
        expect(res.statusCode).toBe(200)
      })
      .catch(err => done(err)))
})
