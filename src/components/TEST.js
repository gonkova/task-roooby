'use client'
import React from 'react';

const Supercharge = () => {
    return (
        <div className="w-full h-auto relative">
            <div className="flex flex-col md:flex-row w-full relative">
                <div className="bg-bgcustom1 lg:w-2/3 flex flex-col justify-center items-center lg:py-36 md:py-24 z-10 relative">
                    <h2 className="text-white md:text-6xl font-bold leading-tight text-center">
                        Ready to supercharge <br />
                        your business?
                    </h2>
                    <p className="text-white text-lg mt-4 text-center">
                        Ask about <span className='font-bold'>Roooby</span> products, pricing, implementation, or anything
                        <br />
                        else. Our highly trained reps are standing by, ready to help.
                    </p>
                </div>
                <div className="bg-custom3 lg:mt-0 md:w-1/3 lg:w-1/3 z-10 relative">
                </div>
                <div className="absolute z-20 lg:w-2/5 md:w-2/5 h-96 bottom-0 right-0">
                    <img
                        src="images/img-1.png"
                        alt="Изображение"
                        className="absolute h-96"
                    />
                    <div className='flex flex-col items-center gap-4 absolute bottom-36 right-32 z-30'>
                        <button className="flex items-center space-x-2 bg-white text-black font-bold hover:text-white hover:bg-custom3 py-4 px-10 rounded-lg">
                            <span className='text-center'>
                                Try for Free
                            </span>
                            <span>&gt;</span>
                        </button>
                        <p className='text-white text-sm'>Full access. No credit card required.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Supercharge;
