'use client';
import React from 'react';

const Testimonials = () => {
    return (
        <div className=" w-full  bg-bgcustom">
        <div className="container mx-auto py-8 px-12">
            <div className='flex justify-between mt-8 md:mt-24 mb-12'>
                <h1 className=" text-2xl md:text-5xl font-bold mb-7">
                    We love our Customers
                    <br />
                    and They love us too
                </h1>
                <button className="flex items-center space-x-2  text-black  hover:text-white hover:bg-blue   px-4 rounded-lg h-8 mt-10 mb-16">
                    <span className=' text-lg '>See all</span>
                    <span className='text-green'>&gt;</span>
                </button>
            </div>

            <div className="flex flex-col md:flex-row w-full md:space-x-4 mb-8 md:mb-16">

                <div className="lg:w-1/3 mb-14 md:mb-0">
                <img src="/images/quote.png" alt="Image" className=" w-6 md:w-10 h-auto " />
                    <hr className="my-4 mt-9 mb-7 border-gray" />
                    <div className='flex flex-col justify-between h-80 md:h-64'>
                    <p className="text-black font-semibold text-2xl ">
                        The best thing we love about Yoora is it does
                        two-way sync with Google Apps. It has helped us to better
                        organize and keep everything on track.
                    </p>
                    <div className='flex  items-center space-x-2'>
                        <img src="/images/lola.png" alt="Image" className="w-14 h-auto" />
                        <div >
                            <p className="text-black font-bold">
                                Lola Ross
                            </p>
                            <p className="text-silver mb-1">
                                Marketing Director
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="lg:w-1/3 mb-14 md:mb-0">
                <img src="/images/quote.png" alt="Image" className=" w-6 md:w-10 h-auto " />
                    <hr className="my-4 mt-9 mb-7 border-gray" />
                    <div className='flex flex-col justify-between h-80 md:h-64'>
                    <p className="text-black font-semibold text-2xl ">
                        It has made our sales department more effective and efficient.
                        It’s easy to use and it’s constantly updated. It’s easy to use
                        and it’s constantly updated.
                    </p>
                    <div className='flex  items-center space-x-2 '>
                        <img src="/images/daisy.png" alt="Image" className="w-14 h-auto" />
                        <div >
                            <p className="text-black font-bold">
                                Daisy Phelps
                            </p>
                            <p className="text-silver mb-1">
                                Speaker and Author, Lifeiseas
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="lg:w-1/3 mb-7">
                <img src="/images/quote.png" alt="Image" className=" w-6 md:w-10 h-auto " />
                    <hr className="my-4 mt-9 mb-7 border-gray" />
                    <div className='flex flex-col justify-between h-64'>
                    <p className="text-black font-semibold text-2xl ">
                        Easy to use, reasonably priced, and ensures I don’t
                        drop the ball on following up with my leads!
                    </p>
                    <div className='flex  items-center space-x-2 mt-8'>
                        <img src="/images/andrew.png" alt="Image" className="w-14 h-auto" />
                        <div >
                            <p className="text-black font-bold">
                                Andrew Wilkins
                            </p>
                            <p className="text-silver mb-1">
                                Managing Director, Nirma Studio
                            </p>
                        </div>
                    </div>
                    </div>
                </div>

            </div>

        </div>
        </div>
    );
};

export default Testimonials;
