import { Box, HStack, VStack } from '~/component'

export function component() {
  return (
    <VStack>
      <HStack className='*:flex-1 *:border'>
        <VStack>최근 게시물</VStack>
        <VStack>소개 및 다운로드</VStack>
      </HStack>
      <VStack className='*:border'>
        <Box>revamped skills</Box>
        <Box>new items</Box>
        <Box>endgame quests</Box>
        <Box>new areas to discover</Box>
        <Box>crafting system</Box>
        <Box>quality of life</Box>
      </VStack>
    </VStack>
  )
}
