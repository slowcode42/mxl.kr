import { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext } from '@tanstack/react-router'

import { component, shellComponent } from './-component'

import css from '~/style/index.css?url'

export const Route = createRootRouteWithContext<{
  qc: QueryClient
}>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        title: 'MXL',
        description: 'Median XL'
      }
    ],
    links: [
      {
        href: '/favicon.png',
        rel: 'icon'
      },
      {
        rel: 'stylesheet',
        href: css
      }
    ]
  }),
  component,
  shellComponent
})
