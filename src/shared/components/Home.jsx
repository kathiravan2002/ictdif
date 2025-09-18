import { TbCircleArrowRightFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

export default function Home({ data }) {
  const imageItems = [
    { src: '/assets/images/associates/1.png', },
    { src: '/assets/images/associates/2.jpg', },
    { src: '/assets/images/associates/3.jpg', },
    { src: '/assets/images/associates/4.jpg', },
    { src: '/assets/images/associates/5.jpg', },
    { src: '/assets/images/associates/6.jpg', },
    { src: "/assets/images/associates/scopus.png", },
    { src: "/assets/images/associates/8.jpg", },
    { src: "/assets/images/associates/9.jpg", },
    { src: "/assets/images/associates/10.jpg", },
    { src: "/assets/images/associates/11.jpg", },
  ];

  return (
    <>
      <div className="overflow-hidden">
        <div className="bg-gradient-to-r from-[#993111] to-[#FF521C] overflow-hidden">
          <div className="max-w-[85rem] mx-auto ">
            <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:gap-10 py-[5%] 2xl:py-[8%] mt-32 lg:mt-25 2xl:mt-32 px-4">
              <div className="flex justify-center items-center xl:order-none lg:order-2 order-2" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                <div className="space-y-8 ">
                  <h1 className="lg:text-5xl text-2xl inter-bold text-white lg:leading-16 lg:mt-0 mt-3 text-justify md:text-start ">International Conference on Technology and Data Innovations for the Future</h1>
                  <p className="text-white md:text-lg text-base inter-regular text-justify">Join global leaders, researchers, and innovators at the forefront of technological advancement and data transformation.</p>
                  <Link to="paper-submission">
                    <button className="group relative overflow-hidden hover:text-[#FF521C] bg-[#FFD900]  text-[#000] poppins-medium  cursor-pointer py-3 px-6 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2">
                      <span className="relative z-10"> Register Now </span>
                      <TbCircleArrowRightFilled className='relative z-10 group-hover:-rotate-45 group-hover:translate-x-1 text-[24px] flex shrink-0 group-hover:text-[#FF521C] transition-transform duration-500' />
                      <div className="absolute inset-0  scale-x-0 group-hover:scale-x-100 duration-500 bg-white rounded-md"></div>
                    </button>
                  </Link>
                </div>
              </div>

              {/* <div className="flex justify-center items-center" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                <img src="/assets/images/hero.png" alt="" className="rounded-full w-[300px] h-[300px] md:h-[500px] md:w-[500px] lg:h-[550px] lg:w-[550px] xl:h-[550px] xl:w-[550px] 2xl:h-[625px] 2xl:w-[625px]      object-cover relative z-40" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" />
                <div className="absolute bg-[#FFD900] w-[300px] h-[300px] md:h-[500px] md:w-[500px] lg:h-[550px] lg:w-[550px] xl:h-[550px] xl:w-[550px] 2xl:h-[625px] 2xl:w-[625px]  rounded-full ml-10 -mt-10" data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000"></div>
              </div> */}
              <div className="flex justify-center items-center relative">
                <motion.div
                  className="absolute bg-[#FFD900] w-[300px] h-[300px] md:h-[500px] md:w-[500px] lg:h-[550px] lg:w-[550px] xl:h-[550px] xl:w-[550px] 2xl:h-[625px] 2xl:w-[625px] rounded-full"
                  initial={{ x: 0, y: 50, opacity: 0 }}
                  animate={{ x: 25, y: -30, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
                />

                <motion.img
                  src="/assets/images/hero.png"
                  alt=""
                  className="rounded-full w-[300px] h-[300px] md:h-[500px] md:w-[500px] lg:h-[550px] lg:w-[550px] xl:h-[550px] xl:w-[550px] 2xl:h-[625px] 2xl:w-[625px] object-cover relative z-40"
                  initial={{ x: 0, y: 70 }}
                  animate={{ x: 0, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-20 bg-gradient-to-r from-[#993111] to-[#FF521C] px-4">

          <div className="text-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            <h2 className="text-[32px] text-white inter-bold inline-block relative">About Us <span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>
          </div>

          <div className="max-w-[85rem] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* <div className="flex justify-center items-center mt-16" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                <img src="/assets/images/about.png" alt="" className="rounded-full w-[300px] h-[300px] md:h-[500px] md:w-[500px] lg:h-[550px] lg:w-[550px] xl:h-[550px] xl:w-[550px] 2xl:h-[525px] 2xl:w-[525px] bg-center object-cover relative z-40" data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000" />
                <div className="absolute bg-[#FFD900] w-[300px] h-[300px] md:h-[500px] md:w-[500px] lg:h-[550px] lg:w-[550px] xl:h-[550px] xl:w-[550px] 2xl:h-[525px] 2xl:w-[525px] rounded-full ml-10 -mt-8" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"></div>
              </div> */}<div className="flex justify-center items-center relative  mt-16">
                <motion.div
                  className="absolute bg-[#FFD900] w-[300px] h-[300px] md:h-[500px] md:w-[500px] lg:h-[550px] lg:w-[550px] xl:h-[550px] xl:w-[550px] 2xl:h-[525px] 2xl:w-[525px] rounded-full"
                  initial={{ x: 0, y: 50, opacity: 0 }}
                  whileInView={{ x: -25, y: -25, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
                // viewport={{ once: true, amount: 0.3 }} 
                />

                <motion.img
                  src="/assets/images/about.png"
                  alt="scope.jpg"
                  className="rounded-full w-[300px] h-[300px] md:h-[500px] md:w-[500px] lg:h-[550px] lg:w-[550px] xl:h-[550px] xl:w-[550px] 2xl:h-[525px] 2xl:w-[525px] object-cover relative z-40"
                  initial={{ x: 0, y: 70, opacity: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                // viewport={{ once: true, amount: 0.3 }} 
                />
              </div>

              <div className="flex justify-center items-center " >
                <div className="space-y-6" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                  <p className="text-white md:text-lg text-base inter-medium text-justify leading-[30px]">The International Conference on Technology and Data Innovations for the Future serves as a global platform for researchers, industry leaders, and academicians to share pioneering ideas, present transformative research, and discuss emerging trends in technology and data-driven solutions. The conference fosters collaboration across disciplines, encouraging participants to address global challenges and leverage innovation for sustainable development.</p>
                  <p className="text-white md:text-lg text-base inter-medium text-justify leading-[30px]">With a strong focus on future-ready technologies, the event highlights advancements in artificial intelligence, big data analytics, cloud computing, IoT, blockchain, and digital transformation. By bridging the gap between theory and real-world application, the conference empowers professionals to create impactful solutions that shape industries and improve quality of life worldwide.</p>
                  <Link to='/about'>
                    <button className="group relative overflow-hidden hover:text-[#FF521C] bg-[#FFD900]  text-[#000] poppins-medium  cursor-pointer py-3 px-6 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2">
                      <span className="relative z-10"> Learn More </span>
                      <TbCircleArrowRightFilled className='relative z-10 group-hover:-rotate-45 group-hover:translate-x-1 text-[24px] flex shrink-0 group-hover:text-[#FF521C] transition-transform duration-500' />
                      <div className="absolute inset-0  scale-x-0 group-hover:scale-x-100 duration-500 bg-white rounded-md"></div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className=" bg-gradient-to-r from-[#993111] to-[#FF521C] px-4">
          <div className="text-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            <h2 className="text-[32px] text-white inter-bold inline-block relative">Our Mission <span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>
          </div>

          <div className="max-w-[85rem] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex justify-center items-center xl:order-none lg:order-2 order-2 " data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                <div className="space-y-6">
                  <p className="text-white md:text-lg text-base inter-medium text-justify leading-[30px]">Our mission is to advance global progress by fostering innovation, knowledge exchange, and collaboration in technology and data sciences. We aim to empower researchers, industry professionals, and policymakers to create sustainable, future-ready solutions that address real-world challenges.</p>
                  <div className="space-y-2">
                    <p className="md:text-lg text-base text-[#FFD900] inter-medium"><i className="fi fi-sr-hand-back-point-right text-white mr-3"></i>Promote interdisciplinary collaboration</p>
                    <p className="md:text-lg text-base text-[#FFD900] inter-medium"><i className="fi fi-sr-hand-back-point-right text-white mr-3"></i>Encourage innovative research and applications</p>
                    <p className="md:text-lg text-base text-[#FFD900] inter-medium"><i className="fi fi-sr-hand-back-point-right text-white mr-3"></i>Address global challenges through technology</p>
                    <p className="md:text-lg text-base text-[#FFD900] inter-medium"><i className="fi fi-sr-hand-back-point-right text-white mr-3"></i>Support sustainable and inclusive development</p>
                    <p className="md:text-lg text-base text-[#FFD900] inter-medium"><i className="fi fi-sr-hand-back-point-right text-white mr-3"></i>Bridge academia, industry, and policy sectors</p>
                  </div>

                </div>
              </div>

              {/* <div className="flex justify-center items-center mt-16" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                <img src="/assets/images/scope.jpg" alt="" className="rounded-full w-[300px] h-[300px] md:h-[500px] md:w-[500px] lg:h-[550px] lg:w-[550px] xl:h-[550px] xl:w-[550px] 2xl:h-[525px] 2xl:w-[525px] bg-center object-cover relative z-40" data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000" />
                <div className="absolute bg-[#FFD900] w-[300px] h-[300px] md:h-[500px] md:w-[500px] lg:h-[550px] lg:w-[550px] xl:h-[550px] xl:w-[550px] 2xl:h-[525px] 2xl:w-[525px] rounded-full ml-10 -mt-8" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"></div>
              </div> */}
              <div className="flex justify-center items-center relative  mt-16">
                <motion.div
                  className="absolute bg-[#FFD900] w-[300px] h-[300px] md:h-[500px] md:w-[500px] lg:h-[550px] lg:w-[550px] xl:h-[550px] xl:w-[550px] 2xl:h-[525px] 2xl:w-[525px] rounded-full"
                  initial={{ x: 0, y: 50, opacity: 0 }}
                  whileInView={{ x: 25, y: -25, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
                // viewport={{ once: true, amount: 0.3 }} 
                />

                <motion.img
                  src="/assets/images/scope.jpg"
                  alt="scope.jpg"
                  className="rounded-full w-[300px] h-[300px] md:h-[500px] md:w-[500px] lg:h-[550px] lg:w-[550px] xl:h-[550px] xl:w-[550px] 2xl:h-[525px] 2xl:w-[525px] object-cover relative z-40"
                  initial={{ x: 0, y: 70, opacity: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                // viewport={{ once: true, amount: 0.3 }} 
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="lg:py-10 bg-gradient-to-r from-[#993111] to-[#FF521C]">
        <div className="text-center">
          <h2 className="text-2xl text-white font-semibold inline-block relative">Meet Our Speakers<span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>
        </div>
        <div className="max-w-[90rem] mx-auto xl:px-0 px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-14 gap-8 mt-10">
            <div className="relative">
              <div className="bg-[#FFD900] w-24 h-24 absolute -bottom-4 rounded-lg lg:-right-4 -right-3 z-10" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }}>
              </div>

              <div className="bg-white rounded-xl z-20 relative">
                <div className="flex">
                  <div className="p-3">
                    <img src="/assets/images/speaker.png" alt="" className="w-40 rounded-lg" />
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="mx-10 space-y-2">
                      <p className="text-center">Your Name</p>
                      <p className="text-center">Your Name</p>
                      <p className="text-center">Your Name</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#FFD900] w-24 h-24 absolute -bottom-4 rounded-lg lg:-right-4 -right-3 z-10" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }}></div>

              <div className="bg-white rounded-xl z-20 relative">
                <div className="flex">
                  <div className="p-3">
                    <img src="/assets/images/speaker.png" alt="" className="w-40 rounded-lg" />
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="mx-10 space-y-2">
                      <p className="text-center">Your Name</p>
                      <p className="text-center">Your Name</p>
                      <p className="text-center">Your Name</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#FFD900] w-24 h-24 absolute -bottom-4 rounded-lg lg:-right-4 -right-3 z-10" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }}></div>

              <div className="bg-white rounded-xl z-20 relative">
                <div className="flex">
                  <div className="p-3">
                    <img src="/assets/images/speaker.png" alt="" className="w-40 rounded-lg" />
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="mx-10 space-y-2">
                      <p className="text-center">Your Name</p>
                      <p className="text-center">Your Name</p>
                      <p className="text-center">Your Name</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

        <div className="py-20 bg-gradient-to-r from-[#993111] to-[#FF521C] px-4">
          <div className="text-center" data-aos="fade-up" data-aos-duration="500">
            <h2 className="text-[32px] text-white inter-bold inline-block relative">Remember the days<span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>
          </div>
          <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14 gap-8 mt-10">

              <div className="grid grid-cols-1 md:grid-cols-12 bg-[#FFD900] rounded-2xl relative">
                <div className="md:bg-[#FFD900] bg-white w-24 h-24 absolute -top-4 rounded-lg lg:-right-4 -right-3 z-10" style={{ clipPath: 'polygon(0 0, 100% 100%, 100% 0)' }} ></div>
                <div className="col-span-4  flex justify-center items-center xl:p-10 p-5" data-aos="fade-left" data-aos-duration="500">
                  <i className="fi fi-sr-calendar text-5xl"></i>
                </div>
                <div className="col-span-8 space-y-3 bg-white text-center rounded-2xl flex flex-col items-center justify-center p-2 z-20">
                  <p className="inter-bold md:text-xl text-lg">Full Paper Submission Deadline</p>
                  <p className="inter-bold md:text-xl text-lg">October 15<sup>th</sup> 2025</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 bg-[#FFD900] sm: rounded-2xl relative">
                <div className="md:bg-[#FFD900] bg-white w-24 h-24 absolute -top-4 rounded-lg lg:-right-4 -right-3 z-10" style={{ clipPath: 'polygon(0 0, 100% 100%, 100% 0)' }}></div>
                <div className="col-span-4  flex justify-center items-center xl:p-10 p-5" data-aos="fade-left" data-aos-duration="500">
                  <i className="fi fi-sr-calendar text-5xl"></i>
                </div>
                <div className="col-span-8 space-y-3 bg-white text-center rounded-2xl flex flex-col items-center justify-center p-2 z-20">
                  <p className="inter-bold md:text-xl text-lg">Author Acceptance Notification</p>
                  <p className="inter-bold md:text-xl text-lg">October 18<sup>th</sup> 2025</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 bg-[#FFD900] rounded-2xl relative">
                <div className="md:bg-[#FFD900] bg-white  w-24 h-24 absolute -top-4 rounded-lg lg:-right-4 -right-3 z-10" style={{ clipPath: 'polygon(0 0, 100% 100%, 100% 0)' }}></div>
                <div className="col-span-4  flex justify-center items-center xl:p-10 p-5" data-aos="fade-left" data-aos-duration="500">
                  <i className="fi fi-sr-calendar text-5xl"></i>
                </div>
                <div className="col-span-8 space-y-3 bg-white text-center rounded-2xl flex flex-col items-center justify-center p-2 z-20">
                  <p className="inter-bold md:text-xl text-lg">Final Registration Deadline</p>
                  <p className="inter-bold md:text-xl text-lg">October 22<sup>nd</sup> 2025</p>
                </div>
              </div>

            </div>
          </div>
        </div>


        <div className="max-w-[90rem] mx-auto">
          <div className="px-4">
            <div className="text-center" data-aos="fade-up" data-aos-duration="500">
              <h2 className="text-[32px] text-white inter-bold inline-block relative">Indexed Journals<span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>
            </div>
            <p className="text-center text-white inter-medium opacity-85 text-[18px] leading-[30px] max-w-[1000px] mx-auto mt-4">The Selective accepted papers of our International Conference on Technology and Data Innovations for the Future will be recommended to publish in the following index & publisher Journals.</p>
          </div>
          <Marquee direction='right' pauseOnClick pauseOnHover>
            <div className="  flex  pb-10 pt-10 ">
              {imageItems.map((item, index) => (
                <div key={index} className=" flex justify-center mr-10  py-5" >
                  <img src={item.src} alt="images" className=" w-[300px] bg-white rounded-lg shadow-[0_0_8px_rgba(0,0,0,0.15)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition duratiom-300" />
                </div>
              ))}
            </div>
          </Marquee>

        </div>


      </div>
    </>
  );
}