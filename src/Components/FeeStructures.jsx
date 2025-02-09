import React from "react";
import tw from "tailwind-styled-components";

const Container = tw.div`max-w-4xl mx-auto my-8 border border-gray-300 rounded-lg overflow-hidden`;
const Header = tw.div`bg-gray-800 text-white text-center py-3 text-lg font-semibold`;
const Table = tw.table`w-full text-sm text-gray-700 border-collapse`;
const Th = tw.th`border border-gray-300 px-4 py-2 bg-gray-100 text-left`;
const Td = tw.td`border border-gray-300 px-4 py-2`;
const SectionHeader = tw.tr`bg-gray-200 text-gray-800 font-semibold`;

const FeeStructures = () => {
    return (
        <Container>
            <Header>Fee Structure 2025-2026 (JIS)</Header>
            <Table>
                <tbody>
                    <tr>
                        <Td>Registration Charge</Td>
                        <Td>One Time</Td>
                        <Td className="text-right">Rs. 600/-</Td>
                    </tr>

                    <SectionHeader>
                        <Td colSpan="3" className="text-center">
                            At the time of Admission
                        </Td>
                    </SectionHeader>

                    <tr>
                        <Td>Admission Fee (Non-Refundable)</Td>
                        <Td>One Time</Td>
                        <Td className="text-right">Rs. 50,000/-</Td>
                    </tr>

                    <tr>
                        <Td>Caution Money (Refundable)</Td>
                        <Td>One Time</Td>
                        <Td className="text-right">Rs. 10,000/-</Td>
                    </tr>

                    <tr>
                        <Td colSpan="2">Total</Td>
                        <Td className="text-right">Rs. 60,000/-</Td>
                    </tr>

                    <SectionHeader>
                        <Td colSpan="3" className="text-center">
                            Quarterly Charges
                        </Td>
                    </SectionHeader>

                    <tr>
                        <Th>Class</Th>
                        <Th colSpan="2">All the Sessions</Th>
                    </tr>

                    <tr>
                        <Td>Pre Nursery</Td>
                        <Td></Td>
                        <Td className="text-right">Rs. 12,000/-</Td>
                    </tr>

                    <tr>
                        <Td>Nursery</Td>
                        <Td></Td>
                        <Td></Td>
                    </tr>

                    <tr>
                        <Td>Prep 1</Td>
                        <Td></Td>
                        <Td></Td>
                    </tr>

                    <tr>
                        <Td>Prep 2</Td>
                        <Td></Td>
                        <Td className="text-right">Rs. 26,620/-</Td>
                    </tr>

                    <tr>
                        <Td>Grade I</Td>
                        <Td></Td>
                        <Td></Td>
                    </tr>

                    <tr>
                        <Td>Grade II to VIII</Td>
                        <Td></Td>
                        <Td></Td>
                    </tr>

                    <tr>
                        <Td>Grade IX - XII</Td>
                        <Td></Td>
                        <Td className="text-right">Rs. 27,500/-</Td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};

export default FeeStructures;
