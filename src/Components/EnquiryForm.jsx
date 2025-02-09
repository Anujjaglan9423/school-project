import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import tw from "tailwind-styled-components";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

const Container = tw.div`max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg my-24`;
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
    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        emailjs
            .send(
                "service_407t9oe", // Replace with your EmailJS service ID
                "template_q680p6f", // Replace with your EmailJS template ID
                {
                    enquiryYear: values.enquiryYear,
                    classApplied: values.classApplied,
                    studentName: values.studentName,
                    parentName: values.parentName,
                    gender: values.gender,
                    dob: values.dob,
                    email: values.email,
                    mobile: values.mobile,
                    address: values.address,
                    schoolName: values.schoolName,
                },
                "Zr4YTfAHKDO3Te4ph" // Replace with your EmailJS user ID
            )
            .then(
                (result) => {
                    toast.success("Message sent successfully!");
                    setSubmitting(false);
                    resetForm()
                },
                (error) => {
                    toast.error("Failed to send the message, please try again.");
                    setSubmitting(false);
                }
            );
        console.log(values);
    };

    return (
        <Container>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
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
                                    <MenuItem value="Grade 2">Grade 2</MenuItem>
                                    <MenuItem value="Grade 3">Grade 3</MenuItem>
                                    <MenuItem value="Grade 4">Grade 4</MenuItem>
                                    <MenuItem value="Grade 5">Grade 5</MenuItem>
                                    <MenuItem value="Grade 6">Grade 6</MenuItem>
                                    <MenuItem value="Grade 7">Grade 7</MenuItem>
                                    <MenuItem value="Grade 8">Grade 8</MenuItem>
                                    <MenuItem value="Grade 9">Grade 9</MenuItem>
                                    <MenuItem value="Grade 10">Grade 10</MenuItem>
                                    <MenuItem value="Grade 11">Grade 11</MenuItem>
                                    <MenuItem value="Grade 12">Grade 12</MenuItem>
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
                        <Button type="submit" disabled={isSubmitting}> {isSubmitting ? "Sending..." : "Submit Appllication"}</Button>
                    </Form>
                )}
            </Formik>
        </Container>
    );
};

export default EnquiryForm;
