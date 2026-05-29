import { createServerFn, createServerOnlyFn } from '@tanstack/react-start'
import { deleteCookie, getCookie, setCookie } from '@tanstack/react-start/server'
import { redis } from 'bun'
import { consola } from 'consola'
import { Effect } from 'effect'
import ky from 'ky'

import { loginSchema } from '~/library'

export const loginFn = createServerFn({ method: 'POST' })
  .inputValidator(loginSchema.parse)
  .handler(({ data: { user, pass } }) =>
    Effect.tryPromise({
      try: async () => {
        const { res, cookie } = await request({ url: `${MEDIAN_URL}/login.php` })
        if (!cookie) throw '로그인 에러 1'
        const html = await res.text()
        const session = cookie.match(/PHPSESSID=[^;]+/)
        const csrf = html.match(/name="csrf_token" value="([^"]+)"/)
        if (session?.length !== 1 || csrf?.length !== 2) throw '로그인 에러 3'
        const headers = await ky
          .post(`${MEDIAN_URL}/login.php`, {
            headers: {
              Cookie: session[0]
            },
            body: new URLSearchParams({
              user,
              pass,
              csrf_token: csrf[1]
            }),
            redirect: 'manual'
          })
          .then(() => null)
          .catch(({ response }) => response.headers)
        if (!headers) throw '로그인 에러 4'
        const cookie2 = headers.get('set-cookie')
        if (!cookie2) throw '로그인 에러 5'
        const session2 = cookie2.match(/PHPSESSID=[^;]+/)
        if (session2?.length !== 1) throw '로그인 에러 6'
        setCookie('user', user)
        await redis.set(user, session2[0], 'EX', 86400)
      },
      catch: (err) => {
        consola.error(err)
        return new Error('로그인 실패')
      }
    }).pipe(Effect.runPromise)
  )

export const logoutFn = createServerFn({ method: 'POST' }).handler(async () => {
  const user = getCookie('user')
  if (user) await redis.del(user)
  deleteCookie('user')
})

export const getUserFn = createServerFn({ method: 'GET' }).handler(async () => {
  const user = getCookie('user')
  if (!user) return ''
  const session = await redis.get(user)
  return session ? user : ''
})

const request = createServerOnlyFn(
  async ({ url, headers }: { url: string; headers?: HeadersInit }) => {
    const res = await ky.get(url, { headers })
    if (!res.ok) throw 'HTTP 요청 에러'
    const cookie = res.headers.get('set-cookie')
    return { res, cookie }
  }
)

const MEDIAN_URL = 'https://median-xl.com'
