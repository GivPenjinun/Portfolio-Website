import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  LinkedinIcon,
  GithubIcon,
  MoonIcon,
  SunIcon,
  EmailIcon,
  MenuIcon,
  CloseIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${className} relative group text-dark dark:text-light`}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0" //หากpathของrouterตรงกับurlจะให้แสดงผลw-full
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

/* To close the menu when click link create the new one */
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  /* to push href to url */
  const handleClick = () => {
    toggle(); // pass function through toggle prop
    router.push(href);
  };
  return (
    <button
      onClick={handleClick}
      href={href}
      className={`${className} relative group text-light dark:text-dark my-4`}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0" //หากpathของrouterตรงกับurlจะให้แสดงผลw-full
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

export default function NavBar() {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="relative w-full px-32 py-8 font-medium flex items-center justify-between text-dark dark:text-light">
        <button
          className="text-dark dark:text-light text-xl hidden lg:flex"
          onClick={handleClick}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <div className="lg:hidden w-full flex justify-between items-center">
          <nav className="flex flex-row gap-10">
            <CustomLink href="/" title="Home" />
            <CustomLink href="/about" title="About Me" />
            <CustomLink href="/projects" title="Projects" />
            <CustomLink href="/contact" title="Contact" />
          </nav>
          <button
            onClick={() => {
              setMode(mode === "light" ? "dark" : "light");
            }}
            className={`flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark "} />
            ) : (
              <MoonIcon className={"fill-dark "} />
            )}
          </button>
          <nav className="flex items-center justify-center flex-wrap gap-4 text-dark dark:text-light">
            <motion.a
              href="https://www.linkedin.com/in/penjinun-wattanaparueda/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6"
            >
              <LinkedinIcon />
            </motion.a>
            <motion.a
              href="https://github.com/GivPenjinun"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="mailto:penjinun.watt@gmail.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6"
            >
              <EmailIcon />
            </motion.a>
          </nav>
        </div>

        {isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            className="z-30 bg-dark/75 dark:bg-light/75  rounded-lg backdrop-blur-md py-32 min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <nav className="flex flex-col items-center justify-center ">
              <CustomMobileLink href="/" title="Home" toggle={handleClick} />
              <CustomMobileLink
                href="/about"
                title="About Me"
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/projects"
                title="Projects"
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/contact"
                title="Contact"
                toggle={handleClick}
              />
            </nav>
            <div className="flex flex-row gap-10 mt-4 sm:gap-4">
              <button
                onClick={() => {
                  setMode(mode === "light" ? "dark" : "light");
                }}
                className={`flex items-center justify-center rounded-full p-1 ${
                  mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
                }`}
              >
                {mode === "dark" ? (
                  <SunIcon className={"fill-dark "} />
                ) : (
                  <MoonIcon className={"fill-dark "} />
                )}
              </button>
              <nav className="flex items-center justify-center flex-wrap gap-10 sm:gap-4 text-light dark:text-dark">
                <motion.a
                  href="https://www.linkedin.com/in/penjinun-wattanaparueda/"
                  target={"_blank"}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-6"
                >
                  <LinkedinIcon />
                </motion.a>
                <motion.a
                  href="https://github.com/GivPenjinun?tab=repositories"
                  target={"_blank"}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-6"
                >
                  <GithubIcon />
                </motion.a>
                <motion.a
                  href="mailto:penjinun.watt@gmail.com"
                  target={"_blank"}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-6"
                >
                  <EmailIcon />
                </motion.a>
              </nav>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
}
