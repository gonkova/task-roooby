"use client";
import React from 'react';

const Integration = () => {
    return (
        <div className=" w-full h-full max-h-full ">
            <div className="w-full md:w-full bg-bgcustom mx-auto  px-20">
                <div >
                    <h1 className='text-black text-center  text-4xl md:text-5xl font-bold pt-16 md:pt-32'>
                        Over 300+ integrations
                    </h1>
                    <p className='text-custom1 text-lg text-bold text-center mt-6 mb-16'>
                        Expand the capabilities of <span className='font-bold'>Roooby</span> with hundreds of apps and integrations
                    </p>
                </div>
                <div className="flex flex-wrap justify-center w-full   ">
                    <div className="bg-white  rounded-md flex justify-center w-120 h-120 transform scale-90 cursor-pointer">
                        <img src="images/icon-8.png" alt="" className="bg-white rounded-md w-full h-full p-6" />
                    </div>
                    <div className="bg-white  rounded-md flex justify-center w-288 h-120 transform scale-90 cursor-pointer">
                        <img src="images/hubspot.png" alt="" className="bg-white rounded-md w-full h-full p-14  " />
                    </div>
                    <div className="bg-white  rounded-md flex justify-center w-288 h-120 p-16 transform scale-90 cursor-pointer ">
                        <img src="images/zoom.png" alt="" className="bg-white rounded-md w-full h-full" />
                    </div>
                    <div className="bg-white  rounded-md flex justify-center w-120 h-120 p-10 transform scale-90 cursor-pointer">
                        <img src="images/gogle-meet.png" alt="" className="bg-white rounded-md w-full h-full" />
                    </div>
                    <div className="bg-white  rounded-md flex justify-center w-288 h-120 p-14 transform scale-90 cursor-pointer">
                        <img src="images/zendesk.png" alt="" className="bg-white rounded-md w-full h-full" />
                    </div>
                    <div className="bg-white  rounded-md flex justify-center w-372 h-120 p-16 transform scale-90 cursor-pointer">
                        <img src="images/intercom.png" alt="" className="bg-white rounded-md w-full h-full" />
                    </div>
                    <div className="bg-white  rounded-md flex justify-center w-120 h-120 p-14 transform scale-90 cursor-pointer">
                        <img src="images/img-4.png" alt="" className="bg-white rounded-md w-full h-full" />
                    </div>
                    <div className="bg-white  rounded-md flex justify-center w-120 h-120 p-12 transform scale-90 cursor-pointer">
                        <img src="images/img-5.png" alt="" className="bg-white rounded-md w-full h-full" />
                    </div>
                    <div className="bg-white  rounded-md flex justify-center w-372 h-120 p-16 transform scale-90 cursor-pointer">
                        <img src="images/asana.png" alt="" className="bg-white rounded-md w-full h-full" />
                    </div>
                    <div className="bg-white  rounded-md flex justify-center w-120 h-120 p-12 transform scale-90 cursor-pointer">
                        <img src="images/logo-6.png" alt="" className="bg-white rounded-md w-full h-full" />
                    </div>
                </div>
                <div className="flex justify-center pt-14 pb-20 md:pb-28">
                    <button className="flex items-center space-x-2 text-black hover:text-white hover:bg-blue py-2 px-4 rounded-lg">
                        <span className='text-center  text-lg'>
                            See all apps and extensions
                        </span>
                        <span>&gt;</span>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Integration;
