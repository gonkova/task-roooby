"use client";
import React from 'react';
import EmailForm from './EmailForm';

const Hero = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row bg-bgcustom w-full mx-auto ">
                <div className=" px-4 py-2 m-2 md:w-1/2 mt-6 md:mt-14 ml-10">
                    <div >
                        <h1 className='text-blue md:text-left text-3xl md:text-[3.9rem] font-bold leading-tight '>
                            Bringing companies
                            <br />
                            and customers together, anywhere
                        </h1>

                        <p className='text-custom1 text-[16px] text-bold text-left mt-4 mb-10'>
                            An awesome & powerful tool for your business, increase business,<br />
                            revenue with enterprise-grade links <br />
                            built to acquire and engage customers.
                        </p>
                    </div>
                    <div >
                        <EmailForm />
                    </div>
                </div>
                <div className="text-gray-700 text-center  py-2  md:w-1/2 flex justify-end ">
                    <div >
                        <img src="images/image.png" alt="" className="w-full h-auto rounded-lg transition-transform ease-in-out md:mt-16" />
                    </div>
                </div>
            </div>
            <div className="w-full  bg-bgcustom">
                <div className="flex flex-col  md:flex-row  md:space-x-20 space-y-14 md:space-y-0 justify-center items-center bg-bgcustom py-20 md:p-4 ">
                    <p className='font-bold md:mt-16  md:mb-16'>Trusted by 1,000+ customers</p>
                    <img src="images/Google.png" alt="" className="w-auto h-6 mx-2  cursor-pointer" />
                    <img src="images/Atlassian.png" alt="" className="w-auto h-5 mx-2 cursor-pointer" />
                    <img src="images/Canon.png" alt="" className="w-auto h-5 mx-2  cursor-pointer" />
                    <img src="images/Walmart.png" alt="" className="w-auto h-6 mx-2  cursor-pointer" />
                    <img src="images/Amazon.png" alt="" className="w-auto h-6 mx-2  cursor-pointer" />
                </div>
            </div>
        </>
    );
}

export default Hero;
