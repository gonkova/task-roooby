'use client';
import React from 'react';

const News = () => {
    return (
        <div className="container mx-auto py-8  px-8 bg-white ">
            <div className='flex flex-col  md:flex-row md:justify-between mt-8 md:mt-24'>
                <h1 className=" text-xl md:text-6xl font-bold md:mb-16">
                    What’s new at Roooby?
                </h1>
                <button className="flex items-center space-x-2  text-black  hover:text-white hover:bg-blue   px-4 rounded-lg h-8 mt-10 mb-8 md:mb-16">
                    <span className='text-lg '>See all</span>
                    <span className='text-green'>&gt;</span>
                </button>
            </div>

            <div className="flex flex-col gap-8 md:gap-0 md:flex-row w-full md:space-x-8 md:mb-16">
                <div className=" w-80 mx-auto md:w-1/2 lg:w-1/2">
                    <div class="w-24 h-8 text-silver text-sm font-bold -mb-3">SERVICE</div>
                    <hr className="my-4 mb-6 border-silver" />
                    <img
                        src="images/service-1.png"
                        alt="Изображение"
                        className="w-full h-auto rounded-lg transition-transform ease-in-out mt-4"
                    />
                    <h2 className=" text-sm md:text-3xl font-bold mt-6 mb-2 md:mb-6">
                        How To Deliver a Successful
                        Product Launch
                    </h2>
                    <p className="text-black text-sm md:text-xl font-bold mb-4">
                        <span>05 Sep 2024,</span>by Joshua Nash
                    </p>
                </div>
                <div className=" w-80 mx-auto md:w-1/2 lg:w-1/2">
                    <div class="w-24 h-8 text-silver text-sm font-bold -mb-3">SERVICE</div>
                    <hr className="my-4 mb-6 border-silver" />
                    <img
                        src="images/service-2.png"
                        alt="Изображение"
                        className="w-full h-auto rounded-lg transition-transform ease-in-out mt-4"
                    />
                    <h2 className=" text-sm md:text-3xl font-bold mt-6 mb-2 md:mb-6">
                        What Makes an Authentic Employee Profile, and Why Does It Matter?
                    </h2>
                    <p className="text-black text-sm md:text-xl font-bold mb-4">
                        <span>07 Sep 2023,</span> by Ivan Neshev
                    </p>
                </div>
            </div>

        </div>
    );
};

export default News;
