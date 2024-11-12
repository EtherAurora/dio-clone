import React from 'react'
import { 
    Container,
    UserPicture,
    NameText,
    Progress
} from './styles';

const UserInfo = ({image, nome, percentual}) => {
  return (
    <Container>
      <UserPicture src={image} />
      <div>
        <NameText>{nome}</NameText>
        <Progress percentual={percentual}/>
      </div>
    </Container>
  )
}

export { UserInfo };