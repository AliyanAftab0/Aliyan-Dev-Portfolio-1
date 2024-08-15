import Image from "next/image";
import HTML from "../../public/html.png";
import Css from "../../public/css.png";
import Js from "../../public/js.png";
import Ts from "../../public/ts.png";
import Py from "../../public/py.png";
import TCss from "../../public/tcss.png";
import RJs from "../../public/react.png";
import Njs from "../../public/next.png";
import AnimatedToolKit from "./AnimatedToolkit";

const Toolkit = () => {
  return (
    <div className="py-20">
      <AnimatedToolKit>
        <h1 className="text-3xl pacifico-regular text-center -mt-12 mb-8 text-cyan-700 dark:text-cyan-400">ToolKit</h1>
        <hr className="bg-slate-200 my-2 mx-5 h-[2px]" />
        <div className="flex flex-col items-center ">
          <h1 className="text-4xl pacifico-regular my-10 shadow-inner shadow-cyan-300">My Toolkit💻</h1>
          <ul className="flex justify-center items-center gap-14 max-sm:gap-10 mb-10">
            <li className="pacifico-regular flex flex-col items-center">
              <Image src={HTML} width={50} height={50} alt="HTML" />
              HTML
            </li>
            <li className="pacifico-regular flex flex-col items-center">
              <Image src={Css} width={50} height={50} alt="CSS" />
              CSS
            </li>
            <li className="pacifico-regular flex flex-col items-center">
              <Image src={Js} width={50} height={50} alt="JavaScript" />
              JavaScript
            </li>
            <li className="pacifico-regular flex flex-col items-center">
              <Image src={Ts} width={50} height={50} alt="TypeScript" />
              TypeScript
            </li>
            </ul>
            <ul className="flex justify-center items-center gap-14 max-sm:gap-10">
            <li className="pacifico-regular flex flex-col items-center">
              <Image src={Py} width={50} height={50} alt="Python" />
              Python
            </li>
            <li className="pacifico-regular flex flex-col items-center">
              <Image src={TCss} width={50} height={50} alt="Tailwind CSS" />
              Tailwind CSS
            </li>
            <li className="pacifico-regular flex flex-col items-center">
              <Image src={RJs} width={50} height={50} alt="React JS" />
              React JS
            </li>
            <li className="pacifico-regular flex flex-col items-center">
              <Image src={Njs} width={50} height={50} alt="Next JS" />
              Next JS
            </li>
          </ul>
        </div>
      </AnimatedToolKit>
    </div>
  );
};

export default Toolkit;
