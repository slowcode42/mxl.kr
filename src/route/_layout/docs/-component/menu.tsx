import { ButtonL, HStack } from '~/component'

export function Menu() {
  return (
    <HStack className='gap-1 *:cursor-pointer *:border'>
      <ButtonL to='/docs'>일반</ButtonL>
      <ButtonL to='/docs/item'>아이템</ButtonL>
      <ButtonL to='/docs/character'>캐릭터</ButtonL>
      <ButtonL to='/docs/quest'>퀘스트</ButtonL>
      <ButtonL to='/docs/patch'>패치</ButtonL>
    </HStack>
  )
}
