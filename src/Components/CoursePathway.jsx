import React from 'react';
import tw from 'tailwind-styled-components';
import Images from '../Images';


const courseData = [
    {
        id: 1,
        title: "FOUNDATIONAL YEARS",
        description: "Nur-Grade 2",
        imgSrc: Images.Pathway1
    },
    {
        id: 2,
        title: "PREPARATORY YEARS",
        description: "Grade 3 to Grade 5",
        imgSrc: Images.Pathway2
    },
    {
        id: 3,
        title: "MIDDLE YEARS",
        description: "Grade 6 to 8",
        imgSrc: Images.Pathway3
    },
    {
        id: 4,
        title: "SECONDARY",
        description: "Grade 9 to 12",
        imgSrc: Images.Pathway4
    },
];

const CoursePathway = () => {
    return (
        <SectionWrapper>
            <Title>COURSE PATHWAY</Title>
            <CardGrid>
                {courseData.map((course) => (
                    <Card key={course.id}>
                        <ImageWrapper>
                            <img src={course.imgSrc} alt={course.title} className="w-full h-full object-cover" />
                        </ImageWrapper>
                        <CardContent>
                            <CardTitle>{course.title}</CardTitle>
                            <CardDescription>{course.description}</CardDescription>

                        </CardContent>
                    </Card>
                ))}
            </CardGrid>
        </SectionWrapper>
    );
};

const SectionWrapper = tw.div`md:py-16 py-10 text-center`;
const Title = tw.h2`text-3xl font-bold text-red-600 md:mb-16 mb-10 uppercase`;
const CardGrid = tw.div`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6`;
const Card = tw.div`bg-white rounded-xl overflow-hidden shadow-lg flex flex-col items-center`;
const ImageWrapper = tw.div`h-56 w-full`;
const CardContent = tw.div`p-4 flex flex-col items-center`;
const CardTitle = tw.h3`text-lg font-bold text-gray-800 mb-2`;
const CardDescription = tw.p`text-sm text-gray-500 mb-4`;
const LearnMoreButton = tw.button`flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 transition`;

export default CoursePathway;
