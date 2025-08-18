import React from 'react';
import { FaEnvelope, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Registerpage from '../../shared/components/Registerpage';

const Footer = () => {
  return (
    <div className="">
      <Registerpage />
      <footer className="bg-gradient-to-r from-[#993111] to-[#FF521C] text-white">
        <div className=" mx-auto px-5 max-w-[1400px]  lg:py-10 py-5 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  md:gap-8 gap-8 mt-5 lg:mt-0 ">
            <div className='text-center   flex justify-center items-center '>
              <Link to='/'>

                <img className=' w-45 ' src="/assets/images/ICTDIF white.png" alt="logo" />
                {/* <h2 className="namdhinggo-extrabold text-[45px]">ICTDIF</h2> */}
              </Link>


            </div>

            <div className="">
              <h4 className="lg:text-xl poppins-bold mb-2 ">ICTDIF </h4>

              <p className="inter-medium tex-base text-justify">Empowering global collaboration to shape the future through technology advancements and transformative data-driven innovations.</p>
            </div>
            <div className='lg:mx-auto md:text-left text-start '>
              <h4 className="lg:text-xl poppins-bold mb-2 ">Quick Links</h4>
              <ul className=' lg:text-base text-sm inter-medium space-y-2'>
                <li><Link to="/" className="">Home</Link></li>
                <li> <Link to='/about'>About the Conference</Link></li>
                <li><Link to='/organizing-committee'>Organization Committee</Link></li>
                <li><Link to='/editorial-board'>Editorial Board</Link> </li>
                <li><Link to='/paper-submission'>Paper submission </Link>  </li>

              </ul>
            </div>

            <div className='lg:ml-auto  md:text-left text-start  '>
              <div className='flex gap-4 flex-wrap justify-start items-end '>
                <div className=''>
                  <h4 className="lg:text-xl poppins-bold mb-2 ">Contact Info</h4>
                  <ul className="lg:text-base inter-medium text-sm space-y-2">
                    <li className='cursor-pointer'>Tehran, Iran</li>
                    <li className='cursor-pointer'>info.ictdif@gmail.com</li>
                    {/* <li><a className=" inter-medium"><Link to=''>+91 8870212121</Link></a></li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="bg-white h-[1px]   mx-auto  "></h1>
        <div className='grid lg:grid-cols-3 grid-cols-1  items-center    py-3 '>
          <div>
          </div>
          <div className="text-center md:text-base text-xs inter-regular">
            <p>© 2025 <span className='' > <Link to="/" target='_blank'>ICTDIF </Link> </span> . All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;