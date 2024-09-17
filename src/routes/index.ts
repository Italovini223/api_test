import { FastifyInstance , FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";

import { TestController } from "../controllers/testController";
import { TestPostController } from "../controllers/testPostController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get('/', async function handler (request: FastifyRequest, reply: FastifyReply) {
    return new TestController().handle(request, reply)
  })

  fastify.post('/', async function handler (request: FastifyRequest, reply: FastifyReply) {
    return new TestPostController().handle(request, reply)
  })
}
