import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage, Meta } from '../../components/work'
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
                        <Meta>Website</Meta>
                    <Link href='/'>
                        home <ExternalLinkIcon mx="2px" />
                    </Link>
                    </ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Work