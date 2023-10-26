import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, time, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className=" my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        className="flex flex-col gap-2"
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}
        </h3>
        <h3 className="capitalize font-bold text-xl text-primary dark:text-primaryDark">
          @{company}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light xs:text-sm ">
          {time}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 ">
        Education & Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Bachelor’s Degree in Environmental Science [GPA 3.62]"
            company="Mahidol University"
            time="2012-2014"
            work=""
          />
          <Details
            position="Office Administrator"
            company="T.M.System Limited"
            time="2015-2017"
            work="Organized formal reports for the engineering team and formal reports for accountants and financial officer.
            Coordinated and communicate between the teams, the subcontracts, the customers, and the other shareholders
            "
          />
          <Details
            position="Master’s Degree in Business Administration [GPA 3.91]
            "
            company="Chulalongkorn University"
            time="2017-2019"
            work=""
          />
          <Details
            position=" e-commerce business owner"
            company="Self-employ"
            time="2017-2022"
            work="Imported products from China. Advertised on online platforms, both organic and paid traffic, and did SEO and SEM by using social media platforms such as Facebook, Google, Youtube, e-commerce websites, Lazada, LineOA, and Instagram; made 20–35% in profit. Created content for core customers that is suitable for specific platforms."
          />

          <Details
            position="Full-Stack Software Developer in training"
            company="TechUp BootCamp"
            time="2023"
            work="Studied in 
            Front-End Dev: HTML, CSS, Javascript, React.
            Back-End Dev: NodeJS, MongoDB, SQL, PostgreSQL, ExpressJS.      
            Other: Git, GitHub, Postman.
            "
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
