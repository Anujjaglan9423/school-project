import React from 'react';
import tw from 'tailwind-styled-components';
import Images from '../Images';
import { Link } from 'react-router-dom';

const courseData = [
    {
        id: 1,
        title: "Enquiry Form",
        description: "Learn More",
        imgSrc: Images.Pathway1,
        to: "/enquiry",
    },
    {
        id: 2,
        title: "Fees Structure",
        description: "Learn More",
        imgSrc: Images.Pathway2,
        to: "/fee-structure",
    },
    {
        id: 3,
        title: "Contact Us",
        description: "Learn More",
        imgSrc: Images.Pathway3,
        to: "/contact-us",
    },
    {
        id: 4,
        title: "About Us",
        description: "Learn More",
        imgSrc: Images.Pathway4,
        to: "/about-us",
    },
];

const QuickAction = () => {
    return (
        <SectionWrapper>

            <CardGrid>
                {courseData.map((course) => (
                    <Card key={course.id}>
                        <ImageWrapper>
                            <img src={course.imgSrc} alt={course.title} className="w-full h-full object-cover" />
                        </ImageWrapper>
                        <CardContent>
                            <CardTitle>{course.title}</CardTitle>
                            <Link to={course.to}>
                                <Button>
                                    <CardDescription>{course.description}</CardDescription>
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </CardGrid>
        </SectionWrapper>
    );
};

const SectionWrapper = tw.div`md:py-16 py-10 text-center bg-white`;
const CardGrid = tw.div`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6`;
const Card = tw.div`bg-white rounded-xl overflow-hidden shadow-lg flex flex-col items-center`;
const ImageWrapper = tw.div`h-56 w-full`;
const CardContent = tw.div`p-4 flex flex-col items-center`;
const CardTitle = tw.h3`text-lg font-semibold text-red-600 mb-2`;
const CardDescription = tw.button`text-sm `;
const Button = tw.div`border bg-black text-white hover:bg-red-600 rounded-lg px-4 py-2 items-center`
export default QuickAction;
