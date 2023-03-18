"use client";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "@/app/styles";
import { SectionWrapper } from "./hoc";
import { projects } from "@/portfolioData/data";
import { fadeIn, textVariant } from "@/utils/motion";
import { Projects } from "@/types/dType";
import Image from "next/image";
//import github from "/public/github.png";
import { github } from "@/public/assets";
import IconIconView from "./icons/view";

type Data = {
  projects: Projects;
};
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  visit,
}: {
  index: any;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: any;
  visit?: string;
  source_code_link: string;
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full "
      >
        <div className="relative w-full h-[230px] ">
          <Image
            src={image}
            fill
            alt="Projects Image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="justify-end m-3 card-img_hover absolute inset-0 flex">
            <div
              className="flex cursor-pointer justify-center items-center black-gradient w-10 h-10 rounded-full"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <Image
                src={github}
                alt="github logo image"
                className="h-1/2 w-1/2  object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-bold text-[24px] ">{name}</h3>
            <a
              href={visit}
              className="mr-[20px]   black-gradient p-2 rounded-full "
            >
              {" "}
              <IconIconView className="h-8 w-8 hover:text-green-300 ease-in-out duration-300" />{" "}
            </a>
          </div>
          <p className="mt-2 text-secondary text-[14px] ">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color} `}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant(1.2)}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p className="mt-3 text-secondary max-w-3xl leading-[30px] ">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="flex mt-20 flex-wrap gap-7">
        {projects.map((ele, i) => (
          <ProjectCard key={`project-${i}`} {...ele} index={i} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
