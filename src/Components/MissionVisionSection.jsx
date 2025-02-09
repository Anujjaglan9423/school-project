import React from 'react';
import tw from 'tailwind-styled-components';

const Section = tw.section`md:py-16 py-10 px-6 bg-gray-100 text-gray-800`;
const Container = tw.div`max-w-6xl mx-auto text-center`;
const Title = tw.h2`text-4xl font-bold md:mb-16 mb-10 text-red-600`;
const ContentWrapper = tw.div`grid gap-8 md:grid-cols-2`;
const Card = tw.div`bg-white rounded-lg shadow-lg p-8`;
const CardTitle = tw.h3`text-2xl font-semibold mb-4`;
const Text = tw.p`text-gray-700`;

const MissionVisionSection = () => {
    return (
        <Section>
            <Container>
                <Title>Our Mission & Vision</Title>
                <ContentWrapper>

                    <Card>
                        <CardTitle>Our Mission</CardTitle>
                        <Text>
                            Our mission is to empower students with a holistic education that
                            nurtures their intellectual, emotional, and physical well-being.
                            We strive to foster a love for learning, critical thinking, and
                            respect for diversity, preparing our students to become
                            responsible global citizens.
                        </Text>
                    </Card>

                    {/* Vision Card */}
                    <Card>
                        <CardTitle>Our Vision</CardTitle>
                        <Text>
                            Our vision is to be a leading educational institution that
                            inspires innovation and excellence, developing well-rounded
                            individuals who are confident, compassionate, and equipped to make
                            meaningful contributions to society. We envision a future where
                            every student reaches their full potential.
                        </Text>
                    </Card>
                </ContentWrapper>
            </Container>
        </Section>
    );
};

export default MissionVisionSection;
