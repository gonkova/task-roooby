'use client';
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = () => {
    const [faqs, setFaqs] = useState([
        {
            question: 'How Does Roooby CRM Compare To The Competition?',
            answer: 'Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing.',
            isOpen: false
        },
        {
            question: 'Can I Change Plans Or Cancel My Subscription At Any Time?',
            answer: 'Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing.',
            isOpen: false
        }, {
            question: 'How Secure Is My Data With Roooby CRM?',
            answer: 'Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing.',
            isOpen: false
        },
        {
            question: 'What Is The Uptime Guarantee?',
            answer: 'Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing.',
            isOpen: false
        },
        {
            question: 'How Can I Add More Emails To My Account?',
            answer: 'Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing.',
            isOpen: false
        },
    ]);

    const toggleAccordion = (index) => {
        setFaqs(prevFaqs => prevFaqs.map((faq, i) => {
            if (i === index) {
                return { ...faq, isOpen: !faq.isOpen };
            }
            return faq;
        }));
    };

    return (
        <div className="max-w-6xl mx-auto px-5 -mb-28 md:mb-40 bg-white min-h-screen">
            <div className="flex flex-col md:items-start items-center text-center md:text-left">
                <h2 className="font-bold text-3xl md:text-6xl mt-10 md:mt-32 tracking-tight">
                    Frequently asked
                    <br />
                    questions
                </h2>
            </div>
            <div className="accordion mt-5 max-w-4xl mx-auto md:mr-8">
                <div className="py-5">
                    {faqs.map((faq, index) => (
                        <div key={index}>
                            <hr className=" mt-5 md:mt-10 mb-7 md:mb-14 my-4 border-gray" />
                            <div className="accordion-item outline-none">
                                <div className="accordion-title flex justify-between items-center cursor-pointer" onClick={() => toggleAccordion(index)}>
                                    <span className='text-xl md:text-3xl text-black'>{faq.question}</span>
                                    <span>
                                        {faq.isOpen ? <FaMinus className="text-gray text-xl md:text-2xl font-bold " /> : <FaPlus className="text-gray text-xl md:text-2xl font-bold " />}
                                    </span>
                                </div>
                                <div className={`accordion-content ${faq.isOpen ? 'block' : 'hidden'}`}>
                                    <p className="text-black text-lg md:text-xl mt-6 md:mt-10 pb-2 group-open:animate-fadeIn">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;





