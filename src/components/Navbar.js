"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Button from '../components/Button';


const Navbar = () => {

    const MENU_ITEMS = [
        { link: '/', title: 'Product' },
        { link: '/pricing', title: 'Pricing' },
        { link: '/company', title: 'Company' },
        { link: '/blog', title: 'Blog' },
        { link: '/contact', title: 'Contact' },
    ];
    const [isClick, setIsClick] = useState(false);

    const toggleNavbar = () => {
        setIsClick(!isClick);
    };

    return (
        <nav className='bg-bgcustom '>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                            <Link href='/'>
                                <div>
                                    <img src="images/roooby.svg" alt="" className="bg-bgcustom rounded-md w-full h-full" />
                                </div>
                            </Link>
                        </div>
                        <div className='hidden md:flex items-center  ml-24 mr-6'>
                            {MENU_ITEMS.map((item, index) => (
                                <Link key={index} href={item.link}>
                                    <div className='font-semibold text-custom1 hover:text-blue p-2 ml-10 cursor-pointer hover:underline underline-offset-8 decoration-2 decoration-blue'>
                                        {item.title}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='hidden md:flex items-center space-x-4'>
                        <button className="bg-white text-custom1  border border-silver text-xs text-center font-bold py-2 px-8  rounded whitespace-nowrap  hover:text-green-700 hover:text-lg hover:underline ">
                            Log in
                        </button>
                        <Button className='hover:bg-custom3 hover:text-blue text-xs ' >
                            Try for Free
                        </Button>
                    </div>
                    <div className='md:hidden flex items-center'>
                        <button className='inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' onClick={toggleNavbar}>
                            {isClick ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" className="w-10 h-10">
                                    <path fillRule="evenodd" d="M6 8.707l5.146-5.147a1 1 0 011.415 1.414L7.414 10l5.147 5.146a1 1 0 11-1.415 1.415L6 11.414l-5.146 5.147a1 1 0 11-1.415-1.415L4.586 10 1.44 6.854a1 1 0 111.415-1.414L6 8.707z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" className="w-10 h-10">
                                    <path fillRule="evenodd" d="M3 9a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM4 5a1 1 0 100 2h12a1 1 0 100-2H4zm12 6a1 1 0 110 2H7a1 1 0 110-2h9z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isClick && (
                <div className='md:hidden ml-4 mt-2'>
                    <div className='px-2 pt-2 pb-3 space-y-3 sm:px-3 flex flex-col'>
                        {MENU_ITEMS.map((item, index) => (
                            <Link key={index} href={item.link}>
                                <div className='block text-cusom1 hover:bg-white hover:text-black rounded-lg p-2'>
                                    {item.title}
                                </div>
                            </Link>
                        ))}
                        <button className=" w-40 bg-white text-custom1  border border-silver  text-center font-bold py-2 px-8 rounded whitespace-nowrap  hover:text-green-700 hover:text-lg hover:underline ">
                            Log in
                        </button>
                        <Button className='w-40 hover:bg-custom3 hover:text-blue' >
                            Try for Free
                        </Button>
                    </div>
                </div>
            )
            }
        </nav >
    );
};

export default Navbar;
