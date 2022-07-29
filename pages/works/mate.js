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
      <Layout title="Mate">
        <Container>
          <Title>
            Mate <Badge>2022</Badge>
          </Title>
          <Meta>Description</Meta>
          <P>
            This solo project is a personal blog with numerous articles describing
            books that may be of interest to people of color.
          </P>
          <Divider my={2} />
          <Meta>Functionality</Meta>
          <P>
            New posts served to the blog can be created simply by using markdown.
            Blog includes support for multiple languages and day/night mode.
          </P>
          <Divider my={2} />
          <Meta>Tools</Meta>
          <P>Hugo, Firebase, AdSense, Google Analytics </P>
          <Divider my={2} />
          <List ml={4} my={4}>
            <ListItem>
              <HStack spacing={0.25}>
              <Meta>Website</Meta>
              <Link
                href="https://mate.care"
              >
                Mate <ExternalLinkIcon mx="2px" />
              </Link>
              </HStack>
            </ListItem>
            <ListItem>
              <Meta>GitHub</Meta>
              <Link href="https://github.com/boakyeni/mate">
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
  