"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";


export default function Navbar({ setActive }) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const dropdown = useRef(null);

  const { pathname, locale, locales, asPath, defaultLocale } = router;

  useEffect(() => {
    if (!isOpen) return;
    function handleClick(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [isOpen]);



  return (
    <>
      <nav className="bg-black  fixed w-full z-20 top-0 px-0">
        <div className="md:px-10 px-0 pt-4">
          <div className="flex justify-between px-3 sm:px-6 lg:px-8 ">
            <div className="flex px-2 lg:px-0">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block cursor-pointer lg:hidden h-12 w-auto"
                  src="/leyu.png"
                  alt="Logo"
                  onClick={() => router.push("/")}
                />
                <img
                  className="hidden cursor-pointer lg:block h-12 w-auto"
                  src="/leyu.png"
                  alt="Logo"
                  onClick={() => router.push("/")}
                />
              </div>
            </div>
            <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
              <Link legacyBehavior href="/">
                <a
                  className={`border-transparent text-white font-bold  inline-flex items-center px-1 pt-1 border-b-2 text-[18px]`}
                >
                  <div className="flex flex-col items-center">
                    <h1>Home</h1>
                  </div>
                </a>
              </Link>

              <Link legacyBehavior href="/">
                <a
                  className={`border-transparent text-white font-bold  inline-flex items-center px-1 pt-1 border-b-2 text-[18px]`}
                >
                  <div className="flex flex-col items-center">
                    <h1>About</h1>
                  </div>
                </a>
              </Link>

              <Link legacyBehavior href="/">
                <a
                  className={`border-transparent text-white font-bold  inline-flex items-center px-1 pt-1 border-b-2 text-[18px]`}
                >
                  <div className="flex flex-col items-center">
                    <h1>Services</h1>
                  </div>
                </a>
              </Link>
              <Link legacyBehavior href="/">
                <a
                  className={`border-transparent text-white font-bold  inline-flex items-center px-1 pt-1 border-b-2 text-[18px]`}
                >
                  <div className="flex flex-col items-center">
                    <h1>Contact Us</h1>
                  </div>
                </a>
              </Link>
            </div>

            <a className=" hidden lg:block px-5 py-[2px] mt-3 rounded-md font-semibold text-md border border-gray-600 text-[#02C27D] bg-slate-900">
              Register
            </a>

            <div className="-mr-2 flex items-center lg:hidden text-white ">
              <button
                ref={dropdown}
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md bg-[#02C27D]"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <img src="/hamburger.png" alt="Menu icon" />
                ) : (
                  <img src="/Xicon.png" alt="Close icon" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen ? (
          <div className="lg:hidden" id="mobile-menu">
            <div className=" pb-3 pt-12 space-y-2 pl-4 mb-4">
              <Link legacyBehavior href="/">
                <a
                  onClick={() => setIsOpen(false)}
                  className="block pl-3 pr-4 mb-3 font-semibold text-[20px] text-white "
                >
                  Home
                </a>
              </Link>
              <Link legacyBehavior href="/">
                <a
                  onClick={() => setIsOpen(false)}
                  className="block pl-3 pr-4 mb-3 font-semibold text-[20px] text-white "
                >
                  About Us
                </a>
              </Link>
              <Link legacyBehavior href="/">
                <a
                  onClick={() => setIsOpen(false)}
                  className="block pl-3 pr-4 mb-3 font-semibold text-[20px] text-white "
                >
                  Contact Us
                </a>
              </Link>
              <Link legacyBehavior href="/">
                <a
                  onClick={() => setIsOpen(false)}
                  className="block pl-3 pr-4 mb-5 font-semibold text-[20px] text-white "
                >
                  Services
                </a>
              </Link>

              <Link legacyBehavior href="/" className="mt-4">
                <a
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-[4px] mt-5  block w-[50%] mx-auto  rounded-md font-semibold text-md border border-gray-600 text-[#02C27D] bg-slate-900"
                >
                  Register
                </a>
              </Link>
            </div>
          </div>
        ) : null}
      </nav>
    </>
  );
}
