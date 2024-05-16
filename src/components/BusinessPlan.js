'use client';
import React from 'react';
import Button from '../components/Button';

const BusinessPlan = () => {
    const STAERER_ITEMS = [
        { description: '2 team members' },
        { description: '1,000 Contacts & Companies' },
        { description: '5 Campaign Workflows' },
        { description: '10 Nodes Per Campaign' },
        { description: '5 Automation Rules (Triggers)' },
        { description: '3 Plugins/Integrations' },

        { description: 'Marketing Automation' },
        { description: 'Custom Deal Tracks' },
        { description: 'Automated Voicemails' },
        { description: 'Post-call Automation' },
    ];

    const PRO_ITEMS = [
        { description: '10 team members' },
        { description: '2,500 Contacts & Companies' },
        { description: '5 Campaign Workflows' },
        { description: '10 Nodes Per Campaign' },
        { description: '5 Automation Rules (Triggers)' },
        { description: '3 Plugins/Integrations' },
        { description: 'Marketing Automation' },
        { description: 'Custom Deal Tracks' },
        { description: 'Automated Voicemails' },
        { description: 'Post-call Automation' },
    ];

    const ENTERPISE_ITEMS = [
        { description: 'Unlimited team members' },
        { description: '5,000 Contacts & Companies' },
        { description: '25 Campaign Workflows' },
        { description: '20 Nodes Per Campaign' },
        { description: '15 Automation Rules (Triggers)' },
        { description: '10 Plugins/Integrations' },
        { description: 'Marketing Automation' },
        { description: 'Custom Deal Tracks' },
        { description: 'Automated Voicemails' },
        { description: 'Post-call Automation' },
    ];


    return (
        <div className="w-full flex flex-col items-center justify-center bg-bgcustom md:-mt-10 space-x-4">
            <div className=" container mx-auto py-8 px-4 sm:px-8">
                <div className=" text-center px-4 md:mt-24 mb-16 md:mb-28 ">
                    <div className="flex flex-col justify-center md:flex-row md:justify-between items-center text-black mb-2 ">
                        <h2 className="text-3xl md:text-6xl font-bold text-center md:text-left">
                            Choose the right plan
                            <br />
                            <span className='text-gray'>for your business</span>
                        </h2>
                        <p className="text-lg mt-8 text-center  md:text-left">
                            Built with love for growing businesses.
                            <br className="hidden md:inline" />
                            Check out the Roooby CRM pricing grid
                            <br className="hidden md:inline" />
                            below. Switch between plans at any time.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-around md:flex-row mx-auto px-4 space-y-4 md:space-x-4 md:space-y-0 mt-6 md:mt-12 mb-20">
                    <div className="group w-full md:w-1/3 p-6 rounded-md bg-white hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                        <h2 className='text-xl font-bold pt-3 pb-6'>Starter</h2>
                        <p className='pb-7'>Get organized and set up simple sales processes lorem ipsum</p>
                        <p className='pb-6'><span className='text-5xl font-bold'>$8,90</span><span className='text-gray2'>/month</span></p>
                        <h2 className="text-white text-xl  font-semibold mb-2 group-hover:text-black"></h2>
                        <button className=" w-full mx-auto bg-white text-black font-bold py-3 px-8 border border-gray rounded-lg hover:text-white hover:bg-blue ">
                            Try for Free
                        </button>
                        <p className='text-gray2 text-sm text-center pt-3'>Free 14-day trial. No credit card required</p>
                        <hr className="my-4 border-gray mt-8" />
                        <div className="max-w-md mx-auto p-8 -mt-4">
                            <ul className="list-disc space-y-2">
                                {STAERER_ITEMS.map((item, index) => (
                                    <li key={index} className="flex items-center ">
                                        <span className={`text-green mr-2 ${index >= STAERER_ITEMS.length - 4 ? 'opacity-50' : ''}`}>
                                            &#10003;
                                        </span>
                                        <span className={`text-left text-l ${index >= STAERER_ITEMS.length - 4 ? 'opacity-50 line-through' : ''}`}>
                                            {item.description}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="group w-full md:w-1/3 p-6 rounded-md bg-white hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                        <span className='text-lg font-bold flex justify-center gap-14 pt-3 pb-6'>
                            <span className='text-xl font-bold '>Professional</span>
                            <span className="text-sm font-bold  text-green bg-green1 p-1 rounded-md">
                                RECOMENDED
                            </span>
                        </span>
                        <p className='pb-7'>Everything you need to boost performance and revenue lorem ipsum</p>
                        <p className='pb-6'><span className='text-5xl font-bold'>$29,90</span><span className='text-gray2'>/month</span></p>
                        <h2 className="text-white text-xl  font-semibold mb-2 group-hover:text-black"></h2>
                        <button className=" w-full mx-auto bg-white text-black font-bold py-3 px-8 border border-gray rounded-lg hover:text-white hover:bg-blue ">
                            Try for Free
                        </button>
                        <p className='text-gray2 text-sm text-center pt-3'>Free 14-day trial. No credit card required</p>
                        <hr className="my-4 border-gray mt-8" />
                        <div className="max-w-md mx-auto p-8 -mt-4">
                            <ul className="list-disc space-y-2">
                                {PRO_ITEMS.map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        <span className={`text-green mr-2 ${index >= STAERER_ITEMS.length - 2 ? 'opacity-50' : ''}`}>
                                            &#10003;
                                        </span>
                                        <span className={`text-left text-l ${index >= STAERER_ITEMS.length - 2 ? 'opacity-50 line-through' : ''}`}>
                                            {item.description}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="group w-full md:w-1/3 p-6 rounded-md bg-white hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                        <h2 className='text-xl font-bold pt-3 pb-6'>Enterprise</h2>
                        <p className='pb-7'>Customize without limits and access unrivaled support lorem ipsum</p>
                        <p className='pb-6'><span className='text-5xl font-bold'>$39,90</span><span className='text-gray2'>/month</span></p>
                        <h2 className="text-white text-xl  font-semibold mb-2 group-hover:text-black"></h2>
                        <button className=" w-full mx-auto bg-white text-black font-bold py-3 px-8 border border-gray rounded-lg hover:text-white hover:bg-blue ">
                            Try for Free
                        </button>
                        <p className='text-gray2 text-sm text-center pt-3'>Free 14-day trial. No credit card required</p>
                        <hr className="my-4 border-gray mt-8" />
                        <div className="max-w-md mx-auto p-8 -mt-4">
                            <ul className="list-disc space-y-2">
                                {ENTERPISE_ITEMS.map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        <span className='text-green mr-2'>
                                            &#10003;
                                        </span>
                                        <span className='text-left text-l'>
                                            {item.description}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="md:mt-24 mb-7 my-4 border-gray" />
            </div>
            <div className='flex flex-col items-center mx-auto md:items-center gap-5 md:flex-row  md:gap-6 mb-24 md:mb-32'>
                <h2 className='text-black  text-xl md:text-3xl font-bold'>Need help choosing the right plan?</h2>
                <button className="bg-white text-black font-bold py-3 px-8 border border-gray3 rounded-lg hover:text-white hover:bg-blue md:ml-6">
                    Contact sales
                </button>
                <Button className='py-3 rounded-lg hover:bg-custom3 hover:text-blue'>Compare plans</Button>
            </div>


        </div>
    );
}

export default BusinessPlan;

