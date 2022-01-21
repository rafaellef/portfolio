import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbMarkdown from "../public/images/projetos/markdown-converter.png"
import thumbDrum from "../public/images/projetos/drum-machine.png"
import thumbFaq from "../public/images/projetos/faq-life.png"
import thumbForm from "../public/images/projetos/survey-form.png"

const Projetos = () => {
    return (
        <Container>
            <Heading as="h2" fontSize={30} mb={4} mt={10}>
                Projetos
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id="markdown" title="Markdown" thumbnail={thumbMarkdown} >
                        Conversor de Markdown
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="drum-machine" title="Drum Machine" thumbnail={thumbDrum} >
                        Bateria com teclados
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="faq-life" title="Faq Life" thumbnail={thumbFaq} >
                        Página de Perguntas e Respostas
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="survey-form" title="Survey Form" thumbnail={thumbForm} >
                        Formulário de Inscrição
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Projetos