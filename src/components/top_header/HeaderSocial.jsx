import React from "react";
import Container from "../layout/Container";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephonePlus } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

function HeaderSocial() {
  return (
    <div className="bg-gray">
      <Container>
        <div className="flex  flex-col items-center md:flex md:flex-row md:justify-between py-[15px]">
          <div className="flex gap-[25px] mb-[10px] md:mb-0">
            <div className="flex gap-[5px] items-center">
              <MdOutlineMailOutline className="text-white" md:size={20} />
              <p className="text-white font-primary text-[10px] md:text-[12px] font-normal">
                mail@yourcompany.com
              </p>
            </div>
            <div className="h-4 w-[2px] bg-[#5C6A92] hidden md:block"></div>
            <div className="flex gap-[5px] items-center">
              <BsTelephonePlus className="text-white" md:size={20} />
              <p className="text-white font-primary text-[10px] md:text-[12px] font-normal">
                +896 120 5889 (Toll free)
              </p>
            </div>
          </div>
          <div className="flex gap-[20px] text-white items-center">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <BsInstagram />
          </div>
        </div>
      </Container>
      <hr className="bg-[#FFB800] h-[4px]" />
    </div>
  );
}

export default HeaderSocial;
