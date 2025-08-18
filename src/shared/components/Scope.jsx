import React from 'react'

function Scope() {


    return (
        <div>
            <div className=" bg-gradient-to-r from-[#993111] to-[#FF521C] px-4 pt-35 overflow-hidden">
                <div className="text-center " data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                    <h2 className="md:text-[32px] text-[28px] text-white inter-bold inline-block relative">Scope Of Our Conference <span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>
                </div>

                <div className="max-w-[85rem] mx-auto py-5 2xl:py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="flex justify-center items-center xl:order-none lg:order-2 order-2 " data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                            <div className="space-y-6">
                                <p className="text-white md:text-lg text-base inter-medium leading-[30px] text-justify">The conference explores cutting-edge advancements in technology and data innovations, uniting researchers, industry leaders, and policymakers to address global challenges, inspire collaboration, and create impactful solutions for a sustainable, technology-driven future.</p>
                                <p className="text-white md:text-lg text-base inter-medium leading-[30px] text-justify">Key focus areas include artificial intelligence, big data analytics, blockchain, IoT, cloud computing, and digital transformation, promoting interdisciplinary research and practical applications that drive progress, competitiveness, and growth across industries and communities.</p>
                                <div className='space-y-2'>
                                    <p className="md:text-lg text-base text-justify text-[#FFD900] inter-medium"><i className="fi fi-sr-hand-back-point-right text-white mr-3"></i>Explore transformative technology and data innovations</p>
                                    <p className="md:text-lg text-base text-justify text-[#FFD900] inter-medium"><i className="fi fi-sr-hand-back-point-right text-white mr-3"></i>Address real-world challenges with practical solutions</p>
                                    <p className="md:text-lg text-base text-justify text-[#FFD900] inter-medium"><i className="fi fi-sr-hand-back-point-right text-white mr-3"></i>Promote interdisciplinary collaboration and research</p>
                                    <p className="md:text-lg text-base text-justify text-[#FFD900] inter-medium"><i className="fi fi-sr-hand-back-point-right text-white mr-3"></i>Encourage sustainable, future-ready developments</p>
                                    <p className="md:text-lg text-base text-justify text-[#FFD900] inter-medium"><i className="fi fi-sr-hand-back-point-right text-white mr-3"></i>Bridge global knowledge and application gaps</p>
                                </div>
                               
                            </div>
                        </div>

                        <div className="flex justify-center items-center mt-16" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                            <img src="/assets/images/scopeus.jpg" alt="" className="rounded-full w-[300px] h-[300px] md:h-[500px] md:w-[500px] lg:h-[550px] lg:w-[550px] xl:h-[550px] xl:w-[550px] 2xl:h-[525px] 2xl:w-[525px] bg-center object-cover relative z-40" data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000" />
                            <div className="absolute bg-[#FFD900] w-[300px] h-[300px] md:h-[500px] md:w-[500px] lg:h-[550px] lg:w-[550px] xl:h-[550px] xl:w-[550px] 2xl:h-[525px] 2xl:w-[525px] rounded-full ml-10 -mt-8" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Scope