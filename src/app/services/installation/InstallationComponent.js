import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import HeroBanner from '@/components/ui/HeroBanner';
import { ClipboardCheck, ClipboardList, Wrench, Phone } from "lucide-react";
import Banner_Image from "../../../../public/assets/img/bannerimage1.webp";
import Image_Three from "../../../../public/assets/img/WhatsApp Image 2026-02-16 at 10.52.33 AM.jpeg";
import Image_Four from "../../../../public/assets/img/WhatsApp Image 2026-02-16 at 10.52.18 AM.jpeg";
import Image_Five from "../../../../public/assets/img/WhatsApp Image 2026-02-16 at 10.52.18 AM (2).jpeg";

import { CheckCircle } from "lucide-react";

const InstallationComponent = () => {
    const services = [
        "Site inspection and preparation to ensure a smooth surface",
        "Expert installation of timber, laminate, hybrid, or engineered flooring",
        "Precision cutting and fitting for a seamless finish",
        "Clean, timely, and professional service from start to finish"
    ];


    return (
        <div>
            {/* HERO BANNER */}
            <HeroBanner
                backgroundImage={Banner_Image.src}
                title="Professional Flooring Installation in Sydney"
                description="At Prestige Timber Flooring, we provide expert flooring installation services across Sydney, ensuring that every floor we lay is precise, durable, and visually stunning. Whether it’s a residential home, commercial office, or high-traffic retail space, our team of experienced installers handles every project with care and professionalism"
            />

            <section className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-8 md:py-12'>
                {/* LEFT CONTENT */}
                <div className='lg:col-span-8 space-y-8 md:space-y-10'>

                    {/* MAIN IMAGE */}
                    {/* <div className='relative h-[250px] sm:h-[300px] md:h-[360px] rounded-xl overflow-hidden shadow-md'>
                        <Image
                            src={Image_Three}
                            alt="Solid Timber Flooring"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 66vw"
                        />
                    </div> */}

                    {/* CONTENT */}
                    <div className='space-y-4'>
                        <h4 className='text-xl sm:text-2xl lg:text-3xl font-semibold space-grotesk'>
                            Why Choose Us
                        </h4>

                        <p className='text-[#464646] text-sm sm:text-base leading-relaxed'>
                            With years of experience serving Sydney homes and businesses,
                            we combine craftsmanship with high-quality materials.
                            We understand that a well-installed floor is the foundation
                            of any beautiful space — and we ensure every project exceeds
                            expectations.
                        </p>

                        <div>
                            <div>
                                <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mt-5 mb-2">Benefits of Professional Installation</h4>
                            </div>

                            <ul className="space-y-2 text-[#464646] text-sm sm:text-base">
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-600">✔</span> Increased durability and longevity of your floors
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-600">✔</span> A perfectly level and safe surface for everyday use
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-600">✔</span> Enhanced aesthetic appeal that complements your interior design
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-600">✔</span> Reduced risk of future repairs caused by poor installation
                                </li>
                                {/* <li className="flex items-center gap-2">
                                <span className="text-gray-600">✔</span> Increases Property Value & Appeal
                            </li> */}
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
                                What We Offer
                            </h4>
                        </div>

                        {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-5'>
                            <div className='flex flex-col gap-3 rounded-xl bg-gray-50/50 p-4 sm:p-0 sm:bg-transparent'>
                                <ClipboardCheck className="h-8 w-8 sm:h-10 sm:w-10 text-[#111111]" />
                                <div>
                                    <h5 className='text-base sm:text-lg font-semibold space-grotesk'>
                                        Floor Assessment
                                    </h5>
                                    <p className='text-sm text-[#555] mt-1'>
                                        We inspect your existing timber flooring to assess condition, damage, and the best sanding and polishing approach.
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-col gap-3 rounded-xl bg-gray-50/50 p-4 sm:p-0 sm:bg-transparent'>
                                <ClipboardList className="h-8 w-8 sm:h-10 sm:w-10 text-[#111111]" />
                                <div>
                                    <h5 className='text-base sm:text-lg font-semibold space-grotesk'>
                                        Surface Preparation
                                    </h5>
                                    <p className='text-sm text-[#555] mt-1'>
                                        Careful preparation including gap filling, minor repairs, and precision sanding to create a flawless foundation.
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-col gap-3 rounded-xl bg-gray-50/50 p-4 sm:p-0 sm:bg-transparent sm:col-span-2 md:col-span-1'>
                                <Wrench className="h-8 w-8 sm:h-10 sm:w-10 text-[#111111]" />
                                <div>
                                    <h5 className='text-base sm:text-lg font-semibold space-grotesk'>
                                        Sanding & Polishing
                                    </h5>
                                    <p className='text-sm text-[#555] mt-1'>
                                        Professional multi-stage sanding and premium coating application for a smooth, durable, and beautifully finished floor.
                                    </p>
                                </div>
                            </div>
                        </div> */}

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

export default InstallationComponent