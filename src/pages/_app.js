import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Penjinun Portfolio</title>
        <meta name="description" content="Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark `}
      >
        <NavBar />
        {/*คำสั่ง AnimatePresence ใช้สำหรับทำanimate exit ส่วนmode="wait"เป็นการระบุให้รอexitจบก่อน ใช้keyเพื่อระบุถึงทุกurl */}
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
