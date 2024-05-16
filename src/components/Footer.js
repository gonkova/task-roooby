'use client';
import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Translation from './Тranslation';


const Footer = () => {
    const sections = [
        {
            title: "Company",
            items: ["About", "Pricing", "Jobs", "Blog", "Careers"]
        },
        {
            title: "Product",
            items: ["Sales software", "Features", "Privacy", "Marketplace", "Status", "API"]
        },
        {
            title: "Discover",
            items: ["Partner Program", "Get our newsletter", "Sales Pipeline", "What is CRM?", "CRM Comparison", "Resources"]
        },
        {
            title: "Help Center",
            items: ["Community", "Knowledge Base", "Academy", "Support"]
        }
    ];

    return (
        <div className=' bg-white w-full m-0 p-0'>
            <div className='bg-white h-1/2 w-full flex flex-col md:flex-row  md:justify-around items-center md:items-start p-10 md:p-20'>
                <div className='p-5 text-center md:text-left '>
                    <ul>
                        <p className='text-black font-bold text-2xl pb-6'>
                            Roooby
                        </p>
                        <p className='text-gray text-sm w-64 pb-6'>
                            We built an elegant solution.
                            Our team created a fully integrated
                            sales and marketing solution for SMBs
                        </p>
                        <div className='flex ml-16 md:ml-0 gap-6 pb-5'>
                        <FaTwitter className='text-twitter text-2xl cursor-pointer transform hover:scale-150' />

                            <FaFacebook className='text-facebook  text-2xl cursor-pointer transform hover:scale-150' />
                            <FaLinkedin className='text-linkedin text-2xl cursor-pointer transform hover:scale-150' />
                        </div>
                    </ul>
                </div>
                {sections.map((section, index) => (
                    <div key={index} className='p-5'>
                        <p className='text-black font-semibold text-xl pb-4'>{section.title}</p>
                        <ul>
                            {section.items.map((item, i) => (
                                <li key={i} className='text-black text-md pb-2 font-semibold cursor-pointer hover:underline'>{item}</li>

                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <hr className=" md:mt-10 mx-12 border-gray" />
            <div className='bg-white h-1/2 w-full flex flex-col md:flex-row  justify-around items-center md:items-start p-6'>
                <div className='p-5'>
                    <h1 className='text-gray font-semibold'>© Copyright 2024</h1>
                </div>
                <div className='p-5'>
                    <p className='text-black text-l'>Terms of Service</p>
                </div>
                <div className='p-5'>
                    <p className='text-black text-l'>Privacy Policy</p>
                </div>
                <div className='p-5'>
                    <p className='text-black text-l'>Cookies</p>
                </div>
                <div className='p-5'>
                    <Translation />
                </div>
            </div>
        </div>
    );
}

export default Footer;
