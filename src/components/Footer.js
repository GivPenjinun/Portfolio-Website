import React from "react";
import { Layout } from "./Layout";
import Link from "next/link";
import { UpIcon } from "./Icons";

const Footer = () => {
  return (
    <footer className="sm:text-base text-dark w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
      <Layout className="py-8 flex items-center justify-end">
        {/* <span>{new Date().getFullYear()}&copy;All Rights Reserved.</span> */}

        <Link href="/" className="animate-bounce">
          Back
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
