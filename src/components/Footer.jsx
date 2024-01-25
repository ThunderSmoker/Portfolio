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
        className={`${styles.paddingX} w-full flex items-center py-5 bottom-0 z-20`} 
       
      >
        <div className="w-full flex justify-center items-center max-w-7xl mx-auto">
        

          <div className="flex gap-7 justify-center" >
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
