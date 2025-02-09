import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "emailjs-com";
import tw from "tailwind-styled-components";
import { toast } from "react-toastify";

const FormWrapper = tw.div`max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg my-24`;
const Input = tw.input`w-full p-2 border rounded mb-4`;
const TextArea = tw.textarea`w-full p-2 border rounded mb-4`;
const Label = tw.label`block mb-2 text-sm font-medium text-gray-700`;
const CheckboxWrapper = tw.div`flex items-start mb-4`;
const Checkbox = tw.input`mt-1 mr-2`;
const Button = tw.button`bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition`;
const ErrorText = tw.div`text-red-500 text-sm mt-1`;

const ContactForm = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        message: "",
        consent: false,
    };

    const validate = (values) => {
        const errors = {};

        if (!values.firstName) {
            errors.firstName = "First Name is required";
        }

        if (!values.lastName) {
            errors.lastName = "Last Name is required";
        }

        if (!values.email) {
            errors.email = "Email is required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid email address";
        }

        if (!values.mobileNumber) {
            errors.mobileNumber = "Mobile Number is required";
        } else if (!/^\d{10}$/i.test(values.mobileNumber)) {
            errors.mobileNumber = "Invalid mobile number (must be 10 digits)";
        }

        if (!values.message) {
            errors.message = "Message is required";
        }

        if (!values.consent) {
            errors.consent = "You must agree to the terms";
        }

        return errors;
    };

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        emailjs
            .send(
                "service_407t9oe", // Replace with your EmailJS service ID
                "template_oiwrh0j", // Replace with your EmailJS template ID
                {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    mobileNumber: values.mobileNumber,
                    message: values.message,
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
    };

    return (
        <FormWrapper>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label>First Name</Label>
                                <Field type="text" name="firstName" as={Input} />
                                <ErrorMessage name="firstName" component={ErrorText} />
                            </div>
                            <div>
                                <Label>Last Name</Label>
                                <Field type="text" name="lastName" as={Input} />
                                <ErrorMessage name="lastName" component={ErrorText} />
                            </div>
                            <div>
                                <Label>Enter Your Mobile Number</Label>
                                <Field type="text" name="mobileNumber" as={Input} />
                                <ErrorMessage name="mobileNumber" component={ErrorText} />
                            </div>
                            <div>
                                <Label>Email Address</Label>
                                <Field type="email" name="email" as={Input} />
                                <ErrorMessage name="email" component={ErrorText} />
                            </div>
                        </div>
                        <div>
                            <Label>Message</Label>
                            <Field name="message" as={TextArea} rows="4" />
                            <ErrorMessage name="message" component={ErrorText} />
                        </div>
                        <CheckboxWrapper>
                            <Field type="checkbox" name="consent" as={Checkbox} />
                            <span>
                                Please tick this box if you are happy for us to provide you with
                                information about the school, events, or other activities which we
                                believe may be of interest to you. You can opt-out and withdraw
                                consent at any time. For more information read our Privacy Terms.
                            </span>
                        </CheckboxWrapper>
                        <ErrorMessage name="consent" component={ErrorText} />
                        <div className="text-center md:text-left">
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Send My Message"}
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </FormWrapper>
    );
};

export default ContactForm;