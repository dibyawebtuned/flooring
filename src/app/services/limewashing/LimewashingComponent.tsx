import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import HeroBanner from '@/components/ui/HeroBanner';
import Banner_Image from "../../../../public/assets/img/bannerimage1.webp";
import { ClipboardCheck, ClipboardList, Wrench, Phone } from "lucide-react";
import Image_One from "../../../../public/assets/img/8.jpeg";
import Image_Two from "../../../../public/assets/img/7.jpeg";
import Image_Three from "../../../../public/assets/img/1.jpeg";
import Image_Four from "../../../../public/assets/img/2.jpeg";
import Image_Five from "../../../../public/assets/img/3.jpeg";

import { CheckCircle } from "lucide-react";

const LimewashingComponent = () => {
    const services = [
        "Thorough cleaning and preparation of the timber surface",
        "Application of limewash or bleach solutions for a uniform finish ",
        "Sealing to protect the floor and preserve the colour",
        "Optional finishing with oils or lacquers for added durability"
    ];

    return (
        <div>
            {/* HERO BANNER */}
            <HeroBanner
                backgroundImage={Banner_Image.src}
                title="Lighten and Modernise Your Floors with Limewashing and Bleaching"
                description="For homeowners seeking a contemporary, airy aesthetic, limewashing and bleaching provide a soft, elegant finish for timber floors. This treatment brightens the wood while enhancing the natural grain, giving your floors a unique, stylish appeal."
            />


            <section className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-8 md:py-12'>
                {/* LEFT CONTENT */}
                <div className='lg:col-span-8 space-y-8 md:space-y-10'>

                    {/* CONTENT */}
                    <div className='space-y-4'>
                        <h4 className='text-xl sm:text-2xl lg:text-3xl font-semibold space-grotesk'>
                            Why Choose Us
                        </h4>

                        <p className='text-[#464646] text-sm sm:text-base leading-relaxed'>
                            Our experienced Sydney flooring team ensures even coverage
                            and expert finishing, creating a floor that is both
                            beautiful and resilient. We work closely with clients
                            to choose the perfect shade, ensuring your floor complements
                            your interior perfectly.
                        </p>


                        <div>
                            <div>
                                <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mt-5 mb-2">
                                    Benefits
                                </h4>
                            </div>

                            <ul className="space-y-2 text-[#464646] text-sm sm:text-base">
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-600">✔</span> Achieves a light, modern look ideal for Sydney interiors
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-600">✔</span> Highlights the natural character and texture of timber
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-600">✔</span> Reduces yellowing and dark spots in older floors
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-600">✔</span> Long-lasting, low-maintenance finish that suits contemporary styles
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* IMAGES GRID */}
                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className='relative w-full md:w-2/5 h-[250px] md:h-[300px] rounded-xl overflow-hidden'>
                            <Image
                                src={Image_Four}
                                alt="Timber flooring close up"
                                fill
                                className='object-cover'
                                sizes="(max-width: 768px) 100vw, 40vw"
                            />
                        </div>
                        <div className='relative w-full md:w-3/5 h-[250px] md:h-[300px] rounded-xl overflow-hidden'>
                            <Image
                                src={Image_Five}
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
                                Our Process
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

export default LimewashingComponent
