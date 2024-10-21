import Marquee from "react-fast-marquee";
import { FaCss3, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";

function TextScroll() {
  return (
    <div>
      <Marquee autoFill className="bg-yellow-300 cursor-pointer ">
        <div className=" mx-3 flex items-center gap-1">
          <FaReact className="text-blue-600" />
          <p className="text-xs font-semibold text-black">React Js</p>
        </div>
        <div className=" mx-5 flex items-center gap-1">
          <IoLogoJavascript className="text-yellow-600" />
          <p className="text-xs font-semibold text-black">Javascript </p>
        </div>
        <div className=" mx-5 flex items-center gap-1">
          <RiTailwindCssFill className="text-blue-400" />
          <p className="text-xs font-semibold text-black">TailwindCssFil </p>
        </div>
        <div className=" mx-5 flex items-center gap-1">
          <FaHtml5 className="text-orange-400" />
          <p className="text-xs font-semibold text-black">HTML5 </p>
        </div>
        <div className=" mx-5 flex items-center gap-1">
          <FaSass className="text-pink-500" />
          <p className="text-xs font-semibold text-black">Sass </p>
        </div>
        <div className=" mx-5 flex items-center gap-1">
          <FaCss3 className="text-blue-400" />
          <p className="text-xs font-semibold text-black">CSS3 </p>
        </div>
      </Marquee>
    </div>
  );
}

export default TextScroll;
