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
                <div className="flex flex-wrap justify-center gap-4 w-full">
    <div className="bg-white rounded-md flex justify-center items-center cursor-pointer w-[120px] h-[120px]">
        <img src="images/icon-8.png" alt="" className="w-30 h-30 object-contain" />
    </div>
    <div className="bg-white rounded-md flex justify-center items-center cursor-pointer w-[288px] h-[120px]">
        <img src="images/hubspot.png" alt="" className="w-48 h-20 object-contain" />
    </div>
    <div className="bg-white rounded-md flex justify-center items-center cursor-pointer w-[288px] h-[120px]">
        <img src="images/zoom.png" alt="" className="w-48 h-20 object-contain" />
    </div>
    <div className="bg-white rounded-md flex justify-center items-center cursor-pointer w-[120px] h-[120px]">
        <img src="images/gogle-meet.png" alt="" className="w-20 h-20 object-contain" />
    </div>
    <div className="bg-white rounded-md flex justify-center items-center cursor-pointer w-[288px] h-[120px]">
        <img src="images/zendesk.png" alt="" className="w-48 h-20 object-contain" />
    </div>
    <div className="bg-white rounded-md flex justify-center items-center cursor-pointer w-[372px] h-[120px]">
        <img src="images/intercom.png" alt="" className="w-60 h-20 object-contain" />
    </div>
    <div className="bg-white rounded-md flex justify-center items-center cursor-pointer w-[120px] h-[120px]">
        <img src="images/img-4.png" alt="" className="w-20 h-20 object-contain" />
    </div>
    <div className="bg-white rounded-md flex justify-center items-center cursor-pointer w-[120px] h-[120px]">
        <img src="images/img-5.png" alt="" className="w-20 h-20 object-contain" />
    </div>
    <div className="bg-white rounded-md flex justify-center items-center cursor-pointer w-[372px] h-[120px]">
        <img src="images/asana.png" alt="" className="w-60 h-20 object-contain" />
    </div>
    <div className="bg-white rounded-md flex justify-center items-center cursor-pointer w-[120px] h-[120px]">
        <img src="images/logo-6.png" alt="" className="w-20 h-20 object-contain" />
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
