import { HeadContent, Outlet, Scripts } from '@tanstack/react-router'
import { Toaster } from 'sonner'

import { Box } from '~/component'

export function shellComponent({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

export function component() {
  return (
    <Box className='root'>
      <Outlet />
      <Toaster />
    </Box>
  )
}
