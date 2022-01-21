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
        <Layout title="Survey Form">
            <Container>
                <Title>
                    Formulário
                </Title>
                <P>
                    Simples formulário para inscrição
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://codepen.io/rafaellf/full/rNzZxGQ" target="_blank">https://codepen.io/rafaellf/full/rNzZxGQ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS, JS</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/projetos/survey-form.png" alt="Formulário" />
            </Container>
        </Layout>
    )
}

export default Projeto