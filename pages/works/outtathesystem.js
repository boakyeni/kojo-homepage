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
    <Layout title="Outta the System">
      <Container>
        <Title>
          Outta the System <Badge>2021</Badge>
        </Title>
        <Meta>Description</Meta>
        <P>
          This team project is a mobile application created with figma and react
          native. It received an award at UC Berkeley's CivHacks for Best Civics Hack.
        </P>
        <Divider my={2} />
        <Meta>Functionality</Meta>
        <P>
          App informs users of the required paperwork needed to expunge data
          from state and federal databases.
        </P>
        <Divider my={2} />
        <Meta>Tools</Meta>
        <P>Figma, React Native</P>
        <Divider my={2} />
        <List ml={4} my={4}>
          <ListItem>
            <HStack spacing={0.25}>
              <Meta>Website &amp; Video</Meta>
              <Link href="https://devpost.com/software/outta-the-system">
                Devpost - Outta the System <ExternalLinkIcon mx="2px" />
              </Link>
            </HStack>
          </ListItem>
          <ListItem></ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work
