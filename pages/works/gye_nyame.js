import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Gye Nyame">
            <Container>
                <Title>
                    Gye Nyame <Badge>2022</Badge>
                </Title>
                <P>
                    An Application
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