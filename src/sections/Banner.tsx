"use client";

import React from "react";
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
            <div className="relative z-10 max-w-[1440px] mx-auto h-full flex items-center px-4 sm:px-8 lg:px-20">
                <div className="max-w-[650px] text-white">
                    <h1 className="font-space-grotesk font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[60px] mb-6">
                        Transforming ideas into structures that stand the test of time
                    </h1>

                    <p className="text-base sm:text-lg text-gray-200 mb-8 font-inter inter-500">
                        From concept to completion, we’re ready to turn your idea into a lasting structure—let’s talk about how we can bring your vision to life.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="px-6 py-3 bg-white text-black rounded-md font-medium hover:bg-[#c1a37c] transition">
                            Know More
                        </button>

                        <button className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:text-black transition">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;