'use client';
import { useAppContext } from "@/context";
import React, { useState, useContext } from 'react';


const FirstBlogCategory = () => {

    const { firstBlogPosts } = useAppContext();

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
