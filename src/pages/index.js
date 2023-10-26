import { Layout } from "@/components/Layout";
import Head from "next/head";
import profilePic from "../../public/images/profile/index-image.png";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import { ExternalLink } from "@/components/Icons";
import Link from "next/link";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";
import ParticleContainer from "@/components/ParticleContainer";
import Typed from "typed.js";
import React from "react";

export default function Home() {
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: ["Fullstack", "Backend", "Frontend", "Fullstack"],
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 1000,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <>
      <TransitionEffect />

      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full gap-4 lg:flex-col">
            <ParticleContainer />
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Profile image"
                className="w-full h-auto lg-hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full">
              <AnimatedText
                text="Transform Ideas Into Reality"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl  "
              />

              <h1 className="text-4xl font-bold my-5 text-dark dark:text-light xl:!text-3xl lg:!text-center lg:!text-4xl md:!text-3xl sm:!text-xl">
                I&#39;m a{" "}
                <span
                  className="text-primary dark:text-primaryDark"
                  style={{ whiteSpace: "pre" }}
                  ref={el}
                />{" "}
                Developer
              </h1>
              <p className="my-4 text-base font-medium">
                As an enthusiastic software developer, I am dedicated to turning
                ideas into web applications. Explore all of my projects,
                experiences, education, and all those things about me.
              </p>
              <div className="flex items-center mt-2 self-center">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="md:p-2 md:text-base md:px-4 dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:border-light hover:dark:text-light flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  Resume <ExternalLink className="w-7 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
}

//ใส่คอมเม้นอธิบายการทำdark mode
