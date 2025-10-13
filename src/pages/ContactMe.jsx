import React from "react";
import emojiRegex from "emoji-regex";

function ContactMe() {
  return (
    <>
      <div className="px-10 pt-10">
        <p className="font-medium text-4xl">Love to hear from you,</p>
        <p className="font-light text-3xl">Get in touch👋</p>
      </div>
      <div className="md:flex md:-mx-4 mt-4 px-6 py-6 md:mt-10 bg-amber-300">
        <div className="md:w-2/3 md:px-4">
          <div className="contact-form">
            <div className="sm:flex sm:flex-wrap -mx-3">
              <div className="sm:w-1/2 px-3 mb-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                />
              </div>
              <div className="sm:w-1/2 px-3 mb-6">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                />
              </div>
              <div className="sm:w-1/2 px-3 mb-6">
                <input
                  type="text"
                  placeholder="E-mail address"
                  className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                />
              </div>
              <div className="sm:w-1/2 px-3 mb-6">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                />
              </div>
              <div className="sm:w-full px-3">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="4"
                  placeholder="Your message here"
                  className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                ></textarea>
              </div>
            </div>
            <div className="text-right mt-4 md:mt-12">
              <button className="border-2 border-indigo-600 rounded px-6 py-2 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300">
                Send a Message
                <i className="fas fa-chevron-right ml-2 text-sm"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
