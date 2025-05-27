import React from "react";
import Container from "../layout/Container";

function Welcome() {
  return (
    <div className="pt-[40px] pb-[50px] md:pt-[78px] md:pb-[100px]">
      <Container>
        <div className="md:flex justify-between items-center">
          <h1 className="text-center mb-[15px] text-black text-primary font-bold text-[35px] md:text-[48px] md:mb-0 md:w-[289px] md:leading-[72px]">The biggest supplier on the country</h1>
          <p className="text-justify md:w-[651px] md:text-start font-primary font-medium text-[16px] text-[#6C6C6C]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
        </div>
      </Container>
    </div>
  );
}

export default Welcome;
