import React from "react";
import tw from "tailwind-styled-components";
import Images from "../Images";

const Container = tw.div`p-6 bg-white max-w-6xl mx-auto my-24`;
const Heading = tw.h2`text-3xl font-bold text-red-600 mb-4`;
const List = tw.ul`list-disc pl-5 space-y-2 text-gray-700`;
const ListItem = tw.li``;
const SubHeading = tw.h3`text-lg font-semibold mt-6 mb-2`;
const TableContainer = tw.div`bg-gray-100 p-4 rounded-lg shadow-md mt-4 md:w-3/4 md:h-40`;
const Table = tw.table`w-full border border-gray-300`;
const TableHeader = tw.th`border border-gray-300 px-4 py-2 bg-gray-200 text-left`;
const TableData = tw.td`border border-gray-300 px-4 py-2`;
const Image = tw.img` md:w-1/4 mt-4`;

const AdmissionGuidelines = () => {
  return (
    <Container>
      <Heading>ADMISSION GUIDELINES</Heading>
      <List>
        <ListItem>
          Every parent is required to fill up an online registration form which includes details of the child and the parents.
        </ListItem>
        <ListItem>
          Admission for foundation years will be through formal interaction of the child and parent with the school head.
        </ListItem>
        <ListItem>
          Admission to Grade II and above will be based on written assessment conducted for the child. Date and time for the interaction and assessment will be intimated to the parents.
        </ListItem>
        <ListItem>
          The admission process is guided by and strictly adheres to the age criteria mentioned in the NEP 2020.
        </ListItem>
        <ListItem>
          The student should complete the age indicated below by the commencement of the academic year (as on 31 March of that year).
        </ListItem>
      </List>

      <SubHeading>Age Criteria</SubHeading>
      <div className="flex md:flex-row flex-col">
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <TableHeader>Class</TableHeader>
                <TableHeader>Age</TableHeader>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TableData>NURSERY</TableData>
                <TableData>3+ years</TableData>
              </tr>
              <tr>
                <TableData>GRADE - 1</TableData>
                <TableData>6+ years</TableData>
              </tr>
            </tbody>
          </Table>
        </TableContainer>

        <Image src={Images.Patriotism} alt="Children on stage" />
      </div>
    </Container>
  );
};

export default AdmissionGuidelines;