import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Toolkit from "./components/Toolkit";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="max-sm:w-screen max-md:w-screen max-lg:w-screen dark:text-white">
        <Navbar />
        <section id="home">
          <Main />
        </section>
        <hr className="bg-slate-200 my-2 mx-5 h-[2px]" />
        <section id="about">
          <About />
        </section>
        <hr className="bg-slate-200 my-2 mx-5 h-[2px]" />
        <section>
          <Toolkit />
        </section>
        <hr className="bg-slate-200 my-2 mx-5 h-[2px]" />
        <section id="services">
          <Service />
        </section>
        <hr className="bg-slate-200 my-2 mx-5 h-[2px]" />
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </>
  );
}
