import React, { useState } from 'react'
import { CalendarCheck } from 'lucide-react';
import { RiFileList3Fill, RiFilePaper2Fill, RiCheckboxCircleFill, RiDraftFill, RiCalendarCheckFill, RiNewspaperFill } from "react-icons/ri";

function Datesandbank() {
  const [activeYear, setActiveYear] = useState("2025");

  const datesByYear = [
    
      { title: 'Abstract Submission', date: '18-03-2025', icon: <RiFileList3Fill className="w-7 h-7" /> },
      { title: 'Abstract Acceptance Date', date: '04-04-2025', icon: <RiFilePaper2Fill className="w-7 h-7" /> },
      { title: 'Full Paper Submission', date: '26-04-2025', icon: <RiCheckboxCircleFill className="w-7 h-7" /> },
      { title: 'Acceptance Notifications', date: '09-07-2025', icon: <RiCalendarCheckFill className="w-7 h-7" />},
      { title: 'Registration Deadline / Final Paper', date: '21-08-2025', icon: <RiDraftFill className="w-7 h-7" /> },
  
  ]

  return (
    <div>

      <div className=" bg-gradient-to-r from-[#993111] to-[#FF521C] px-4 pt-35 overflow-hidden">
        <div className="text-center " data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
          <h2 className="md:text-[32px] text-[28px] text-white inter-bold inline-block relative">Important Dates<span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>
        </div>
       <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 py-10">
     
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

      </div>


    </div>
  )
}

export default Datesandbank