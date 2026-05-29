import { createFileRoute } from '@tanstack/react-router'

import { getUserFn } from '~/function'

import { component } from './-component'

export const Route = createFileRoute('/_layout')({
  loader: () => getUserFn(),
  staleTime: 60_000,
  component
})
