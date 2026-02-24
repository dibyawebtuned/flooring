import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeroBanner from "@/components/ui/HeroBanner";
import MarqueeSection from "@/components/ui/Marquee";
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
                {/* Experience Section */}
                <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-12 sm:py-16 flex flex-col gap-12">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                        <div className="md:col-span-4">
                            <span className="uppercase text-sm font-semibold text-[#111]/70">
                                Our experience
                            </span>
                        </div>

                        <div className="md:col-span-8 flex flex-col gap-6">
                            <p className="text-2xl sm:text-3xl md:text-[34px] leading-snug">
                                We specialize in providing top-quality flooring services
                                tailored to your home needs.
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="bg-[#111]/90 w-12 h-12 rounded-full flex items-center justify-center">
                                    <FaHeadset className="text-white w-5 h-5" />
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-sm text-[#111]/70">
                                        Call Us Anytime
                                    </span>
                                    <Link href="tel:0414645200" className="text-lg font-semibold hover:underline">
                                        0414 645 200
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="relative w-full h-[220px] sm:h-[260px] lg:h-[300px] rounded-xl overflow-hidden">
                            <Image src={Banner_Image} alt="Flooring project" fill className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                        <div className="rounded-xl bg-[#111]/90 flex flex-col justify-between p-6 text-white">
                            <span className="text-4xl font-semibold">100+</span>
                            <p className="border-t border-white/50 pt-4 text-lg leading-snug">
                                Professional and experienced ready to help you
                            </p>
                        </div>

                        <div className="relative w-full h-[220px] sm:h-[260px] lg:h-[300px] rounded-xl overflow-hidden">
                            <Image
                                src={Banner_Image_Two}
                                alt="Timber flooring"
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>

                {/* Timeline Section */}
                <div className="bg-[#F6F4EF] py-20 sm:py-24">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
                        <div className="relative">
                            {/* Vertical Line */}
                            <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 h-full w-[2px] bg-[#111]/80"></div>

                            {/* Timeline Item 1 */}
                            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                                <div className="pl-12 sm:pl-0 sm:pr-10">
                                    <div className="w-14 h-14 rounded-full bg-[#111]/90 flex items-center justify-center mb-4">
                                        <Lightbulb className="text-white w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                                        Get professional advice
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        Our experts assess your space and provide tailored flooring
                                        solutions suited to your style and budget.
                                    </p>
                                </div>

                                <div className="relative w-full h-[220px] sm:h-64 rounded-xl overflow-hidden shadow-lg">
                                    <Image
                                        src={Banner_Image}
                                        alt="Professional advice"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Timeline Item 2 */}
                            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                                <div className="relative w-full h-[220px] sm:h-64 rounded-xl overflow-hidden shadow-lg md:order-1 order-2">
                                    <Image
                                        src={Banner_Image_Two}
                                        alt="Expert team"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="pl-12 sm:pl-0 md:order-2 order-1">
                                    <div className="w-14 h-14 rounded-full bg-[#111]/90 flex items-center justify-center mb-4">
                                        <Settings className="text-white w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                                        Meet your handyman expert
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        Our skilled flooring specialists ensure precise
                                        installation and flawless finishes every time.
                                    </p>
                                </div>
                            </div>

                            {/* Timeline Item 3 */}
                            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div className="pl-12 sm:pl-0 sm:pr-10">
                                    <div className="w-14 h-14 rounded-full bg-[#111]/90 flex items-center justify-center mb-4">
                                        <Wrench className="text-white w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                                        Get the best services at your door
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        From consultation to installation, we deliver premium
                                        timber flooring solutions directly to your home or
                                        commercial space.
                                    </p>
                                </div>

                                <div className="relative w-full h-[220px] sm:h-64 rounded-xl overflow-hidden shadow-lg">
                                    <Image
                                        src={Image_One}
                                        alt="Service delivery"
                                        fill
                                        className="object-cover"
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
    );
};

export default AboutComponent;