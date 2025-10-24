import React, { useState } from 'react'
import { Award, BarChart3, CheckCircle, CloudCog, Cpu, Eye, FileText, Globe, GraduationCap, Layers, LineChart, MapPin, MonitorSmartphone, Network, Radio, ShieldCheck, Sparkles, Star, Users, Wifi, X } from 'lucide-react';

export default function Statistics() {

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);


    const roles = [
        {
            title: 'Originality & Novelty',
            duties: [
                'Creativity and uniqueness of the research.'
            ],
            icon: <Cpu className="w-12 h-12" />,
        },
        {
            title: 'Research Contribution',
            duties: [
                'Impact on both theoretical knowledge and practical applications.'
            ],
            icon: <GraduationCap className="w-12 h-12" />,
        },
        {
            title: 'Quality of Results',
            duties: [
                'Significance, accuracy, and reliability of findings.'
            ],
            icon: <Network className="w-12 h-12" />,
        },
        {
            title: 'Manuscript Excellence',
            duties: [
                'Clarity, organization, and compliance with formatting standards.'
            ],
            icon: <ShieldCheck className="w-12 h-12" />,
        },
        {
            title: 'Presentation Effectiveness',
            duties: [
                ' Engagement, clarity, and professionalism during the oral session.'
            ],
            icon: <CloudCog className="w-12 h-12" />,
        },
        {
            title: 'Practical Relevance',
            duties: [
                'Applicability and value to industry or real-world challenges.'
            ],
            icon: <Wifi className="w-12 h-12" />,
        },
        {
            title: 'Presentation Recognition',
            duties: [
                'Additional merit for outstanding delivery and communication during the session.'
            ],
            icon: <BarChart3 className="w-12 h-12" />,
        },

    ];
    const papers = [
        {
            title: 'Artificial Intelligence & Machine Learning',
            duties: [
                'Smart systems, predictive analytics, adaptive learning'
            ],
            icon: <Cpu className="w-12 h-12" />,
        },
        {
            title: 'Big Data Analytics & Insight Generation',
            duties: [
                'Real-time data processing, data visualization, business intelligence'
            ],
            icon: <BarChart3 className="w-12 h-12" />,
        },
        {
            title: 'Blockchain & Decentralized Solutions',
            duties: [
                'Secure transactions, smart contracts, distributed ledger technologies'
            ],
            icon: <Network className="w-12 h-12" />,
        },
        {
            title: 'Cybersecurity & Digital Protection',
            duties: [
                'Network security, intrusion detection, privacy-preserving methods'
            ],
            icon: <ShieldCheck className="w-12 h-12" />,
        },
        {
            title: 'Cloud & Edge Computing',
            duties: [
                'Scalable cloud services, serverless computing, hybrid cloud architectures'
            ],
            icon: <CloudCog className="w-12 h-12" />,
        },
        {
            title: 'Internet of Things & Connected Devices',
            duties: [
                'Smart systems, sensor networks, automation'
            ],
            icon: <Wifi className="w-12 h-12" />,
        },
        {
            title: 'User Experience & Digital Interaction',
            duties: [
                'UX/UI design, accessibility, virtual & augmented reality applications'
            ],
            icon: <MonitorSmartphone className="w-12 h-12" />,
        },

    ];


    const stats = [
        { label: 'Total Full Paper Submissions', value: '233', icon: FileText },
        { label: 'Selected Papers for Presentation', value: '35', icon: CheckCircle },
        { label: 'Acceptance Rate', value: '15%', icon: CheckCircle },
    ];

    const regions = [
        {
            name: 'Europe',
            count: 7,
            countries: ['Spain', 'Finland', 'Greece', 'France', 'Netherlands', 'Russia', 'Turkey']
        },
        {
            name: 'North America',
            count: 3,
            countries: ['USA', 'Mexico', 'Canada']
        },
        {
            name: 'Middle East',
            count: 6,
            countries: ['Iran', 'UAE', 'Iraq', 'Bahrain', 'Saudi Arabia', 'Oman']
        },
        {
            name: 'Asia-Pacific & Others',
            count: 8,
            countries: ['Indonesia', 'Brunei', 'India', 'Australia', 'Kazakhstan', 'Algeria']
        }
    ];
    return (
        <div>
            <div className=" bg-gradient-to-r from-[#993111] to-[#FF521C] px-4 pt-35 overflow-hidden">
                <div className="text-center " data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                    <h2 className="md:text-[32px] text-[28px] text-white inter-bold inline-block relative">ICTDIF-2025 <span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>
                    <p className="text-[#FFD900] md:text-2xl text-lg  inter-semibold leading-relaxed text-center mt-10">BEST PAPER SELECTION CRITERIA </p>

                    <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 space-y-6 mt-6 mb-10">
                        <p className="text-white md:text-lg text-base inter-medium leading-[30px] text-justify">The Best Paper Award at ICTDIF-2025 honors exceptional research contributions presented at the conference. All accepted papers are automatically considered, and winners are selected by the Technical Program Committee (TPC) based on the following criteria:</p>
                    </div>
                </div>
                <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 pt-5 pb-10 ">

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
                <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 space-y-6 pb-20">
                    <p className="text-white md:text-lg text-base inter-medium leading-[30px] text-justify">This award celebrates innovation, excellence, and high-impact research, highlighting the most significant contributions in Technology and Data Innovations for the Future.</p>
                </div>
                <section className="pb-20">
                    <div className="text-center " data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                        <h2 className="md:text-[32px] text-[28px] text-white inter-bold inline-block relative">Conference Statistics <span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>

                        <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 space-y-6 mt-6 mb-4">
                            <p className="text-white md:text-lg text-base inter-medium leading-[30px] text-justify">ICTDIF-2025 brought together researchers, academicians, and industry professionals from around the world, showcasing its global reach and impact in the fields of Technology and Data Innovations.</p>
                        </div>
                    </div>



                    <div className="max-w-[90rem] mx-auto">
                        <div className="flex justify-center mb-4">  <h2 className="md:text-[32px]  text-[28px] text-white inter-bold inline-block relative mb-8">Papers & Selection <span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-14">
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
                <section  className='max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 pb-20'>
                    <div className="flex justify-center mb-4">  <h2 className="md:text-[32px]  text-[28px] text-white inter-bold inline-block relative mb-8"> Participated Countries <span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {regions.map((region, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl p-6 transition-all duration-300"
                            >
                                <div className="flex items-baseline gap-2 mb-4">
                                    <h3 className="text-xl inter-semibold text-yellow-500">
                                        {region.name}
                                    </h3>
                                    <span className="text-yellow-500 inter-medium">
                                        ({region.count} countries)
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2">
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
                        <p className="text-white md:text-lg text-base inter-medium leading-[30px] text-justify">ICTDIF-2025 truly exemplified a global hub for technological and data-driven innovation, connecting brilliant minds to explore the future of intelligent systems.</p>
                    </div>
                </section>


                <section className="pb-20">
                    <div className="text-center " data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                        <h2 className="md:text-[32px] text-[28px] text-white inter-bold inline-block relative">Published Papers <span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>

                        <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 space-y-6 mt-6 ">
                            <p className="text-white md:text-lg text-base inter-medium leading-[30px] text-justify">ICTDIF-2025 received a total of 233 full paper submissions, out of which 35 papers were selected for presentation and publication, reflecting a competitive acceptance rate of 15%.</p>
                        </div>
                    </div>
                    <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 pt-5 pb-10 ">
                        <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 space-y-6 mb-10">
                            <p className="text-white lg:text-2xl text-xl inter-semibold text-center">Key Topics Covered in Selected Papers</p>
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
                    <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 space-y-6 ">
                        <p className="text-white md:text-lg text-base inter-medium leading-[30px] text-justify">These topics highlight the conference’s emphasis on cutting-edge research, innovation, and practical solutions shaping the future of technology and data-driven applications.</p>
                        <p className="text-white md:text-lg text-base inter-medium leading-[30px] text-justify">We deeply appreciate the invaluable contributions and active participation that shaped ICTDIF-2025 into a truly impactful event.</p>
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
                                                <span className="text-xl inter-bold text-[#FFD900]">ICTDIF 2025 </span>
                                                <Star className="w-6 h-6 text-[#FFD900] flex-shrink-0" />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="max-w-5xl mx-auto mb-10">
                                    <div className="bg-gradient-to-r from-[#993111] to-[#FF521C] backdrop-blur rounded-3xl p-4 shadow-2xl border-1 border-[#FFD900]">
                                        <h3 className="text-2xl text-center inter-bold text-[#FFD900] mb-4">Recognition Statement</h3>
                                        <p className="text-white text-lg leading-[30px] text-justify lg:text-center inter-medium">
                                            For designing a reliable and efficient approach to support medical decisions using integrated healthcare data, the <span className="text-[#FFD900] inter-semibold"> Best Paper Award of ICTDIF-2025  </span> presented to:
                                        </p>
                                    </div>
                                </div>

                                <div className="max-w-5xl mx-auto mb-10">
                                    <div className="relative group">
                                        <div className="">

                                            <p className="text-[#FFD900] text-xl lg:text-2xl  inter-semibold text-center leading-relaxed">
                                                "INTEGRATING MULTIMODAL DATA FUSION FOR ENHANCED DIAGNOSTICS AND DECISION SUPPORT IN SMART HEALTHCARE SYSTEMS"
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center mb-10">
                                    <div className="relative group">
                                        <div className="relative">
                                            <div className="bg-gradient-to-r from-[#993111] to-[#FF521C] p-3 rounded-[15px] shadow-2xl border-1 border-[#FFD900]">
                                                <img
                                                    src="/assets/images/certificate2025.jpg"
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
                                                Sunil Kumar Alavilli
                                            </h3>
                                        </div>
                                        <div className="flex items-center justify-center gap-3 text-[#FFD900]  lg:text-lg text-base">
                                            <MapPin className="w-7 h-7 text-[#FFD900] flex-shrink-0" />
                                            <p className="inter-medium ">Sephora, San Francisco, California, USA.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="max-w-5xl mx-auto">
                                    <div className="bg-gradient-to-r from-[#993111] to-[#FF521C] backdrop-blur rounded-3xl p-5 shadow-2xl border-1 border-[#FFD900]">
                                        <div className="flex items-center gap-4 mb-4">

                                            <h4 className="text-3xl inter-bold text-[#FFD900]">Research Overview</h4>
                                        </div>
                                        <p className="text-white text-base text-justify leading-[30px] inter-medium">
                                            The top-ranked paper <span className="text-[#FFD900] inter-semibold"> “INTEGRATING MULTIMODAL DATA FUSION FOR ENHANCED DIAGNOSTICS AND DECISION SUPPORT IN SMART HEALTHCARE SYSTEMS” </span> explores a method to combine different types of healthcare data, like medical images, patient records, and sensor readings. By bringing all this information together, the system helps doctors make faster and more accurate decisions. It focuses on creating smart healthcare systems that can analyze data efficiently. The goal is to improve patient care and support better medical outcomes.
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
                                    src="/assets/images/certificate2025.jpg"
                                    alt="Certificate"
                                    className="w-full rounded-2xl"
                                />
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </div >
    )
}
