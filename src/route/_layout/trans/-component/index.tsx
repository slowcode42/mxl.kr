import { useVersions } from '../-hook'

export function component() {
  const versions = useVersions()
  console.log(versions)
  return <div>{versions.length}</div>
}

// 원본 | 번역 | 상태
// 제안자 | 번역 | 코멘트 채택되면 색칠
// 제안자 | 번역 | 코멘트
// 제안자 | 번역 | 코멘트
// 제안자 | 번역 | 코멘트
