import { HeadContent, Outlet, Scripts } from '@tanstack/react-router'
import { Toaster } from 'sonner'

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
    <>
      <Outlet />
      <Toaster />
    </>
  )
}
