import React from "react";
import "../styles/globals.css"

const Footer = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <footer className="h-12 bg-cyan-100 dark:bg-slate-800 flex justify-center items-center text-center ">
        <p className="pacifico-regular">
          Developed and Designed by <span className="pacifico-regular text-cyan-800">&lt;</span><span className="pacifico-regular text-cyan-800">/</span><span className="pacifico-regular text-cyan-800">&gt;</span>Aliyan
          <span className="pacifico-regular text-cyan-800">Dev</span>
        </p>
      </footer>
    </>
  );
};

export default Footer;
