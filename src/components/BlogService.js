'use client';
import React from 'react'

const BlogService = () => {
  return (
    <div className="container mx-auto py-8 mt-24 md:px-10  bg-white">
    <div className="flex flex-col md:flex-row w-full md:space-x-20 ">
        <div className=" flex flex-col justify-around  w-80 mx-auto lg:w-1/2">
        <div>
        <hr className="  border-gray " />
            <div class="text-gray mt-6 ">SERVICE</div>
            <h2 className="text-3xl md:text-4xl text-left font-bold pt-4 mb-6 md:mb-36 leading-tight">
            The 2024 State of Marketing &amp; Trends Report: Data from 1400+ Global Marketers
            </h2>
        </div>
            <div>
            <p className="text-black text-sm md:text-lg font-bold mb-6">
               <span> 05 Sep 2024,</span><span className='text-gray ml-2'> by  Maxwell Iskiev</span>
                        </p>
            <hr className= "border-gray" />
            </div>
        </div>
        <div className=" w-80 mx-auto md:w-1/2 lg:w-1/2 ">
            <div>
                <img
                    src="images/maxwel-post.png"
                    alt="Изображение"
                    className="w-full h-auto transition-transform ease-in-out mt-4"
                />
            </div>
        </div>
    </div>
</div>
  )
}

export default BlogService
