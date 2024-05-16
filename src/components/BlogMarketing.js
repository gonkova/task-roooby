'use client';

import React from 'react'

const BlogMarketing = () => {
    return (
        <div className="container mx-auto py-8 px-4 sm:px-8">
            <div class="text-gray ml-5 ">MARKETING</div>
            <div className=" flex flex-col md:flex-row w-full md:space-x-10 ">
                <div className=" p-4 w-full lg:w-1/2">
                    <hr className=" my-4 border-gray" />
                    <img
                        src="images/blog-marketing.png"
                        alt="Изображение"
                        className="w-full h-auto transition-transform ease-in-out mt-4"
                    />
                    <h2 className="text-2xl md:text-3xl text-left font-bold mt-4 mb-6  leading-tight">
                        Email marketing best practices: 10 experts share their email tips
                    </h2>
                    <p className="text-black text-sm md:text-lg font-bold mb-6">
                        <span> 23 Nov 2023,</span><span className='text-gray ml-2'> by Joshua Nash</span>
                    </p>
                </div>
                <div className=" p-4 w-80 mx-auto lg:w-1/2">
                    <div>
                        <hr className=" my-4 border-gray" />
                        <h2 className="text-xl md:text-2xl text-left font-bold mt-4 mb-6  leading-tight">
                            Access Roooby leads features on your
                            <br />
                            mobile
                        </h2>
                        <div className='flex flex-row justify-between'>
                            <p className="text-black text-sm md:text-lg font-bold mb-6">
                                <span> 11 Aug 2023,</span><span className='text-gray ml-2'>by Joshua Nash</span>
                            </p>
                            <p>PRODUCT</p>
                        </div>
                    </div>
                    <div>
                        <hr className=" my-4 border-gray" />
                        <h2 className="text-xl md:text-2xl text-left font-bold mt-4 mb-6  leading-tight">
                            Sales presentations: templates, examples and ideas on how to present like a pro
                        </h2>
                        <div className='flex flex-row justify-between'>
                            <p className="text-black text-sm md:text-lg font-bold mb-6">
                                <span>11 Oct 2022,</span><span className='text-gray ml-2'> by Laura Ryan</span>
                            </p>
                            <p>SALES</p>
                        </div>
                    </div>
                    <div>
                        <hr className=" my-4 border-gray" />
                        <h2 className="text-xl md:text-2xl text-left font-bold mt-4 mb-6  leading-tight">
                            How To Deliver a Successful
                            <br />
                            Product Launch
                        </h2>
                        <div className='flex flex-row justify-between'>
                            <p className="text-black text-sm md:text-lg font-bold mb-6">
                                <span> 30 Jan 2022,</span><span className='text-gray ml-2'>  by Alice Washington</span>
                            </p>
                            <p>NEWS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogMarketing
