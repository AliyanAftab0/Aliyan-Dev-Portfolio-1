"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Logo.png";
import menu from "../../public/menu.png";
import cross from "../../public/cross.png";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateMenu, setAnimateMenu] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const toggleMenu = () => {
    if (menuOpen) {
      setAnimateMenu(false); // Trigger the slide-up animation
      setTimeout(() => {
        setMenuOpen(false);
      }, 300); // Duration of the slide-up animation
    } else {
      setMenuOpen(true);
      setAnimateMenu(true); // Trigger the slide-down animation
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900&display=swap"
        rel="stylesheet"
      />
      <div>
        <nav
          className={`flex justify-between px-8 py-1 h-[60px] dark:bg-dark ${
            isSticky ? "fixed top-0 left-0 right-0 z-50" : ""
          }`}
        >
          <span className="-mx-7 -my-12 max-md:w-[100]">
            <Link href="#home">
              <Image
                className="rounded-full dark:text-white"
                src={Logo}
                width={150}
                height={150}
                alt="Aliyan Dev"
              />
            </Link>
          </span>
          <ul className="flex fixed right-0 gap-5 py-2 mr-24 max-md:hidden">
            <Link href="#home">
              <li
                className={`mx-2 my-2 text-black hover:border-b-2 hover:border-cyan-400 dark:text-white pacifico-regular ${
                  activeSection === "home" ? "border-b-2 border-cyan-400" : ""
                }`}
              >
                Home
              </li>
            </Link>
            <Link href="#about">
              <li
                className={`mx-2 my-2 text-black hover:border-b-2 hover:border-cyan-400 dark:text-white pacifico-regular ${
                  activeSection === "about" ? "border-b-2 border-cyan-400" : ""
                }`}
              >
                About
              </li>
            </Link>
            <Link href="#services">
              <li
                className={`mx-2 my-2 text-black hover:border-b-2 hover:border-cyan-400 dark:text-white pacifico-regular ${
                  activeSection === "services"
                    ? "border-b-2 border-cyan-400"
                    : ""
                }`}
              >
                Services
              </li>
            </Link>
            <Link href="#contact">
              <li
                className={`mx-2 my-2 text-black hover:border-b-2 hover:border-cyan-400 dark:text-white pacifico-regular ${
                  activeSection === "contact"
                    ? "border-b-2 border-cyan-400"
                    : ""
                }`}
              >
                Contact
              </li>
            </Link>
          </ul>
          <span className="py-2 max-sm:-mr-36">
            <ThemeToggle />
          </span>
          <span className="max-md:flex max-md:my-3 max-md:block md:hidden">
            <Image
              src={menuOpen ? cross : menu}
              width={30}
              height={30}
              alt={menuOpen ? "Close Menu" : "Open Menu"}
              className="max-md:cursor-pointer"
              onClick={toggleMenu}
            />
          </span>
        </nav>
        <div
          className={`fixed top-[60px] right-0 w-full bg-white flex flex-col items-center justify-center gap-5 py-2 z-50 md:hidden ${
            animateMenu
              ? "animate-slideDown"
              : menuOpen
              ? ""
              : "animate-slideUp"
          }`}
          style={{ display: menuOpen || animateMenu ? "flex" : "none" }}
        >
          <Link href="#home" onClick={toggleMenu}>
            <li
              className={`mx-2 my-2 text-black hover:border-b-2 hover:border-cyan-400 pacifico-regular ${
                activeSection === "home" ? "border-b-2 border-cyan-400" : ""
              }`}
            >
              Home
            </li>
          </Link>
          <Link href="#about" onClick={toggleMenu}>
            <li
              className={`mx-2 my-2 text-black hover:border-b-2 hover:border-cyan-400 pacifico-regular ${
                activeSection === "about" ? "border-b-2 border-cyan-400" : ""
              }`}
            >
              About
            </li>
          </Link>
          <Link href="#services" onClick={toggleMenu}>
            <li
              className={`mx-2 my-2 text-black hover:border-b-2 hover:border-cyan-400 pacifico-regular ${
                activeSection === "services" ? "border-b-2 border-cyan-400" : ""
              }`}
            >
              Services
            </li>
          </Link>
          <Link href="#contact" onClick={toggleMenu}>
            <li
              className={`mx-2 my-2 text-black hover:border-b-2 hover:border-cyan-400 pacifico-regular ${
                activeSection === "contact" ? "border-b-2 border-cyan-400" : ""
              }`}
            >
              Contact
            </li>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;