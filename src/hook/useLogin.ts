import { useMutation } from '@tanstack/react-query'
import { useRouter } from '@tanstack/react-router'
import { useServerFn } from '@tanstack/react-start'
import { toast } from 'sonner'

import { loginFn } from '~/function'

export function useLogin() {
  const router = useRouter()
  const $loginFn = useServerFn(loginFn)
  const { mutate: login, isPending: isLoginPending } = useMutation({
    mutationFn: ({ user, pass }: { user: string; pass: string }) =>
      $loginFn({ data: { user, pass } }),
    onSuccess: async () => {
      await router.invalidate()
      toast.info('로그인 성공')
    },
    onError: () => toast.error('로그인 실패')
  })
  return { login, isLoginPending }
}
