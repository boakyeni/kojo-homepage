import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Divider,
  Text,
  useColorModeValue,
  HStack
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Sketch SC">
      <Container>
        <Title>
          Sketch SC <Badge>2021</Badge>
        </Title>
        <Meta>Description</Meta>
        <P>
          This team project is a web application with a Java backend. I coded
          the JavaScript API that relayed player data to and from the frontend
          and backend.
        </P>
        <Divider my={2} />
        <Meta>Functionality</Meta>
        <P>
          Users are able to login with an account and guess what the main player
          is drawing. Logged in users are also able to chat between each other
          in-game. Score is kept and a winner and new main player are selected
          each round.
        </P>
        <Divider my={2} />
        <Meta>Tools</Meta>
        <P>HTML, CSS, JavaScript, Jquery, MySQL, WebSocket</P>
        <Divider my={2} />
        <List ml={4} my={4}>
          <ListItem>
            <HStack spacing={0.25}>
            <Meta>Website</Meta>
            <Text
              color={useColorModeValue('black.500', 'gray.500')}
            >
              Unavailable Server <ExternalLinkIcon mx="2px" />
            </Text>
            </HStack>
          </ListItem>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/DenisMistrikUSC/201Project/tree/main/src/main">
              Source Code <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem></ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work
