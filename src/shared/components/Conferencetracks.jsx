import { CloudCog, Cpu, GraduationCap, Layers, LineChart, MonitorSmartphone, Network, Radio, ShieldCheck } from 'lucide-react';
import React from 'react'


function Conferencetracks() {

    const roles = [
        {
            title: 'Intelligent Systems',
            duties: [
                'This track focuses on the design and implementation of Artificial Intelligence solutions that enhance automation, support complex decision-making, and solve real-world problems. Topics include machine learning algorithms, expert systems, AI-driven optimization, and intelligent automation in industry, healthcare, and business processes.'
            ],
            icon: <Cpu className="w-12 h-12" />,
        },
        {
            title: 'Adaptive Learning',
            duties: [
                ' Explore models and frameworks that adapt and learn from evolving data patterns. This track covers adaptive machine learning, online learning systems, predictive modeling, and techniques that enable systems to improve continuously with minimal human intervention. Applications include personalized recommendations, dynamic forecasting, and real-time analytics.'
            ],
            icon: <GraduationCap className="w-12 h-12" />,
        },
        {
            title: 'Decentralized Solutions',
            duties: [
                'Focused on blockchain and distributed ledger technologies, this track examines secure, transparent, and efficient methods for conducting digital transactions. Key topics include smart contracts, decentralized finance (DeFi), blockchain-based supply chain solutions, and privacy-preserving distributed systems.'
            ],
            icon: <Network className="w-12 h-12" />,
        },
       
        {
            title: 'Cloud Ecosystems',
            duties: [
                'This track emphasizes the design and deployment of scalable, flexible, and resilient cloud computing environments. Topics include multi-cloud architecture, cloud-native applications, serverless computing, virtualization, and strategies for optimizing performance, cost, and security in cloud infrastructures.'
            ],
            icon: <CloudCog className="w-12 h-12" />,
        },
        {
            title: 'Insight Analytics',
            duties: [
                ' Concentrating on turning raw data into actionable insights, this track addresses data processing, big data analytics, predictive and prescriptive analytics, visualization techniques, and business intelligence. Applications include data-driven decision-making in industries such as finance, healthcare, smart cities, and digital enterprises.'
            ],
            icon: <LineChart className="w-12 h-12" />,
        },
        
    ];
    return (
        <div>

            <div className=" bg-gradient-to-r from-[#993111] to-[#FF521C] px-4 pt-35 overflow-hidden">
                <div className="text-center " data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                    <h2 className="md:text-[32px] text-[28px] text-white inter-bold inline-block relative">Conference Tracks <span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>
                </div>
                <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 py-20 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-10 gap-8 ">
                        {roles.map((item, index) => (
                            <div className="grid grid-cols-1 md:grid-cols-12 bg-[#FFD900] rounded-2xl relative">
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

            </div>
        </div>
    )
}

export default Conferencetracks