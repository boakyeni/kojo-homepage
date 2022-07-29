import NextLink from 'next/link'
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Icon,
  useColorModeValue,
  Divider
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import { IoLogoGithub } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          align="center"
          mt="1.5em"
          mb="1.5em"
        >
          Hello, I&apos;m a full-stack developer based in Los Angeles!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Kojo Nimako
            </Heading>
            <p>(Artist / Developer / Designer)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/kojo.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
            {' '}
            <Section >
            My team and personal projects focus in backend and 
            full stack web and mobile applications, utilizing
            tools best suited to maximize the benifits of web 3.0 and cloud computing.
            </Section>
            <Divider my={6} borderColor={useColorModeValue('black.500', 'gray.500')}/>
            <Section>
            My visual projects marked
            the beginning of my career as a developer and are essentially an
            artistic representation of my understanding of physics implemented
            with Java.
            </Section>
             {' '}
            <NextLink href="kwadwo.vercel.app">
              <Link></Link>
            </NextLink>
          
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme={useColorModeValue('green', 'red')}
              >
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2000</BioYear>
            Born in Los Angeles
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Completed Bachelor&apos;s of Science in Physics and Computer Science
            at University of Southern California (USC)
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            Working as a freelance
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Hobbies
          </Heading>
          <Paragraph>
            Yoga, Stage Engineering, <Link href="/">Reading</Link>
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Find Me Elsewhere
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/boakyeni" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @boakyeni
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
