import React from "react";
import Container from "../layout/Container";
import Button from "../layout/button";

function About() {
  return (
    <div className="bg-[#F0F0F0] py-[45px] md:py-[136px]">
      <Container>
        <div className="flex">
          <div className="bg-red w-[35%] py-[30px] px-[15px] md:py-[100px] md:px-[75px]">
            <h2 className="md:w-[262px] font-primary font-bold md:text-[36px] text-white ">
              Learn more about our company
            </h2>
          </div>
          <div className="bg-[url('../src/assets/about/about_bg.png')] w-[65%] bg-no-repeat bg-cover bg-center flex items-center justify-center">
            <Button className='cursor-pointer bg-white border-none !text-red text-[14px] md:text-base'>learn more</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
