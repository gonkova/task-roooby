'use client';
import React, { useEffect } from 'react';

const ContactForm = () => {
  useEffect(() => {
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
    googleMapsScript.async = true;
    window.document.body.appendChild(googleMapsScript);

    googleMapsScript.addEventListener('load', () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 42.16264853831581, lng: 24.74347969788528 },
        zoom: 12,
      });

      const addressMarker = new window.google.maps.Marker({
        position: { lat: 42.16264853831581, lng: 24.74347969788528 },
        map: map,
        title: 'Address',
      });
    });
  }, []);

  const handleSubmit = () => {
    console.log('Form submitted!');
  };

  return (
    <div className="bg-bgcustom w-full">
      <div className="bg-bgcustom container mx-auto py-8 px-4 sm:px-8">
        <h1 className="text-4xl md:text-7xl font-bold mb-4 md:pb-14 md:-mt-14">
          <br />
          Get in touch with
          <br />
          our lovely team
        </h1>
        <div className="flex flex-col md:flex-row md:space-x-20">
          <div className="w-full md:w-2/5 mb-4 md:mb-36">
            <h2 className="text-black font-bold text-2xl">Roooby Technologies</h2>
            <p className="text-silver text-lg pt-1">Plovdiv, Bulgaria, bul Vasil Levski 96</p>
            <div id="map" className="h-48 md:h-72 mt-8"></div>
            <div className="flex flex-col md:flex-row justify-between pt-8 space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex flex-col items-start border-l-2 border-gray pl-4">
                <span className="text-black text-xl font-bold">General</span>
                <span className="text-silver text-xl">hello@me.com</span>
              </div>
              <div className="flex flex-col items-start border-l-2 border-gray pl-4">
                <span className="text-black text-xl font-bold">Support</span>
                <span className="text-silver text-xl">support@me.com</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <form className="px-4 md:px-8 pt-8 pb-8 mb-4">
              <div className="mb-6">
                <input
                  className="shadow appearance-none rounded-lg w-full py-3 md:py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-6">
                <input
                  className="shadow appearance-none rounded-lg w-full py-3 md:py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <textarea
                  className="shadow appearance-none rounded-lg w-full py-3 md:py-16 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex items-center space-x-2 bg-green text-white font-bold hover:text-blue-500 hover:bg-green-600 py-4 px-10 rounded-lg"
                >
                  <span className="text-center">Try for Free</span>
                  <span>&gt;</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
