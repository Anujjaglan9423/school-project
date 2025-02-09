import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import tw from "tailwind-styled-components";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const Container = tw.div`max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg mt-24`;
const Title = tw.h2`text-3xl font-semibold text-red-600 `;
const Label = tw.label`block text-sm font-medium text-gray-700 mt-4`;
const Input = tw(Field)`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2`;
const Button = tw.button`mt-6 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700`;
const ErrorText = tw.div`text-red-500 text-sm mt-1`;

const initialValues = {
    enquiryYear: "",
    classApplied: "",
    studentName: "",
    parentName: "",
    schoolName: "",
    gender: "",
    dob: "",
    email: "",
    mobile: "",
    address: "",
};

const validationSchema = Yup.object({
    enquiryYear: Yup.string().required("Required"),
    classApplied: Yup.string().required("Required"),
    studentName: Yup.string().required("Required"),
    parentName: Yup.string().required("Required"),
    // schoolName: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    dob: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    mobile: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
});

const EnquiryForm = () => {
    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <Container>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, handleChange }) => (
                    <Form>
                        <Title>Enquiry Details</Title>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label>Enquiry for the year *</Label>
                                <Field name="enquiryYear" as={Select} displayEmpty fullWidth className='h-10 mt-1'>
                                    <MenuItem value="">Select Academic Year</MenuItem>
                                    <MenuItem value="2024">2024</MenuItem>
                                    <MenuItem value="2025">2025</MenuItem>
                                </Field>
                                <ErrorMessage name="enquiryYear" component={ErrorText} />
                            </div>
                            <div>
                                <Label>Class Applied For *</Label>
                                <Field name="classApplied" as={Select} displayEmpty fullWidth className='h-10 mt-1'>
                                    <MenuItem value="">Class Applying For</MenuItem>
                                    <MenuItem value="Nursery">Nursery</MenuItem>
                                    <MenuItem value="Grade 1">Grade 1</MenuItem>
                                </Field>
                                <ErrorMessage name="classApplied" component={ErrorText} />
                            </div>

                        </div>

                        <Title className="mt-8">Student & Parent Details</Title>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label>Student's Name *</Label>
                                <Input name="studentName" placeholder="Full Name" />
                                <ErrorMessage name="studentName" component={ErrorText} />
                            </div>
                            <div>
                                <Label>Parent's Name *</Label>
                                <Input name="parentName" placeholder="First Name" />
                                <ErrorMessage name="parentName" component={ErrorText} />
                            </div>
                            <div>
                                <Label>Name Of The School Presently Studying (If Applicable) </Label>
                                <Input name="schoolName" placeholder="School Presently Studying" />
                                {/* <ErrorMessage name="schoolName" component={ErrorText} /> */}
                            </div>
                            <div>
                                <Label>Email *</Label>
                                <Input name="email" placeholder="Email Address" />
                                <ErrorMessage name="email" component={ErrorText} />
                            </div>
                            <div>
                                <Label>I am *</Label>
                                <Field name="gender" as={Select} displayEmpty fullWidth className='h-10 mt-1'>
                                    <MenuItem value="">Select Gender</MenuItem>
                                    <MenuItem value="Male">Male</MenuItem>
                                    <MenuItem value="Female">Female</MenuItem>
                                </Field>
                                <ErrorMessage name="gender" component={ErrorText} />
                            </div>
                            <div>
                                <Label>Mobile *</Label>
                                <Input name="mobile" placeholder="Phone" />
                                <ErrorMessage name="mobile" component={ErrorText} />
                            </div>
                            <div>
                                <Label>Student's Date of Birth *</Label>
                                <Input name="dob" type="date" />
                                <ErrorMessage name="dob" component={ErrorText} />
                            </div>
                            <div>
                                <Label>Address *</Label>
                                <Input name="address" placeholder="Address" />
                                <ErrorMessage name="address" component={ErrorText} />
                            </div>
                        </div>
                        <Button type="submit">Submit Application</Button>
                    </Form>
                )}
            </Formik>
        </Container>
    );
};

export default EnquiryForm;
