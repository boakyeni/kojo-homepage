import { Container, Heading, SimpleGrid, Divider, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import { GridItem, WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbGyeNyame from '/public/images/gye_nyame.png'
import thumbMateDark from '/public/images/matemasie-dark.png'
import thumbMate from '/public/images/matemasie.png'
import thumbOTS from '/public/images/outtathesystem.jpg'
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
                id="mate"
                title="Mate"
                thumbnail={useColorModeValue(thumbMate, thumbMateDark)}
              >
                Mindfulness blog recommending books for Black men worldwide
            </WorkGridItem>
            </Section>
          <Section delay={0.3}>
          <WorkGridItem
                id="outtathesystem"
                title="Outta The System"
                thumbnail={thumbOTS}
              >
                Winner of Civics Pillar in CivHacks 2021 ~ iOS/Android
                application to expidite the removal of sensitive data
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
        
      </Container>
    </Layout>
  )
}
export default Works
