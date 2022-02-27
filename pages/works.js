import {Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbGyeNyame from '/public/images/gye_nyame.png'

const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section delay={0.3}>
                    <WorkGridItem id="gye_nyame" title="Gye Nyame" thumbnail={thumbGyeNyame}>
                    A blah
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                <WorkGridItem id="gye_nyame" title="Gye Nyame" thumbnail={thumbGyeNyame}>
                    A blah 2
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
            <Section delay={0.4}>
                <Divider my={6} />
                <Heading as="h3" fontSize={20} mb={4}>
                    Written Work
                </Heading>
            </Section>
        </Container>
        </Layout>
    )
}
export default Works