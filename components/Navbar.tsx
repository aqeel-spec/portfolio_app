"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import { styles } from "@/app/styles";
import { navLinks } from "@/portfolioData/data";
import { logo, menu, close } from "@/public/assets";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [btn, setBtn] = useState(false);

  return (
    <nav
      className={`
    ${styles.paddingX} w-full flex bg-primary items-center py-5 fixed top-0 z-20 
  `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scroll(0, 0);
          }}
        >
          <Image src={logo} alt="" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Aqeel
            <span
              className="sm:block hidden
            "
            >
              &nbsp;| Mataverse developer
            </span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((lin) => (
            <li
              key={lin.id}
              className={`${
                active === lin.title ? " text-white" : " text-secondary"
              } hover:text-white text-[18px]  font-medium cursor-pointer transition duration-200  ease-in-out`}
              onClick={() => setActive(lin.title)}
            >
              <a href={`#${lin.id}`}>{lin.title}</a>
            </li>
          ))}
          <a href="/app">
            <button
              onClick={() => setBtn(!btn)}
              className={`${
                btn ? " text-white" : " text-secondary"
              } hover:text-white text-[18px] hover:bg-orange-600 rounded-md items-center  px-4 hover:flex-grow  font-medium cursor-pointer transition duration-200  ease-in-out`}
            >
              CV_templates
            </button>
          </a>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center ">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer   "
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            }  p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
          >
            <ul className="list-none  flex flex-col justify-end items-start gap-4 ">
              {navLinks.map((lin) => (
                <li
                  key={lin.id}
                  className={`${
                    active === lin.title ? " text-white" : " text-secondary"
                  }  font-poppins  font-medium cursor-pointer text-[16px] `}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(lin.title);
                  }}
                >
                  <a href={`#${lin.id}`}>{lin.title}</a>
                </li>
              ))}
              <button
                onClick={() => setBtn(!btn)}
                className={`${
                  btn ? " text-white" : " text-secondary"
                } hover:text-white text-[18px] hover:bg-orange-600 rounded-md items-center  px-4 hover:flex-grow  font-medium cursor-pointer transition duration-200  ease-in-out`}
              >
                CV_templates
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
