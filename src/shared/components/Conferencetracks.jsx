import { CloudCog, Cpu, GraduationCap, Layers, LineChart, MonitorSmartphone, Network, Radio, ShieldCheck } from 'lucide-react';
import React from 'react'


function Conferencetracks() {

    const roles = [
       {
    title: 'Intelligent Systems',
    duties: [
        'Advancing AI solutions for automation, decision-making, and problem-solving.'
    ],
    icon: <Cpu className="w-12 h-12" />, 
},
{
    title: 'Adaptive Learning',
    duties: [
        'Building models that learn automatically from evolving data patterns.'
    ],
    icon: <GraduationCap className="w-12 h-12" />, 
},
{
    title: 'Decentralized Solutions',
    duties: [
        'Leveraging blockchain for secure, transparent, and efficient transactions.'
    ],
    icon: <Network className="w-12 h-12" />, 
},
{
    title: 'Security Innovations',
    duties: [
        'Protecting systems and networks using advanced cybersecurity strategies.'
    ],
    icon: <ShieldCheck className="w-12 h-12" />, 
},
{
    title: 'Cloud Ecosystems',
    duties: [
        'Delivering scalable and flexible computing services over the internet.'
    ],
    icon: <CloudCog className="w-12 h-12" />, 
},
{
    title: 'Insight Analytics',
    duties: [
        'Transforming raw data into actionable insights for informed decisions.'
    ],
    icon: <LineChart className="w-12 h-12" />, 
},
{
    title: 'Connected Devices',
    duties: [
        'Integrating IoT devices for automated and efficient real-time operations.'
    ],
    icon: <Radio className="w-12 h-12" />, 
},
{
    title: 'User Experience',
    duties: [
        'Designing intuitive interfaces for better digital interaction experiences.'
    ],
    icon: <MonitorSmartphone className="w-12 h-12" />, 
},
{
    title: 'Digital Evolution',
    duties: [
        'Driving innovation by integrating technology into modern business models.'
    ],
    icon: <Layers className="w-12 h-12" />, 
}



    ];
    return (
        <div>

            <div className=" bg-gradient-to-r from-[#993111] to-[#FF521C] px-4 pt-35 overflow-hidden">
                <div className="text-center " data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                    <h2 className="md:text-[32px] text-[28px] text-white inter-bold inline-block relative">Conference Tracks <span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>
                </div>
                <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 py-20 ">
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

            </div>
        </div>
    )
}

export default Conferencetracks