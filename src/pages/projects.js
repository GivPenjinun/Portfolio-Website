import AnimatedText from "@/components/AnimatedText";
import { Layout } from "@/components/Layout";
import React from "react";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import Image from "next/image";
import project1 from "../../public/images/projects/petsitter.JPG";
import project2 from "../../public/images/projects/todoapp.JPG";
import project3 from "../../public/images/projects/portfolio-web.JPG";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProjects = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  project,
}) => {
  return (
    <div className="w-full text-dark flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12 relative rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 xs:w-full sm:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 overflow-hidden cursor-pointer rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 0.9 }}
          transition={{ duration: 0.1 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 dark:text-light lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link href={link} className="hover:underline hover:underline-offset-2 ">
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center gap-4 dark:text-light text-dark ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={project}
            target="_blank"
            className="rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </div>
  );
};

const projects = () => {
  return (
    <>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="All Projects"
            className="mb-32 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 mg:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProjects
                type="Techstack: React, MUI, Tailwind, Supabase, Prisma, Node.js, Express, Postgres"
                title="Petsitter Application"
                summary="Pet sitter applications were developed for pet lovers to find suitable pet sitters for their lovely pets.                
                This is the final project from boot camp for working as a team by using the Agile and Scrum methods, studying, and testing our skills. Now deployed by Render"
                link="https://github.com/GivPenjinun/Pet-Sitter-App"
                github="https://github.com/GivPenjinun/Pet-Sitter-App"
                project="https://pet-sitter-app-client.vercel.app/"
                img={project1}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProjects
                type="Techstack: Next.js, Frammer-motion, Tailwind"
                title="Portfolio Website"
                summary="To introduce myself while developing my skills by using Next.js and Frammer-motion for the first time. To show all of my skills, experience, education, and projects."
                link="https://github.com/GivPenjinun/Portfolio-Website"
                github="https://github.com/GivPenjinun/Portfolio-Website"
                project="/"
                img={project3}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProjects
                type="Techstack: React, Node.js, Express, PostgresSQL"
                title="Todo-App"
                summary="Todo Application that has CRUD API so it can create, update, delete and read all lists by using Postgres and install the database on Vercel. Now, Deployed by vercel"
                link="https://github.com/GivPenjinun/todoapp-postgres/tree/main"
                github="https://github.com/GivPenjinun/todoapp-postgres/tree/main"
                project="https://todoapp-postgres-client.onrender.com"
                img={project2}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
