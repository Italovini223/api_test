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
  const HOST: string = env.HOST || '0.0.0.0'

  try {
    await app.listen({ port: PORT, host: HOST })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
