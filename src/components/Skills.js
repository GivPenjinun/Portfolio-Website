import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="py-3 px-6 flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark dark:bg-light dark:text-dark cursor-pointer absolute "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h1 className="font-bold text-8xl mt-64 w-full text-center">
        Skills & Tools
      </h1>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark dark:bg-light dark:text-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="23vw" y="6vw" />
        <Skill name="ReactJS" x="20vw" y="-15vw" />
        <Skill name="Tailwind CSS" x="-15vw" y="-12vw" />
        <Skill name="NodeJS" x="30vw" y="-5vw" />
        <Skill name="Express" x="0vw" y="-22vw" />
        <Skill name="PostgresSQL" x="-23vw" y="18vw" />
        <Skill name="MongoDB" x="12vw" y="-8vw" />
        <Skill name="Postman" x="-16vw" y="-20vw" />
        <Skill name="Git & Github" x="-30vw" y="6vw" />
        <Skill name="Supabase" x="18vw" y="18vw" />
      </div>
    </>
  );
};

export default Skills;
