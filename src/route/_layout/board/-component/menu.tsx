import { ButtonL, HStack } from '~/component'

export function Menu() {
  return (
    <HStack className='gap-1 *:cursor-pointer *:border'>
      <ButtonL to='/board/free'>자유</ButtonL>
      <ButtonL to='/board/info'>정보</ButtonL>
      <ButtonL to='/board/build'>빌드</ButtonL>
      <ButtonL to='/board/show'>명품관</ButtonL>
    </HStack>
  )
}
