import { ClipboardCheck, Crown, MapPinned, MapPinnedIcon, NotebookPen, ServerCog } from 'lucide-react';
import React from 'react'
import { BiBroadcast } from 'react-icons/bi';



function Organizing() {
    const roles = [
       {
        title: "Conference Chair",
        icon: <Crown className="w-12 h-12" />, // Leadership & authority
        duties: [
            "Lead overall planning, coordination, and vision for the conference"
        ]
    },
    {
        title: "Program Committee",
        icon: <NotebookPen className="w-12 h-12" />, // Agenda/program design
        duties: [
            "Design thematic sessions and structure the conference program"
        ]
    },
    {
        title: "Review Board",
        icon: <ClipboardCheck className="w-12 h-12" />, // Evaluation & approvals
        duties: [
            "Evaluate submissions and ensure alignment with conference themes"
        ]
    },
    {
        title: "Technology Committee",
        icon: <ServerCog className="w-12 h-12" />, // Tech systems & management
        duties: [
            "Manage digital platforms, technical support, and virtual tools"
        ]
    },
    {
        title: "Publicity Committee",
        icon: <BiBroadcast className="w-12 h-12" />, // Outreach & promotion
        duties: [
            "Promote the conference globally through marketing and outreach"
        ]
    },
    {
        title: "Logistics & Hospitality",
        icon: <MapPinnedIcon className="w-12 h-12" />, // Event location & arrangements
        duties: [
            "Oversee venue arrangements, participant services, and event operations"
        ]
    }

    ];
    return (
        <div>
            <div className=" bg-gradient-to-r from-[#993111] to-[#FF521C] px-4 pt-35 overflow-hidden">
                <div className="text-center " data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                    <h2 className="md:text-[32px] text-[28px] text-white inter-bold inline-block relative">Organizing Committee <span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>
                </div>
                <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 py-20 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14 gap-8  ">
                        {roles.map((item, index) => (
                            <div className="grid grid-cols-1 md:grid-cols-12 bg-[#FFD900] rounded-2xl relative">
                                <div className="md:bg-[#FFD900] bg-white w-24 h-24 absolute -top-4 rounded-lg lg:-right-4 -right-3 z-10" style={{ clipPath: 'polygon(0 0, 100% 100%, 100% 0)' }} data-aos="fade-up" data-aos-duration="500"></div>
                                <div className="col-span-4  flex justify-center items-center  p-5" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                                    {item.icon}
                                </div>
                                <div className="bg-white col-span-8  space-y-2 text-center rounded-2xl flex flex-col items-center justify-center p-5 z-20">
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

export default Organizing