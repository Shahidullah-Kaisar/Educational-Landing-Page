import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if(form.current.checkValidity()){
    
      emailjs
      .sendForm("service_5qj84x6", "template_tmxqqui", form.current, {
        publicKey: "Ql332LQIHsbON3Twq",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Message Sent Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    }
    else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill out all fields before submitting.",
        confirmButtonText: "OK",
        position: "top-center",
      });
    }
    
  };

  // add required in all input field
  // in form tag add noValidate
  // use checkValidity()

  return (
    <>
      <form ref={form} onSubmit={sendEmail} noValidate>
        <div
          className="container flex justify-center items-center min-h-screen mb-20"
          id="contact"
        >
          <div className="w-full max-w-md p-8 space-y-6 bg-green-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-white">
              Contact Us
            </h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full text-black px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full text-black px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full text-black px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your Message"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 font-bold text-white bg-green-700 rounded-md hover:bg-green-900 duration-500 focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
