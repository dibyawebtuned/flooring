import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import HeroBanner from '@/components/ui/HeroBanner';
import { ClipboardCheck, ClipboardList, Wrench, Phone } from "lucide-react";
import Banner_Image from "../../../../public/assets/img/bannerimage1.webp";
import Image_One from "../../../../public/assets/img/8.jpeg";
import Image_Two from "../../../../public/assets/img/7.jpeg";
import Image_Three from "../../../../public/assets/img/WhatsApp Image 2026-02-16 at 10.52.33 AM.jpeg";
import Image_Four from "../../../../public/assets/img/WhatsApp Image 2026-02-16 at 10.52.18 AM.jpeg";
import Image_Five from "../../../../public/assets/img/WhatsApp Image 2026-02-16 at 10.52.18 AM (2).jpeg";

import { CheckCircle } from "lucide-react";

const EngineeredComponent = () => {
    const services = [
        "Supply of premium engineered timber in various finishes and colours ",
        "Expert installation with precision joinery",
        "Sanding and finishing to enhance the natural beauty of the wood",
        "Maintenance advice for longevity "
    ];
    return (
        <div>
            {/* HERO BANNER */}
            <HeroBanner
                backgroundImage={Banner_Image.src}
                title="Durable and Stylish Engineered Flooring for Modern Living"
                description="Engineered timber flooring is the perfect solution for homes and offices where stability and aesthetics are essential. Designed with a strong plywood core and a real timber surface, engineered flooring is resistant to changes in humidity, making it ideal for Sydney’s climate."
            />

            <section className='max-w-[1440px] mx-auto px-4 sm:px-[40px] xl:px-[80px] py-8 md:py-12'>
                {/* LEFT CONTENT */}
                <div className='lg:col-span-8 space-y-8 md:space-y-10'>

                    {/* MAIN IMAGE */}

                    {/* CONTENT */}
                    <div className='space-y-4'>
                        <h4 className='text-xl sm:text-2xl lg:text-3xl font-semibold space-grotesk'>
                            Why Choose Us
                        </h4>

                        <p className='text-[#464646] text-sm sm:text-base leading-relaxed'>
                            We combine technical knowledge with craftsmanship to
                            install engineered flooring that lasts. Our Sydney
                            team ensures flawless finishes and durable results,
                            tailored to your style and lifestyle needs.
                        </p>


                        <div>
                            <div>
                                <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mt-5 mb-2">
                                    Benefits
                                </h4>
                            </div>

                            <ul className="space-y-2 text-[#464646] text-sm sm:text-base">
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-600">✔</span> Superior stability compared to solid timber
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-600">✔</span> Can be installed over underfloor heating systems
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-600">✔</span> Offers the authentic look of natural wood with enhanced durability
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-600">✔</span> Easy to maintain and refinish if required
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
                            <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mt-5 mb-3">
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



                    {/*  */}
                    {/* <div>
                        <div>
                            <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mt-5 mb-3">
                                Why Choose Us
                            </h4>
                        </div>

                        <div>
                            <p className='text-[#464646] text-sm sm:text-base leading-relaxed'>
                                Our Sydney team is trained in the latest sanding and polishing
                                techniques, ensuring even the most worn floors look brand new.
                                We prioritize minimal disruption and maximum results, using
                                eco-friendly products wherever possible.
                            </p>
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    )
}

export default EngineeredComponent