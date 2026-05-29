import { useRouteContext } from '@tanstack/react-router'

export function useQc() {
  return useRouteContext({
    from: '__root__',
    select: ({ qc }) => qc
  })
}
