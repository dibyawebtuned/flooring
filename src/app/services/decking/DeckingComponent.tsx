import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import HeroBanner from '@/components/ui/HeroBanner';
import Banner_Image from "../../../../public/assets/img/bannerimage1.webp";
import { ClipboardCheck, ClipboardList, Wrench, Phone } from "lucide-react";
import Image_One from "../../../../public/assets/img/8.jpeg";
import Image_Two from "../../../../public/assets/img/7.jpeg";
import Image_Three from "../../../../public/assets/img/2.jpeg";
import Image_Four from "../../../../public/assets/img/1.jpeg";
import Image_Five from "../../../../public/assets/img/bannerimage3.webp";

import { CheckCircle } from "lucide-react";

const DeckingComponent = () => {
    const services = [
        "Custom design and installation to suit your property and lifestyle",
        "Use of durable timber and weather-resistant composite materials ",
        "Expert finishing, sanding, and sealing for protection ",
        "Maintenance tips to prolong the life of your deck"
    ];


    return (
        <div>
            {/* HERO BANNER */}
            <HeroBanner
                backgroundImage={Banner_Image.src}
                title="Enhance Your Outdoor Spaces with Professional Decking"
                description="A well-designed deck transforms your backyard or patio into an inviting outdoor space. We provide high-quality timber and composite decking solutions that combine style, durability, and functionality."
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
                            With experience building decks across Sydney, we deliver professional results
                            that are both visually appealing and built to last. We prioritize safety,
                            quality, and design to create the perfect outdoor retreat.
                        </p>

                        <div>
                            <div>
                                <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mt-5 mb-2">
                                    Benefits
                                </h4>
                            </div>

                            <ul className="space-y-2 text-[#464646] text-sm sm:text-base">
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-600">✔</span> Creates a beautiful, functional outdoor living space
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-600">✔</span> Resistant to weather, moisture, and heavy foot traffic
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-600">✔</span> Can increase property value and outdoor enjoyment
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-600">✔</span> Low-maintenance options available
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
                                src={Image_Three}
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

export default DeckingComponent