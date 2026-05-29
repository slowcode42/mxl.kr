import { createServerFn } from '@tanstack/react-start'

import { db } from '~/database'
import { sleep } from '~/library'

export const getVersionsFn = createServerFn({ method: 'GET' }).handler(async () => {
  await sleep(1200)
  return db.query.versionTable.findMany({
    orderBy: { created: 'desc' }
  })
})
