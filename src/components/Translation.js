'use client';
import React, { useState } from 'react';

const Translation = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
        console.log(`Selected language: ${event.target.value}`);
    };

    return (
        <div className='flex flex-row'>
            <img src="./images/ic_language.png" alt="Language Icon" />
            <select className='bg-bgcustom' value={selectedLanguage} onChange={handleLanguageChange}>
                <option value="">English</option>
                <option value="English">English</option>
                <option value="Bulgarian">Български</option>
            </select>
        </div>
    );
};

export default Translation;
