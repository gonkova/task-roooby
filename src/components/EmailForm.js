"use client";
import React, { useState } from 'react';
import Button from './Button';

const EmailForm = () => {
    const [email, setEmail] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [isValid, setIsValid] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim() === '' || !isValidEmail(email)) {
            console.log('Invalid email:', email);
            setIsValid(false);
        } else {
            console.log('Email sent:', email);
            setShowAlert(true);
            setEmail('');
            setTimeout(() => setShowAlert(false), 3000);
        }
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
        if (isValidEmail(e.target.value)) {
            setIsValid(true);
        }
    };

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-bgcustom rounded-lg -ml-6">
            <div className={`flex flex-col md:flex-row py-3 px-3 bg-white border-gray-300 rounded-lg ${isValid ? '' : 'border-red-500'}`}>
                <input
                    type="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="block w-full border-none p-3 outline-none"
                />
                <Button type="submit" className='rounded-lg text-l py-3 px-5 hover:bg-custom3 hover:text-blue'>
                    Try for Free
                </Button>
            </div>
            {!isValid && (email.trim() === '' ? (
                <div className="mt-1 p-2 bg-red-200 text-red-900 rounded-lg">
                    Please enter an email address.
                </div>
            ) : (
                <div className="mt-1 p-2 bg-red-200 text-red-900 rounded-lg">
                    Please enter a valid email address.
                </div>
            ))}
            {showAlert && (
                <div className="mt-4 p-2 bg-green-200 text-green-900 rounded-lg">
                    Email sent successfully!
                </div>
            )}
            <p className='text-center md:text-left mt-3 text-sm'>
                Full access. No credit card required.
            </p>
        </form>
    );
}

export default EmailForm;
