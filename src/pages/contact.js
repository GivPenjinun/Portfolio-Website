import React from "react";
import { Layout } from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const contact = () => {
  const form = useRef();
  const {
    register,
    trigger, // use to validate
    formState: { errors },
  } = useForm();

  const sendEmail = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    } else {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_t9xj43a",
          "template_t86uktp",
          form.current,
          "i5A3WOfd_LBKexGIt"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      alert("Email was sent successfully!");
    }
  };

  return (
    <>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16 flex flex-col items-center justify-center">
          <AnimatedText
            text="Contact Me"
            className="mb-20 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="w-2/3 flex items-center justify-center rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12 xs:p-4 md:w-3/4 sm:w-full lg:w-3/4 relative rounded-br-2xl">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light" />
            <div className="w-full">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col w-full gap-6 text-dark dark:text-light"
              >
                <div className="flex flex-col gap-2">
                  <label>Name:</label>
                  <input
                    className="w-full text-light focus:outline-dark rounded-lg h-auto placeholder:p-2 p-2 placeholder:italic  "
                    type="text"
                    placeholder="Your Name"
                    name="user_name"
                    {...register("user_name", { required: true })}
                  />
                  {errors.user_name && (
                    <p className="text-red-500 mt-1">
                      {errors.user_name.type === "required" &&
                        "This field is required."}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label>Email:</label>
                  <input
                    className="w-full text-light focus:outline-dark rounded-lg h-auto placeholder:p-2 p-2 placeholder:italic "
                    type="email"
                    placeholder="Your Email"
                    name="user_email"
                    {...register("user_email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                  />
                  {errors.user_email && (
                    <p className="text-red-500 mt-1">
                      {errors.user_email.type === "required" &&
                        "This field is required."}
                      {errors.user_email.type === "pattern" &&
                        "Invalid email address."}
                    </p>
                  )}
                </div>{" "}
                <div className="flex flex-col gap-2">
                  <label>Subject:</label>
                  <input
                    className="w-full text-light  focus:outline-dark rounded-lg h-auto placeholder:p-2 p-2 placeholder:italic "
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    {...register("subject", { required: true })}
                  />
                  {errors.user_name && (
                    <p className="text-red-500 mt-1">
                      {errors.subject.type === "required" &&
                        "This field is required."}
                    </p>
                  )}
                </div>{" "}
                <div className="flex flex-col gap-2">
                  <label>Message:</label>
                  <textarea
                    className="resize-none w-full text-light  focus:outline-dark rounded-lg h-auto placeholder:p-2 p-2 placeholder:italic "
                    name="message"
                    cols={30}
                    rows={10}
                    {...register("message", {
                      required: true,
                      maxLength: 2000,
                    })}
                    placeholder="Your Message"
                  />
                  {errors.message && (
                    <p className="text-red-500 mt-1">
                      {errors.message.type === "required" &&
                        "This field is required."}
                      {errors.message.type === "maxLength" &&
                        "Max length is 2000 char."}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold border-2 border-dark active:bg-light active:text-dark active:dark:bg-dark active:dark:text-light active:dark:border-2 active:dark:border-light"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default contact;
