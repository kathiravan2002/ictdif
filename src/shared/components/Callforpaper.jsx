import React from 'react'
import { BarChart3, CloudCog, Cpu, GraduationCap, Layers, LineChart, MonitorSmartphone, Network, Radio, ShieldCheck, Sparkles, Wifi } from 'lucide-react';

export default function Callforpaper() {

    const roles = [
        {
            title: 'Intelligent Systems & Artificial Intelligence',
            duties: [
                'Machine learning, deep learning, automation, and AI-driven decision-making'
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
    return (
        <div>
            <div className=" bg-gradient-to-r from-[#993111] to-[#FF521C] px-4 pt-35 overflow-hidden">
                <div className="text-center " data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                    <h2 className="md:text-[32px] text-[28px] text-white inter-bold inline-block relative">Call for Paper <span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>
                    <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 space-y-6 mt-8">
                        <p className="text-white md:text-lg text-base inter-medium leading-[30px] text-justify">ICTDIF-2025 delves into cutting-edge advancements in technology and data innovations, bringing together researchers, industry pioneers, and policymakers to tackle global challenges, foster collaboration, and develop impactful solutions for a sustainable, technology-driven future.</p>
                        <p className="text-white md:text-lg text-base inter-medium leading-[30px] text-justify">The conference emphasizes key focus areas including Artificial Intelligence, Big Data Analytics, Blockchain, IoT, Cloud Computing, and Digital Transformation, encouraging interdisciplinary research and practical applications that drive innovation, competitiveness, and societal progress.</p>
                    </div>
                </div>
                <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 pt-6 pb-10 ">
                        <p className="text-[#FFD900] md:text-2xl text-lg  inter-semibold leading-relaxed text-center mb-10">We welcome contributions in, but not limited to, the following areas :</p>

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
                    <p className="text-white md:text-lg text-base inter-medium leading-[30px] text-justify">Selected papers will be recommended for publication in indexed journals, providing authors with a distinguished platform for international recognition.</p>
                    <p className="text-white md:text-lg text-base inter-medium leading-[30px] text-justify">Submit your work to ICTDIF-2025 and be part of a global community shaping the future of technology and data-driven innovation.</p>
                </div>

            </div>
        </div>
    )
}
