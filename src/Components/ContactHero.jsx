import React from "react";
import tw from "tailwind-styled-components";

// Styled Components
const HeroSectionWrapper = tw.div`relative h-screen bg-cover bg-center bg-no-repeat`;
const Overlay = tw.div`absolute inset-0 bg-black opacity-30`;
const ContentContainer = tw.div`relative flex flex-col items-center justify-center h-full text-center text-white px-4`;
const Title = tw.h1`text-6xl lg:text-8xl font-bold tracking-wide opacity-80 font-discover`;
const Subtitle = tw.h2`mt-4 text-2xl font-semibold`;
const Description = tw.p`mt-2 text-lg max-w-2xl`;

const ContactHero = () => {
    return (
        <HeroSectionWrapper
            style={{ backgroundImage: `url('../images/MainImage.jpg')` }}
        >
            <Overlay />
            <ContentContainer>
                <Title>
                    Contact Us
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

export default ContactHero;
