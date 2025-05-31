import React from "react";
import Container from "../layout/Container";
import Button from "../layout/button";
// import banner_bg from "../../assets/banner_bg.png";

function Banner() {
  return (
    <div className="bg-[url('/src/assets/banner_bg.png')] bg-no-repeat bg-cover bg-center relative before:content-[''] before:absolute before:inset-0 before:bg-black/60">
      <Container>
        <div className="relative z-[999] py-[100px] md:py-[257px]">
          <h1 className="font-primary font-bold text-[30px] md:text-[64px] text-white max-w-[485px] md:max-w-[842px] mb-[30px]">
            We exist since 1975 on the oil and gas industry.
          </h1>
          <Button className=" bg-red border-none block cursor-pointer">learn more</Button>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
