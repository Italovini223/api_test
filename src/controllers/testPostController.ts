import { FastifyRequest, FastifyReply } from "fastify";
import { PostServiceTest, BiAdsData } from "../services/postServiceTest";

export class TestPostController {
  async handle(request: FastifyRequest, reply: FastifyReply) {

    try {
      const data = request.body as BiAdsData[];

      if(!data) {
        reply.code(400).send({ error: 'No data in the reques' });
        return;
      }
      const postServiceTest = new PostServiceTest();
      await postServiceTest.execute(data);
      reply.code(200).send({ message: 'Data inserted successfully' });
    } catch (error) {
      console.error('Error executing postServiceTest:', error);
      reply.code(500).send({ error: 'Internal Server Error' });
    }

  }
}