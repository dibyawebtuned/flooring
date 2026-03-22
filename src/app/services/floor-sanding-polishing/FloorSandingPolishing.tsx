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


const FloorSandingPolishing = () => {
    const services = [
        "Restores the natural look and warmth of your floors",
        "Eliminates scratches, stains, and discoloration ",
        "Enhances the lifespan of your timber floors",
        "Provides a safe, slip-resistant finish for your home or business"
    ];

    return (
        <div>
            {/* HERO BANNER */}
            <HeroBanner
                backgroundImage={Banner_Image.src}
                title="Revive Your Floors with Expert Sanding and Polishing"
                description="Timber and hardwood floors can lose their shine over time due to scratches, scuffs, and general wear. Our professional floor sanding and polishing services restore your floors to their original glory while improving durability."
            />

            <section className='max-w-[1440px] mx-auto px-4 sm:px-[40px] xl:px-[80px] py-8 md:py-12'>
                {/* LEFT CONTENT */}
                <div className='lg:col-span-8 space-y-8 md:space-y-10'>

                    {/* MAIN IMAGE */}

                    {/* CONTENT */}
                    <div className='space-y-4'>
                        <h4 className='text-xl sm:text-2xl lg:text-3xl font-semibold space-grotesk'>
                            Our Process Includes
                        </h4>

                        {/* <p className='text-[#464646] text-sm sm:text-base leading-relaxed'>
                            Our professional floor sanding and polishing service restores tired, scratched,
                            and worn timber floors back to their original beauty. Using advanced dust-minimised
                            sanding equipment and premium finishes, we create a smooth, durable surface that
                            enhances the natural grain and warmth of your timber flooring while extending its lifespan.
                        </p> */}

                        <ul className="space-y-2 text-[#464646] text-sm sm:text-base">
                            <li className="flex items-center gap-2">
                                <span className="text-gray-600">✔</span> Comprehensive assessment of the floor’s condition
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-gray-600">✔</span> Sanding using advanced machinery to remove imperfections
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-gray-600">✔</span> Polishing with premium products for a smooth, glossy finish
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-gray-600">✔</span> Application of protective coatings to maintain the beauty longer
                            </li>
                        </ul>
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
                                Benefits
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
                    <div>
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
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FloorSandingPolishing