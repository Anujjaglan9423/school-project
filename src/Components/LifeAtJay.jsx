import React from "react";
import tw from "tailwind-styled-components";
import Images from "../Images";

const imageData = [
    { id: 1, title: "CRITICAL THINKING", imgSrc: Images.Thinking, description: "Promotes logical and analytical skills in students." },
    { id: 2, title: "SAFETY", imgSrc: Images.Safety, description: "Ensures a secure and caring environment for everyone." },
    { id: 3, title: "SUCCESS", imgSrc: Images.Spirit, description: "Students celebrate unity in triumph, reflecting collective effort and resilience." },
    { id: 4, title: "MUSIC", imgSrc: Images.Music, description: "Encourages creativity and expression through music." },
    { id: 5, title: "POSSIBILITIES", imgSrc: Images.Possibilities, description: "Empowers students to explore and expand their potential." },
    { id: 6, title: "RHYTHMS", imgSrc: Images.Rhythms, description: "Celebrates the harmony and rhythm in learning and life." },
    { id: 7, title: "PATRIOTISM", imgSrc: Images.Patriotism, description: "Instills love for the nation and pride in our heritage." },
    { id: 8, title: "DIVERSITY", imgSrc: Images.Diversity, description: "Fosters an environment that celebrates different cultures and perspectives." },
    { id: 9, title: "REASON", imgSrc: Images.Reason, description: "Encourages students to think critically and question the world around them." },
    { id: 10, title: "BRILLIANCE", imgSrc: Images.Brilliance, description: "Inspires excellence and a passion for lifelong learning." },
];

const LifeAtJay = () => {
    return (
        <SectionWrapper>
            <Title>LIFE AT JAY</Title>
            <GridWrapper>
                {imageData.map((item) => (
                    <ImageCard key={item.id} className="group">
                        <img src={item.imgSrc} alt={item.title} className="w-full h-full object-cover" />
                        <Overlay className="group-hover:flex">
                            <OverlayTitle>{item.title}</OverlayTitle>
                            <OverlayText>{item.description}</OverlayText>
                        </Overlay>
                        <ImageTitle>{item.title}</ImageTitle>
                    </ImageCard>
                ))}
            </GridWrapper>
        </SectionWrapper>
    );
};

const SectionWrapper = tw.div`md:py-16 py-10 bg-gray-100 text-center`;
const Title = tw.h2`text-3xl font-bold text-red-600 md:mb-16 mb-10 uppercase`;
const GridWrapper = tw.div`grid grid-cols-2 md:grid-cols-5 gap-6 px-6`;
const ImageCard = tw.div`relative h-60 overflow-hidden cursor-pointer`;
const Overlay = tw.div`absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`;
const OverlayTitle = tw.h3`text-lg font-bold mb-2`;
const OverlayText = tw.p`text-sm px-4`;
const ImageTitle = tw.h3`mt-2 text-lg font-semibold text-gray-800`;

export default LifeAtJay;
