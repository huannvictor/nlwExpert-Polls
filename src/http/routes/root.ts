import { FastifyInstance } from "fastify";

export async function rootRoute(app: FastifyInstance) {
  app.get('/', async (request, reply) => {
    return reply.send({ message: "This is an API, check the documentation on: https://github.com/huannvictor/nlwExpert-Polls" })
  })
}