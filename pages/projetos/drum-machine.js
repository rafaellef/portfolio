import {
    Container,
    Link,
    List,
    ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/projeto'
import P from '../../components/paragraph'

const Projeto = () => {
    return (
        <Layout title="Drum Machine">
            <Container>
                <Title>
                    Drum Machine
                </Title>
                <P>
                    Aplicação que permite tocar sons de bateria com teclado
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://codepen.io/rafaellf/full/BawBoLb" target="_blank">https://codepen.io/rafaellf/full/BawBoLb <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS, JS</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/projetos/drum-machine.png" alt="Bateria" />
            </Container>
        </Layout>
    )
}

export default Projeto