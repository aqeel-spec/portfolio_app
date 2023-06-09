import React, { useId } from "react";
import { AboutMe, ProfessionalData, SkillsType } from "../types/cvTypes";
import Skills from "./skills";

type Data = {
  data: AboutMe;
  skills: SkillsType;
};
function AboutMe({ data, skills }: Data) {
  const { title, body } = data;
  const id = useId();
  return (
    <section>
      <h2 className="mb-8 font-bold uppercase text-5xl">{title}</h2>
      {body?.map((ele, i) => (
        <p key={`${id}_${i}`} className="mb-6">
          {ele}
        </p>
      ))}
      <Skills data={skills} />
    </section>
  );
}

export default AboutMe;
