import React, { useState } from 'react'
import { CalendarCheck } from 'lucide-react';
import { RiFileList3Fill, RiFilePaper2Fill, RiCheckboxCircleFill, RiDraftFill, RiCalendarCheckFill, RiNewspaperFill } from "react-icons/ri";

function Datesandbank() {
  const [activeYear, setActiveYear] = useState("2025");

  const datesByYear = {
    "2025": [
      { title: 'Abstract Submission Deadline', date: '25-08-2025', icon: <RiFileList3Fill className="w-7 h-7" /> },
      { title: 'Full Paper Submission Deadline', date: '01-09-2025', icon: <RiFilePaper2Fill className="w-7 h-7" /> },
      { title: 'Notification of Acceptance', date: '05-09-2025', icon: <RiCheckboxCircleFill className="w-7 h-7" /> },
      { title: 'Final Paper Submission', date: '08-09-2025', icon: <RiDraftFill className="w-7 h-7" /> },
      { title: 'Registration Deadline', date: '12-09-2025', icon: <RiCalendarCheckFill className="w-7 h-7" /> },
      { title: 'Conference Date', date: '16-09-2025', icon: <RiNewspaperFill className="w-7 h-7" /> },
    ],
    "2024": [
      { title: 'Abstract Submission Deadline', date: '21-10-2024', icon: <RiFileList3Fill className="w-7 h-7" /> },
      { title: 'Full Paper Submission Deadline', date: '25-10-2024', icon: <RiFilePaper2Fill className="w-7 h-7" /> },
      { title: 'Notification of Acceptance', date: '31-10-2024', icon: <RiCheckboxCircleFill className="w-7 h-7" /> },
      { title: 'Final Paper Submission', date: '04-11-2024', icon: <RiDraftFill className="w-7 h-7" /> },
      { title: 'Registration Deadline', date: '08-11-2024', icon: <RiCalendarCheckFill className="w-7 h-7" /> },
      { title: 'Conference Date', date: '14-11-2024', icon: <RiNewspaperFill className="w-7 h-7" /> },
    ],
  };

  return (
    <div>

      <div className=" bg-gradient-to-r from-[#993111] to-[#FF521C] px-4 pt-35 overflow-hidden">
        <div className="text-center " data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
          <h2 className="md:text-[32px] text-[28px] text-white inter-bold inline-block relative">Important Dates<span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>
        </div>
       <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 py-10">
      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        {Object.keys(datesByYear).map((year) => (
          <button
            key={year}
            onClick={() => setActiveYear(year)}
            className={`px-6 py-2 rounded-2xl inter-bold transition-all cursor-pointer ${
              activeYear === year
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Dates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14 gap-8">
        {datesByYear[activeYear].map((item, index) => (
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