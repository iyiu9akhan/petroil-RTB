import React from "react";
import Container from "../layout/Container";
import Button from "../layout/button";
import { MdArrowForwardIos } from "react-icons/md";

function Blog() {
  return (
    <div className="bg-[#F0F0F0] py-[110px]">
      <Container>
        <div className="flex justify-between">
          <div className="bg-[url('./src/assets/blog/blog_one.png')]  bg-no-repeat bg-center bg-cover py-[55px] px-[45px] relative before:content-[''] before:absolute before:inset-0 before:bg-black/60">
            <p className="w-[249px] mb-[52px] font-primary font-bold text-[24px] text-white relative">
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod.
            </p>
            <Button className="relative bg-white/50 border-none cursor-pointer">
              read more
            </Button>
          </div>
          <div className="bg-[url('./src/assets/blog/blog_two.png')]  bg-no-repeat bg-center bg-cover py-[55px] px-[45px] relative before:content-[''] before:absolute before:inset-0 before:bg-black/60">
            <p className="w-[249px] mb-[52px] font-primary font-bold text-[24px] text-white relative">
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod.
            </p>
            <Button className="relative bg-white/50 border-none cursor-pointer">
              read more
            </Button>
          </div>
          <div className="bg-[url('./src/assets/blog/blog_three.png')]  bg-no-repeat bg-center bg-cover py-[55px] px-[45px] relative before:content-[''] before:absolute before:inset-0 before:bg-black/60">
            <p className="w-[249px] mb-[52px] font-primary font-bold text-[24px] text-white relative">
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod.
            </p>
            <Button className="relative bg-white/50 border-none cursor-pointer">
              read more
            </Button>
          </div>
        </div>
        <div className="flex mt-[29px] gap-3 items-center justify-end cursor-pointer">
          <a className="text-end  font-primary font-bold text-base text-black">
            MORE FROM THE BLLOG
          </a>
          <MdArrowForwardIos size={15}/>
        </div>
      </Container>
    </div>
  );
}

export default Blog;
