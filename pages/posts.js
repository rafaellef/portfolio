import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbFeliz from "../public/images/conteudo/feliz.jpeg"
import thumbNostalgia from "../public/images/conteudo/nostalgia.jpeg"
import thumbTrabalho from "../public/images/conteudo/trabalho.jpeg"

const Link = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h3" fontSize={30} mb={4} mt={10}>
                Posts
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1,2,2]} gap={6} >
                    <GridItem title="Por que tanta Nostalgia?" thumbnail={thumbNostalgia} href="https://rafaelemos.medium.com/por-que-estamos-t%C3%A3o-nost%C3%A1lgicos-c044181695e9" target="_blank"></GridItem>
                    <GridItem title="Pare de tentar ser Feliz" thumbnail={thumbFeliz} href="https://rafaelemos.medium.com/pare-de-tentar-ser-feliz-e98d57a07e0b" target="_blank"></GridItem>
                    <GridItem title="Não faça o que você ama" thumbnail={thumbTrabalho} href="https://rafaelemos.medium.com/n%C3%A3o-fa%C3%A7a-o-que-voc%C3%AA-ama-existe-uma-alternativa-melhor-47f812cbae97" target="_blank"></GridItem>
                </SimpleGrid>
                
            </Section>
        </Container>
    </Layout>
)

export default Link