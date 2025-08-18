import { Award, GraduationCap, MapPin } from 'lucide-react';
import React from 'react'
import { HiChevronDoubleRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function Editorial() {


    const committeeData = [

        {
            members: 'Fengliang Zhao',
            university: 'Shandong University',
            location: 'China'
        },
        {
            members: 'Qian Liu',
            university: 'Krirk University',
            location: 'Thailand'
        },

        {
            members: 'Chetna Kaushal',
            university: 'Chitkara University',
            location: 'India'
        },
        {
            members: 'Nour Moustafa',
            university: 'American University of the Middle East',
            location: 'Kuwait'
        },
        {
            members: 'Haruna Abdu',
            university: 'Federal University Lokoja',
            location: 'Nigeria'
        },
        {
            members: 'Santwana Sagnika',
            university: 'KIIT Deemed to be University',
            location: 'India'
        },
        {
            members: 'Zahra Rezaei',
            university: 'judiciary research institute',
            location: 'Iran'
        },
        {
            members: 'Vinod Kumar',
            university: 'Faculty of Science University of Allahabad',
            location: 'India'
        },
        {
            members: 'Tehreem Qasim',
            university: 'SZABIST University',
            location: 'Pakistan'
        },
        {
            members: 'Ammar Amjad',
            university: 'National Yang ming chiao tung university',
            location: 'Taiwan'
        },
        {
            members: 'Rajeev Kumar Singh',
            university: 'Madhav Institute of Technology and Science',
            location: 'India'
        },

        {
            members: 'Ahmed Rimaz Faizabadi',
            university: 'Research Fellow Centre for Unmanned Technologies',
            location: 'Malaysia'
        },
        {
            members: 'Ameer Hamza',
            university: 'HITEC University',
            location: 'Pakistan'
        },
        {
            members: 'Sakshi Gupta',
            university: 'Amity University Noida',
            location: 'India'
        },
        {
            members: 'Maryam Anwer',
            university: ' Majma university',
            location: 'Saudi Arabia'
        },
        {
            members: 'Suvarna Pawar',
            university: 'MIT Art, Design & Technology University',
            location: 'India'
        },
        {
            members: 'Shabir Hussain',
            university: 'Tsinghua University',
            location: 'China'
        }, {
            members: 'Siddharth Dabhade',
            university: 'National Forensic Sciences University',
            location: 'India'
        },

        {
            members: 'Mohammed Rashad Baker',
            university: 'University of Kirkuk',
            location: 'Iraq'
        },
        {
            members: 'Egoigwe Sochima Vincent',
            university: 'University of Nigeria',
            location: 'Nigeria'
        },
        {
            members: 'Oushik Mallick',
            university: 'RCC Institute of Information Technology',
            location: 'India'
        },







    ]


    return (
        <div>
            <div className=" bg-gradient-to-r from-[#993111] to-[#FF521C] px-4 pt-35 overflow-hidden">
                <div className="text-center " data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                    <h2 className="md:text-[32px] text-[28px] text-white inter-bold inline-block relative">Editorial Board <span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>
                </div>
                <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 py-20 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14 gap-8 ">
                        {committeeData.map((item, index) => (
                            <div className="grid grid-cols-1 lg:grid-cols-1 bg-[#FFD900] rounded-2xl relative group hover:-translate-y-2 duration-300">
                                <div className=" flex justify-center items-center  p-5">
                                    <h2 className="inter-bold text-lg text-center">Dr. {item.members}</h2>
                                    <div className="bg-[#FFD900] border-2 border-white w-20 h-20 absolute -top-4 rounded-lg lg:-right-4 -right-3 z-10 " style={{ clipPath: 'polygon(0 0, 100% 100%, 100% 0)' }} data-aos="fade-up" data-aos-duration="500"><h2 className="inter-bold text-xl text-center ml-4 mt-1">{item.members.slice(0, 1)}</h2></div>

                                </div>
                                <div className="bg-white   space-y-2 text-center rounded-2xl flex flex-col items-center justify-center p-5 z-20">
                                    <p className="inter-medium">{item.university}</p>
                                    <p className="inter-medium">{item.location}</p>
                                </div>
                            </div>
                        ))}



                    </div>
                </div>

            </div>

        </div>
    )
}

export default Editorial