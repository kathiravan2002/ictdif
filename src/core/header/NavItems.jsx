import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FaChevronDown, FaUpload } from "react-icons/fa";
import { TbCircleArrowRightFilled } from "react-icons/tb";


const NavItems = ({ ToggleMenu, MenuOpen, isActive, }) => {

  const dropdown1Ref = useRef(null);
  const dropdown2Ref = useRef(null);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdown1Ref.current && !dropdown1Ref.current.contains(event.target)) {
        setDropdown1(false);
      }
      if (dropdown2Ref.current && !dropdown2Ref.current.contains(event.target)) {
        setDropdown2(false);
      }

    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const about = [
    { name: "About the Conference", path: "/about" },
    { name: "Scope of Conference", path: "/scope" },
    { name: "Organizing Committee", path: "/organizing-committee" },
    { name: "Editorial Board", path: "/editorial-board" },

  ];
  const author = [
    { name: "Conference Tracks", path: "/conference-tracks" },
    { name: "Key Dates", path: "/key-dates" },
    { name: "Paper Submission", path: "/paper-submission" },

  ];

  return (
    <>
      <nav className={`${MenuOpen ? 'translate-x-0' : '-translate-y-full'} duration-300 mx-auto  poppins-medium p-5  rounded-b-lg text-[#FF521C] bg-white min-h-50 max-h-screen max-w-full w-full top-0 right-0 absolute z-50`}>

        <div className="">

          {/* <div className="w-44  p-2"></div> */}
          <div onClick={ToggleMenu} className="absolute right-5 top-5 cursor-pointer"><IoClose className="text-2xl" /></div>

          <ul className="flex flex-col items-start mt-0 *:my-2 *:px-2  overflow-y-auto max-h-[calc(100vh-150px)] ">
            <Link to="/" className={` ${isActive == '/' ? 'text-white bg-[#FF521C]  rounded-lg min-w-[75px] py-1  px-2' : ' '}`}>
              <li
                onClick={() => {
                  ToggleMenu(false);
                }}
                className="duration-300 "
              >
                Home
              </li>
            </Link>



            <li ref={dropdown1Ref} >
              <Link onClick={() => setDropdown1(!dropdown1)} className={`flex items-center gap-1  ${about.some(link => location.pathname === link.path)
                ? 'text-white bg-[#FF521C]  py-1 px-1 rounded-lg'
                : ''
                }`}>
                About Us
                <FaChevronDown
                  className={`${dropdown1 ? 'rotate-180' : 'rotate-0'} duration-200 text-xs`}
                />
              </Link>

              {dropdown1 && (
                <div className="border border-gray-400 top-9 rounded-lg mt-1">
                  <ul className="p-2 text-sm max-w-none w-full whitespace-nowrap">
                    {about.map((link, index) => {
                      const isActive = location.pathname === link.path;

                      return (
                        <Link
                          key={index}
                          to={link.path}
                          onClick={() => {
                            setDropdown1(false);
                            ToggleMenu(false);
                          }}
                          className="block"
                        >
                          <li
                            className={`px-4 py-2 rounded-md transition cursor-pointer ${isActive
                              ? 'text-white bg-[#FF521C]  '
                              : ''
                              }`}
                          >
                            {link.name}
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>

            <li ref={dropdown2Ref} >
              <Link onClick={() => setDropdown2(!dropdown2)} className={`flex items-center gap-1  ${author.some(link => location.pathname === link.path)
                ? 'text-white bg-[#FF521C]  py-1 px-1 rounded-lg'
                : ''
                }`}>
                Author’s Desk
                <FaChevronDown
                  className={`${dropdown2 ? 'rotate-180' : 'rotate-0'} duration-200 text-xs`}
                />
              </Link>

              {dropdown2 && (
                <div className="border border-gray-400 top-9 rounded-lg mt-1">
                  <ul className="p-2 text-sm max-w-none w-full whitespace-nowrap">
                    {author.map((link, index) => {
                      const isActive = location.pathname === link.path;

                      return (
                        <Link
                          key={index}
                          to={link.path}
                          onClick={() => {
                            setDropdown1(false);
                            ToggleMenu(false);
                          }}
                          className="block"
                        >
                          <li
                            className={`px-4 py-2 rounded-md transition cursor-pointer ${isActive
                              ? 'text-white bg-[#FF521C]  '
                              : ''
                              }`}
                          >
                            {link.name}
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>


            <Link to="/contact-us" className={` ${isActive == '/contact-us' ? 'text-white bg-[#FF521C]  rounded-lg min-w-[75px] py-1  px-2' : ''}`}>
              <li
                onClick={() => {
                  ToggleMenu(false);

                }}
                className="duration-300"
              >
                Contact Us
              </li>
            </Link>
          </ul>

        </div>
        <a href="/">
          <div className="flex items-center justify-center  py-3">
            <img src={scroll ? "/assets/images/ICTDIF orange.png" : "/assets/images/ICTDIF white.png"} alt="logo" className=" w-35 lg:w-55 z-20" />
            {/* <h2  className={`namdhinggo-bold leading-relaxed text-[36px] ${scroll  ? 'text-[#FF521C]' : 'text-white '}`}>ICTDIF</h2> */}

          </div>
        </a>

       
      </nav>
    </>
  );
};

export default NavItems;