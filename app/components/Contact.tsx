"use client";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import Instagram from "../../public/Instagram.png";
import Linkedin from "../../public/linkedin.png";
import Github from "../../public/github.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AnimatedSection from "./AnimatedSection";
import Thanks from "./Thanks";

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("xwpebopd");
  const router = useRouter();
  if (state.succeeded) {
    return <Thanks />;
  }

  if (state.succeeded) {
    router.push("/thanks");
  }
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700&display=swap"
        rel="stylesheet"
      />
      <div className="pacifico-regular h-[50rem]">
        <AnimatedSection className="flex justify-center items-center text-center my-8">
          <h1 className="text-3xl pacifico-regular text-cyan-700">
            Contact Us
          </h1>
        </AnimatedSection>
        <hr className="bg-slate-200 my-2 mx-5 h-[2px]" />
        <div
          id="contact"
          className="md:flex md:justify-between md:items-center lg:justify-between md:mx-36 my-32 max-lg:flex-col"
        >
          <AnimatedSection>
            <h1 className="text-3xl text-cyan-800 dark:text-cyan-400 pacifico-regular shadow-inner shadow-cyan-300">
              Let's Connect! 💌
            </h1>
            <p className="w-[23rem] py-4 pacifico-regular text-cyan-800 dark:text-cyan-400 shadow-inner shadow-cyan-300">
              If you ever want to grab a coffee/bubble tea{" "}
              <span className="pacifico-regular">(virtually)</span> or just want
              a quick chat - you can find me on social media or you can send me
              a message here!
            </p>
            <span className="flex my-3 gap-5 cursor-pointer">
              <Link href="">
                <Image src={Instagram} alt="Instagram" width={32} height={32} />
              </Link>
              <Link href="https://github.com/AliyanAftab0">
                <Image src={Github} alt="Github" width={32} height={32} />
              </Link>
              <Link href="https://www.linkedin.com/in/aliyan-aftab-b95b962b4/">
                <Image src={Linkedin} alt="Linkedin" width={32} height={32} />
              </Link>
            </span>
          </AnimatedSection>

          <AnimatedSection className="lg:w-1/2">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="pacifico-regular border-4 border-cyan-600 rounded-lg h-12 w-full my-3 px-3"
                autoComplete="off"
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <br />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Valid Email"
                className="pacifico-regular border-4 border-cyan-600 rounded-lg h-12 w-full my-3 px-3"
                autoComplete="off"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <br />
              <input
                type="text"
                name="subject"
                placeholder="Enter Your Subject"
                className="pacifico-regular border-4 border-cyan-600 rounded-lg h-12 w-full my-3 px-3"
                autoComplete="off"
                required
              />
              <ValidationError
                prefix="Subject"
                field=" Subject"
                errors={state.errors}
              />
              <br />
              <textarea
                name="comment"
                placeholder="Message"
                className="pacifico-regular border-4 border-cyan-600 rounded-lg h-40 w-full my-3 px-3 py-2 block"
                required
                autoComplete="off"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Send Message
                </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
};

export default Contact;