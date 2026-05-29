import { db, entryTable, sourceTable, versionTable } from '~/database'

import { TBLDecoder } from './decoder'

const version = '2.13.5'

await db
  .insert(versionTable)
  .values({ version })
  .onConflictDoNothing({ target: versionTable.version })

for (const context of ['string.tbl', 'patchstring.tbl', 'expansionstring.tbl'] as const) {
  const file = Bun.file(`./tbl/${version}/${context}`)
  const buffer = Buffer.from(await file.arrayBuffer())
  const decoder = new TBLDecoder(buffer)
  const hashes = decoder.entries.map(({ value }) =>
    value.length ? Bun.SHA256.hash(value, 'hex') : null
  )
  const data = []
  for (const { idx, key, value } of decoder.entries) {
    let sourceId = null
    const hash = hashes[idx]!
    if (value.length) {
      const [source] = await db
        .insert(sourceTable)
        .values({ value, hash })
        .onConflictDoUpdate({
          target: sourceTable.hash,
          set: { hash }
        })
        .returning()
      sourceId = source.sourceId
    }
    data.push({ version, context, idx, key, sourceId })
  }
  await db
    .insert(entryTable)
    .values(data)
    .onConflictDoNothing({ target: [entryTable.idx, entryTable.version, entryTable.context] })
}
