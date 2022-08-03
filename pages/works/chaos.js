import { Container, Badge, Link, List, ListItem, AspectRatio } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => {
    return (
        <Layout title="Paths to Chaos">
            <Container>
                <Title>
                    Paths to Chaos <Badge>2020</Badge>
                </Title>
                <P>
                    Study of the transition to chaotic dynamics in pendulums
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Google Drive</Meta>
                        <Link href='https://drive.google.com/file/d/1YGmY6PcDLUQw49Z64UDM6HE-5ZJ6jl8I/view?usp=sharing' isExternal>
                            View PDF <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem></ListItem>
                </List>
                <AspectRatio maxW='560px' ratio={1}>
                    <iframe src="https://drive.google.com/file/d/1YGmY6PcDLUQw49Z64UDM6HE-5ZJ6jl8I/preview" allow="autoplay"></iframe>
                </AspectRatio>
            </Container>
        </Layout>
    )
}

export default Work