import { useMutation } from '@tanstack/react-query'
import { useRouter } from '@tanstack/react-router'
import { useServerFn } from '@tanstack/react-start'
import { toast } from 'sonner'

import { logoutFn } from '~/function'

export function useLogout() {
  const router = useRouter()
  const $logoutFn = useServerFn(logoutFn)
  const { mutate: logout } = useMutation({
    mutationFn: () => $logoutFn(),
    onSuccess: async () => {
      await router.invalidate()
      toast.info('로그아웃 성공')
    },
    onError: () => toast.error('로그아웃 실패')
  })
  return { logout }
}
