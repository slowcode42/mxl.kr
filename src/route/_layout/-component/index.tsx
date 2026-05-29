import { Outlet } from '@tanstack/react-router'

import { VStack } from '~/component'

import { Menu } from './menu'

export function component() {
  return (
    <VStack className='mx-auto w-5xl'>
      <Menu />
      <Outlet />
    </VStack>
  )
}
