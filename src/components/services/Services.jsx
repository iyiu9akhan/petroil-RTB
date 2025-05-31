import React from "react";
import services_one from "../../assets/services/services_one.png";
import Button from "../layout/button";

function Services() {
  return (
    <div>
      <div className="md:flex justify-end ">
        <div className="md:w-[509px] md:mr-[61px] flex flex-col justify-center mb-[20px] md:mb-0">
          <h1 className="font-primary font-bold text-[35px] text-center md:text-left md:text-[64px] text-black">
            Our Services
          </h1>
          <p className="md:w-[405px] font-primary font-medium text-base text-[#6c6c6c] text-justify px-[15px] md:px-0">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="py-[15px] md:py-0 bg-[url('./src/assets/services/services_one.png')] w-full md:w-1/2 bg-cover bg-no-repeat relative before:content-[''] before:absolute before:inset-0 before:bg-black/60 flex flex-col items-center mb-[20px] md:mb-0">
          <h2 className="font-primary font-bold text-[23px] md:text-[36px] text-white md:mt-[147px] text-center md:text-left md:ml-[116px]  mb-[19px] relative">
            Modern natural oil and gas refineries.
          </h2>
          <Button className="bg-red border-none  md:mb-[139px] cursor-pointer relative text-[14px] md:text-base">
            learn more
          </Button>
        </div>
      </div>
      <div className="md:flex">
        <div className="py-[15px] md:py-0 bg-[url('./src/assets/services/services_two.png')] w-full md:w-1/2 bg-cover bg-no-repeat relative before:content-[''] before:absolute before:inset-0 before:bg-black/60 flex flex-col items-center mb-[20px] md:mb-0">
          <h2 className="font-primary font-bold text-[23px] md:text-[36px] text-white md:mt-[147px] text-center md:text-left md:ml-[116px]  mb-[19px] relative">
            Supply of national industries.
          </h2>
          <Button className="bg-red border-none  md:mb-[139px] cursor-pointer relative text-[14px] md:text-base">
            learn more
          </Button>
        </div>
        <div className="py-[15px] md:py-0 bg-[url('./src/assets/services/services_three.png')] w-full md:w-1/2 bg-cover bg-no-repeat relative before:content-[''] before:absolute before:inset-0 before:bg-black/60 flex flex-col items-center">
          <h2 className="font-primary font-bold text-[23px] md:text-[36px] text-white md:mt-[147px] text-center md:text-left md:ml-[116px]  mb-[19px] relative">
            National fuel distribution and supply.
          </h2>
          <Button className="bg-red border-none md:mb-[139px] cursor-pointer relative text-[14px] md:text-base">
            learn more
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Services;
