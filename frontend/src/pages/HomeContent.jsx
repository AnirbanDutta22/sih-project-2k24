import React from "react";
import ayurveda from "../assets/ayurveda.jpg";
import yoga from "../assets/yoga.jpeg";
import BarChartHome from "../components/charts/BarChartHome";
import { LuClipboardSignature } from "react-icons/lu";
import { FaClock, FaShieldAlt } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import MarqueeItem from "../components/MarqueeItem";
import mii from "../assets/mii.png";
import data_gov from "../assets/data_gov.png";
import go_web from "../assets/go_web.png";
import national_service from "../assets/national_service.png";
import ayush_ministry from "../assets/ayush_ministry.png";
import digital_india from "../assets/digital_india.png";
import pm_gati from "../assets/pm_gati.png";
import ayurveda_icon from "../assets/ayurveda_icon.png";
import homeopathy_icon from "../assets/homeopathy_icon.png";
import unani from "../assets/unani.png";
import yoga_icon from "../assets/yoga.png";
import sidha_icon from "../assets/sidha_icon.png";
import sowa_rigpa from "../assets/sowa_rigpa.png";

const sectors = [
  {
    name: "Ayurveda",
    icon: ayurveda_icon,
    iconType: "image",
    color: "bg-[#55ed55]",
  },
  {
    name: "Yoga",
    icon: yoga_icon,
    iconType: "image",
    color: "bg-[#fcfc6d]",
  },
  {
    name: "Unani",
    icon: unani,
    iconType: "image",
    color: "bg-[#ff8093]",
  },
  {
    name: "Sidha",
    icon: sidha_icon,
    iconType: "image",
    color: "bg-[#ffb574]",
  },
  {
    name: "Homeopathy",
    icon: homeopathy_icon,
    iconType: "image",
    color: "bg-[#65c5e5]",
  },
  {
    name: "Sowa-Rigpa",
    icon: sowa_rigpa,
    iconType: "image",
    color: "bg-[#598fd7]",
  },
];

const portalFeatures = [
  {
    title: "Streamlined Registration",
    description: "Simplified application process.",
    icon: <LuClipboardSignature />,
  },
  {
    title: "Real-Time Tracking",
    description: "Monitor your application status.",
    icon: <FaClock />,
  },
  {
    title: "Secure Document Upload",
    description: "Safely upload and manage your documents with encryption.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Resource Hub",
    description: "Access to guidelines, documents, and support.",
    icon: <FaFolderOpen />,
  },
  {
    title: "Multilingual Support",
    description: "Available in multiple languages for wider accessibility.",
    icon: <GrLanguage />,
  },
];

const marqueeList = [
  mii,
  data_gov,
  go_web,
  national_service,
  ayush_ministry,
  digital_india,
  pm_gati,
];

const HomeContent = () => {
  return (
    <section className="h-full">
      {/* slider */}
      <div className="h-[75vh]">
        <div className="h-full">
          <img src={ayurveda} alt="" className="w-full h-full" />
        </div>
      </div>
      {/* about */}
      <div className="w-full bg-violet-50 p-6">
        <div className="w-[65%] mx-auto my-6 flex justify-center items-center gap-x-10">
          <img
            src={ayurveda}
            alt="ayush_about"
            className="w-[36rem] h-[20rem] border-l-[30px] border-b-[30px] border-violet-500/70 shadow-lg"
          />
          <div className="flex flex-col gap-y-4">
            <h1 className="relative welcomeText before:absolute before:content-[''] before:w-24 before:h-1 before:-bottom-2 before:left-0 before:translate-x-0  before:bg-violet-500">
              About AYUSH Startup Portal
            </h1>
            <p className="text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident consequatur sunt repellat reprehenderit voluptatem,
              nesciunt consequuntur incidunt neque unde doloremque, excepturi
              quis. Minima laudantium atque excepturi consequatur qui nulla
              sit!excepturi quis. Minima laudantium atque excepturi consequatur
              qui nulla sit!excepturi quis. Minima laudantium atque excepturi
              consequatur qui nulla sit!excepturi quis. Minima laudantium atque
              excepturi consequatur qui nulla sit
            </p>
            <button className="btn-secondary w-fit">read more</button>
          </div>
        </div>
      </div>
      {/* features highlight */}
      <div className="w-full my-[3rem]">
        {/* <h1 className="relative welcomeText text-center before:absolute before:content-[''] before:w-14 before:h-1 before:-bottom-2 before:left-[48%] before:translate-x-[-48%]  before:bg-violet-500">
          features
        </h1> */}
        <div className="w-[75%] mx-auto flex justify-center mt-12">
          {portalFeatures.map((feature, i) => (
            <div
              className={`flex flex-col gap-y-2 items-center text-center ${
                i % 2 !== 0 ? "pt-36" : "mt-0"
              }`}
              key={i}
            >
              <i className="text-4xl text-yellow-400">{feature.icon}</i>
              <div>
                <h1 className="text-2xl text-violet-800 font-bold whitespace-nowrap">
                  {feature.title}
                </h1>
                <p className="font-medium">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ayush sectors */}
      <div className="w-full p-6 bg-violet-50">
        <div className="w-[75%] mx-auto my-12 flex flex-col justify-center items-center gap-y-10">
          <h1 className="relative welcomeText text-center before:absolute before:content-[''] before:w-28 before:h-1 before:-bottom-2 before:left-0 before:translate-x-0  before:bg-violet-500">
            AYUSH Startup Sectors
          </h1>
          <div className="grid grid-cols-3 gap-10">
            {sectors.map((sector, i) => (
              <div
                className="relative w-[25rem] h-auto shadow-md flex flex-col p-4 bg-white rounded-md"
                key={i}
              >
                <div
                  className={`w-full h-32 flex items-center justify-center rounded-md ${sector.color}`}
                >
                  {sector.iconType === "image" ? (
                    <img src={sector.icon} alt="icon" className="size-20" />
                  ) : (
                    sector.icon
                  )}
                </div>
                <div className="text-center py-3 font-semibold text-xl">
                  <span>{sector.name}</span>
                </div>
                <button className="btn-primary bg-violet-800 hover:bg-violet-900 absolute top-6 right-6 px-2">
                  register
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* latest updates */}
      <div className="w-full p-6">
        <h1 className="relative welcomeText text-center before:absolute before:content-[''] before:w-24 before:h-1 before:-bottom-2 before:left-[46%] before:translate-x-[-46%]  before:bg-violet-500">
          Latest Updates
        </h1>
      </div>
      {/* user testimonials */}
      <div className="w-full p-6 bg-violet-500 text-white">
        <h1 className="relative welcomeText text-center before:absolute before:content-[''] before:w-24 before:h-1 before:-bottom-2 before:left-[44.5%] before:translate-x-[-44.5%] before:bg-yellow-200">
          User Testimonials
        </h1>
      </div>
      {/* news and blogs */}
      <div className="w-full p-6">
        <h1 className="relative welcomeText text-center before:absolute before:content-[''] before:w-24 before:h-1 before:-bottom-2 before:left-[45.5%] before:translate-x-[-45.5%]  before:bg-violet-500">
          News and blogs
        </h1>
      </div>
      {/* trends and charts */}
      <div className="flex items-center justify-center p-6 shadow-xl">
        <BarChartHome />
      </div>
      {/* associate govs */}
      <div className="container mx-auto my-6 flex justify-center items-center gap-x-3 overflow-hidden">
        <MarqueeItem images={marqueeList} from={0} to={"-100%"} />
      </div>
    </section>
  );
};

export default HomeContent;
