import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { GridItem, WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbGyeNyame from '/public/images/gye_nyame.png'
import thumbKente from '/public/images/kenteStatic.jpg'
import thumbOTS from '/public/images/outtathesystem.png'
import thumbSketch from '/public/images/sketchsc.jpg'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="gye_nyame"
              title="Gye Nyame"
              thumbnail={thumbGyeNyame}
            >
              A blah
            </WorkGridItem>
           </Section> 
          <Section delay={0.3}>
            <WorkGridItem
              id="sketchsc"
              title="Sketch SC"
              thumbnail={thumbSketch}
            >
              Multithreaded Java multiplayer game similar to pictionary
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Divider my={2}/>
        <Heading as="h3" fontSize={20} mb={4}>
          Hackathons
        </Heading>
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <Section delay={0.3}>
              <GridItem
                href="https://devpost.com/software/outta-the-system"
                title="Outta The System"
                thumbnail={thumbOTS}
              >
                Winner of Civics Pillar in CivHacks 2021 ~ iOS/Android
                application to expidite the removal of sensitive data
              </GridItem>
            </Section>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}
export default Works
