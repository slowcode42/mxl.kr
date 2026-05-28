import { QueryClient } from '@tanstack/react-query'
import { createRouter } from '@tanstack/react-router'
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query'

import { routeTree } from './routeTree.gen'

export function getRouter() {
  const qc = new QueryClient()
  const router = createRouter({
    routeTree,
    defaultPreload: 'intent',
    context: { qc },
    unmaskOnReload: true,
    scrollRestoration: true,
    defaultViewTransition: true,
    defaultErrorComponent: () => <>Error</>,
    defaultPendingComponent: () => <>Loading</>,
    defaultNotFoundComponent: () => <>NotFound</>
  })

  setupRouterSsrQueryIntegration({
    router,
    queryClient: qc
  })

  return router
}
