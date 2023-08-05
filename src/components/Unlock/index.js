// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  LockImage,
  Text,
  ButtonContainer,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isUnlocked, setIsUnlocked] = useState(false)

  const imageUrl = isUnlocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

  const altText = isUnlocked ? 'Unlock' : 'lock'

  const displayText = isUnlocked
    ? 'Your device is unlocked'
    : 'Your device is locked'

  const buttonText = isUnlocked ? 'Lock' : 'Unlock'
  const onClickButton = () => setIsUnlocked(prevStatus => !prevStatus)

  return (
    <MainContainer>
      <LockImage src={imageUrl} alt={altText} />
      <Text>{displayText}</Text>
      <ButtonContainer>
        <Button type="button" onClick={onClickButton}>
          {buttonText}
        </Button>
      </ButtonContainer>
    </MainContainer>
  )
}
export default Unlock
