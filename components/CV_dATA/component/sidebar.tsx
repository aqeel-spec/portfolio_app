import React, { useId } from "react";
import { PersonalData } from "../types/cvTypes";
import Image from "next/image";
//import Profile from "../../public/pi.jpg";
import {
  FaBeer,
  FaDiscord,
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaVoicemail,
} from "react-icons/fa";

type Data = {
  data: PersonalData;
};
import Profile from "../../../public/quiz.png";

function Sidebar({ data }: Data) {
  const { name, role, education, contactLinks } = data;
  const id = useId();
  return (
    <div className="  content-between content ">
      <div className="text-white p-10 flex flex-col flex-grow items-center">
        <Image
          src={Profile}
          priority
          className="rounded-full h-full  object-cover object-top"
          height={300}
          width={300}
          alt="mt picture"
        />
        <h1 className="mb-2 text-5xl font-extrabold sm:text-[2.1rem] ">
          {name}
        </h1>
        <h2 className="mb-8">{role}</h2>
        {education.map((edu) => (
          <p className="mb-2" key={edu}>
            {edu}
          </p>
        ))}
        {/* <p className="mb-2">{education[1]}</p> */}
        <div className="text-white text-center mb-4 mt-4 sm:mt-8">
          <h3 className="mb-2 uppercase text-3xl font-bold">Contact me</h3>
          <div className="flex flex-row justify-center gap-4 ">
            <a
              className="icons-contactme"
              href={contactLinks?.[0]}
              aria-label="email link"
            >
              <FaTwitter />
            </a>
            <a
              className="icons-contactme"
              href={contactLinks?.[1]}
              aria-label="email link"
            >
              <FaFacebook />
            </a>
            <a
              className="icons-contactme"
              href={contactLinks?.[2]}
              aria-label="email link"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="icons-contactme"
              href={contactLinks?.[2]}
              aria-label="email link"
            >
              <FaDiscord />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
