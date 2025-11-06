import { TbCircleArrowRightFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import { FaCalendar, FaDownload, FaFilePdf } from "react-icons/fa6";
import Proceedings2025page from "../../components/Proceedings2025page";

export default function Home() {

  const [flipped, setFlipped] = useState(null);
  const [showProceedings, setShowProceedings] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleViewProceedings = () => {
    setShowProceedings(true);
  };

  const handleCloseModal = () => {
    setShowProceedings(false);
  };

  const handleDownloadPDF = () => {
    const pdfUrl = '/assets/documents/ictdif-2025.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'ICTDIF_conference_proceedings_2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const item = [
    {
      name: "Dr. Noureddine Seddari",
      department: "Department of Computer Science",
      university: "University of Skikda",
      location: "Algeria",
    },
    {
      name: "Dr. Omar Bin Samin",
      department: "Department of Information Technology",
      university: "Institute of Management Sciences",
      location: "Pakistan",
    },
    {
      name: "Dr. Hadhrami Ab. Ghani",
      department: "Department of Data Science and Computing",
      university: "Universiti Malaysia Kelantan",
      location: "Malaysia",
    },
  ]

  const dates = [
    { title: "Full Paper Submission ", date: "28-04-2025" },
    { title: "Author Acceptance Notification", date: "09-07-2025" },
    { title: "Conference Date", date: "16-09-2025" },
  ]


  return (
    <>
      <div className="overflow-hidden">
        <div className="bg-gradient-to-r from-[#993111] to-[#FF521C] overflow-hidden">
          <div className="max-w-[85rem] mx-auto ">
            <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:gap-10 py-[5%] 2xl:py-[8%] mt-56 lg:mt-25 2xl:mt-32 px-4">
              <div className="flex justify-center items-center xl:order-none lg:order-2 order-2" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                <div className="space-y-8 ">
                  <h1 className="lg:text-5xl text-2xl inter-bold text-white lg:leading-16 lg:mt-0 mt-3 text-justify md:text-start ">2<sup className="">nd</sup> International Conference on Technology and Data Innovations for the Future</h1>
                  <div className="space-y-3">
                    <p className="text-white md:text-lg text-base inter-regular text-justify">Connect with global leaders, pioneering researchers, and innovative minds driving the future of technology and data transformation.</p>
                    <p className="text-white md:text-lg text-base inter-regular text-justify">Mode - Hybrid (Online & On-Site)</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <FaCalendar className="lg:text-3xl text-xl flex-shrink-0 text-white" /> <p className="text-white text-xl inter-semibold">16th September 2025</p>
                    </div>
                    <Link to="paper-submission">
                      <button className="group relative overflow-hidden hover:text-[#FF521C] bg-[#FFD900]  text-[#000] poppins-medium  cursor-pointer py-3 px-6 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2">
                        <span className="relative z-10"> Register Now </span>
                        <TbCircleArrowRightFilled className='relative z-10 group-hover:-rotate-45 group-hover:translate-x-1 text-[24px] flex shrink-0 group-hover:text-[#FF521C] transition-transform duration-500' />
                        <div className="absolute inset-0  scale-x-0 group-hover:scale-x-100 duration-500 bg-white rounded-md"></div>
                      </button>
                    </Link>
                  </div>
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
                  className="rounded-full w-[300px] h-[300px] md:h-[500px] md:w-[500px] lg:h-[550px] lg:w-[550px] xl:h-[550px] xl:w-[550px] 2xl:h-[625px] 2xl:w-[625px] object-cover relative z-20"
                  initial={{ x: 0, y: 70 }}
                  animate={{ x: 0, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={` flex lg:justify-end justify-end lg:gap-5 gap-2  lg:px-5 px-2 lg:rounded-lg right-0  pt-5 pb-3 fixed lg:w-fit w-full z-30 transition-all duration-300 ${scrolled ? "bg-white  shadow-md py-2 2xl:top-[9%] xl:top-[9.5%] lg:top-[9.5%]  sm:top-[6.2%] top-[7%] " : "2xl:top-[11%] xl:top-[11%] lg:top-[9%] sm:top-[7%] top-[9%]  bg-transparent"}`} >

          <button onClick={handleViewProceedings} className="group relative overflow-hidden hover:text-[#FF521C] bg-[#FFD900]  text-[#000] poppins-medium  cursor-pointer py-3 px-6 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2">
            <FaFilePdf className=" lg:text-2xl text-lg z-10" />
            <span className=" text-sm lg:text-base duration-300 z-10">Proceedings - 2025</span>
            <div className="absolute inset-0  scale-x-0 group-hover:scale-x-100 duration-500 bg-white rounded-md"></div>
          </button>
          <button
            className="group relative overflow-hidden hover:text-[#FF521C] bg-[#FFD900]  text-[#000] poppins-medium  cursor-pointer py-3 px-6 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2"
            onClick={handleDownloadPDF}
          >
            <FaDownload className="relative z-20 lg:text-xl text-lg drop-shadow-sm  group-hover:-translate-y-1 group-hover:scale-110 duration-300" />
            <div className="absolute inset-0  scale-x-0 group-hover:scale-x-100 duration-500 bg-white rounded-md"></div>

          </button>
        </div>
        {showProceedings && (
          <div className="fixed inset-0 bg-black/70  flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-[1450px] w-full mx-2 lg:mx-0 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-end md:gap-10 gap-5 items-center p-4 border-b">
                <button className="text-xl text-gray-700 hover:text-gray-900 font-semibold flex items-center gap-4 cursor-pointer" onClick={handleDownloadPDF}>Download <FaDownload className='flex shrink-0' /></button>
                <button
                  className="text-gray-700 hover:text-gray-900 text-2xl cursor-pointer"
                  onClick={handleCloseModal}
                >
                  &times;
                </button>
              </div>
              <div className="lg:p-2 ">
                <Proceedings2025page />
              </div>

              <div className="flex justify-end p-4 border-t">
                <button
                  className="bg-gray-300 text-gray-800 p-2 px-4 rounded-lg hover:bg-gray-400 cursor-pointer"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="py-20 bg-gradient-to-r from-[#993111] to-[#FF521C] px-4 overflow-hidden">

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
                className="rounded-full w-[300px] h-[300px] md:h-[500px] md:w-[500px] lg:h-[550px] lg:w-[550px] xl:h-[550px] xl:w-[550px] 2xl:h-[525px] 2xl:w-[525px] object-cover relative z-20"
                initial={{ x: 0, y: 70, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              // viewport={{ once: true, amount: 0.3 }} 
              />
            </div>

            <div className="flex justify-center items-center " >
              <div className="space-y-6" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                <p className="text-white md:text-lg text-base inter-medium text-justify leading-[30px]">The International Conference on Technology and Data Innovations for the Future (ICTDIF-2025) brings together global experts, researchers, and innovators to share ideas, present groundbreaking research, and explore transformative solutions driving advancements in technology, data science, and innovation worldwide.</p>
                <p className="text-white md:text-lg text-base inter-medium text-justify leading-[30px]">ICTDIF-2025 fosters collaboration across academia, industry, and policy-making, addressing emerging trends in Artificial Intelligence, Big Data, Blockchain, IoT, and Digital Transformation, with a focus on creating sustainable, impactful, and inclusive technological developments. Selected high-quality papers from the conference will be recommended for publication in indexed journals, offering a platform for international recognition.</p>
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

      <div className=" bg-gradient-to-r from-[#993111] to-[#FF521C] px-4 overflow-hidden" >
        <div className="text-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
          <h2 className="text-[32px] text-white inter-bold inline-block relative">Our Mission <span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>
        </div>

        <div className="max-w-[85rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex justify-center items-center xl:order-none lg:order-2 order-2 " data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
              <div className="space-y-6">
                <p className="text-white md:text-lg text-base inter-medium text-justify leading-[30px]">ICTDIF-2025 delves into cutting-edge advancements in technology and data innovations, bringing together researchers, industry pioneers, and policymakers to tackle global challenges, foster collaboration, and develop impactful solutions for a sustainable, technology-driven future.</p>
                <p className="text-white md:text-lg text-base inter-medium text-justify leading-[30px]">The conference emphasizes key focus areas including Artificial Intelligence, Big Data Analytics, Blockchain, IoT, Cloud Computing, and Digital Transformation, encouraging interdisciplinary research and practical applications that drive innovation, competitiveness, and societal progress.</p>
                <Link to='/scope'>
                  <button className="group relative overflow-hidden hover:text-[#FF521C] bg-[#FFD900]  text-[#000] poppins-medium  cursor-pointer py-3 px-6 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2">
                    <span className="relative z-10"> Learn More </span>
                    <TbCircleArrowRightFilled className='relative z-10 group-hover:-rotate-45 group-hover:translate-x-1 text-[24px] flex shrink-0 group-hover:text-[#FF521C] transition-transform duration-500' />
                    <div className="absolute inset-0  scale-x-0 group-hover:scale-x-100 duration-500 bg-white rounded-md"></div>
                  </button>
                </Link>
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
                className="rounded-full w-[300px] h-[300px] md:h-[500px] md:w-[500px] lg:h-[550px] lg:w-[550px] xl:h-[550px] xl:w-[550px] 2xl:h-[525px] 2xl:w-[525px] object-cover relative z-20"
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

      <div className="py-20 bg-gradient-to-r from-[#993111] to-[#FF521C] px-4 overflow-hidden">
        <div className="text-center" data-aos="fade-up" data-aos-duration="500">
          <h2 className="text-[32px] text-white inter-bold inline-block relative">Remember the days<span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>
        </div>
        <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14 gap-8 mt-10">
            {dates.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 bg-[#FFD900] rounded-2xl relative"
              >
                <div
                  className="md:bg-[#FFD900] bg-white w-24 h-24 absolute -top-4 rounded-lg lg:-right-4 -right-3 z-10"
                  style={{ clipPath: "polygon(0 0, 100% 100%, 100% 0)" }}
                ></div>
                <div
                  className="col-span-4 flex justify-center items-center xl:p-10 p-5"
                  data-aos="fade-left"
                  data-aos-duration="500"
                >
                  <i className="fi fi-sr-calendar text-5xl"></i>
                </div>
                <div className="col-span-8 space-y-3 bg-white text-center rounded-2xl flex flex-col items-center justify-center p-2 z-20">
                  <p className="inter-bold md:text-xl text-lg">{item.title}</p>
                  <p className="inter-bold md:text-xl text-lg">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="key-invitees" className="max-w-[1400px] mx-auto px-4 sm:scroll-mt-[90px] scroll-mt-[140px] pb-20">
        <div className="text-center" data-aos="fade-up" data-aos-duration="500">
          <h2 className="text-[32px] text-white inter-bold inline-block relative">Key Invitees<span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mx-auto w-full">
          {item.map((person, index) => (
            <div
              className={`card group  rounded-2xl shadow-[0_0_8px_rgba(0,0,0,0.15)]  bg-white   overflow-hidden relative h-38 cursor-pointer hover:-translate-y-1 transition-transform duration-300 `}
              onClick={() => setFlipped(flipped === index ? null : index)}
            >
              <div className={`card-front absolute inset-0 flex items-center justify-center rounded-3xl    text-black p-5 transition-all duration-300 z-10 ${flipped === index ? 'opacity-0 translate-y-full' : 'opacity-100 translate-y-0'} lg:group-hover:opacity-0 lg:group-hover:translate-y-full`}>
                <h2 className="md:text-2xl text-xl lg:text-[24px] poppins-semibold text-center text-yellow-500  duration-300   " >{person.name}</h2>
              </div>
              <div className={`poppins-medium card-back absolute inset-0 flex flex-col text-center items-center   rounded-3xl      justify-center text-gray-800 p-5 transition-all duration-300 ${flipped === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'} lg:group-hover:opacity-100 lg:group-hover:translate-y-0`}>
                <p className=" text-base mb-1">{person.department},</p>
                <p className="text-base mb-1 text-yellow-500 ">{person.university},</p>
                <p className="text-base">{person.location}.</p>
              </div>
            </div>
          ))}
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

    </>
  );
}