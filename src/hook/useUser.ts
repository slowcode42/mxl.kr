import { useLoaderData } from '@tanstack/react-router'

export function useUser() {
  return useLoaderData({ from: '/_layout' })
}
