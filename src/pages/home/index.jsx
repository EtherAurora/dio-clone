
import banner from '../../assets/banner.png'
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/index';
import { Header } from '../../components/Header/index';
import {
    Container,
    TextContent,
    Title,
    TitleHighLight
} from './styles'

const Home = () => {

    const Navigate = useNavigate();
    const handleClickSign = () => {
        Navigate('/login')
    }
    return (<>
        <Header/>
        <Container>
            <div>
                <Title>  
                    <TitleHighLight>
                        Implemente 
                        <br />
                    </TitleHighLight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                Domine as tecnologias utilizadas pelas empresas mais inovadoras e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar Agora!" variant="secondary" onClick={handleClickSign} />
            </div>
            <div>
                <img src={banner} alt='Imagem Principal' />
            </div>
        </Container>
        </>
    )
}

export { Home };