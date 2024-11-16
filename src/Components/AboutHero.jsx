import React from "react";
import styled from "tailwind-styled-components";

// Styled Components
const HeroSectionWrapper = styled.div`
    relative h-screen bg-cover bg-center bg-no-repeat
`;
const Overlay = styled.div`
    absolute inset-0 bg-black opacity-30
`;
const ContentContainer = styled.div`
    relative flex flex-col items-center justify-center h-full text-center text-white px-4
`;
const Title = styled.h1`
    text-6xl lg:text-8xl font-bold tracking-wide opacity-80 font-discover
`;
const Subtitle = styled.h2`
    mt-4 text-2xl font-semibold
`;
const Description = styled.p`
    mt-2 text-lg max-w-2xl
`;

const AboutHero = () => {
    return (
        <HeroSectionWrapper
            style={{ backgroundImage: `url('../images/MainImage.jpg')` }}
        >
            <Overlay />

            <ContentContainer>
                <Title>
                    DISCOVER <br /> JAY
                </Title>

                <Subtitle>WELCOME TO JAY</Subtitle>

                <Description>
                    This is not merely a school's story; this is the narrative of a
                    community deeply rooted in faith and academic excellence.
                </Description>
            </ContentContainer>
        </HeroSectionWrapper>
    );
};

export default AboutHero;
