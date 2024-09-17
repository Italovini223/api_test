import { FastifyInstance , FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { TestController } from "../controllers/testController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get('/', async function handler (request: FastifyRequest, reply: FastifyReply) {
    return new TestController().handle(request, reply)
  })
}
