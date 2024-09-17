import { FastifyRequest, FastifyReply } from "fastify";
import { ServiceTest } from "../services/serviceTest";

export class TestController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const serviceTest = new ServiceTest()
    const examples = await serviceTest.execute()
    return examples
  }
}

