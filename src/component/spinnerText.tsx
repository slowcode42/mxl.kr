import { useEffect, useState, type ReactNode } from 'react'

import { Text } from '~/component'

const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']

export function SpinnerText({ children, isPending }: { children: ReactNode; isPending: boolean }) {
  const [i, setI] = useState(0)

  useEffect(() => {
    if (!isPending) return
    const id = setInterval(() => setI((v) => (v + 1) % frames.length), 80)
    return () => clearInterval(id)
  }, [isPending])

  return <Text>{isPending ? frames[i] : children}</Text>
}
