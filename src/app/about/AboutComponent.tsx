import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import HeroBanner from '@/components/ui/HeroBanner'
import MarqueeSection from '@/components/ui/Marquee';
import Banner_Image from "../../../public/assets/img/bannerimage1.webp";
import Banner_Image_Two from "../../../public/assets/img/bannerimage2.jpg";
import Image_One from "../../../public/assets/img/bannerimage3.webp";
import { FaHeadset } from "react-icons/fa";

import { Lightbulb, Wrench, Settings } from "lucide-react";


const AboutComponent = () => {
    return (
        <div>
            <HeroBanner
                backgroundImage={Banner_Image.src}
                title="Sydney’s Trusted Timber Flooring Experts"
                description="With over 20 years of experience, we deliver premium timber flooring solutions for homes, offices, and commercial spaces. Our commitment to craftsmanship and quality ensures beautiful, durable floors that stand the test of time."
                points={[
                    "Over 20 years of trusted craftsmanship",
                    "High-quality timber flooring solutions",
                    "Expert installation and flawless finishes",
                ]}
            />

            <section>
                <div className='max-w-[1440px] mx-auto px-20 py-[50px] flex flex-col gap-[40px]'>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

                        {/* Left Column */}
                        <div className="md:col-span-4">
                            <span className="font-inter uppercase text-[14px] inter-600 text-[#111111]/80">
                                Our experience
                            </span>
                        </div>

                        {/* Right Column */}
                        <div className="md:col-span-8 flex flex-col gap-6">

                            <p className="space-grotesk space-grotesk-500 text-[28px] md:text-[34px] leading-9 md:leading-10">
                                We specialize in providing top-quality flooring services tailored to your home needs.
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="bg-[#111111]/80 w-[50px] h-[50px] rounded-full flex items-center justify-center">
                                    <FaHeadset className="text-white w-[20px] h-[20px]" />
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-[14px] font-inter inter-500 text-[#111111]/80">
                                        Call Us Anytime
                                    </span>

                                    <Link
                                        href="tel:0414645200"
                                        className="text-[18px] space-grotesk space-grotesk-600 hover:underline"
                                    >
                                        0414 645 200
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className='flex gap-[20px] '>
                        <div className='flex-1 h-[300px] rounded-[10px] overflow-hidden relative'>
                            <Image
                                src={Banner_Image}
                                alt=""
                                fill
                                className="object-cover" />
                        </div>

                        <div className='flex-1 h-[300px] rounded-[10px] overflow-hidden bg-[#111111]/80'>
                            <div className='flex flex-col justify-between p-5 h-[290px]'>
                                <div>
                                    <span className='text-[42px] space-grotesk space-grotesk-500 text-[#F6F4EF]'>100+</span>
                                </div>

                                <div>
                                    <p className='border-t border-[#F6F4EF] text-[#F6F4EF] pt-5 text-[20px] leading-5.5 space-grotesk space-grotesk-500'>
                                        Professional and experienced ready to help you
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 h-[300px] rounded-[10px] overflow-hidden relative">
                            <Image
                                src={Banner_Image_Two}
                                alt="Banner"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/*  */}
                <div className="bg-[#F6F4EF] py-24">
                    <div className="max-w-[1440px] mx-auto px-[80px]">
                        {/* Timeline container */}
                        <div className="relative">
                            {/* Vertical line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-[#111111]/80"></div>

                            {/* Dot at top */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-[#111111]"></div>

                            {/* Row 1 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                                <div className="text-left pr-10">
                                    <div className="w-14 h-14 rounded-full bg-[#111111]/80 flex items-center justify-center mb-4">
                                        <Lightbulb className="text-white w-6 h-6" />
                                    </div>
                                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                                        Get professional advice
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed ">
                                        Lorem ipsum dolor sit amet consectetur. Eu lacus sed enim urna quisque mattis.
                                        Nullam quisque justo in aliquet. Ullamcorper cursus varius Lorem ipsum dolor sit
                                        amet Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                </div>

                                <div className="rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src={Banner_Image}
                                        alt="Service"
                                        className="w-full h-64 object-cover"
                                    />
                                </div>
                            </div>

                            {/* Middle Dot */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 w-4 h-4 rounded-full bg-[#111111]"></div>

                            {/* Row 2 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                                <div className="rounded-2xl overflow-hidden shadow-lg md:order-1 order-2">
                                    <Image
                                        src={Banner_Image_Two}
                                        alt="Handyman"
                                        className="w-full h-64 object-cover"
                                    />
                                </div>

                                <div className="text-left pl-10 md:order-2 order-1">
                                    <div className="w-14 h-14 rounded-full bg-[#111111]/80 flex items-center justify-center mb-4">
                                        <Settings className="text-white w-6 h-6 stroke-[1.5]" />
                                    </div>
                                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                                        Meet your handyman expert
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        Lorem ipsum dolor sit amet consectetur. Eu lacus sed enim urna quisque mattis.
                                        Nullam quisque justo in aliquet. Ullamcorper cursus varius Lorem ipsum dolor sit
                                        amet Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Dot */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-4 h-4 rounded-full bg-[#111111]"></div>

                            {/* Row 3 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div className="text-left pr-10">
                                    <div className="w-14 h-14 rounded-full bg-[#111111]/80 flex items-center justify-center mb-4">
                                        <Wrench className="text-white w-6 h-6 stroke-[1.5]" />
                                    </div>
                                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                                        Get best our services at door
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        Lorem ipsum dolor sit amet consectetur. Eu lacus sed enim urna quisque mattis.
                                        Nullam quisque justo in aliquet. Ullamcorper cursus varius Lorem ipsum dolor sit
                                        amet Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                </div>

                                <div className="rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src={Image_One}
                                        alt="Service at door"
                                        className="w-full h-64 object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Marquee */}
                <MarqueeSection />
            </section>
        </div>
    )
}

export default AboutComponent