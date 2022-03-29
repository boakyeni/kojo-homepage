import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import thumbChaos from '/public/images/pathToChaosImg1.png'
import thumbKente from '/public/images/kenteStatic.jpg'
import { WorkGridItem } from '../components/grid-item'

const Posts = () => (
  <Layout title="Reports">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        I ♥ Physics
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="chaos"
              title="Paths to Chaos"
              thumbnail={thumbChaos}
            >
              An overview of the basics of chaotic dynamics ~ Emphasizes the
              fundamentality of chaos
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Section>
      <Section delay={0.4}>
        <Divider my={2} />
        <Heading as="h3" fontSize={20} mb={4}>
          Visuals
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="digi_kente"
              title="Digi Kente"
              thumbnail={thumbKente}
            >
              Digital West African inspired art made with Processing 3
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
