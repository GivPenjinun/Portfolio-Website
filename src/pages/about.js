import AnimatedText from "@/components/AnimatedText";
import React from "react";
import { Layout } from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/photo-resume.jpg";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import TransitionEffect from "@/components/TransitionEffect";

const About = () => {
  return (
    <>
      <TransitionEffect />
      <main className="text-dark flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Work With Passion!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid grid-cols-6 gap-18 sm:gap-8 w-full justify-items-center">
            {/*หากมีจำนวนprojectทางด้านขวาใช้ grid-cols-8 */}
            <div className="ml-16 xl:ml-0 flex text-xl flex-col col-span-3 xl:col-span-8 xl:order-2 items-start justify-center gap-2">
              <h2 className="font-bold uppercase text-dark/75 dark:text-light"></h2>
              <p className="font-medium mb-4">
                I&#39;m Penjinun Wattanaparueda. I have a strong interest in a
                junior web Developer position. With a passion for coding and a
                solid foundation in web development, I am excited to contribute
                my skills and enthusiasm to your team.
              </p>
              <p className="font-medium my-4">
                As a recent graduate from TechUp Bootcamp, I have gained
                hands-on experience in front-end and back-end development, along
                with proficiency in popular programming languages such as HTML,
                CSS, and JavaScript. I am eager to leverage my knowledge to
                create responsive, user-friendly, and visually appealing web
                applications that align with your company&#39;s goals and
                vision.
              </p>
              <p className="font-medium my-4">
                {" "}
                My dedication to staying current with industry best practices
                and my ability to quickly adapt to new technologies make me a
                valuable asset for your organization. I am a proactive problem
                solver, an effective communicator, and a team player who is
                committed to delivering high-quality work on time. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="col-span-3 xl:mb-16 sm:mb-8 xl:col-span-8 md:col-span-8 xl:items-center xl:order-1 relative max-w-[400px] h-max rounded-2xl border-2 border-solid border-dark bg-light dark:border-light dark:bg-dark p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="profile image"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  );
};

export default About;
