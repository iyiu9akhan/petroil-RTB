import React from "react";
import Container from "../layout/Container";
import footer_logo from "../../assets/footer/footer_logo.png";
import { RiMailUnreadLine } from "react-icons/ri";
import { BsTelephoneInbound } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import certificate_one from "../../assets/footer/certificate_one.png";
import certificate_two from "../../assets/footer/certificate_two.png";

function Footer() {
  return (
    <div>
      <div className="bg-[#1F1F1F] pt-[50px] pb-[60px] md:pt-[149px] md:pb-[170px]">
        <Container>
          <div className="flex flex-col-reverse md:flex md:flex-row justify-between">
            <div className="flex flex-col items-center md:items-start">
              <img src={footer_logo} alt="#footer_logo" className="mb-[33px] cursor-pointer" />
              <div className="mb-[34px]  flex flex-col items-center md:items-start">
                <div className="flex gap-[5px] items-center text-white mb-[15px]">
                  <RiMailUnreadLine size={20} />
                  <p className="font-primary font-normal text-[14px]">
                    mail@yourcompany.com
                  </p>
                </div>
                <div className="flex gap-[5px] items-center text-white mb-[15px]">
                  <BsTelephoneInbound size={20} />
                  <p className="font-primary font-normal text-[14px]">
                    +896 120 5889 (Toll free)
                  </p>
                </div>
                <div className="flex gap-[5px] items-center text-white">
                  <FaLocationDot size={20} />
                  <p className="font-primary font-normal text-[14px]">
                    101 Baker Street, New York, USA, 12345
                  </p>
                </div>
              </div>
              <div className="flex gap-[12px]">
                <div className="rounded-full bg-red w-[29px] h-[29px] flex items-center justify-center cursor-pointer">
                  <FaFacebookF className="text-white" />
                </div>
                <div className="rounded-full bg-red w-[29px] h-[29px] flex items-center justify-center cursor-pointer">
                  <FaTwitter className="text-white" />
                </div>
                <div className="rounded-full bg-red w-[29px] h-[29px] flex items-center justify-center cursor-pointer">
                  <FaLinkedinIn className="text-white" />
                </div>
                <div className="rounded-full bg-red w-[29px] h-[29px] flex items-center justify-center cursor-pointer">
                  <FaInstagram className="text-white" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:flex justify-between md:w-[661px]">
              <div>
                <p className="capitalize text-white font-primary font-bold text-base mb-[21px]">
                  company
                </p>
                <ul className="font-primary font-normal text-[14px] text-white flex flex-col gap-[15px]">
                  <a href="#">
                    <li>Home</li>
                  </a>
                  <a href="#">
                    <li>About</li>
                  </a>
                  <a href="#">
                    <li>Services</li>
                  </a>
                  <a href="#">
                    <li>Gallery</li>
                  </a>
                </ul>
              </div>
              <div>
                <p className="capitalize text-white font-primary font-bold text-base mb-[21px]">
                  others
                </p>
                <ul className="font-primary font-normal text-[14px] text-white flex flex-col gap-[15px]">
                  <a href="#">
                    <li>Blog</li>
                  </a>
                  <a href="#">
                    <li>Contact</li>
                  </a>
                  <a href="#">
                    <li>Terms & Conditions</li>
                  </a>
                  <a href="#">
                    <li>Privacy Policy</li>
                  </a>
                </ul>
              </div>
              <div className="mt-[40px] mb-[40px] md:mt-0 md:mb-0">
                <p className="capitalize text-white font-primary font-bold text-base mb-[21px]">
                  certificate
                </p>
                <div className="flex gap-[5px]">
                  <img src={certificate_one} alt="#brand_one" />
                  <img src={certificate_two} alt="#brand_two" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-[#282828] py-[25px] md:py-[43px]">
        <Container>
          <p className="font-primary font-medium text-[12px] md:text-lg text-[#6c6c6c] text-center md:text-left">
            © Copyright 2024 by AltDesain Studio – All right reserved.
          </p>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
