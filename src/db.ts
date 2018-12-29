// Reference: https://node-postgres.com/features/connecting

import pg from 'pg'

export function test() {
  const pool = new pg.Pool()
  console.log('Testando conexão do banco!')
  console.log(pool)
}