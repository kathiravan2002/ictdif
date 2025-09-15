import React from 'react'


function About() {

    return (
        <div>
            <div className=" bg-gradient-to-r from-[#993111] to-[#FF521C] px-4 pt-35 overflow-hidden">
                <div className="text-center " data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                    <h2 className="md:text-[32px] text-[28px] text-white inter-bold inline-block relative">About Our Conference <span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>
                </div>

                <div className="max-w-[85rem] mx-auto py-5 2xl:py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="flex justify-center items-center xl:order-none lg:order-2 order-2 " data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                            <div className="space-y-6">
                                <p className="text-white md:text-lg text-base inter-medium leading-[30px] text-justify">The International Conference on Technology and Data Innovations for the Future unites global experts to exchange ideas, present research, and explore transformative solutions driving advancements in technology, data science, and innovation worldwide.</p>
                                <p className="text-white md:text-lg text-base inter-medium leading-[30px] text-justify">This conference fosters collaboration between academia, industry, and policymakers, addressing emerging trends in artificial intelligence, big data, blockchain, IoT, and digital transformation, with a focus on sustainable, impactful, and inclusive technological development.The Selective accepted papers of our International Conference on Technology and Data Innovations for the Future will be recommended to publish in the indexed Journals.</p>
                                <div className='space-y-2'>
                                    <p className="md:text-lg text-base text-justify text-[#FFD900] inter-medium"><i className="fi fi-sr-hand-back-point-right text-white mr-3"></i>Inspire visionary thinking for the digital future</p>
                                    <p className="md:text-lg text-base text-justify text-[#FFD900] inter-medium"><i className="fi fi-sr-hand-back-point-right text-white mr-3"></i>Transform industries through technology-driven solutions</p>
                                    <p className="md:text-lg text-base text-justify text-[#FFD900] inter-medium"><i className="fi fi-sr-hand-back-point-right text-white mr-3"></i>Unlock the potential of data for societal progress</p>
                                    <p className="md:text-lg text-base text-justify text-[#FFD900] inter-medium"><i className="fi fi-sr-hand-back-point-right text-white mr-3"></i>Foster next-generation leadership in innovation</p>
                                    <p className="md:text-lg text-base text-justify text-[#FFD900] inter-medium"><i className="fi fi-sr-hand-back-point-right text-white mr-3"></i>Shape sustainable, intelligent, and inclusive ecosystems</p>
                                </div>
                               
                            </div>
                        </div>

                        <div className="flex justify-center items-center mt-16" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                            <img src="/assets/images/about.png" alt="" className="rounded-full w-[300px] h-[300px] md:h-[500px] md:w-[500px] lg:h-[550px] lg:w-[550px] xl:h-[550px] xl:w-[550px] 2xl:h-[525px] 2xl:w-[525px] bg-center object-cover relative z-40" data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000" />
                            <div className="absolute bg-[#FFD900] w-[300px] h-[300px] md:h-[500px] md:w-[500px] lg:h-[550px] lg:w-[550px] xl:h-[550px] xl:w-[550px] 2xl:h-[525px] 2xl:w-[525px] rounded-full ml-10 -mt-8" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About