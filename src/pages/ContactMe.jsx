import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


function ContactMe() {
  return (
    <div className="md:pt-40 md:pl-20 lg:p-44">
      <div className="px-10 pt-10 ">
        <p className="font-medium text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Love to hear from you,
        </p>
        <p className="font-light text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Get in touch👋
        </p>
      </div>
      <div className="md:flex md:-mx-4 mt-4 px-6 py-6 md:mt-10">
        <div className="md:w-2/3 md:px-4">
          <Formik
            initialValues={{
              fullName: "",
              companyName: "",
              email: "",
              phone: "",
              message: "",
            }}
            validationSchema={Yup.object({
              fullName: Yup.string()
                .required("Full Name is required")
                .min(2, "Too short"),
              companyName: Yup.string(),
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
              phone: Yup.string().matches(
                /^[0-9+()\-\s]*$/,
                "Invalid phone number"
              ),
              message: Yup.string()
                .required("Please write a message")
                .min(10, "Message is too short"),
            })}
      
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log("Form submitted:", values);
              alert("Thank you! Your message has been sent ✅");
              setSubmitting(false);
              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form className="contact-form">
                <div className="sm:flex sm:flex-wrap -mx-3">
                  <div className="sm:w-1/2 px-3 mb-6">
                    <Field
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                    />
                    <ErrorMessage
                      name="fullName"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div className="sm:w-1/2 px-3 mb-6">
                    <Field
                      type="text"
                      name="companyName"
                      placeholder="Company Name"
                      className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                    />
                  </div>
                  <div className="sm:w-1/2 px-3 mb-6">
                    <Field
                      type="email"
                      name="email"
                      placeholder="E-mail address"
                      className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div className="sm:w-1/2 px-3 mb-6">
                    <Field
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                    />
                  </div>
                  <div className="sm:w-full px-3 mb-6">
                    <Field
                      as="textarea"
                      name="message"
                      cols="30"
                      rows="4"
                      placeholder="Your message here"
                      className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>
                <div className="text-right mt-4 md:mt-12">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-black text-white rounded px-6 py-2 md:px-16 lg:px-20 hover:bg-in hover:bg-emerald-700 cursor-pointer transition-colors duration-300"
                  >
                    Send a Message
                    {isSubmitting ? "Sending..." : "Send a Message"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
