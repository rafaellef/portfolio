import NextLink from 'next/link';
import { Box, Button, Container, Heading, Image, Link, List, ListItem, SimpleGrid, Icon, useColorModeValue } from "@chakra-ui/react";
import Section from '../components/section';
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from '@chakra-ui/icons';
import Layout from '../components/layouts/article';
import { BioSection, BioYear } from '../components/bio';
import { GridItem } from '../components/grid-item';
import { IoLogoLinkedin, IoLogoGithub, IoLogoWhatsapp } from 'react-icons/io5'
import { IoMail } from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
            <Container>
                {/* <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Bem vindo!
            </Box> */}

                <Box display={{ md: 'flex' }} mt={10}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Rafael Fernandes
                        </Heading>
                        <p>Desenvolvedor Front-End</p>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                        <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="150px" display="inline-block" borderRadius="full" src="/images/rafael.png" alt="foto do perfil" />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Resumo
                    </Heading>
                    <Paragraph>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, vero. Harum autem in corrupti voluptate ullam numquam fuga itaque, recusandae qui quis earum. Expedita nihil voluptatibus iure totam quidem quia ab cum, dolores voluptatem, perspiciatis fugit officiis doloribus laborum tenetur.
                        {/* <NextLink href='/projetos/link-aqui'><Link>Texto</Link></NextLink> */}
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/projetos">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" >Portfolio</Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1992</BioYear>
                        Nascido em Santo Augusto-RS
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Atuando como Freelancer em trabalhos de marketing digital e desenvolvimento de sites
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Entrou na faculdade de Sistemas para Internet - IFsul
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Contato
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href='https://github.com/rafaellef' target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                                    @rafaellef
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='https://www.linkedin.com/in/rafaellfernandes/' target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />}>
                                    Rafael Fernandes
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='https://wa.me/5553981521648' target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoWhatsapp} />}>
                                    + (55) 54 98152-1648
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='mailto:rafaellemosfernandes@gmail.com' target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoMail} />}>
                                    rafaellemosfernandes@gmail.com
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
} 

export default Page