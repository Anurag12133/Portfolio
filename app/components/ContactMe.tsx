"use client";
// import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};
const ContactMe = ({}: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formdata) => console.log(formdata);

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        CONTACT
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+918837865348</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Dasuya, Punjab</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">ranu47243@gmail.com</p>
          </div>
        </div>
        <form className="flex flex-col space-y-2 w-fit mx-auto ">
          <div className="flex space-x-2">
            <input
              {...register("name")}
              type="text"
              placeholder=" Name"
              className="contactInput"
            />
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="contactInput"
            />
          </div>
          <input
            {...register("subject")}
            className="contactInput"
            placeholder="Subject"
            type="text"
          />
          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Message"
          ></textarea>
          <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
