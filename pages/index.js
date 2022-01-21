import { Box, Container, Heading, Image, useColorModeValue } from "@chakra-ui/react";

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Bem vindo!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Rafael Fernandes
                    </Heading>
                    <p>Desenvolvedor Front-End</p>
                </Box>
                <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/rafael.png" alt="foto do perfil" />
                </Box>
            </Box>
        </Container>
    )
}

export default Page