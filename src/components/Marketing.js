"use client";
import React, { useState } from 'react';
import Button from './Button';
const Marketing = () => {

    const MARKETING_ITEMS = [
        { description: 'Marketing workflows with an easy drag-and-drop designer' },
        { description: '  Use our templates to create high converting, mobile responsive landing pages' },
        { description: '  Integrate social media easily into your marketing campaigns & contact views' },
    ];

    return (
        <div className="container mx-auto  py-8 px-4 sm:px-8 bg-white ">
            <hr className=" md:mt-20 my-4 border-black" />
            <div className="flex flex-col md:flex-row w-full md:space-x-28 ">
                <div className=" mt-8 md:mt-5 lg:mt-5 w-80 mx-auto md:lg:w-1/2 relative ">
                    <img
                        src="images/marketing.png"
                        alt="Изображение"
                        className="w-full h-auto rounded-lg transition-transform ease-in-out mt-4 absolute z-0 lg:max-w-full lg:max-h-full"
                    />
                    <div className='flex flex-col md:flex-row w-80 h-28 mx-auto md:justify-center md:space-x-4 md:items-center bg-blue text-white md:w-4/5 rounded-lg md:h-20 absolute z-10 md:ml-14 mt-64 md:mt-96 '>
                        <p className=" text-center mt-3 md:mt-0  mb-3 md:mb-0 md:text-l">Automate your sales & marketing</p>
                        <Button className='bg-green mx-8 md:mx-0 text-l hover:bg-custom3 hover:text-blue rounded-lg md:py-4 mb-24 md:mb-0'>Start now</Button>
                    </div>
                </div>
                <div className=" mt-96 md:mt-24 p-4 w-full mx-auto  md:w-1/2 lg:w-1/2 -mb-20 md:-mb-0">
                    <div class="w-24 h-8  bg-custom3 text-sm font-bold text-center rounded-md flex justify-center items-center mt-10 md:mt-0">MARKETING</div>

                    <h2 className=" text-3xl md:text-[3.2rem] text-left font-bold mt-6 leading-tight">
                        Marketing
                    </h2>
                    <p className="w-10/12 mt-8 text-lg ">
                        Market like the most successful companies
                        in the world with Agile CRM's marketing automation software.
                    </p>
                    <ul className="mt-2">
                        {MARKETING_ITEMS.map((item, index) => (
                            <li className='w-11/12 flex items-left text-custom1 text-lg   pt-2'>
                                <span className="text-green mr-2">&#10003;</span>
                                <span className="text-left">{item.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Marketing;
