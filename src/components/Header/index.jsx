import React from 'react'
import logo from '../../assets/logo-dio.png';
import {Button} from '../Button'
import { 
    SearchInputContainer,
    HeaderContainer,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper,
    UserPicture
} from './styles';

const Header = ({AUTENTICADO}) => {
  return (
    <Wrapper>
        <HeaderContainer>
            <Row>
                <img src={logo} alt='Logo da DIO' />
                {AUTENTICADO ? (
                    <>
                        <SearchInputContainer>
                        <Input placeholder='Buscar...'/>
                        </SearchInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                    ) : null}
            </Row>
            <Row>
            {AUTENTICADO ? (
                <UserPicture src="https://avatars.githubusercontent.com/u/108990171?v=4"/>
            ) : 
                (
                    <>
                        <MenuRight href='$'>Home</MenuRight>
                        <Button title="Entrar" />
                        <Button title="Cadastrar" />
                    </>
                )  
            } 
            </Row>
        </HeaderContainer>
    </Wrapper>
  )
}

export {Header};