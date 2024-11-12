import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { useForm } from "react-hook-form";


import { Container, Title, Column, TitleSignIn, SubtitleSignIn, LoginText, Undertext, Wrapper, LoginTextHighlights, Row } from './styles';

const SignIn = () => {

    const navigate = useNavigate()

    const Navigate = useNavigate();

    const handleClickLogin = () => {
        Navigate('/login')
    }

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = () => {
        navigate('/feed');
    };

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleSignIn>Comece agora grátis</TitleSignIn>
                <SubtitleSignIn>Crie sua conta e make the change._</SubtitleSignIn>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Nome Completo" leftIcon={<MdPerson />} name="nome"  control={control} />
                    {errors.nome && <span>Nome é obrigatório</span>}
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Criar Minha Conta" variant="secondary" type="submit"/>
                </form>
                <Undertext>
                    <p>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</p>

                    <Row><LoginText>Já tenho conta. <LoginTextHighlights onClick={handleClickLogin}> Fazer Login </LoginTextHighlights></LoginText>  </Row>
                </Undertext>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { SignIn }