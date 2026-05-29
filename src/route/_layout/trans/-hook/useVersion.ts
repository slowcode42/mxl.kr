import { createAtom, useAtom } from '@xstate/store-react'

import { useVersions } from '.'

const versionAtom = createAtom<string>('')
export const setVersion = (version: string) => versionAtom.set(version)

export function useVersion() {
  const version = useAtom(versionAtom)
  const versions = useVersions()
  return version || versions[0]
}
