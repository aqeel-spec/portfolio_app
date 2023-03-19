import React from "react";
import {
  aboutMe,
  personalData,
  professionalData,
  skills,
} from "@/components/CV_dATA/data/cvData";
import AboutMe from "@/components/CV_dATA/component/AboutMe";
import ProfessionalExperence from "@/components/CV_dATA/component/pExperence";
import Sidebar from "@/components/CV_dATA/component/sidebar";

function Cv_HomePage() {
  return (
    <div>
      <div className="container min-h-screen grid sm:grid-cols-[22rem,1fr] grid-rows-[auto,1fr,auto]">
        <div className="sidebar">
          <Sidebar data={personalData} />
        </div>
        <div className="main">
          <AboutMe data={aboutMe} skills={skills} />
          <ProfessionalExperence data={professionalData} />
        </div>
        <footer className="  bg-primary text-center text-sm font-bold col-span-full">
          © Copyright 2023, Aqeel Shahzad
        </footer>
      </div>
    </div>
  );
}

export default Cv_HomePage;
