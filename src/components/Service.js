"use client";
import React, { useState } from 'react';
const Service = () => {

    const SERVICE_ITEMS = [
        { description: 'Resolve every issue in the shortest possible time with powerful ticketing features' },
        { description: '  Categorize tickets according to the issue and route them to the appropriate group (e.g. sales or support)' },
        { description: '  Enjoy at-a-glance views of important data—such as ticket priority—on your dashboard' },
    ];

    return (
        <div className="container mx-auto py-8 px-4 sm:px-8 bg-white">
            <hr className=" mt-20 my-4 border-black" />
            <div className="flex flex-col md:flex-row w-full space-x-4 pb-20">
                <div className="mt-20 p-4 w-full lg:w-1/2">
                    <div class="w-24 h-8 -mt-10 md:-mt-0 bg-custom3 text-sm font-bold text-center rounded-md flex justify-center items-center">SERVICE</div>
                    <h2 className="text-3xl md:text-[3.2rem] text-left font-bold mt-6 leading-tight">
                        Help Desk Software
                    </h2>
                    <p className="w-4/5 mt-8 text-lg ">
                        Great customer support separates decent companies
                        from excellent companies. A positive customer support
                        experience is a crucially important piece of the customer journey.
                    </p>
                    <ul className="mt-2">
                        {SERVICE_ITEMS.map((item, index) => (
                            <li key={index} className='w-4/5 flex items-left text-custom1 text-lg pt-2'>
                                <span className="text-green mr-2">&#10003;</span>
                                <span className="text-left">{item.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="p-4 lg:mt-0 w-80 mx-auto md:w-1/2 lg:w-1/2 -mb-10 md:-mb-0">
                    <div className='bg-bgcustom rounded-lg'>
                        <img
                            src="images/lead-discovered.png"
                            alt="Изображение"
                            className="w-full h-auto  py-12 px-16 transition-transform ease-in-out mt-4"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
