import { Input } from '@base-ui/react/input'
import { useRef } from 'react'

import { Box, Button, HStack, VStack, SpinnerText } from '~/component'
import { useUser, useLogin, useLogout } from '~/hook'

export function component() {
  const user = useUser()
  const userRef = useRef<HTMLInputElement>(null!)
  const passRef = useRef<HTMLInputElement>(null!)
  const { logout } = useLogout()
  const { login, isLoginPending } = useLogin()
  return (
    <VStack>
      {user && (
        <VStack>
          <Box>로그인 사용자:{user}</Box>
          <Button onClick={() => logout()}>로그아웃</Button>
        </VStack>
      )}
      {!user && (
        <>
          <HStack>
            <Box>ID:</Box>
            <Input ref={userRef} className='border' />
          </HStack>
          <HStack>
            <Box>PW:</Box>
            <Input ref={passRef} className='border' />
          </HStack>
          <Button
            onClick={() =>
              login({
                user: userRef.current.value,
                pass: passRef.current.value
              })
            }
          >
            <SpinnerText isPending={isLoginPending}>로그인하기</SpinnerText>
          </Button>
        </>
      )}
    </VStack>
  )
}
