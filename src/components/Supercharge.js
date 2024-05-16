'use client'
import React from 'react';

const Supercharge = () => {
    return (
        <section className=" md:w-full scroll  md:py-28 bg-[url('/images/bg.svg')] bg-cover bg-no-repeat bg-center">
            <div className='flex flex-col gap-8 md:gab-0  md:flex-row justify-around items-center '>
                <div>
                    <h2 className="text-white text-3xl md:text-6xl font-bold leading-tight text-center  pt-10 md:pt-22">
                        Ready to supercharge <br />
                        your business?
                    </h2>
                    <p className="text-white text-lg md:text-xl mx-6 md:mx-0  mt-4 text-center">
                        Ask about <span className='font-bold'>Roooby</span> products, pricing, implementation, or anything
                        <br />
                        else. Our highly trained reps are standing by, ready to help.
                    </p>
                </div>
                <div className='flex flex-col items-center gap-4 pb-10 md:pb-0  md:pt-30 md:pr-12'>
                    <button className="flex items-center space-x-2 bg-white text-black font-bold hover:text-white hover:bg-custom3 py-4 px-10 rounded-lg">
                        <span className='text-center'>
                            Try for Free
                        </span>
                        <span>&gt;</span>
                    </button>
                    <p className='text-white text-sm'>Full access. No credit card required.</p>
                </div>
            </div>
        </section>
    );
};

export default Supercharge;
