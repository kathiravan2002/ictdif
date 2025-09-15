import { Award, GraduationCap, MapPin } from 'lucide-react';
import React from 'react'
import { FaCircleUser } from 'react-icons/fa6';
import { HiChevronDoubleRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function Editorial() {

    const organizing = [
        {
            name: "Dr. Yahya Dorostkar Navaei",
            university: " Qazvin Islamic Azad University",
            expertise: "Department of Computer and Information Technology Engineering",
            country: " Iran"
        },
        {
            name: "Dr. Mahdiyeh Khazaneha",
            university: " Kerman University of Medical Sciences",
            expertise: "Department of Neurology Research Center",
            country: " Iran"
        },
        {
            name: "Dr. Abolfazl Gandomi",
            university: "  Islamic Azad University",
            expertise: "Department of Computer Engineering ",
            country: " Iran"
        },
        {
            name: "Dr. Ghasem Abbasi",
            university: "  Islamic Azad University",
            expertise: "Department of Mathematics and Statistics",
            country: " Iran"
        }
    ]


    const technical = [
        {
            name: "Dr. Muhammad Umair Hassan",
            university: "Norwegian University of Science and Technology",
            expertise: " Department of ICT and Natural Sciences",
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
            expertise: "Department of Information Technology ",
            country: "Palestine"
        },
        {
            name: "Dr. Muhammad Asif Khan",
            university: " Qatar University",
            expertise: " Research Scientist at Qatar Mobility Innovations Center",
            country: " Qatar"
        },
        {
            name: "Dr. Rodrigo Augusto Ricco ",
            university: "Federal University of Ouro Preto",
            expertise: "Department of Computer Science and Engineering ",
            country: "Brazil"
        },
        {
            name: "Dr. Stephen Ekwe",
            university: " University of Cape Town",
            expertise: " Department of Electrical Engineering",
            country: "South Africa"
        },
        {
            name: "Dr. Qian Liu",
            university: " Krirk University",
            expertise: "Department of Information Technology",
            country: "Thailand"
        },
        {
            name: "Dr. Brahim Issaoui",
            university: " Qassim University",
            expertise: " Department of Economics and Social Sciences",
            country: " Saudi Arabia"
        },
        {
            name: "Dr. Yonglin Chen",
            university: "  The First Hospital of Lanzhou University",
            expertise: " Department of Computer Science",
            country: "China"
        },
        {
            name: "Dr. Nadeem Iqbal Kajla",
            university: " University of Agriculture",
            expertise: " Department of Computer Science",
            country: "Pakistan"
        },
        {
            name: "Dr. Rahman Shafique",
            university: "Yeungnam University",
            expertise: " Department of Information and Communication Engineering",
            country: " South Korea"
        },
        {
            name: "Dr. Ammar Amjad",
            university: " National Yang ming chiao tung university",
            expertise: "Department of Computer Science and Engineering ",
            country: "Taiwan"
        },
        {
            name: "Dr. Shakar Ahmed Aziz",
            university: "Duhok University",
            expertise: " Department of Mathematics",
            country: "  Iraq"
        },
        {
            name: "Dr. R. Gayathri",
            university: "PSNA College of Engineering & Technology",
            expertise: "Department of Computer Science & Engineering",
            country: " India"
        },
        {
            name: "Dr. Maryam Anwer",
            university: " Majma university",
            expertise: " Department of Industrial Engineering",
            country: " Saudi Arabia"
        },
        {
            name: "Dr. Olaniyi S Maliki",
            university: "Michael Okpara Federal University",
            expertise: " Department of Mathematics ",
            country: "Nigeria"
        },
        {
            name: "Dr. Leo John Baptist",
            university: "Botho University",
            expertise: "Department of Information Technology",
            country: " Botswana"
        },
        {
            name: "Dr. Meenakshi Gupta",
            university: " National University of Singapore",
            expertise: " Department of Electronics and Communication Engineering",
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
            university: " Seoul National University of Science and Technology",
            expertise: " Department of Computer Science and Engineering",
            country: " South Korea"
        },
        {
            name: "Dr. Marwan Ramdhany Edy",
            university: "Universitas Negeri Makassar",
            expertise: "  Department of Informatics and Computer Engineering",
            country: " Indonesia "
        },
        {
            name: "Dr. Shazia Riaz",
            university: " Women University Faisalabad",
            expertise: " Department of computer science",
            country: "Pakistan"
        },
        {
            name: "Dr. Qiushi Yang",
            university: "City University of Hong Kong",
            expertise: " Department of Electronic Engineering",
            country: "China"
        },
        {
            name: "Dr. Hung Nguyen",
            university: "Nha Trang university",
            expertise: " Department of Information Technology",
            country: "Vietnam"
        },
        {
            name: "Dr. Twana A. Hamad",
            university: " Harran University",
            expertise: "Department of Electronics and Communication Engineering",
            country: "Turkiye"
        },
        {
            name: "Dr.  Huiliang Zhao",
            university: "Guizhou minzu University",
            expertise: " Department of Product Design",
            country: "China"
        },
        {
            name: "Dr. Alma Bangayan Manera",
            university: "Cagayan State University",
            expertise: "Department of Electronics and Communication Engineering",
            country: " Philippines"
        },
        {
            name: "Dr. Nour Moustafa",
            university: "American University of the Middle East",
            expertise: "Department of Electronics and Communication Engineering",
            country: " Kuwait"
        },
        {
            name: "Dr. Saminda Premaratne",
            university: " University of Moratuwa",
            expertise: "   Department of Information Technology",
            country: "Sri Lanka"
        },
        {
            name: "Dr.A.V.L.N. Sujith",
            university: "Jawaharlal Nehru Technological University",
            expertise: "Department of Computer Science and Engineering",
            country: " India"
        },
        {
            name: "Dr. Wasan Alamro",
            university: "Auckland University of Technology",
            expertise: "Department of Electrical and Electronics Engineering department ",
            country: " New Zealand"
        },
        {
            name: "Dr. Leandro N. Balico",
            university: "  Federal University of Roraima",
            expertise: " Department of Computer Science and Engineering ",
            country: "Brazil"
        },
        {
            name: "Dr. Adekunle Musibau Ibrahim",
            university: "Osun State University",
            expertise: " Department of Computer Science",
            country: "Nigeria"
        },
        {
            name: "Dr. Argha Chandra Dhar",
            university: " Khulna University of Engineering & Technology ",
            expertise: "Department of Computer Science and Engineering",
            country: "Bangladesh"
        },
        {
            name: "Dr. Folasade M. Dahunsi",
            university: "Federal University of Technology",
            expertise: " Department of Computer Science and Engineering",
            country: "Nigeria"
        },
        {
            name: "Dr. Moses Adah Agana",
            university: "University of Calabar",
            expertise: "Department of Computer Science",
            country: " Nigeria"
        },
        {
            name: "Dr. Kabelo Given Chuma",
            university: "  University of South Africa",
            expertise: " Department of Information Science",
            country: " South Africa"
        },
        {
            name: "Dr.A. Karthikeyan",
            university: "SNS College of Technology",
            expertise: "Department of Electronics and Communication Engineering",
            country: " India"
        },
        {
            name: "Dr. Chinwe Peace Igiri",
            university: "Cavendish University",
            expertise: " Department of Computer Science and Engineering",
            country: " Uganda"
        },
        {
            name: "Dr. Zouhour El-Abiad",
            university: "ESA Business School",
            expertise: " Department of Computer Science and Engineering",
            country: " Lebanon"
        },
        {
            name: "Dr.A. Gabriel ",
            university: "Sharda University",
            expertise: "Department of Information Technology ",
            country: " Uzbekistan "
        },
        {
            name: "Dr.K.N. Apinaya Prethi",
            university: " Kumaraguru College of Technology",
            expertise: "Department of Computer Science and Engineering",
            country: " India"
        },
     
        {
            name: "Dr. Aram Sabr Tahr",
            university: "Cyprus International University",
            expertise: "Department of Computer Science and Engineering ",
            country: "Cyprus"
        },
        {
            name: "Dr. R. Arun Kumar",
            university: "University of South Wales",
            expertise: " Department of Digital Forensics & Cyber Security",
            country: " United Kingdom"
        },
        {
            name: "Dr. Alven Ritonga",
            university: " Universitas Wijaya Putra",
            expertise: " Department of Computer Science",
            country: "Indonesia"
        },
        {
            name: "Dr. Hea Choon Ngo",
            university: "  Universiti Teknikal Malaysia Melaka",
            expertise: "Department of Electronics and Communication Engineering",
            country: "Malaysia"
        },
           {
            name: "Dr. Manivannan",
            university: "  SASTRA Deemed University",
            expertise: "Department of Computing",
            country: " India"
        },
        {
            name: "Dr. Dongfeng Li",
            university: "Fuyang People's Hospital",
            expertise: " Department of Medical Science",
            country: "China"
        }
    ];


    // const committeeData = [

    //     {
    //         members: 'Fengliang Zhao',
    //         university: 'Shandong University',
    //         location: 'China'
    //     },
    //     {
    //         members: 'Qian Liu',
    //         university: 'Krirk University',
    //         location: 'Thailand'
    //     },

    //     {
    //         members: 'Chetna Kaushal',
    //         university: 'Chitkara University',
    //         location: 'India'
    //     },
    //     {
    //         members: 'Nour Moustafa',
    //         university: 'American University of the Middle East',
    //         location: 'Kuwait'
    //     },
    //     {
    //         members: 'Haruna Abdu',
    //         university: 'Federal University Lokoja',
    //         location: 'Nigeria'
    //     },
    //     {
    //         members: 'Santwana Sagnika',
    //         university: 'KIIT Deemed to be University',
    //         location: 'India'
    //     },
    //     {
    //         members: 'Zahra Rezaei',
    //         university: 'judiciary research institute',
    //         location: 'Iran'
    //     },
    //     {
    //         members: 'Vinod Kumar',
    //         university: 'Faculty of Science University of Allahabad',
    //         location: 'India'
    //     },
    //     {
    //         members: 'Tehreem Qasim',
    //         university: 'SZABIST University',
    //         location: 'Pakistan'
    //     },
    //     {
    //         members: 'Ammar Amjad',
    //         university: 'National Yang ming chiao tung university',
    //         location: 'Taiwan'
    //     },
    //     {
    //         members: 'Rajeev Kumar Singh',
    //         university: 'Madhav Institute of Technology and Science',
    //         location: 'India'
    //     },

    //     {
    //         members: 'Ahmed Rimaz Faizabadi',
    //         university: 'Research Fellow Centre for Unmanned Technologies',
    //         location: 'Malaysia'
    //     },
    //     {
    //         members: 'Ameer Hamza',
    //         university: 'HITEC University',
    //         location: 'Pakistan'
    //     },
    //     {
    //         members: 'Sakshi Gupta',
    //         university: 'Amity University Noida',
    //         location: 'India'
    //     },
    //     {
    //         members: 'Maryam Anwer',
    //         university: ' Majma university',
    //         location: 'Saudi Arabia'
    //     },
    //     {
    //         members: 'Suvarna Pawar',
    //         university: 'MIT Art, Design & Technology University',
    //         location: 'India'
    //     },
    //     {
    //         members: 'Shabir Hussain',
    //         university: 'Tsinghua University',
    //         location: 'China'
    //     }, {
    //         members: 'Siddharth Dabhade',
    //         university: 'National Forensic Sciences University',
    //         location: 'India'
    //     },

    //     {
    //         members: 'Mohammed Rashad Baker',
    //         university: 'University of Kirkuk',
    //         location: 'Iraq'
    //     },
    //     {
    //         members: 'Egoigwe Sochima Vincent',
    //         university: 'University of Nigeria',
    //         location: 'Nigeria'
    //     },
    //     {
    //         members: 'Oushik Mallick',
    //         university: 'RCC Institute of Information Technology',
    //         location: 'India'
    //     },
    // ]


    return (
        <div>
            <div className=" bg-gradient-to-r from-[#993111] to-[#FF521C]  pt-35 overflow-hidden">
                {/* <div className="text-center " data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                    <h2 className="md:text-[32px] text-[28px] text-white inter-bold inline-block relative">Editorial Board <span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>
                </div> */}
                {/* <div className="max-w-[90rem] mx-auto 2xl:px-0 xl:px-5 px-5 py-20 ">
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
                </div> */}
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

            </div>

        </div>
    )
}

export default Editorial