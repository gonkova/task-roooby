'use client';
import React, { useState } from 'react';

const SecondBlogCategory = () => {
    const [secondBlogPosts, setSecondBlogPost] = useState([
        {
            category: 'SERVICE',
            imageSrc: 'images/edith-post.png',
            title: 'Sales Funnels: Definition, Process, Stages and Examples',
            date: '01 Dec 2022',
            author: 'by Edith Rose'
        },
        {
            category: 'SALES',
            imageSrc: 'images/amanda-post.png',
            title: 'What is a sales and how do you build one?',
            date: '29 Mar 2022',
            author: 'by Amanda Brooks'
        },
        {
            category: 'SERVICE',
            imageSrc: 'images/roxie-post.png',
            title: '10 real estate cold calling scripts to increase lead',
            date: '27 Dec 2022',
            author: 'by Roxie Sandoval'
        }
    ]);

    return (
        <div className="container mx-auto p-10 bg-white md:mb-28">
            <div className="grid grid-col-1 md:grid-cols-3 gap-6 md:gap-y-24 ">
                {secondBlogPosts.map((p, index) => (
                    <div key={index} className=" mx-auto ">
                        <div className="w-24 h-8 text-gray text-sm font-bold -mb-3">{p.category}</div>
                        <hr className="my-4 mb-6 border-gray" />
                        <img
                            src={p.imageSrc}
                            alt="Изображение"
                            className="w-full h-auto rounded-lg transition-transform ease-in-out mt-4"
                        />
                        <h2 className="text-sm md:text-2xl font-bold mt-6 mb-2 md:mb-6">{p.title}</h2>
                        <p className="text-black text-sm md:text-lg font-bold mb-4">
                            <span>{p.date},</span><span className='text-gray ml-2'>{p.author}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SecondBlogCategory;
