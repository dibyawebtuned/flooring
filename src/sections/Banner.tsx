"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeroImage from "../../public/assets/img/bannerimage2.jpg";

const Hero = () => {
    return (
        <section className="relative w-full py-[80px] overflow-hidden">
            {/* Background Image */}
            <Image
                src={HeroImage}
                alt="Timber craftsmanship"
                fill
                priority
                className="object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/55"></div>

            {/* Content */}
            <div className="relative z-10 max-w-[1440px] mx-auto h-full flex items-center px-4 sm:px-[40px] xl:px-[80px]">
                <div className="max-w-[650px] text-white">
                    <h1 className="font-space-grotesk font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[60px] mb-6">
                        Transforming ideas into structures that stand the test of time
                    </h1>

                    <p className="font-inter inter-400 text-base sm:text-md text-[#464646] leading-6 sm:leading-7 md:leading-[25px] mb-8 text-gray-200">
                        From concept to completion, we’re ready to turn your idea into a lasting structure—let’s talk about how we can bring your vision to life.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link href="/about" className="px-5 py-3 bg-[#F6F4EF] text-[#111111] font-semibold rounded-md hover:bg-[#c1a37c] hover:text-white transition-colors">
                            Know More
                        </Link>

                        <Link href="/contact" className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:text-black transition">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;