"use client";
import React from 'react';

const BusinessInfo = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center bg-blue space-x-4">
            <div className="container mx-auto md:py-8 px-4 sm:px-8">
                <div className=" text-center px-4 mt-24 mb-28 ">
                    <div className="flex flex-col justify-center md:flex-row md:justify-between items-center text-white mb-2 ">
                        <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left">
                            Here&apos;s how Roooby can
                            <br />
                            benefit your business
                        </h2>
                        <p className="text-lg mt-8 text-center  md:text-left">
                            Build more meaningful and lasting relationships — better
                            <br className="hidden md:inline" />
                            understand their needs, identify new opportunities to
                            <br className="hidden md:inline" />
                            help, address any problems faster.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-around md:flex-row mx-auto px-4 space-y-4 md:space-x-4 md:space-y-0 mt-6 md:mt-12 mb-20">
                    <div className="group w-full md:w-1/3 p-6 rounded-md bg-custom2 hover:bg-custom3 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                        <img src="images/icon-4.png" alt="" className="w-auto h-17 mx-2 mt-12 filter invert grayscale group-hover:invert-0" />
                        <hr className="my-4 border-white mt-14 group-hover:border-black" />
                        <h2 className="text-white text-xl  font-semibold mb-2 group-hover:text-black">
                            Lead customers
                            <br />
                            to happiness
                        </h2>
                        <p className="text-l text-white mt-2 mb-14 group-hover:text-black">
                            Roooby Support helps you provide personalized support when
                            and where customers need it, so customers stay happy.
                        </p>
                    </div>
                    <div className="group w-full md:w-1/3 p-6 rounded-md bg-custom2 hover:bg-custom3 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                        <img src="images/icon-1.png" alt="" className="w-auto h-17 mx-2 mt-14 group-hover:invert" />
                        <hr className="my-4 border-white mt-16 group-hover:border-black" />
                        <h2 className="text-white text-xl  font-semibold mb-2 group-hover:text-black">
                            Support your support
                        </h2>
                        <p className="text-l text-white mt-2 mb-14 group-hover:text-black">
                            Productive agents are happy agents.
                            Give them all the support tools and information
                            they need to best serve your customers.
                        </p>
                    </div>
                    <div className="group w-full md:w-1/3 p-6 rounded-md bg-custom2 hover:bg-custom3 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                        <img src="images/icon-2.png" alt="" className="w-auto h-17 mx-2 mt-12 group-hover:invert" />
                        <hr className="my-4 border-white mt-14 group-hover:border-black" />
                        <h2 className="text-white text-xl  font-semibold mb-2 group-hover:text-black">
                            Grow without growing pains
                        </h2>
                        <p className="text-l text-white mt-2 mb-14 group-hover:text-black">
                            Our software is powerful enough to handle the
                            most complex business, yet flexible enough to
                            scale with you as you grow.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default BusinessInfo;
