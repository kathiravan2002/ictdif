import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { FaCalendar, FaCircleUser, FaDownload, FaFilePdf } from 'react-icons/fa6';
import { Award, BarChart3, CheckCircle, CloudCog, Cpu, Eye, FileText, Globe, GraduationCap, LineChart, MapPin, MonitorSmartphone, Network, ShieldCheck, Sparkles, Star, Users, Wifi, X } from 'lucide-react';
import { RiCalendarCheckFill, RiCheckboxCircleFill, RiDraftFill, RiFileList3Fill, RiFilePaper2Fill } from 'react-icons/ri';
import Proceedings2024 from './Proceedings2024';
import Marquee from 'react-fast-marquee';

export default function Conference2024() {



    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);

    const [showProceedings, setShowProceedings] = useState(false);
    const [showProceedings2, setShowProceedings2] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleViewProceedings = () => {
        setShowProceedings(true);
    };
    const handleViewProceedings2 = () => {
        setShowProceedings2((prev) => !prev);
    };

    const handleCloseModal = () => {
        setShowProceedings(false);
    };

    const handleDownloadPDF = () => {
        const pdfUrl = '/assets/documents/ictdif-2024.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'ICTDIF_conference_proceedings_2024.pdf';
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

    const organizing = [
        {
            name: "Dr. Yahya Dorostkar Navaei",
            university: "Qazvin Islamic Azad University",
            expertise: "Department of Computer and Information Technology Engineering",
            country: "Iran"
        },
        {
            name: "Dr.Md. Taimur Ahad",
            university: "Islamic Azad University",
            expertise: "Department of Mathematics and Statistics",
            country: "Iran"
        },
        {
            name: "Dr. Mahdiyeh Khazaneha",
            university: "Kerman University of Medical Sciences",
            expertise: "Department of Neurology Research Center",
            country: "Iran"
        },
        {
            name: "Dr. Abolfazl Gandomi",
            university: "Islamic Azad University",
            expertise: "Department of Computer Engineering",
            country: "Iran"
        },
        {
            name: "Dr. Ghasem Abbasi",
            university: "Islamic Azad University",
            expertise: "Department of Mathematics and Statistics",
            country: "Iran"
        }
    ]


    const technical = [
        {
            name: "Dr. Muhammad Umair Hassan",
            university: "Norwegian University of Science and Technology",
            expertise: "Department of ICT and Natural Sciences",
            country: " Norway"
        },
        {
            name: "Dr. Ernesto Carrillo Arellano",
            university: "Metropolitan Autonomous University",
            expertise: "Department of Electronics Engineering",
            country: "Mexico"
        },
        {
            name: "Dr. Yogi Pratama",
            university: "Al Insyirah Institute of Health and Technology",
            expertise: "Department of  Medical Informatics",
            country: "Indonesia"
        },
        {
            name: "Dr. Asma Sbeih",
            university: "Palestine Ahliya University",
            expertise: "Department of Information Technology",
            country: "Palestine"
        },
        {
            name: "Dr. Muhammad Asif Khan",
            university: "Qatar University",
            expertise: "Research Scientist at Qatar Mobility Innovations Center",
            country: "Qatar"
        },
        {
            name: "Dr. Rodrigo Augusto Ricco ",
            university: "Federal University of Ouro Preto",
            expertise: "Department of Computer Science and Engineering",
            country: "Brazil"
        },
        {
            name: "Dr. Stephen Ekwe",
            university: "University of Cape Town",
            expertise: "Department of Electrical Engineering",
            country: "South Africa"
        },
        {
            name: "Dr. Qian Liu",
            university: "Krirk University",
            expertise: "Department of Information Technology",
            country: "Thailand"
        },
        {
            name: "Dr. Brahim Issaoui",
            university: "Qassim University",
            expertise: "Department of Economics and Social Sciences",
            country: "Saudi Arabia"
        },
        {
            name: "Dr. Yonglin Chen",
            university: "The First Hospital of Lanzhou University",
            expertise: "Department of Computer Science",
            country: "China"
        },
        {
            name: "Dr. Nadeem Iqbal Kajla",
            university: "University of Agriculture",
            expertise: "Department of Computer Science",
            country: "Pakistan"
        },
        {
            name: "Dr. Rahman Shafique",
            university: "Yeungnam University",
            expertise: "Department of Information and Communication Engineering",
            country: "South Korea"
        },
        {
            name: "Dr. Ammar Amjad",
            university: "National Yang Ming Chiao Tung University",
            expertise: "Department of Computer Science and Engineering",
            country: "Taiwan"
        },
        {
            name: "Dr. Shakar Ahmed Aziz",
            university: "Duhok University",
            expertise: "Department of Mathematics",
            country: "Iraq"
        },
        {
            name: "Dr.R. Gayathri",
            university: "PSNA College of Engineering & Technology",
            expertise: "Department of Computer Science & Engineering",
            country: "India"
        },
        {
            name: "Dr. Maryam Anwer",
            university: "Majma university",
            expertise: "Department of Industrial Engineering",
            country: "Saudi Arabia"
        },
        {
            name: "Dr. Olaniyi S Maliki",
            university: "Michael Okpara Federal University",
            expertise: "Department of Mathematics",
            country: "Nigeria"
        },
        {
            name: "Dr. Leo John Baptist",
            university: "Botho University",
            expertise: "Department of Information Technology",
            country: "Botswana"
        },
        {
            name: "Dr. Meenakshi Gupta",
            university: "National University of Singapore",
            expertise: "Department of Electronics and Communication Engineering",
            country: "Singapore"
        },
        {
            name: "Dr. Sowmipriya Rajendiran",
            university: "International School of Information Processing Sciences",
            expertise: "Department of Computer Science and Engineering ",
            country: "France"
        }
    ];



    const editorial = [
        {
            name: "Dr. Dongwann Kang",
            university: "Seoul National University of Science and Technology",
            expertise: "Department of Computer Science and Engineering",
            country: "South Korea"
        },
        {
            name: "Dr. Marwan Ramdhany Edy",
            university: "Universitas Negeri Makassar",
            expertise: "Department of Informatics and Computer Engineering",
            country: "Indonesia "
        },
        {
            name: "Dr. Shazia Riaz",
            university: "Women University Faisalabad",
            expertise: "Department of computer science",
            country: "Pakistan"
        },
        {
            name: "Dr. Qiushi Yang",
            university: "City University of Hong Kong",
            expertise: "Department of Electronic Engineering",
            country: "China"
        },
        {
            name: "Dr. Hung Nguyen",
            university: "Nha Trang university",
            expertise: "Department of Information Technology",
            country: "Vietnam"
        },
        {
            name: "Dr. Twana A. Hamad",
            university: "Harran University",
            expertise: "Department of Electronics and Communication Engineering",
            country: "Turkiye"
        },
        {
            name: "Dr. Huiliang Zhao",
            university: "Guizhou Minzu University",
            expertise: "Department of Product Design",
            country: "China"
        },
        {
            name: "Dr. Alma Bangayan Manera",
            university: "Cagayan State University",
            expertise: "Department of Electronics and Communication Engineering",
            country: "Philippines"
        },
        {
            name: "Dr. Nour Moustafa",
            university: "American University of the Middle East",
            expertise: "Department of Electronics and Communication Engineering",
            country: "Kuwait"
        },
        {
            name: "Dr. Saminda Premaratne",
            university: "University of Moratuwa",
            expertise: "Department of Information Technology",
            country: "Sri Lanka"
        },
        {
            name: "Dr.A.V.L.N. Sujith",
            university: "Jawaharlal Nehru Technological University",
            expertise: "Department of Computer Science and Engineering",
            country: "India"
        },
        {
            name: "Dr. Wasan Alamro",
            university: "Auckland University of Technology",
            expertise: "Department of Electrical and Electronics Engineering",
            country: "New Zealand"
        },
        {
            name: "Dr. Leandro N. Balico",
            university: "Federal University of Roraima",
            expertise: "Department of Computer Science and Engineering",
            country: "Brazil"
        },
        {
            name: "Dr. Adekunle Musibau Ibrahim",
            university: "Osun State University",
            expertise: "Department of Computer Science",
            country: "Nigeria"
        },
        {
            name: "Dr. Argha Chandra Dhar",
            university: "Khulna University of Engineering & Technology",
            expertise: "Department of Computer Science and Engineering",
            country: "Bangladesh"
        },
        {
            name: "Dr. Salah Eddine Benatia",
            university: "Mascara University",
            expertise: "Department of Computer Science",
            country: "Algeria"
        },

        {
            name: "Dr. Kabelo Given Chuma",
            university: "University of South Africa",
            expertise: "Department of Information Science",
            country: "South Africa"
        },
        {
            name: "Dr.A. Karthikeyan",
            university: "SNS College of Technology",
            expertise: "Department of Electronics and Communication Engineering",
            country: "India"
        },
        {
            name: "Dr. Moses Adah Agana",
            university: "University of Calabar",
            expertise: "Department of Computer Science",
            country: "Nigeria"
        },
        {
            name: "Dr. Chinwe Peace Igiri",
            university: "Cavendish University",
            expertise: "Department of Computer Science and Engineering",
            country: "Uganda"
        },
        {
            name: "Dr. Zouhour El-Abiad",
            university: "ESA Business School",
            expertise: "Department of Computer Science and Engineering",
            country: "Lebanon"
        },
        {
            name: "Dr. Gabriel A. Ogunmola",
            university: "Sharda University",
            expertise: "Department of Information Technology",
            country: "Uzbekistan"
        },
        {
            name: "Dr.K.N. Apinaya Prethi",
            university: " Kumaraguru College of Technology",
            expertise: "Department of Computer Science and Engineering",
            country: "India"
        },

        {
            name: "Dr. Aram Sabr Tahr",
            university: "Cyprus International University",
            expertise: "Department of Computer Science and Engineering ",
            country: "Cyprus"
        },
        {
            name: "Dr.R. Arun Kumar",
            university: "University of South Wales",
            expertise: "Department of Digital Forensics & Cyber Security",
            country: "United Kingdom"
        },
        {
            name: "Dr. Alven Ritonga",
            university: "Universitas Wijaya Putra",
            expertise: "Department of Computer Science",
            country: "Indonesia"
        },
        {
            name: "Dr. Hea Choon Ngo",
            university: "Universiti Teknikal Malaysia Melaka",
            expertise: "Department of Electronics and Communication Engineering",
            country: "Malaysia"
        },
        {
            name: "Dr. Manivannan",
            university: "SASTRA Deemed University",
            expertise: "Department of Computing",
            country: "India"
        },
        {
            name: "Dr. Dongfeng Li",
            university: "Fuyang People's Hospital",
            expertise: "Department of Medical Science",
            country: "China"
        }
    ];


    const datesByYear = [

        { title: 'Abstract Submission', date: '18-03-2024', icon: <RiFileList3Fill className="w-7 h-7" /> },
        { title: 'Abstract Acceptance Date', date: '05-04-2024', icon: <RiFilePaper2Fill className="w-7 h-7" /> },
        { title: 'Full Paper Submission', date: '28-05-2024', icon: <RiCheckboxCircleFill className="w-7 h-7" /> },
        { title: 'Acceptance Notifications', date: '13-09-2024', icon: <RiCalendarCheckFill className="w-7 h-7" /> },
        { title: 'Registration Deadline / Final Paper', date: '22-10-2024', icon: <RiDraftFill className="w-7 h-7" /> },

    ]

    const roles = [
        {
            title: 'Intelligent Systems & Artificial Intelligence',
            duties: [
                ' Machine learning, deep learning, automation, and AI-driven decision-making'
            ],
            icon: <Cpu className="w-12 h-12" />,
        },
        {
            title: 'Adaptive Learning & Predictive Analytics',
            duties: [
                'Data-driven models, real-time learning, forecasting, and pattern recognition'
            ],
            icon: <GraduationCap className="w-12 h-12" />,
        },
        {
            title: 'Blockchain & Decentralized Solutions',
            duties: [
                'Smart contracts, secure transactions, distributed ledgers, and DeFi applications'
            ],
            icon: <Network className="w-12 h-12" />,
        },
        {
            title: 'Cybersecurity & Digital Protection',
            duties: [
                'Network security, intrusion detection, privacy-preserving technologies, and security innovations'
            ],
            icon: <ShieldCheck className="w-12 h-12" />,
        },
        {
            title: 'Cloud & Edge Computing',
            duties: [
                'Scalable cloud services, serverless computing, hybrid cloud, and edge/fog architectures'
            ],
            icon: <CloudCog className="w-12 h-12" />,
        },
        {
            title: 'Internet of Things & Connected Devices',
            duties: [
                'IoT applications, smart systems, sensor networks, and automation'
            ],
            icon: <Wifi className="w-12 h-12" />,
        },
        {
            title: 'Data Analytics & Insight Generation',
            duties: [
                'Big data analytics, visualization, business intelligence, and actionable insights'
            ],
            icon: <BarChart3 className="w-12 h-12" />,
        },
        {
            title: 'User Experience & Digital Interaction',
            duties: [
                'UX/UI design, accessibility, virtual/augmented reality, and digital engagement'
            ],
            icon: <MonitorSmartphone className="w-12 h-12" />,
        },
        {
            title: 'Emerging Technologies & Digital Transformation',
            duties: [
                'Innovative tools, frameworks, and practical applications driving industry evolution'
            ],
            icon: <Sparkles className="w-12 h-12" />,
        }
    ];


    const tracks = [
        {
            title: 'Smart Intelligence Systems',
            duties: [
                'Design and implement AI solutions for automation and decision support.',
                'Machine learning algorithms, expert systems, and AI-driven optimization.',
                'Applications in industry, healthcare, and business processes.'
            ],
            icon: <Cpu className="w-12 h-12" />,
        },
        {
            title: 'Adaptive & Predictive Learning',
            duties: [
                'Models and frameworks that continuously learn from evolving data.',
                'Adaptive machine learning, online learning, and predictive modeling.',
                'Use cases: personalized recommendations, dynamic forecasting, real-time analytics.'
            ],
            icon: <GraduationCap className="w-12 h-12" />,
        },
        {
            title: 'Blockchain & Decentralized Innovations',
            duties: [
                'Secure and transparent digital transaction frameworks.',
                'Smart contracts, decentralized finance (DeFi), and supply chain applications.',
                'Privacy-preserving distributed systems and blockchain-based solutions.',
            ],
            icon: <Network className="w-12 h-12" />,
        },

        {
            title: 'Cloud & Edge Computing Ecosystems',
            duties: [
                'Scalable, resilient, and flexible cloud architecture designs.',
                'Multi-cloud deployment, serverless computing, and virtualization strategies.',
                'Optimizing performance, cost, and security in cloud infrastructures.'
            ],
            icon: <CloudCog className="w-12 h-12" />,
        },
        {
            title: 'Data-Driven Analytics & Insights',
            duties: [
                'Transforming raw data into actionable insights.',
                'Big data analytics, predictive/prescriptive modeling, and visualization techniques.',
                'Applications in finance, healthcare, smart cities, and digital enterprises.'
            ],
            icon: <LineChart className="w-12 h-12" />,
        },

    ];



    const overview = [
        {
            title: 'Innovation & Originality',
            duties: [
                'Research that introduces novel ideas, methodologies, or approaches.'
            ],
            icon: <Cpu className="w-12 h-12" />,
        },
        {
            title: 'Research Impact',
            duties: [
                'Contributions that advance both theoretical understanding and practical applications.'
            ],
            icon: <GraduationCap className="w-12 h-12" />,
        },
        {
            title: 'Presentation Excellence',
            duties: [
                'Outstanding oral presentations that effectively communicate the work’s significance.'
            ],
            icon: <Network className="w-12 h-12" />,
        },
        {
            title: 'Manuscript Quality',
            duties: [
                'Clear, well-structured, and professionally written papers.'
            ],
            icon: <ShieldCheck className="w-12 h-12" />,
        },
        {
            title: 'Industry Relevance',
            duties: [
                'Research with tangible applications or implications for real-world scenarios.'
            ],
            icon: <CloudCog className="w-12 h-12" />,
        },
        {
            title: 'Adherence to Guidelines',
            duties: [
                'Compliance with submission and formatting standards ensures fairness and consistency.'
            ],
            icon: <Wifi className="w-12 h-12" />,
        },

    ];
    const papers = [
        {
            title: 'Artificial Intelligence & Intelligent Systems',
            duties: [
                'Innovative machine learning models, deep learning architectures, and decision-support frameworks.'
            ],
            icon: <Cpu className="w-12 h-12" />,
        },
        {
            title: 'Big Data & Predictive Analytics',
            duties: [
                'Scalable data mining techniques, forecasting methods, and real-time data processing.'
            ],
            icon: <BarChart3 className="w-12 h-12" />,
        },
        {
            title: 'Blockchain & Secure Systems',
            duties: [
                'Decentralized solutions, privacy-preserving protocols, and blockchain-enabled applications.'
            ],
            icon: <Network className="w-12 h-12" />,
        },

        {
            title: 'Cloud & Edge Computing',
            duties: [
                'Optimized cloud-native architectures, serverless computing, and hybrid solutions.'
            ],
            icon: <CloudCog className="w-12 h-12" />,
        },
        {
            title: 'IoT & Cybersecurity',
            duties: [
                'Intelligent IoT frameworks, intrusion detection systems, and AI-powered threat prevention.'
            ],
            icon: <Wifi className="w-12 h-12" />,
        },
        {
            title: 'Emerging Digital Transformation Tools',
            duties: [
                'Practical applications of advanced analytics, automation, and sustainable technologies.'
            ],
            icon: <MonitorSmartphone className="w-12 h-12" />,
        },

    ];


    const stats = [
        { label: 'Total Submissions', value: '240', icon: FileText },
        { label: 'Selected Papers', value: '36', icon: CheckCircle },
        { label: 'Acceptance Rate', value: '15%', icon: CheckCircle },
        { label: 'Participating Countries', value: '19', icon: Globe },
    ];

    const regions = [
        {
            name: 'Europe',
            count: 7,
            countries: ['Iran', 'India', 'China', 'USA', 'Australia', 'UK', 'Germany', 'Canada', 'South Korea', 'Brazil', 'Uganda', 'New Zealand', 'Mauritius', 'Thailand', 'Algeria', 'Belgium', 'Cambodia', 'Bermuda', 'UAE']
        },

    ];
    return (
        <div>
            <div className="bg-gradient-to-r from-[#993111] to-[#FF521C] overflow-hidden">
                <div className="max-w-[85rem] mx-auto ">
                    <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:gap-10 py-[5%] 2xl:py-[8%] mt-56 lg:mt-25 2xl:mt-32 px-4">
                        <div className="flex justify-center items-center xl:order-none lg:order-2 order-2" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                            <div className="space-y-8 ">
                                <h1 className="lg:text-5xl text-2xl inter-bold text-white lg:leading-16 lg:mt-0 mt-3 text-justify md:text-start ">1<sup className="">st</sup> International Conference on Technology and Data Innovations for the Future</h1>
                                <div className="space-y-3">
                                    <p className="text-white md:text-lg text-base inter-regular text-justify">Engage with international experts, trailblazing researchers, and visionary innovators shaping the next era of technology and data-driven progress.</p>
                                    <p className="text-white md:text-lg text-base inter-regular text-justify">Mode - Hybrid (Online & On-Site)</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <FaCalendar className="lg:text-3xl text-xl flex-shrink-0 text-white" /> <p className="text-white text-xl inter-semibold">14th November 2024</p>
                                    </div>

                                </div>
                            </div>
                        </div>
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
                <div className={` flex lg:justify-end justify-end lg:gap-5 gap-2  lg:px-5 px-2 lg:rounded-lg right-0  pt-5 pb-3 fixed lg:w-fit w-full z-30 transition-all duration-300 ${scrolled ? "bg-white  shadow-md py-2 2xl:top-[9%] xl:top-[9.5%] lg:top-[9.5%]  sm:top-[6.2%] top-[7%] " : "2xl:top-[11%] xl:top-[11%] lg:top-[9%] sm:top-[7%] top-[9%]  bg-transparent"}`} >

                    <button onClick={handleViewProceedings} className="group relative overflow-hidden hover:text-[#FF521C] bg-[#FFD900]  text-[#000] poppins-medium  cursor-pointer py-3 px-6 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2">
                        <FaFilePdf className=" lg:text-2xl text-lg z-10" />
                        <span className=" text-sm lg:text-base duration-300 z-10">Proceedings - 2024</span>
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
                                <Proceedings2024 />
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

                <div className="max-w-[90rem] mx-auto px-4 mb-15 mt-10">
                    <h2 className="md:text-[32px] text-center text-[28px] text-white inter-bold  mb-5 scroll-mt-[120px]" id="organizing-committee">Organizing Committee </h2>
                    <div className="space-y-2">
                        {organizing.map((item, index) =>
                            <div key={index} className="flex gap-2 items-center">
                                <FaCircleUser className='text-[18px] flex shrink-0 text-[#FFD900]' />
                                <p className="leading-relaxed "><span className=" text-[#FFD900] text-[16px] inter-semibold  text-center ">{item.name} - </span><span className="text-[16px] inter-medium  text-white text-center opacity-80">{item.expertise}, </span><span className="text-[16px] inter-medium text-white  text-center opacity-80">{item.university}, </span><span className="text-[16px] inter-medium text-white  text-center opacity-80">{item.country}.</span></p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="max-w-[90rem] mx-auto px-4 mb-10">
                    <h2 className="md:text-[32px] text-center text-[28px] text-white inter-bold  mb-5 scroll-mt-[120px]" id="technical-committee">Technical Program Committee </h2>
                    <div className="space-y-2">
                        {technical.map((item, index) =>
                            <div key={index} className="flex gap-2 items-center">
                                <FaCircleUser className='text-[18px] flex shrink-0 text-[#FFD900]' />
                                <p className="leading-relaxed "><span className=" text-[#FFD900] text-[16px] inter-semibold  text-center ">{item.name} - </span><span className="text-[16px] inter-medium  text-white text-center opacity-80">{item.expertise}, </span><span className="text-[16px] inter-medium text-white  text-center opacity-80">{item.university}, </span><span className="text-[16px] inter-medium text-white  text-center opacity-80">{item.country}.</span></p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="max-w-[90rem] mx-auto px-4 mb-10">
                    <h2 className="md:text-[32px] text-center text-[28px] text-white inter-bold  mb-5 scroll-mt-[120px]" id="advisory-committee">International Advisory Board Committee Members</h2>
                    <div className="space-y-2">
                        {editorial.map((item, index) =>
                            <div key={index} className="flex gap-2 items-center">
                                <FaCircleUser className='text-[18px] flex shrink-0 text-[#FFD900]' />
                                <p className="leading-relaxed "><span className=" text-[#FFD900] text-[16px] inter-semibold  text-center ">{item.name} - </span><span className="text-[16px] inter-medium  text-white text-center opacity-80">{item.expertise}, </span><span className="text-[16px] inter-medium text-white  text-center opacity-80">{item.university}, </span><span className="text-[16px] inter-medium text-white  text-center opacity-80">{item.country}.</span></p>
                            </div>
                        )}
                    </div>
                </div>

                <section className="">
                    <div className="text-center lg:mt-20 mt-10 " data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                        <h2 className="md:text-[32px] text-[28px] text-white inter-bold inline-block relative">Call for Paper <span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>
                        <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 space-y-6 mt-8">
                            <p className="text-white md:text-lg text-base inter-medium leading-[30px] text-justify">The International Conference on Technology and Data Innovations for the Future (ICTDIF-2024) welcomes researchers, academicians, industry experts, and students to submit original, high-quality research papers. The conference offers a premier global stage to present innovative ideas, share breakthroughs, and explore transformative solutions in technology and data-driven innovation.</p>
                        </div>
                    </div>
                    <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 pt-6 pb-10 ">
                        <p className="text-[#FFD900] md:text-2xl text-lg  inter-semibold leading-relaxed text-center mb-10">Topics of Interest Include (but are not limited to) :</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14 gap-8 ">
                            {roles.map((item, index) => (
                                <div className="grid grid-cols-1 md:grid-cols-12 bg-[#FFD900] rounded-2xl relative">
                                    <div className="md:bg-[#FFD900] bg-white w-24 h-24 absolute -top-4 rounded-lg lg:-right-4 -right-3 z-10" style={{ clipPath: 'polygon(0 0, 100% 100%, 100% 0)' }} data-aos="fade-up" data-aos-duration="500"></div>
                                    <div className="col-span-4  flex justify-center items-center  p-5" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                                        {item.icon}
                                    </div>
                                    <div className="bg-white col-span-8  space-y-2 text-center rounded-2xl  p-7 z-20">
                                        <h2 className="inter-bold text-lg text-center">{item.title}</h2>
                                        <ul className=" space-y-2 ">
                                            {item.duties.map((duty, dutyIndex) => (
                                                <li key={dutyIndex} className="flex items-start  ">
                                                    <span className="text-base inter-regular leading-[30px] opacity-85 text-justify">
                                                        {duty}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 space-y-6 mb-10">
                        <p className="text-white md:text-lg text-base inter-medium leading-[30px] text-justify">Selected papers will be recommended for publication in indexed journals, offering authors a distinguished platform for international recognition.</p>
                        <p className="text-white md:text-lg text-base inter-medium leading-[30px] text-justify">Submit your work to ICTDIF-2024 and join a global community shaping the future of technology and data-driven innovation.</p>
                    </div>
                </section>

                <section className="">
                    <div className="text-center lg:mt-20 mt-10" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                        <h2 className="md:text-[32px] text-[28px] text-white inter-bold inline-block relative">Conference Tracks <span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>
                    </div>
                    <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 py-20 ">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-10 gap-8 ">
                            {tracks.map((item, index) => (
                                <div key={index} className="grid grid-cols-1 md:grid-cols-12 bg-[#FFD900] rounded-2xl relative">
                                    <div className="md:bg-[#FFD900] bg-white w-24 h-24 absolute -top-4 rounded-lg lg:-right-4 -right-3 z-10" style={{ clipPath: 'polygon(0 0, 100% 100%, 100% 0)' }} data-aos="fade-up" data-aos-duration="500"></div>
                                    <div className="col-span-2  flex justify-center items-center  p-5" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                                        {item.icon}
                                    </div>
                                    <div className="bg-white col-span-10  space-y-2 text-center rounded-2xl  p-7 z-20">
                                        <h2 className="inter-bold text-lg text-center">{item.title}</h2>
                                        <ul className=" space-y-2 ">
                                            {item.duties.map((duty, dutyIndex) => (
                                                <li key={dutyIndex} className="flex items-start  ">
                                                    <span className="text-base inter-regular leading-[30px] opacity-85 text-justify">
                                                        {duty}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="">
                    <div className="text-center " data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                        <h2 className="md:text-[32px] text-[28px] text-white inter-bold inline-block relative">Important Dates<span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>
                    </div>
                    <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 py-20">

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14 gap-8">
                            {datesByYear.map((item, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-1 lg:grid-cols-1 bg-[#FFD900] rounded-2xl relative group hover:-translate-y-2 duration-300"
                                >
                                    <div
                                        className="bg-[#FFD900] border-2 border-white w-20 h-20 absolute -top-4 rounded-lg lg:-right-4 -right-3 z-10"
                                        style={{ clipPath: 'polygon(0 0, 100% 100%, 100% 0)' }}
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                    >
                                        <div className="flex justify-center items-center ml-4 mt-1">{item.icon}</div>
                                    </div>
                                    <div className="flex justify-center items-center p-5">
                                        <h2 className="inter-bold text-lg text-center">{item.title}</h2>
                                    </div>
                                    <div className="bg-white space-y-2 text-center rounded-2xl p-5 z-20">
                                        <p className="inter-medium text-lg">{item.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="pb-20">
                    <div className="text-center " data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                        <h2 className="md:text-[32px] text-[28px] text-white inter-bold inline-block relative">ICTDIF-2024 <span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>
                        <p className="text-[#FFD900] md:text-2xl text-lg  inter-semibold leading-relaxed text-center mt-10">BEST PAPER SELECTION CRITERIA </p>

                        <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 space-y-6 mt-6 mb-10">
                            <p className="text-white md:text-lg text-base inter-medium leading-[30px] text-justify">ICTDIF-2024 proudly recognizes exceptional research through its Best Paper Award, open to all accepted submissions. The Technical Program Committee (TPC) will carefully evaluate each paper, highlighting those that demonstrate excellence across multiple dimensions:</p>
                        </div>
                    </div>
                    <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 pt-5 pb-10 ">

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14 gap-8 ">
                            {overview.map((item, index) => (
                                <div className="grid grid-cols-1 md:grid-cols-12 bg-[#FFD900] rounded-2xl relative">
                                    <div className="md:bg-[#FFD900] bg-white w-24 h-24 absolute -top-4 rounded-lg lg:-right-4 -right-3 z-10" style={{ clipPath: 'polygon(0 0, 100% 100%, 100% 0)' }} data-aos="fade-up" data-aos-duration="500"></div>
                                    <div className="col-span-4  flex justify-center items-center  p-5" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                                        {item.icon}
                                    </div>
                                    <div className="bg-white col-span-8  space-y-2 text-center rounded-2xl  p-7 z-20">
                                        <h2 className="inter-bold text-lg text-center">{item.title}</h2>
                                        <ul className=" space-y-2 ">
                                            {item.duties.map((duty, dutyIndex) => (
                                                <li key={dutyIndex} className="flex items-start  ">
                                                    <span className="text-base inter-regular leading-[30px] opacity-85 text-justify">
                                                        {duty}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 space-y-6">
                        <p className="text-white md:text-lg text-base inter-medium leading-[30px] text-justify">This award celebrates research that combines creativity, rigor, and practical value, showcasing the most influential contributions at ICTDIF-2024.</p>
                    </div>
                </section>
                <section className='pb-20' >
                    <div className="text-center " data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                        <h2 className="md:text-[32px] text-[28px] text-white inter-bold inline-block relative">Conference Statistics <span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>

                        <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 space-y-6 mt-6 mb-10">
                            <p className="text-white md:text-lg text-base inter-medium leading-[30px] text-justify">ICTDIF-2025 brought together researchers, academicians, and industry professionals from around the world, showcasing its global reach and impact in the fields of Technology and Data Innovations.</p>
                        </div>
                    </div>



                    <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10  mt-4">
                            {stats.map((stat, idx) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={idx} className="grid grid-cols-1 md:grid-cols-12 bg-[#FFD900] rounded-2xl relative">
                                        <div className="md:bg-[#FFD900] bg-white w-24 h-24 absolute -top-4 rounded-lg lg:-right-4 -right-3 z-10" style={{ clipPath: 'polygon(0 0, 100% 100%, 100% 0)' }} data-aos="fade-up" data-aos-duration="500"></div>
                                        <div className="col-span-4  flex justify-center items-center  p-5" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                                            <Icon className="w-8 h-8 " />
                                        </div>
                                        <div className="bg-white col-span-8  space-y-2 text-center rounded-2xl  p-7 z-20">
                                            <h2 className="inter-bold text-lg 2xl:h-15 text-center">{stat.label}</h2>
                                            <ul className=" space-y-2 ">
                                                <li className="  ">
                                                    <span className="text-lg inter-semibold leading-[30px] opacity-85 text-center">
                                                        {stat.value}
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </section>
                <section className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 pb-20 ">
                    <div >
                        <div className="text-center " data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                            <h2 className="md:text-[32px] text-[28px] text-white inter-bold inline-block relative">Global Participation <span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>

                            <div className=" space-y-6 mt-6 mb-10">
                                <p className="text-white md:text-lg text-base inter-medium leading-[30px] text-justify">ICTDIF-2024 proudly welcomed scholars and innovators from diverse regions, showcasing a vibrant exchange of ideas and solutions. Countries represented include :</p>
                            </div>
                        </div>
                        <div className="max-w-6xl mx-auto grid grid-cols-1  gap-6">
                            {regions.map((region, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-xl p-6 transition-all duration-300"
                                >

                                    <div className="flex flex-wrap gap-4">
                                        {region.countries.map((country, cIdx) => (
                                            <span
                                                key={cIdx}
                                                className="px-3 py-1 bg-yellow-500/20 inter-medium rounded-full text-sm border border-yellow-500/30"
                                            >
                                                {country}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 space-y-6  mt-6">
                            <p className="text-white md:text-lg text-base inter-medium leading-[30px] text-justify">This global participation not only broadened the conference’s scope but also strengthened its role as a platform for cross-border innovation, collaboration, and knowledge-sharing.</p>
                        </div>
                    </div>
                </section>


                <section className="pb-20">
                    <div className="text-center " data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                        <h2 className="md:text-[32px] text-[28px] text-white inter-bold inline-block relative">Published Papers <span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>

                        <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 space-y-6 mt-6 ">
                            <p className="text-white md:text-lg text-base inter-medium leading-[30px] text-justify">The International Conference on Technology and Data Innovations for the Future (ICTDIF-2024) received an overwhelming 240 full paper submissions from researchers across 19 countries. After a rigorous peer-review process, only 36 high-quality papers were selected, resulting in a competitive acceptance rate of 15%.</p>
                        </div>
                    </div>
                    <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 pt-5 pb-10 ">
                        <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 space-y-6 mb-10">
                            <p className="text-white lg:text-2xl text-xl inter-semibold text-center">The published papers highlight diverse and impactful research across multiple domains. Some of the key topics covered include</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14 gap-8 ">
                            {papers.map((item, index) => (
                                <div className="grid grid-cols-1 md:grid-cols-12 bg-[#FFD900] rounded-2xl relative">
                                    <div className="md:bg-[#FFD900] bg-white w-24 h-24 absolute -top-4 rounded-lg lg:-right-4 -right-3 z-10" style={{ clipPath: 'polygon(0 0, 100% 100%, 100% 0)' }} data-aos="fade-up" data-aos-duration="500"></div>
                                    <div className="col-span-4  flex justify-center items-center  p-5" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                                        {item.icon}
                                    </div>
                                    <div className="bg-white col-span-8  space-y-2 text-center rounded-2xl  p-7 z-20">
                                        <h2 className="inter-bold text-lg text-center">{item.title}</h2>
                                        <ul className=" space-y-2 ">
                                            {item.duties.map((duty, dutyIndex) => (
                                                <li key={dutyIndex} className="flex items-start  ">
                                                    <span className="text-base inter-regular leading-[30px] opacity-85 text-justify">
                                                        {duty}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 space-y-6">
                        <p className="text-white md:text-lg text-base inter-medium leading-[30px] text-justify">These contributions not only advance theoretical knowledge but also provide practical solutions that can drive innovation across industries and global communities.</p>
                        <p className="text-white md:text-lg text-base inter-medium leading-[30px] text-justify">We extend our warmest thanks to the global community of participants whose support turned ICTDIF-2024 into an outstanding success.</p>
                    </div>
                </section>

                <section className="pb-20">
                    <section className="max-w-[1400px] mx-auto px-4 2xl:px-0  ">
                        <div className="relative  rounded-3xl overflow-hidden bg-[url('/assets/images/certificatebg.jpg')] bg-cover bg-center  shadow-lg">
                            <div className="absolute inset-0 bg-black/80"></div>
                            <div className="relative py-16 px-4 lg:px-16">
                                <div className="text-center mb-10">
                                    <div className="inline-flex items-center justify-center gap-6 mb-3 flex-wrap">
                                        <div className="relative">
                                            <div className="relative ">
                                                <Award className="w-10 h-10 lg:w-12 lg:h-12 text-[#FFD900] flex-shrink-0" />
                                            </div>
                                        </div>
                                        <h2 className="text-3xl lg:text-5xl inter-bold text-[#FFD900]">
                                            Best Paper Award
                                        </h2>
                                        <div className="">
                                            <div className="flex items-end justify-end w-fit gap-3 border-1 border-[#FFD900] bg-gradient-to-r from-[#993111] to-[#FF521C] px-8 py-3 rounded-full shadow-xl ">
                                                <Star className="w-6 h-6 text-[#FFD900] flex-shrink-0" />
                                                <span className="text-xl inter-bold text-[#FFD900]">ICTDIF 2024 </span>
                                                <Star className="w-6 h-6 text-[#FFD900] flex-shrink-0" />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="max-w-5xl mx-auto mb-10">
                                    <div className="bg-gradient-to-r from-[#993111] to-[#FF521C] backdrop-blur rounded-3xl p-4 shadow-2xl border-1 border-[#FFD900]">
                                        <h3 className="text-2xl text-center inter-bold text-[#FFD900] mb-4">Recognition Statement</h3>
                                        <p className="text-white text-lg leading-[30px] text-justify lg:text-center inter-medium">
                                            For advancing real-time security through AI-driven threat detection frameworks, the <span className="text-[#FFD900] inter-semibold"> Best Paper Award of ICTDIF-2024 </span> presented to:
                                        </p>
                                    </div>
                                </div>

                                <div className="max-w-5xl mx-auto mb-10">
                                    <div className="relative group">
                                        <div className="">

                                            <p className="text-[#FFD900] text-xl lg:text-2xl  inter-semibold text-center leading-relaxed">
                                                "AI-DRIVEN THREAT DETECTION FRAMEWORKS FOR SECURING CYBER-PHYSICAL SYSTEMS IN REAL TIME"
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center mb-10">
                                    <div className="relative group">
                                        <div className="relative">
                                            <div className="bg-gradient-to-r from-[#993111] to-[#FF521C] p-3 rounded-[15px] shadow-2xl border-1 border-[#FFD900]">
                                                <img
                                                    src="/assets/images/certificate2024.jpg"
                                                    alt="Certificate"
                                                    className="w-[320px] rounded-[10px] text-[#FFD900] cursor-pointer transform group-hover:scale-105 transition-transform duration-500"
                                                    onClick={openDialog}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={openDialog}
                                        className="mt-8 flex items-center gap-3 border-1 border-[#FFD900] bg-gradient-to-r from-[#993111] to-[#FF521C] text-[#FFD900] px-10 py-4 rounded-full inter-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                                    >
                                        <Eye className="w-6 h-6 flex-shrink-0" />
                                        View Full Certificate
                                    </button>
                                </div>

                                <div className="max-w-4xl mx-auto mb-10">
                                    <div className="">
                                        <div className="flex justify-center mb-3">
                                            <div className="">
                                                <Users className="w-7 h-7 text-[#FFD900] flex-shrink-0" />
                                            </div>
                                        </div>
                                        <p className="text-[#FFD900] text-center mb-4 inter-semibold text-lg">Authored by</p>
                                        <div className="bg-gradient-to-r from-[#993111] to-[#FF521C] rounded-full p-3 px-5 w-fit mx-auto mb-5">
                                            <h3 className="text-xl lg:text-2xl inter-bold text-center    text-[#FFD900]">
                                                Charles Ubagaram
                                            </h3>
                                        </div>
                                        <div className="flex items-center justify-center gap-3 text-[#FFD900]  lg:text-lg text-base">
                                            <MapPin className="w-7 h-7 text-[#FFD900] flex-shrink-0" />
                                            <p className="inter-medium ">Tata Consultancy Services,Milford,Ohio,USA.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="max-w-5xl mx-auto">
                                    <div className="bg-gradient-to-r from-[#993111] to-[#FF521C] backdrop-blur rounded-3xl p-5 shadow-2xl border-1 border-[#FFD900]">
                                        <div className="flex items-center gap-4 mb-4">

                                            <h4 className="text-3xl inter-bold text-[#FFD900]">Research Overview</h4>
                                        </div>
                                        <p className="text-white text-base text-justify leading-[30px] inter-medium">
                                            The outstanding research paper <span className="text-[#FFD900] inter-semibold"> “AI-DRIVEN THREAT DETECTION FRAMEWORKS FOR SECURING CYBER-PHYSICAL SYSTEMS IN REAL TIME” </span> focuses on using Artificial Intelligence to detect threats in cyber-physical systems such as smart grids, healthcare devices, and industrial automation. It builds frameworks that can analyze data in real time, identifying unusual or malicious activities instantly. By combining intelligent algorithms with system monitoring, it strengthens protection against evolving cyber-attacks. This approach ensures faster responses, improved security, and reduced risks for critical infrastructures.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {isDialogOpen && (
                        <div
                            className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50 p-4"
                            onClick={closeDialog}
                        >
                            <div
                                className="relative bg-white p-2 max-w-4xl w-full rounded-3xl shadow-2xl border-4 border-[#FFD900]"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    className="absolute -top-4 -right-4 bg-[#FFD900] rounded-full p-3 shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer"
                                    onClick={closeDialog}
                                >
                                    <X className="w-8 h-8 text-white flex-shrink-0" />
                                </button>
                                <img
                                    src="/assets/images/certificate2024.jpg"
                                    alt="Certificate"
                                    className="w-full rounded-2xl"
                                />
                            </div>
                        </div>
                    )}
                </section>
                <section className="">
                    <div className="max-w-[90rem] mx-auto 2xl:px-0 px-4 pb-10  ">

                        <div >
                            <h2 className="md:text-[32px] text-[28px] text-white inter-bold inline-block relative">Conference Proceedings<span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>
                        </div>
                        <div className="mt-5">
                            <div className="space-y-4">
                                <p className="text-white md:text-lg text-base inter-medium leading-[30px] text-justify">ICTDIF - 2024 Conference Proceedings will feature high-quality, peer-reviewed research papers presented at the conference. The proceedings will be published digitally to ensure global accessibility and academic recognition. Each paper will highlight innovative technologies and data-driven solutions that are shaping the future of industries. The focus will be on emerging trends in technology, artificial intelligence, big data analytics, and digital innovation—emphasizing their transformative impact on business, society, and sustainable development in the modern digital landscape</p>
                            </div>
                        </div>
                        <div className="flex justify-center mt-4 lg:px-5 px-0 mb-10">
                            <button className="group relative overflow-hidden hover:text-[#FF521C] bg-[#FFD900]  text-[#000] poppins-medium  cursor-pointer py-3 px-6 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2" onClick={handleViewProceedings2}>
                                <FaFilePdf className='flex shrink-0 text-xl z-10 ' /><div className="z-10"> View  Conference Proceedings</div>
                                <div className="absolute inset-0  scale-x-0 group-hover:scale-x-100 duration-500 bg-white rounded-md"></div>
                            </button>
                        </div>
                        {showProceedings2 && <Proceedings2024 />}
                    </div>
                </section>
                <div className="max-w-[90rem] mx-auto pb-10">
                    <div className="px-4">
                        <div className="text-center" data-aos="fade-up" data-aos-duration="500">
                            <h2 className="text-[32px] text-white inter-bold inline-block relative">Indexed Journals<span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>
                        </div>
                        <p className="text-center text-white inter-medium opacity-85 text-[18px] leading-[30px] max-w-[1000px] mx-auto mt-4">The Selective accepted papers of our International Conference on Technology and Data Innovations for the Future will be recommended to publish in the following index & publisher Journals.</p>
                    </div>
                    <Marquee direction='right' pauseOnClick pauseOnHover>
                        <div className="  flex   ">
                            {imageItems.map((item, index) => (
                                <div key={index} className=" flex justify-center mr-10  py-5" >
                                    <img src={item.src} alt="images" className=" w-[300px] bg-white rounded-lg shadow-[0_0_8px_rgba(0,0,0,0.15)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition duratiom-300" />
                                </div>
                            ))}
                        </div>
                    </Marquee>

                </div>

            </div>
        </div >
    )
}
