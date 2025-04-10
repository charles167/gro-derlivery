import React from 'react';
import { assets, features } from '../assets/assets';

function BottomBanner() {
  return (
    <div className="relative mt-24 w-full">
      {/* Background Images */}
      <img
        src={assets.bottom_banner_image}
        alt="banner"
        className="w-full hidden md:block h-[400px] object-cover"
      />
      <img
        src={assets.bottom_banner_image_sm}
        alt="banner"
        className="w-full md:hidden h-[350px] object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center md:items-end md:justify-center pt-16 md:pt-0 md:pe-24 px-4">
        <div className="bg-white/90 p-5 rounded-lg max-w-xl w-full shadow-lg text-center md:text-right">
          <h1 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
            Why We Are the Best?
          </h1>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center md:gap-4 gap-1 text-left"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="md:w-11 w-9"
                />
                <div>
                  <h3 className="text-base md:text-lg font-semibold">{feature.title}</h3>
                  <p className="text-gray-500/70 text-sm md:text-base">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomBanner;
