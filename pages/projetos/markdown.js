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
        <Layout title="Markdown">
            <Container>
                <Title>
                    Conversor de Markdown
                </Title>
                <P>
                    Aplicação que converte texto em markdown para exibição
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://codepen.io/rafaellf/full/ZEJgpVV" target="_blank">https://codepen.io/rafaellf/full/ZEJgpVV <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS, JS, React</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/projetos/markdown-converter.png" alt="Markdown" />
            </Container>
        </Layout>
    )
}

export default Projeto