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

            <section className='max-w-[1440px] mx-auto px-4 sm:px-[40px] xl:px-[80px] py-8 md:py-12'>
                {/* LEFT CONTENT */}
                <div className='lg:col-span-8 space-y-8 md:space-y-10'>

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