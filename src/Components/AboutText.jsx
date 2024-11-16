import React from 'react';
import styled from 'tailwind-styled-components';

const AboutSection = styled.div`bg-white py-12 px-6`;
const Title = styled.h1`text-3xl font-bold text-red-600 mb-6`;
const Paragraph = styled.p`text-gray-700 leading-relaxed mb-4`;

const AboutText = () => {
    return (
        <AboutSection>
            <Title>ABOUT US</Title>
            <Paragraph>
                Integrity, Humanity and Citizenship are the central values with which we at Jay began our journey in 2004 when our first school was established in Jondhan Kalan, Panipat.
            </Paragraph>
            <Paragraph>
                At Jay International Schools, we endeavour to nurture our students to become strong individuals who embody the self-belief and confidence to pursue their dreams. We empower them to ask questions, challenge the status quo and help build a better world while maintaining a strong connect with the community.
            </Paragraph>
            <Paragraph>
                We believe that our schools provide a strong and dynamic backdrop for an ever-evolving learning community to be built, comprising of passionate teachers, enthusiastic parents and ambitious students; thus ensuring purposeful, progressive and productive education transpires. The students are provided extraordinary opportunities to explore their potential and grow, backed by a conducive healthy teaching and learning environment and world class infrastructure.
            </Paragraph>
            <Paragraph>
                Shanti Niketan Education Society was formed and registered under Society Act. The Society has been working for education , rehabilitation and uplift of the underprivileged and the marginalised sections of the society by providing opportunities for education, by imparting employment oriented vocational skills, by creating awareness about relevant issues through camps and workshops and by procuring and distributing articles of basic needs to the needy. The main aim of the Society was to disseminate quality education in the technical and professional areas, specially those beneficial to the students from rural and hitherto educationally deprived people of our country. Society Main Motto is “To empower society with holistic development through quality education”.
            </Paragraph>
        </AboutSection>
    );
};

export default AboutText;
