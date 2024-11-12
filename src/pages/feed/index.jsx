import { Header } from '../../components/Header/index';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import {
    Container,
    Title,
    TitleHighLight,
    Column
} from './styles'

const Feed = () => {
    return (<>
        <Header AUTENTICADO={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>

            <Column flex={1}>
                <TitleHighLight># RANKING TOP 5 DA SEMANA </TitleHighLight>
                <UserInfo image='https://avatars.githubusercontent.com/u/108990171?v=4' nome='Aurora Santos' percentual={57}></UserInfo>
                <UserInfo image='https://avatars.githubusercontent.com/u/108990171?v=4' nome='Aurora Santos' percentual={27}></UserInfo>
                <UserInfo image='https://avatars.githubusercontent.com/u/108990171?v=4' nome='Aurora Santos' percentual={12}></UserInfo>
                <UserInfo image='https://avatars.githubusercontent.com/u/108990171?v=4' nome='Aurora Santos' percentual={99}></UserInfo>
                <UserInfo image='https://avatars.githubusercontent.com/u/108990171?v=4' nome='Aurora Santos' percentual={0}></UserInfo>
            </Column>
        </Container>
        </>
    )
}

export { Feed };