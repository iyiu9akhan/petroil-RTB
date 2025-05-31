import React, { useState } from "react";
import Container from "../layout/Container";
import header_logo from "../../assets/header_logo.png";
import { RxCross2 } from "react-icons/rx";
import Button from "../layout/button";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="py-[30px] bg-red">
      <Container>
        <nav>
          <div className="flex flex-wrap items-center justify-between">
            <a href="#">
              <img src={header_logo} alt="#" />
            </a>
            <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
             <Button className="hidden md:block">contact</Button>
              <button
                onClick={toggle}
                data-collapse-toggle="mega-menu"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden"
                aria-controls="mega-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <RxCross2 size={25} className="cursor-pointer"/>
                ) : (
                  <svg
                    className="w-5 h-5 cursor-pointer"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div
              id="mega-menu"
              className={`items-center justify-between ${
                isOpen ? "block" : "hidden"
              } w-full md:flex md:w-auto md:order-1`}
            >
              <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white  border-b border-white  md:hover:bg-transparent md:border-0  md:p-0"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <button
                    id="mega-menu-dropdown-button"
                    data-dropdown-toggle="mega-menu-dropdown"
                    className="flex items-center justify-between w-full py-2 px-3 font-medium  border-b border-white md:w-auto  md:border-0  md:p-0 dark:text-white cursor-pointer"
                  >
                    Company{" "}
                    <svg
                      className="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  <div
                    id="mega-menu-dropdown"
                    className="absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white md:border   rounded-lg   md:grid-cols-3  "
                  >
                    <div className="p-4 pb-0 text-black md:pb-4">
                      <ul
                        className="space-y-4 text-black"
                        aria-labelledby="mega-menu-dropdown-button"
                      >
                        <li>
                          <a
                            href="#"
                            // className="text-black"
                          >
                            Creative Layout
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                          >
                            Company History
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                          >
                            Careers
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                          >
                            Branding
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                      <ul className="space-y-4 text-black">
                        <li>
                          <a
                            href="#"
                          >
                            Hosting
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                          >
                            Categories
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                          >
                            Shortcodes
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                          >
                            User Stories
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-4 text-black">
                        <li>
                          <a
                            href="#"
                          >
                            Map Location
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                          >
                           404 Error
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                          >
                           Social Login
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white  border-b border-white  md:hover:bg-transparent md:border-0  md:p-0"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white  border-b border-white  md:hover:bg-transparent md:border-0  md:p-0"
                  >
                    Contact
                  </a>
                </li>
                <a
                  href="#"
                  className=" capitalize text-white border-2 md:hidden block  font-medium  text-sm w-[142px] h-[51px] md:px-5 md:py-2.5 focus:outline-none mx-auto flex items-center justify-center mt-[25px]"
                >
                  contact
                </a>
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
}

export default Header;
