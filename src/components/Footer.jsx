import React from "react";
import { Link } from "react-router-dom";
import { white_logo, github, linkedin, instagram, discord } from "../assets";
import { styles } from "../styles";
import { Sball } from "./canvas";
import { Tooltip } from "react-tooltip";

const Footer = () => {
  return (
    <>
      <div
        className={`${styles.paddingX} w-full flex items-center py-5  bottom-0 z-20`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2 "
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            {/* <img
              src={white_logo}
              alt="logo"
              className="w-9 h-9 object-contain"
              srcset=""
            />
            <p className="text-white text-[18px] font-bold cursor-pointer flex ">
              Aradhya &nbsp;
              <span className="sm:block hidden">|ThunderSmoker</span>
            </p> */}
          </Link>

          <div className="flex gap-7">
            <Link to={"https://github.com/ThunderSmoker"} target="_blank">
              <div className="w-10 h-10">
                <Sball
                  imgUrl={github}
                  color="#000000"
                  angle={Math.PI / 2}
                  offset={0}
                />
              </div>
            </Link>
            <Link
              to={"https://www.linkedin.com/in/aradhya-pitlawar-a09aa622a/"}
              target="_blank"
            >
              <div className="w-10 h-10">
                <Sball
                  imgUrl={linkedin}
                  color="#0078D4"
                  angle={Math.PI / 2}
                  offset={Math.PI / 2}
                />
              </div>
            </Link>
            <Link
              to={"https://discord.com/users/693842931311968318"}
              target="_blank"
            >
              <div className="w-10 h-10">
                <Sball
                  imgUrl={discord}
                  color="#5b52d2"
                  angle={Math.PI / 2}
                  offset={0}
                />
              </div>
            </Link>
            <Link to="https://www.instagram.com/thundersmoker/" target="_blank">
              <div className="w-10 h-10">
                <Sball
                  imgUrl={instagram}
                  color="#5b52d2"
                  angle={Math.PI / 2}
                  offset={Math.PI / 2}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
