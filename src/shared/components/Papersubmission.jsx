import React, { useState } from 'react'

import { toast } from 'react-toastify';
import { ArrowRight, Upload } from 'lucide-react';
import { TbPointFilled } from 'react-icons/tb';
import { HiChevronDoubleRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function Papersubmission() {

    const [fileName, setFileName] = useState('Choose Your File');

    const [formData, setFormData] = useState({
        Paper_Title: '',
        Author_FUll_Name: '',
        Email_Address: '',
        Institution_Name: '',
        Paper_Track: '',
        Paper_File: null,
    });
    const [status, setStatus] = useState('');


    const handleFileInputChange = (e) => {
        const { name, type, files, value } = e.target;

        if (files && files.length > 0) {
            setFileName(files[0].name); // update UI
            setFormData((prev) => ({
                ...prev,
                [name]: files[0], // update actual form data
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        const journalName = 'ictdif';
        // Generate unique ID: journalName + YYYYMMDD + HHMMSS
        const now = new Date();
        const dateStr = now.toISOString().slice(0, 10).replace(/-/g, ''); // YYYYMMDD
        const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, ''); // HHMMSS
        const uniqueId = `${journalName}_${dateStr}_${timeStr}`;

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('Submission_ID', uniqueId);
            formDataToSend.append('Paper_Title', formData.Paper_Title);
            formDataToSend.append('Author_FUll_Name', formData.Author_FUll_Name);
            formDataToSend.append('Email_Address', formData.Email_Address);
            formDataToSend.append('Institution_Name', formData.Institution_Name);
            formDataToSend.append('Paper_Track', formData.Paper_Track);

            if (formData.Paper_File) {
                formDataToSend.append('Paper_File', formData.Paper_File);
            }

            const googleSheetsParams = new URLSearchParams();
            googleSheetsParams.append('Submission_ID', uniqueId);
            googleSheetsParams.append('journal_name', journalName);
            googleSheetsParams.append('Paper_Title', formData.Paper_Title);
            googleSheetsParams.append('Author_FUll_Name', formData.Author_FUll_Name);
            googleSheetsParams.append('Email_Address', formData.Email_Address);
            googleSheetsParams.append('Institution_Name', formData.Institution_Name);
            googleSheetsParams.append('Paper_Track', formData.Paper_Track);

            const mailPromise = fetch('https://ictdif.com/api/mail.php', {
                method: 'POST',
                body: formDataToSend,
            });

            const sheetsPromise = fetch('https://script.google.com/macros/s/AKfycbwZ_TtKUqAfcue9TNCKy57hTrCKDUP5dTQnWbpSxBDzlRMllEuOoaxzRDl0kQPah5pZ/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: googleSheetsParams.toString(),
            });

            const [mailResponse, sheetsResponse] = await Promise.allSettled([mailPromise, sheetsPromise]);

            const mailSuccess = mailResponse.status === 'fulfilled' && mailResponse.value.ok;
            const sheetsSuccess = sheetsResponse.status === 'fulfilled';

            if (sheetsResponse.status === 'rejected') {
                console.error('Sheets request failed:', sheetsResponse.reason);
            }

            if (mailSuccess && sheetsSuccess) {
                setStatus(`Submission successful! Data sent to both email and Google Sheets (${journalName}). Submission ID: ${uniqueId}`);
                setFormData({
                    Paper_Title: '',
                    Author_FUll_Name: '',
                    Email_Address: '',
                    Institution_Name: '',
                    Paper_Track: '',
                    Paper_File: null,
                });
                setFileName('');
                const fileInput = document.getElementById('Paper_File');
                if (fileInput) {
                    fileInput.value = '';
                } else {
                    console.error('Element with ID "Paper_File" not found.');
                }
                toast.success(`Paper submitted successfully!`);

            } else if (mailSuccess && !sheetsSuccess) {
                setStatus('Email sent successfully, but there might be an issue with Google Sheets.');
                toast.warning('Email sent successfully. Please check if data was saved to Google Sheets.');

            } else if (!mailSuccess && sheetsSuccess) {
                setStatus('Data likely saved to Google Sheets, but failed to send email.');
                toast.warning('Data might be saved to Google Sheets, but failed to send email.');

            } else {
                setStatus('There might be issues with the submission. Please check manually.');
                toast.error('Submission completed, but please verify the results manually.');
            }

        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred during submission. Please try again.');
            toast.error('An error occurred. Please try again.');
        }
    }


    return (
        <div>
            <div className=" bg-gradient-to-r from-[#993111] to-[#FF521C] px-4 pt-35 overflow-hidden">

                <div className="text-center " data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                    <h2 className="md:text-[32px] text-[28px] text-white inter-bold inline-block relative">Paper Submission <span className="block w-4/5 h-1 bg-[#FFD900] mx-auto mt-1"></span></h2>
                </div>
                <section className=' max-w-[1400px] mx-auto '>
                    <div className="flex flex-col lg:flex-row gap-7 max-w-[1300px] mx-auto 2xl:px-0 px-0 lg:py-15 py-10 ">
                        <div className="  flex flex-col  gap-7  ">

                            <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-lg p-6 flex flex-col w-full h-full" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                                <h2 className="poppins-bold text-xl text-[#FF521C] my-3">Submission Guidelines</h2>
                                <div className="flex gap-2 items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#FF521C]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">Manuscripts must be written in professional, fluent English.</p></div>
                                <div className="flex gap-2 items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#FF521C]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">The paper should not exceed 10 pages, including all elements.</p></div>
                                <div className="flex gap-2 items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#FF521C]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">Authors must follow the official IEEE paper format.</p></div>
                                <div className="flex gap-2 items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#FF521C]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">Submissions are accepted only in PDF or DOCX formats.</p></div>
                                <div className="flex gap-2 items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#FF521C]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">Each paper must include an abstract of up to 300 words.</p></div>
                                <div className="flex gap-2 items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#FF521C]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">Remove all author details for anonymity in double-blind review.</p></div>
                            </div>

                            <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-lg p-6 flex flex-col w-full h-full" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                                <h2 className="poppins-bold text-xl text-[#FF521C]">Important Notes</h2>
                                <div className="flex gap-2 items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#FF521C]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">All submissions undergo a rigorous double-blind peer review.</p></div>
                                <div className="flex gap-2 items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#FF521C]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">At least one author must register to present the paper.</p></div>
                                <div className="flex gap-2 items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#FF521C]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">All papers will be checked for plagiarism before review.</p></div>
                                <div className="flex gap-2 items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#FF521C]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">Duplicate submissions to other venues are strictly prohibited.</p></div>
                                <div className="flex gap-2 items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#FF521C]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">Authors must attend and present their accepted papers.</p></div>
                                <div className="flex gap-2 items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#FF521C]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">Accepted papers will appear in the official proceedings.</p></div>
                            </div>
                        </div>
                        <div className=" max-w-[750px] w-full bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.15)] flex items-center justify-center " data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                            <section className="  p-5 md:p-10 w-full flex flex-col h-full 2xl:justify-center">
                                <h3 className="text-2xl poppins-semibold text-center mb-6 text-[#FF521C]">Paper Submission</h3>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                                        <div>
                                            <label className="block poppins-medium mb-1">Paper Title <span className="text-red-500">*</span></label>
                                            <input
                                                type="text"
                                                name="Paper_Title"
                                                value={formData.Paper_Title}
                                                onChange={handleFileInputChange}
                                                required
                                                className="w-full border border-gray-300 outline-[#FF521C] rounded-md p-2  text-base poppins-medium"
                                            />
                                        </div>

                                        <div>
                                            <label className="block poppins-medium mb-1">Author Full Name <span className="text-red-500">*</span></label>
                                            <input
                                                type="text"
                                                name="Author_FUll_Name"
                                                value={formData.Author_FUll_Name}
                                                onChange={handleFileInputChange}
                                                required
                                                className="w-full border border-gray-300 outline-[#FF521C] rounded-md p-2  text-base poppins-medium"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                                    <div>
                                        <label className="block poppins-medium mb-1">Author Email Address <span className="text-red-500">*</span></label>
                                        <input
                                            type="email"
                                            name="Email_Address"
                                            value={formData.Email_Address}
                                            onChange={handleFileInputChange}
                                            required
                                            className="w-full border border-gray-300 outline-[#FF521C] rounded-md p-2  text-base poppins-medium"
                                        />
                                    </div>

                                    <div>
                                        <label className="block poppins-medium mb-1">Author Institution Name <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            name="Institution_Name"
                                            value={formData.Institution_Name}
                                            onChange={handleFileInputChange}
                                            required
                                            className="w-full border border-gray-300 outline-[#FF521C] rounded-md p-2  text-base poppins-medium"
                                        />
                                    </div>
                                    </div>

                                    <div>
                                        <label className="block poppins-medium mb-1">Author Category <span className="text-red-500">*</span></label>
                                        <select
                                            type="text"
                                            name="Paper_Track"
                                            value={formData.Paper_Track}
                                            onChange={handleFileInputChange}
                                            required
                                            className="w-full border poppins-medium outline-[#FF521C] border-gray-300 rounded-md p-2  text-base"
                                        >
                                            <option value="">-- Select Category --</option>
                                            <option value="Intelligent Systems">Intelligent Systems</option>
                                            <option value="Adaptive Learning">Adaptive Learning</option>
                                            <option value="Decentralized Solutions">Decentralized Solutions</option>
                                            <option value="Security Innovations">Security Innovations</option>
                                            <option value="Cloud Ecosystems">Cloud Ecosystems</option>
                                            <option value="Insight Analytics">Insight Analytics</option>
                                            <option value="Connected Devices">Connected Devices</option>
                                            <option value="User Experience">User Experience</option>
                                            <option value="Digital Evolution">Digital Evolution</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block poppins-medium mb-1">Upload Paper <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <div className="w-full border poppins-medium outline-[#FF521C] border-gray-300 rounded-md p-4   text-base text-center">
                                                <input
                                                    id='Paper_File'
                                                    name="Paper_File"
                                                    accept=".pdf,.doc,.docx"
                                                    type="file"
                                                    onChange={handleFileInputChange}
                                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                                />
                                                <div className="space-y-4">
                                                    <div className=" flex items-center justify-center ">
                                                        <Upload className="w-8 h-8 text-gray-500" />
                                                    </div>
                                                    <div>
                                                        <p className="text-lg poppins-semibold text-gray-700 mb-2">
                                                            {fileName || "Click to Upload Paper"}
                                                        </p>
                                                        <p className="text-sm poppins-medium  text-gray-500">
                                                            PDF, DOC, or DOCX files only (Max 5MB)
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-center w-fit  rounded-md mx-auto">
                                        <button type='submit' className="group relative overflow-hidden hover:text-[#FF521C] bg-[#FFD900]  text-[#000] poppins-medium  cursor-pointer py-3 px-6 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2">
                                            <span className="relative z-10">
                                                {status === 'Sending...' ? 'Submitting...' : 'Submit Your Paper'}
                                            </span>
                                            <div className="absolute inset-0  scale-x-0 group-hover:scale-x-100 duration-500 bg-white rounded-md"></div>
                                        </button>

                                    </div>
                                </form>
                            </section>

                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Papersubmission