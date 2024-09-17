import Fastify from 'fastify'
import cors from '@fastify/cors'
import { routes } from './routes'
import { env } from 'process'


const app = Fastify({
  logger: true
})

const start = async () => {

  await app.register(cors)
  await app.register(routes)

  const PORT: number = Number(env.PORT) || 3000;
  
  try {
    await app.listen({ port: PORT })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
