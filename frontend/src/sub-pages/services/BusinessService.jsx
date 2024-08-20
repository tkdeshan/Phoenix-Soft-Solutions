import React from "react";
import service from "../../constants/images/services/management.jpg";

const business = () => {
  return (
    <div className="min-h-screen relative pt-16">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <img src={service} className="object-cover w-full h-full" alt="Mobile Development" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest text-white uppercase">
            Business management
          </h1>
        </div>
      </div>
    </div>
  );
};

export default business;
