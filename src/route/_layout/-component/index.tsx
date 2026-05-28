import { Outlet } from '@tanstack/react-router'

import { VStack } from '~/component/common'

import { Menu } from './menu'

export function component() {
  return (
    <VStack>
      <Menu />
      <Outlet />
    </VStack>
  )
}
