import React from "react";
import Container from "../layout/Container";
import Button from "../layout/button";
import { SiV } from "react-icons/si";

function Contact() {
  return (
      <div className="bg-red ">
        <Container>
          <div className="flex flex-col items-center gap-5 md:flex md:flex-row md:gap-0 justify-between py-[45px] ">
            <h1 className="font-primary font-bold text-center text-[25px] md:text-[36px] md:text-left text-white">
              Want to join as member branch in your area?
            </h1>
            <Button className="cursor-pointer">contact</Button>
          </div>
        </Container>
        <hr className="bg-[#FFB800] h-[4px]" />
      </div>
  );
}

export default Contact;
