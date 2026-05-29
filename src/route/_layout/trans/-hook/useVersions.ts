import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

import { getVersionsFn } from '~/function'

const versionsOption = () =>
  queryOptions({
    queryKey: ['versions'],
    queryFn: getVersionsFn,
    staleTime: Infinity
  })

export function useVersions() {
  const { data } = useSuspenseQuery(versionsOption())
  return data
}
