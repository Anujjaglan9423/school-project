import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import Images from "../Images";
import tw from "tailwind-styled-components";

const CarouselHero = () => {
    const data = [
        {
            id: 1,
            name: "Welcome to",
            subHeading: "JAY INTERNATIONAL SCHOOL",
            img: Images.MainImage,
            zoner: "Become part of our community",
        },
        {
            id: 2,
            name: "Welcome to",
            subHeading: "JAY INTERNATIONAL SCHOOL",
            img: Images.Patriotic,
            zoner: "Become part of our community",
        },

        {
            id: 4,
            name: "Welcome to",
            subHeading: "JAY INTERNATIONAL SCHOOL",
            img: Images.Circulam,
            zoner: "Become part of our community",
        },
    ];
    return (
        <ImageWrapper>
            <CarouselContainer data={data} />
        </ImageWrapper>
    );
};

const CarouselContainer = ({ data }) => {
    return (
        <SwiperGroup className="home-carousel">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                modules={[Navigation, Autoplay, Pagination]}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                slidesPerView={1}
            >
                {data.map((value) => {
                    const { id, name, img, zoner, subHeading } = value;
                    return (
                        <SwiperSlide
                            key={id}
                            tw="relative border-2 border-blue-500"
                        >
                            <Image src={img} alt={name} />
                            <OverlayBackground />
                            <TextOverlay>
                                <OverlayTitle>{name}</OverlayTitle>
                                <OverlayHeading>{subHeading}</OverlayHeading>
                                <OverlayText> {zoner}</OverlayText>
                            </TextOverlay>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </SwiperGroup>
    );
};

const ImageWrapper = tw.div`w-full h-full`;
const SwiperGroup = tw.div`overflow-hidden shadow-xl mx-auto w-full`;
const Image = tw.img`cursor-pointer object-contain md:object-cover w-full h-full md:h-[90vh]`;
const TextOverlay = tw.div`  md:absolute md:top-1/2 md:left-0 md:w-full md:h-full px-10 transform -translate-y-32 `;
const OverlayTitle = tw.h2`text-lg md:text-2xl md:w-10/12  lg:w-7/12 text-white md:leading-tight`;
const OverlayText = tw.p`text-sm md:text-base mt-2 text-white md:w-10/12 lg:w-6/12 leading-relaxed`;
const OverlayHeading = tw.h1`text-xl md:text-6xl md:w-10/12 lg:w-7/12 text-white md:leading-tight font-semibold`;
const OverlayBackground = tw.div`absolute left-0 bottom-0 right-0 top-50 w-1/2 h-full bg-gradient-to-r from-gray-800 via-gray-900 to-transparent opacity-90`;
export default CarouselHero;
