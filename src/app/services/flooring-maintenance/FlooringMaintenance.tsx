import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import HeroBanner from '@/components/ui/HeroBanner';
import Banner_Image from "../../../../public/assets/img/bannerimage1.webp";
import { ClipboardCheck, ClipboardList, Wrench, Phone } from "lucide-react";
import Image_One from "../../../../public/assets/img/8.jpeg";
import Image_Two from "../../../../public/assets/img/7.jpeg";
import Image_Three from "../../../../public/assets/img/WhatsApp Image 2026-02-16 at 10.52.00 AM.jpeg";
import Image_Four from "../../../../public/assets/img/WhatsApp Image 2026-02-16 at 10.51.59 AM.jpeg";
import Image_Five from "../../../../public/assets/img/WhatsApp Image 2026-02-16 at 10.51.59 AM (1).jpeg";

import { CheckCircle } from "lucide-react";

const FlooringMaintenance = () => {
    const services = [
        "Cleaning, polishing, and protective coating application",
        "Repairing scratches, dents, and minor damage",
        "Advice on long-term care and maintenance schedules",
        "Scheduled maintenance programs for residential and commercial clients"
    ];

    return (
        <div>
            {/* HERO BANNER */}
            <HeroBanner
                backgroundImage={Banner_Image.src}
                title="Protect and Prolong the Life of Your Floors"
                description="Regular maintenance is key to keeping your floors looking new and performing at their best. Weprovide tailored flooring maintenance solutions for timber, laminate, engineered, and hybrid floors across Sydney."
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
                            Our experienced Sydney team provides professional, reliable, and
                            eco-friendly maintenance services. We help clients protect their
                            flooring investment while ensuring their space always looks its best.
                        </p>


                        <div>
                            <div>
                                <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mt-5 mb-2">
                                    Benefits
                                </h4>
                            </div>

                            <ul className="space-y-2 text-[#464646] text-sm sm:text-base">
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-600">✔</span> Extends the life of your floors
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-600">✔</span> Maintains appearance and shine
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-600">✔</span> Prevents costly repairs or replacements
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-600">✔</span> Enhances safety and hygiene in your space
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

export default FlooringMaintenance