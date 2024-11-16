import React, { useState } from "react";
import emailjs from "emailjs-com";
import tw from "tailwind-styled-components";

const FormWrapper = tw.div` mx-auto  px-6 md:py-16 py-8 max-w-4xl`;
const Input = tw.input`w-full p-2 border rounded mb-4`;
const TextArea = tw.textarea`w-full p-2 border rounded mb-4`;
const Label = tw.label`block mb-2 text-sm font-medium text-gray-700`;
const CheckboxWrapper = tw.div`flex items-start mb-4`;
const Checkbox = tw.input`mt-1 mr-2`;
const Button = tw.button`bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition`;

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        message: "",
        consent: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // EmailJS configuration
        emailjs
            .send(
                "service_407t9oe", // Replace with your EmailJS service ID
                "template_oiwrh0j", // Replace with your EmailJS template ID
                {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    mobileNumber: formData.mobileNumber,
                    message: formData.message,
                },
                "Zr4YTfAHKDO3Te4ph" // Replace with your EmailJS user ID
            )
            .then(
                (result) => {
                    alert("Message sent successfully!");
                },
                (error) => {
                    alert("Failed to send the message, please try again.");
                }
            );
    };

    return (
        <FormWrapper>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label>First Name</Label>
                        <Input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <Label>Last Name</Label>
                        <Input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <Label>Enter Your Mobile Number</Label>
                        <Input
                            type="text"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <Label>Email Address</Label>
                        <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div>
                    <Label>Message</Label>
                    <TextArea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <CheckboxWrapper>
                    <Checkbox
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                    />
                    <span>
                        Please tick this box if you are happy for us to provide you with
                        information about the school, events, or other activities which we
                        believe may be of interest to you. You can opt-out and withdraw
                        consent at any time. For more information read our Privacy Terms.
                    </span>
                </CheckboxWrapper>
                <div className="text-center md:text-left">
                    <Button type="submit">Send My Message</Button>
                </div>
            </form>
        </FormWrapper>
    );
};

export default ContactForm;
