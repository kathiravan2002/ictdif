import React, { useState } from 'react'
import { IoLocation } from 'react-icons/io5'
import { toast } from 'react-toastify';
import { IoIosMail } from 'react-icons/io';
import { HiChevronDoubleRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';


function Contactus() {

    const [formData, setFormData] = useState({
        firstname: '',
        secondname: '',
        number: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleFileInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const formDataToSend = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formDataToSend.append(key, value);
            });
            const response = await fetch('https://ictdif.com/api/contactus.php', {
                method: 'POST',
                body: formDataToSend,
            });
            const result = await response.text();
            setStatus(result);
            if (response.ok) {
                toast.success("Message submitted successfully!");
                setFormData({
                    firstname: '',
                    secondname: '',
                    number: '',
                    email: '',
                    message: '',
                });
            } else {
                toast.error('Failed to send submission. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again.');
        }
    };

    return (

        <div>
            {/* Header Section */}
            <div className=" bg-gradient-to-r from-[#993111] to-[#FF521C] px-4 pt-35 overflow-hidden">
                <div className="text-center " data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                    <h2 className="md:text-[32px] text-[28px] text-white inter-bold inline-block relative">Contact Us <span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>
                </div>


                <div className="text-black max-w-[1300px] mx-auto  py-10 lg:px-4  " >
                    



                        <div className='max-w-[700px] mx-auto w-full bg-white rounded-xl  p-5 md:p-10'>
                            <div className="text-center">
                                <h3 className="text-2xl poppins-semibold text-[#FF521C] py-2">Contact Us</h3>
                                <p className="text-base inter-regular leading-[30px] opacity-85 text-center ">
                                    Have questions about paper submissions, registration, or event details?
                                    Our dedicated team is here to provide prompt assistance and support.
                                </p>
                            </div>

                            <h3 className="text-2xl poppins-semibold text-center py-4 text-[#FF521C]">Send us a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block poppins-semibold mb-1">First Name <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            name="firstname"
                                            value={formData.firstname}
                                            onChange={handleFileInputChange}
                                            required
                                            className="w-full border-2 border-gray-300 outline-[#FF521C] rounded-md p-2 poppins-medium  text-base"
                                        />
                                    </div>

                                    <div>
                                        <label className="block poppins-semibold mb-1">Last Name <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            name="secondname"
                                            value={formData.secondname}
                                            onChange={handleFileInputChange}
                                            required
                                            className="w-full border-2 border-gray-300 outline-[#FF521C] rounded-md p-2 poppins-medium  text-base"
                                        />
                                    </div>

                                    <div>
                                        <label className="block poppins-semibold mb-1">Email <span className="text-red-500">*</span></label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleFileInputChange}
                                            required
                                            className="w-full border-2 border-gray-300 outline-[#FF521C] rounded-md poppins-medium p-2  text-base"
                                        />
                                    </div>

                                    <div>
                                        <label className="block poppins-semibold mb-1 ">Phone Number <span className="text-red-500">*</span></label>
                                        <input
                                            type="tel"
                                            name="number"
                                            value={formData.number}
                                            onChange={handleFileInputChange}
                                            required
                                            className="w-full border-2 border-gray-300 outline-[#FF521C] rounded-md p-2 poppins-medium  text-base"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block poppins-semibold mb-1">Message <span className="text-red-500">*</span></label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleFileInputChange}
                                        rows="3"
                                        required
                                        className="w-full border-2 border-gray-300 outline-[#FF521C] rounded-md poppins-medium p-2 shadow-sm text-base resize-none"
                                    ></textarea>
                                </div>

                                <div className="text-center w-fit  rounded-md mx-auto">
                                    <button type='submit' className="group relative overflow-hidden hover:text-[#FF521C] bg-[#FFD900]  text-[#000] poppins-medium  cursor-pointer py-3 px-6 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2">
                                        <span className="relative z-10">
                                            {status === 'Sending...' ? 'Submitting...' : 'Send Message'}
                                        </span>
                                        <div className="absolute inset-0  scale-x-0 group-hover:scale-x-100 duration-500 bg-white rounded-md"></div>

                                    </button>

                                </div>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus