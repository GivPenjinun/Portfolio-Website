import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  LinkedinIcon,
  GithubIcon,
  MoonIcon,
  SunIcon,
  EmailIcon,
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

export default function NavBar() {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <>
      <header className="w-full px-32 py-8 font-medium flex items-center justify-between text-dark dark:text-light">
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
      </header>
    </>
  );
}
