import React from 'react'

const BlogHero = () => {
    const sections = [
        {
            items: ["All Articles", "Sales", "Marketing", "Service", "Product", "News"]
        }
    ];

    return (
        <>
            <div className="flex flex-col md:flex-row bg-bgcustom w-full mx-auto ">
                <div className=" px-4 py-2 md:ml-20 w-80 mx-auto md:w-1/2 mt-6 md:mt-14 ">
                    <div >
                        <h1 className='text-black text-center md:text-left text-3xl md:text-[3.9rem] font-bold leading-tight '>
                            News and insights
                            <br />
                            <span className='text-gray'>from our experts</span>
                        </h1>
                    </div>
                    {sections.map((section, index) => (
                        <div key={index} className='p-5'>
                            <ul className='flex md:flex-row md:justify-around md:-ml-12 flex-col md:flex-wrap'>
                                {section.items.map((item, i) => (
                                    <li key={i} className='text-black text-md pb-4 font-semibold cursor-pointer hover:underline underline-offset-8 decoration-2 decoration-green md:w-auto w-full md:px-2 text-center'>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default BlogHero
