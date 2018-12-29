// Reference: https://node-postgres.com/features/connecting

import pg from 'pg'
import sqorn from '@sqorn/pg'

export function test() {
  const pool = new pg.Pool()
  const sq = sqorn({ pg, pool })
  
  const donos = sq.from`tb_dono`.query
  console.log(donos)
}