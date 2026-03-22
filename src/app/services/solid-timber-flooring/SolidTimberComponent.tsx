import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroBanner from '@/components/ui/HeroBanner';
import Banner_Image from "../../../../public/assets/img/bannerimage1.webp";
import Image_One from "../../../../public/assets/img/8.jpeg";
import Image_Two from "../../../../public/assets/img/7.jpeg";
import { ClipboardCheck, ClipboardList, Wrench, Phone } from "lucide-react";

import { CheckCircle } from "lucide-react";

const SolidTimberComponent = () => {
  const services = [
    "Supply of premium hardwood species suitable for Australian conditions ",
    "Expert installation with precise interlocking for a flawless finish ",
    "Sanding, polishing, and sealing for long-lasting durability",
    "Advice on maintenance to keep floors looking pristine"
  ];

  return (
    <div>
      {/* HERO BANNER */}
      <HeroBanner
        backgroundImage={Banner_Image.src}
        title="Timeless Elegance with Solid Tongue and Groove Flooring"
        description="Solid tongue and groove flooring is a classic choice for Sydney homes and commercial spaces, offering unmatched strength, stability, and aesthetic appeal. Each plank interlocks perfectly, creating a seamless, smooth surface that can withstand years of use."
      />

      <section className='max-w-[1440px] mx-auto px-4 sm:px-[40px] xl:px-[80px] py-8 md:py-12'>
        {/* LEFT CONTENT */}
        <div className='lg:col-span-8 space-y-8 md:space-y-10'>

          {/* CONTENT */}
          <div className='space-y-4'>
            <h4 className='text-xl sm:text-2xl lg:text-3xl font-semibold space-grotesk'>
              Why Choose Us
            </h4>

            <p className='text-[#464646] text-sm sm:text-base leading-relaxed'>
              With years of experience installing solid tongue and groove floors
              across Sydney, we combine craftsmanship with precision. Our
              team ensures each floor is perfectly aligned and finished
              to the highest standards, enhancing both the look and value
              of your property.
            </p>

            <div>
              <div>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mt-5 mb-2">
                  Benefits
                </h4>
              </div>

              <ul className="space-y-2 text-[#464646] text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <span className="text-gray-600">✔</span> Extremely durable and resistant to wear
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-600">✔</span> Adds a luxurious, natural look to any space
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-600">✔</span> Easy to refinish, making it ideal for long-term investment
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-600">✔</span> Reduces gaps and movement compared to standard timber flooring
                </li>
              </ul>
            </div>
          </div>

          {/* IMAGES GRID */}
          <div className='flex flex-col md:flex-row gap-5'>
            <div className='relative w-full md:w-2/5 h-[250px] md:h-[300px] rounded-xl overflow-hidden'>
              <Image
                src={Image_One}
                alt="Timber flooring close up"
                fill
                className='object-cover'
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <div className='relative w-full md:w-3/5 h-[250px] md:h-[300px] rounded-xl overflow-hidden'>
              <Image
                src={Image_Two}
                alt="Finished timber flooring room"
                fill
                className='object-cover'
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
          </div>

          {/* CONTENT BOXES */}
          <div>
            <div>
              <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 my-5">
                Our Services Include
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-5">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-3 p-5 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
                  <CheckCircle className="h-6 w-6 text-yellow-600" />
                  <p className="text-gray-700 text-sm sm:text-base font-normal">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SolidTimberComponent;