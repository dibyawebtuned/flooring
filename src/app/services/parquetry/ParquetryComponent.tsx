import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import HeroBanner from '@/components/ui/HeroBanner';
import Banner_Image from "../../../../public/assets/img/bannerimage1.webp";
import { ClipboardCheck, ClipboardList, Wrench, Phone } from "lucide-react";
import Image_One from "../../../../public/assets/img/8.jpeg";
import Image_Two from "../../../../public/assets/img/7.jpeg";
import Image_Three from "../../../../public/assets/img/4.jpeg";
import Image_Four from "../../../../public/assets/img/3.jpeg";
import Image_Five from "../../../../public/assets/img/2.jpeg";

import { CheckCircle } from "lucide-react";

const ParquetryComponent = () => {
    const services = [
        "Custom design options to suit modern or traditional interiors ",
        "Installation of high-quality timber arranged in herringbone, chevron, or custom patterns ",
        "Sanding, polishing, and sealing for a long-lasting finish",
        "Restoration services for existing parquetry floors "
    ];


    return (
        <div>
            {/* HERO BANNER */}
            <HeroBanner
                backgroundImage={Banner_Image.src}
                title="Transform Spaces with Decorative Parquetry Flooring"
                description="Parquetry flooring is more than just a floor—it’s a design statement. Using small timber pieces arranged in intricate patterns, parquetry adds sophistication and visual interest to your home oroffice."
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
                            Our Sydney-based team is skilled in creating precise,
                            visually stunning parquetry floors. We handle every
                            detail from design to installation, ensuring your
                            floor is a statement piece that combines elegance
                            with practicality.
                        </p>


                        <div>
                            <div>
                                <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mt-5 mb-2">
                                    Benefits
                                </h4>
                            </div>

                            <ul className="space-y-2 text-[#464646] text-sm sm:text-base">
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-600">✔</span> Adds a unique and luxurious aesthetic to your interiors
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-600">✔</span> Durable and long-lasting when professionally installed
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-600">✔</span> Can increase the resale value of your home
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-600">✔</span> Versatile for living rooms, hallways, and commercial spaces
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

export default ParquetryComponent