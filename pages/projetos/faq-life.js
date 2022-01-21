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
        <Layout title="Faq Life">
            <Container>
                <Title>
                    Página de Informações
                </Title>
                <P>
                    Simples página de Informações
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://codepen.io/rafaellf/full/VwzELVW" target="_blank">https://codepen.io/rafaellf/full/VwzELVW <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS, JS</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/projetos/faq-life.png" alt="Pagina de Informações" />
            </Container>
        </Layout>
    )
}

export default Projeto