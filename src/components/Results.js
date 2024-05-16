'use client';
import React from 'react';

const Results = () => {
    return (
        <div className="container mx-auto py-8 px-12  bg-white -mb-16 md:-mb-0">
            <h1 className=" text-xl md:text-5xl font-bold mb-7">
                Real-life results and revenue
            </h1>
            <p className='text-silver md:text-lg mb-10 md:mb-16'>
                See how companies like yours have smashed their sales success goals
            </p>
            <hr className="my-4 mb-12 border-black" />
            <div className="flex flex-col md:flex-row w-full md:space-x-4 mb-16">
                <div className="lg:w-1/3">
                    <h2 className=" text-4xl md:text-7xl font-bold mb-6">
                        $2.5 M
                    </h2>
                    <p className="text-black text-xl font-bold mb-4">
                        Generate sales
                    </p>
                </div>
                <div className="lg:w-2/3">
                    <p className="text-black text-xl md:text-3xl mb-8">
                        Using Кирилица CRM is one of the best
                        decisions we’ve ever made. We’ve seen our annual revenue explode, and the
                        outlook just keeps getting sunnier.
                    </p>
                    <div className='flex  items-center space-x-2'>
                        <img src="/images/nellie.png" alt="Image" className="w-14 h-auto" />
                        <div >
                            <p className="text-black font-bold">
                                Nellie Foster
                            </p>
                            <p className="text-silver mb-1">
                                Founder & CEO, Foster Business Strategi
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-4 mb-12 border-black" />
            <div className="flex flex-col md:flex-row w-full md:space-x-4 mb-28">
                <div className="lg:w-1/3">
                    <h2 className=" text-4xl md:text-7xl font-bold mb-6">
                        45%
                    </h2>
                    <p className="text-black text-xl font-bold mb-4">
                        Grew revenue
                    </p>
                </div>
                <div className="lg:w-2/3">
                    <p className="text-black text-xl md:text-3xl mb-8">
                        Yoora is created for sales people. It’s the kind of software that just works.
                        I don’t have to try to make it work. It already does. It’s just perfect.
                    </p>
                    <div className='flex  items-center space-x-2'>
                        <img src="/images/lawrence.png" alt="Image" className="w-14 h-auto" />
                        <div >
                            <p className="text-black font-bold">
                                Lawrence Gibbs
                            </p>
                            <p className="text-silver mb-1">
                                Founder & CEO, Foster Business Strategi
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Results;
