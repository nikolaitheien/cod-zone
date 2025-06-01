import fastifyCors from '@fastify/cors'
import { Database } from 'bun:sqlite'
import fastify from 'fastify'

export const db = new Database('data/db.sqlite3')
const server = fastify()

server.register(fastifyCors, {
  origin: 'http://localhost:5173',
})

server.get('/items', (req, rep) => {
  const row = db.query(`SELECT * FROM items`).all()
  return row
})

server.get('/speedups', (req, rep) => {
  const row = db.query(`SELECT * FROM speedup_sources`).all()
  return row
})

server.get('/bundles', (req, rep) => {
  const row = db.query(`SELECT * FROM bundles`).all()
  return row
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
