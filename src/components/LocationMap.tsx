
import React, { useEffect, useState } from 'react';

const LocationMap = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading map
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
      {loading ? (
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <div className="map-loader">
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.9012148545384!2d6.990968815768682!3d43.591339879123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cc2bc581d7c249%3A0x47c8f3565575a08e!2s51%20Chem.%20du%20Refuge%2C%2006250%20Mougins%2C%20France!5e0!3m2!1sen!2sus!4v1655145558578!5m2!1sen!2sus"
          className="w-full h-full border-0" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
    </div>
  );
};

export default LocationMap;
