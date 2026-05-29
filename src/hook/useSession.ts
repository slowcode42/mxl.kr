import { useLoaderData } from '@tanstack/react-router'

export function useSession() {
  return useLoaderData({ from: '/_layout' })
}
