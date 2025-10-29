import React from 'react'



function Registerpage() {
    return (
        <div>
          <div className="bg-white  overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="pb-5 max-w-[800px]" data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000">
                        <img src="/assets/images/Vector.png" alt="" className="w-full" />
                    </div>
                    <div className="p-5">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full h-full">
                            <div className="bg-[#993111] flex justify-center items-center  rounded-2xl lg:w-4/5 lg:h-4/5 w-full place-items-end mt-auto lg:ml-auto ">
                                <div className="text-2xl text-center text-white xl:p-0 p-5 inter-bold">
                                    <p>WHEN</p>
                                    <p>WHERE</p>
                                    <p>CONTACT</p>
                                </div>

                            </div>
                            <div className="bg-[#ffd904ec] flex justify-center items-center p-3 rounded-2xl" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                                <div className="inter-semibold text-xl 2xl:text-2xl text-center text-[#FF521C]">
                                    <div className="mb-5">
                                        <i className="fi fi-sr-region-pin-alt text-5xl"></i>
                                    </div>
                                    <p>Tehran, Iran</p>
                                </div>

                            </div>
                            <div className="bg-[#FFD900] flex justify-center items-center p-3 rounded-2xl" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                                <div className="inter-semibold text-xl 2xl:text-2xl text-center text-[#FF521C]">
                                    <div className="mb-5">
                                        <i className="fi fi-sr-calendar text-5xl "></i>
                                    </div>
                                    <p>September 16, 2025 </p>
                                    <p className='mt-2'>9:00 AM - 6:00 PM</p>
                                </div>

                            </div>
                            <div className="bg-[#FFD900] flex justify-center items-center p-3 rounded-2xl" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                                <div className="inter-semibold text-xl 2xl:text-2xl text-center text-[#FF521C]">
                                    <div className="mb-5">
                                        <i className="fi fi-ss-clip-mail text-5xl"></i>
                                    </div>
                                    <p className="wrap-anywhere">info@ictdif.com </p>
                                    <p className="wrap-anywhere">info.ictdif@gmail.com </p>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Registerpage