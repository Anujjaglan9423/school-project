import React from "react";
import tw from "tailwind-styled-components";
import Images from "../Images";

// Sample photos array
const photos = [
    { src: Images.Brilliance, alt: "Photo 1" },
    { src: Images.Diversity, alt: "Photo 2" },
    { src: Images.Lab, alt: "Photo 3" },
    { src: Images.Patriotism, alt: "Photo 4" },
    { src: Images.Safety, alt: "Photo 5" },
    { src: Images.Spirit, alt: "Photo 6" },
    { src: Images.Mind, alt: "Photo 7" },
    { src: Images.Music, alt: "Photo 8" },
];

// Styled components using Tailwind
const Container = tw.div`text-center md:py-16 py-10 px-6 `;
const Title = tw.h2`text-3xl font-bold text-red-600 md:mb-16 mb-10`;
const Grid = tw.div`grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto`;
const PhotoWrapper = tw.div`w-full h-64 overflow-hidden`;
const Image = tw.img`w-full h-full object-cover rounded-md`;


const PhotoGallery = () => {
    return (
        <Container>
            <Title>Photo Gallery</Title>
            <Grid>
                {photos.map((photo, index) => (
                    <PhotoWrapper key={index}>
                        <Image src={photo.src} alt={photo.alt} />
                    </PhotoWrapper>
                ))}
            </Grid>

        </Container>
    );
};

export default PhotoGallery;
