import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import tw from "tailwind-styled-components";
import Images from "../Images";
import { toast } from "react-toastify";

// Styled Components
const Container = tw.div`flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-purple-50`;
const Card = tw.div`bg-white opacity-95 px-3 py-10 rounded-lg shadow-2xl w-full max-w-md flex flex-col items-center`;
const Title = tw.h2`text-xl font-bold text-center text-gray-800`;
const SubTitle = tw.h2`text-sm mb-3 text-center text-gray-500 md:mx-12`;
const Input = tw.input` p-2 w-[300px] text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500`;
const OTPInput = tw.input`w-10 h-10 text-center border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500`;
const ErrorText = tw.div`text-red-500 text-sm mt-1`;
const Button = tw.button`w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300`;
const ResendButton = tw.button`mt-1 text-blue-600 hover:text-blue-700 transition-colors duration-300 `;
const Image = tw.img`w-20 h-20 mb-3 rounded-full shadow-lg`;

const LoginPage = () => {
  const [step, setStep] = useState(1);
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleMobileSubmit = (values) => {
    toast.success(`OTP sent to ${values.mobileNumber}`);
    setMobileNumber(values.mobileNumber);
    setStep(2);
    setIsOtpSent(true);
  };

  const handleOtpChange = (index, value, setFieldValue) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    setFieldValue("otp", newOtp.join(""));
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const handleResendOtp = () => {
    toast.success(`OTP resent to ${mobileNumber}`);
    setIsOtpSent(true);
  };

  const handleOtpSubmit = (values) => {
    toast.success(`OTP submitted: ${values.otp}`);
  };

  const validateMobileNumber = (values) => {
    const errors = {};
    if (!values.mobileNumber) {
      errors.mobileNumber = "Mobile number is required";
    } else if (!/^\d{10}$/.test(values.mobileNumber)) {
      errors.mobileNumber = "Invalid mobile number (must be 10 digits)";
    }
    return errors;
  };

  const validateOtp = (values) => {
    const errors = {};
    if (!values.otp || values.otp.length !== 4) {
      errors.otp = "Please enter a valid 4-digit OTP";
    }
    return errors;
  };

  return (
    <Container
      style={{
        backgroundImage: `url('../images/bg11.jpg')`,
      }}
    >
      <Card>
        <Image src={Images.Logo} alt="Login" />
        <Title>{step === 1 ? "Login" : "Enter OTP"}</Title>
        <SubTitle>
          {step === 1
            ? "Please enter the registered mobile number to continue."
            : "Please enter the 4 digit OTP"}
        </SubTitle>
        {step === 1 ? (
          <Formik
            initialValues={{ mobileNumber: "" }}
            validate={validateMobileNumber}
            onSubmit={handleMobileSubmit}
          >
            <Form>
              <div className="mb-4">
                <Field
                  name="mobileNumber"
                  type="text"
                  placeholder="Enter your mobile number"
                  as={Input}
                />
                <ErrorMessage name="mobileNumber" component={ErrorText} />
              </div>
              <Button type="submit">Send OTP</Button>
            </Form>
          </Formik>
        ) : (
          <Formik
            initialValues={{ otp: "" }}
            validate={validateOtp}
            onSubmit={handleOtpSubmit}
          >
            {({ setFieldValue }) => (
              <Form>
                <div className="flex justify-center space-x-4 mb-4">
                  {otp.map((digit, index) => (
                    <Field
                      key={index}
                      id={`otp-input-${index}`}
                      name={`otp${index}`}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) =>
                        handleOtpChange(index, e.target.value, setFieldValue)
                      }
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      as={OTPInput}
                    />
                  ))}
                </div>
                <ErrorMessage name="otp" component={ErrorText} />
                <Button type="submit">Login</Button>
                <ResendButton type="button" onClick={handleResendOtp}>
                  Resend OTP
                </ResendButton>
              </Form>
            )}
          </Formik>
        )}
      </Card>
    </Container>
  );
};

export default LoginPage;
