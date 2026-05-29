import { Box, ButtonL, HStack } from '~/component'

export function Menu() {
  return (
    <HStack className='sticky top-0 z-10 h-10 justify-between border border-red-200 bg-white'>
      <Box className='border'>LOGO</Box>
      <HStack className='gap-1 *:cursor-pointer *:border'>
        <ButtonL to='/'>홈</ButtonL>
        <ButtonL to='/docs'>문서</ButtonL>
        <ButtonL to='/board'>게시판</ButtonL>
        <ButtonL to='/note'>패치노트</ButtonL>
        <ButtonL to='/trans'>번역기</ButtonL>
      </HStack>
    </HStack>
  )
}
