import awsLambdaFastify from 'aws-lambda-fastify'
import * as server from './index'

const proxy = awsLambdaFastify(server)

exports.handler = proxy
