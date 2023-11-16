import handler from "@/pages/api/hello";
import React, { useState, useEffect } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefer-color-scheme:dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery); //check user's preference
    const userPref = window.localStorage.getItem("theme");

    //ใช้เพื่อcheck configต่างๆของuserเพื่อปรับการตั้งค่าdark ให้เหมาะสม
    const handleChange = () => {
      if (userPref) {
        let check = userPref === "dark" ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        //if user's tool prefer dark it will automatically be dark theme
        let check = mediaQuery.matches ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange); //หากเกิดchangeในmediaQuery handleChangeจะทำงาน

    return () => mediaQuery.removeEventListener("change", handleChange); //cleanup function to remove the event listener when the component unmounts
  }, []);

  //จะทำงานเมื่อmodeเปลี่ยน
  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else if (mode === "light") {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
