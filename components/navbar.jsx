"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import SunButton from "./sunButton";
import Button from "./button";
import { useState } from "react";
import { useTheme } from "@/utils/ThemeContext";
import ContactModal from "./ui/contactModal";
import { gsap } from "gsap";

export default function Navbar() {
  const { theme } = useTheme(); // Access the theme from the context
    const [isContactModalOpened, setIsContactModalOpened] = useState(false);


  return (
    <>
      <nav className="fixed bg-transparent p-5 sm:p-7 md:p-8 w-full z-10 top-0 max-w-[1300px] place-self-center">
        <div className="flex w-full max-w-7xl place-self-center justify-between">
          <img
            className="w-[39px] h-[42px]"
            src={
              theme === "dark"
                ? "/img/INOVALINK_LOGO_ON_BLACK.png"
                : "/img/INOVALINK_LOGO_ON_WHITE.png"
            }
            alt="Logo"
            width="1920"
            height="1080"
          />
          <div className="flex gap-5 items-center">
            <SunButton/>
            <Button
              onClick={() => setIsContactModalOpened(true)}
              text="Contact"
              className=" font-normal bg-primary-5 hover:bg-primary-6 focus:bg-primary-4.1 text-foundation-white  dark:text-foundation-black dark:bg-neutral-0 dark:hover:bg-neutral-2 dark:focus:bg-neutral-2"
            />
            
          </div>
          <ContactModal
            isOpen={isContactModalOpened}
            onClose={() => setIsContactModalOpened(false)}
          />
        </div>
      </nav>
    </>
  );
}
 