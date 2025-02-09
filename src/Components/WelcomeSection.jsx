import React from "react";
import tw from "tailwind-styled-components";

const WelcomeSection = () => {
    return (
        <SectionWrapper>
            <ContentWrapper>
                <Title>WELCOME TO JAY INTERNATIONAL SCHOOL</Title>
                <Subtitle>
                    Believe In Yourself, Embrace Challenges, <br />
                    And Reach For The Stars!
                </Subtitle>
                <Tagline>Learn • Adapt • Grow</Tagline>
                <Description>
                    Our institution fosters a culture of innovation and inspiration, encouraging students to imagine
                    endless possibilities, initiate change, and lead with confidence. Through learning and
                    problem-solving, we empower individuals to unlock their potential and make a difference in the
                    world.
                </Description>
            </ContentWrapper>
        </SectionWrapper>
    );
};


const SectionWrapper = tw.div`flex items-center justify-center relative`;
const ContentWrapper = tw.div`text-center md:p-32 py-20 px-10 bg-white bg-opacity-80  mx-auto `;
const Title = tw.h1`text-3xl md:text-4xl font-bold text-red-600 mb-4 uppercase`;
const Subtitle = tw.p`text-xl md:text-2xl italic font-serif text-gray-700 mb-4`;
const Tagline = tw.p`text-lg text-red-500 font-medium tracking-wider uppercase mb-6`;
const Description = tw.p`text-sm md:text-base text-gray-600 leading-relaxed`;

export default WelcomeSection;
