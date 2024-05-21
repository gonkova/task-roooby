'use client';
import React, { useState } from 'react';

const FirstBlogCategory = () => {
    const [firstBlogPosts, setFirstBlogPosts] = useState([
        {
            category: 'NEWS',
            imageSrc: 'images/joshua-post.png',
            title: 'Learn from My Mistakes: 7 Digital Course Pitfalls to Skip',
            date: '29 Jun 2024',
            author: 'Joshua Nash'
        },
        {
            category: 'SALES',
            imageSrc: 'images/bill-post.png',
            title: 'How To Do Representation in Marketing the Right Way',
            date: '20 Mar 2022',
            author: 'Bill Holloway'
        },
        {
            category: 'SALES',
            imageSrc: 'images/stephen-post.png',
            title: 'The Psychology of Short-Form Content: Why We Love...',
            date: '07 Jun 2024',
            author: 'Stephen Henderson'
        },
        {
            category: 'SALES',
            imageSrc: 'images/nash-post.png',
            title: 'The Challenger Sale model: How to lead the conversation',
            date: '09 Jan 2024',
            author: 'by Joshua Nash'
        },
        {
            category: 'PRODUCT',
            imageSrc: 'images/leroy-post.png',
            title: '3 ways To automate your lead generation process',
            date: '08 Jul 2024',
            author: ' by Leroy Figueroa'
        },
        {
            category: 'PRODUCT',
            imageSrc: 'images/jn-post.png',
            title: 'Marketplace Monthly Apps Spotlight: Aug 2023',
            date: '05 Aug 2024',
            author: 'by Joshua Nash'
        },
    ]);

    return (
        <div className="container mx-auto p-10 bg-white md:mb-6">
            <div className="grid grid-col-1 md:grid-cols-3 gap-6 md:gap-y-24 ">
                {firstBlogPosts.map((p, index) => (
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
                            <span>{p.date},</span><span className='text-gray ml-2'> {p.author}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FirstBlogCategory;
