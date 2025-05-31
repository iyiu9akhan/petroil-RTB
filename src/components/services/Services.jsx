import React from "react";
import services_one from "../../assets/services/services_one.png";
import Button from "../layout/button";

function Services() {
  return (
    <div className="mb-[136px]">
      <div className="flex justify-end">
        <div className="w-[509px] mr-[61px] flex flex-col justify-center">
          <h1 className="font-primary font-bold text-[64px] text-black">
            Our Services
          </h1>
          <p className="w-[405px] font-primary font-medium text-base text-[#6c6c6c]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="bg-[url('./src/assets/services/services_one.png')] w-1/2 bg-no-repeat relative before:content-[''] before:absolute before:inset-0 before:bg-black/60">
          <h2 className="font-primary font-bold text-[36px] text-white mt-[147px] ml-[116px]  mb-[19px] relative">
            Modern natural oil and gas refineries.
          </h2>
          <Button className="bg-red border-none ml-[116px] mb-[139px] cursor-pointer relative">
            learn more
          </Button>
        </div>
      </div>
      <div className="flex">
        <div className="bg-[url('./src/assets/services/services_two.png')] w-1/2 bg-no-repeat relative before:content-[''] before:absolute before:inset-0 before:bg-black/60">
          <h2 className="font-primary font-bold text-[36px] text-white mt-[147px] ml-[116px]  mb-[19px] relative">
            Supply of national industries.
          </h2>
          <Button className="bg-red border-none ml-[116px] mb-[139px] cursor-pointer relative">
            learn more
          </Button>
        </div>
        <div className="bg-[url('./src/assets/services/services_three.png')] w-1/2 bg-no-repeat relative before:content-[''] before:absolute before:inset-0 before:bg-black/60">
          <h2 className="font-primary font-bold text-[36px] text-white mt-[147px] ml-[116px]  mb-[19px] relative">
            National fuel distribution and supply.
          </h2>
          <Button className="bg-red border-none ml-[116px] mb-[139px] cursor-pointer relative">
            learn more
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Services;
