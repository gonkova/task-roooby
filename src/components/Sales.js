"use client";
import React, { useState } from 'react';
const Sales = () => {

    const SALES_ITEMS = [
        { description: 'Close more deals with single-page contact management' },
        { description: '  Enjoy one-click calling, call scripts and voicemail automation' },
        { description: '  Track stages and milestones of your deals to keep the sales process on track' },
    ];

    return (
        <div className="container mx-auto py-8 px-4  bg-white">
            <hr className=" mt-14 md:mt-20 my-4 border-black" />
            <div className=" flex flex-col md:flex-row w-full space-x-4 ">
                <div className="mt-14  p-4 w-80 mx-auto md:w-1/2 lg:w-1/2">
                    <div class="w-16 h-8 -mt-4 md:-mt-0 bg-custom3 text-sm font-bold text-center rounded-md flex justify-center items-center">SALES</div>
                    <h2 className="text-3xl md:text-[3.2rem] text-left font-bold mt-6 leading-tight">
                        Increase company
                        <br />
                        revenue up to 65%
                    </h2>
                    <p className="w-4/5 mt-8 text-lg ">
                        Automate your sales, marketing,
                        and service in one platform. Avoid data leaks
                        and enable consistent messaging.
                    </p>
                    <ul className="mt-2">
                        {SALES_ITEMS.map((item, index) => (
                            <li className='w-4/5 flex items-left text-custom1 text-lg pt-2'>
                                <span className="text-green mr-2">&#10003;</span>
                                <span className="text-left">{item.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:p-4 lg:mt-0 w-80 mx-auto md:w-1/2 lg:w-1/2 ">
                    <img
                        src="images/sales.png"
                        alt="Изображение"
                        className="w-full h-auto rounded-lg transition-transform ease-in-out mt-4"
                    />
                </div>
            </div>
        </div>
    );
};

export default Sales;
