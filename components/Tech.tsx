"use client";
import { SectionWrapper } from "./hoc";
import { technologies } from "@/portfolioData/data";
import Image from "next/image";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-4">
      {technologies.map((tech, i) => (
        <motion.div
          variants={fadeIn("left", "spring", 0.5 * i, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          whileHover={{ scale: 0.95 }}
          className="w-fit h-auto rounded-sm bg-secondary my-auto content-center text-center items-center justify-center hover:border-b-2 cursor-pointer hover:border-white "
          key={tech.name}
        >
          <div className="flex flex-row gap-2 px-6  py-3">
            <Image src={tech.icon} alt="skills" height={17} width={24} />
            <p>{tech.name}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
