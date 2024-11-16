import React from 'react';
import tw from 'tailwind-styled-components';

const Section = tw.div`relative flex items-center justify-center h-[400px] bg-cover bg-center`;
const Overlay = tw.div`absolute inset-0 bg-black bg-opacity-30`;
const Content = tw.div`relative text-center text-white p-6`;
const Title = tw.h2`text-3xl font-bold mb-2`;
const Info = tw.p`mb-1`;


const AdmissionSection = () => {
    return (
        <Section style={{ backgroundImage: "url('../Images/adminOffice.webp')" }}>
            <Overlay />
            <Content>
                <Title>ADMISSION OFFICE</Title>
                <Info>8 am to 3 pm, Monday to Saturday</Info>
                <Info>+91-9053100557, +91-9053200557</Info>
                <Info>jayinternational1@gmail.com</Info>

            </Content>
        </Section>
    );
};

export default AdmissionSection;
