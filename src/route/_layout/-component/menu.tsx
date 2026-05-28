import { Box, HStack } from '~/component/common'

export function Menu() {
  return (
    <HStack className='justify-between'>
      <Box className='border'>LOGO</Box>
      <HStack className='gap-1 *:cursor-pointer *:border'>
        <Box>홈</Box>
        <Box>문서</Box>
        <Box>게시판</Box>
        <Box>패치노트</Box>
        <Box>번역기</Box>
      </HStack>
    </HStack>
  )
}
