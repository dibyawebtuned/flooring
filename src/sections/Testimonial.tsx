"use client"

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

const testimonials = [
    {
        quote:
            "With over 20 years of experience, it really shows in their work. The team handled everything from preparation to polishing with precision. We couldn’t be happier with the final result.",
        name: "Commercial Client",
        location: "Sydney",
    },
    {
        quote:
            "Exceptional craftsmanship and attention to detail. The team delivered beyond expectations and completed the project on time.",
        name: "Residential Client",
        location: "Melbourne",
    },
    {
        quote:
            "Professional, reliable, and highly skilled. Our timber flooring looks absolutely stunning.",
        name: "Business Owner",
        location: "Brisbane",
    },
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    // Auto Slide (every 6 seconds)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
    };

    return (
        <section className="relative bg-[#F6F4EF] overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-[40px] xl:px-[80px] py-[80px]">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left Side */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-[10px]">
                            <h2 className="font-space-grotesk font-medium text-3xl sm:text-4xl md:text-[48px] leading-snug md:leading-[55px] tracking-[-0.5px]">
                                Words from Our Clients
                            </h2>

                            <p className='font-inter inter-400 text-base sm:text-md text-[#464646] leading-6 sm:leading-7 md:leading-[25px] mb-8'>
                                Trusted opinions from those who have experienced our craftsmanship firsthand.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link href="/about" className="px-5 py-3 bg-[#111111] text-[#F6F4EF] font-semibold rounded-md hover:bg-[#c1a37c] transition-colors">
                                Know More
                            </Link>

                            <Link href="/contact" className="px-5 py-3 bg-transparent border border-[#111111] text-[#111111] font-semibold rounded-md hover:bg-white hover:text-black transition-colors">
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Right Side - Slider */}
                    <div className="flex-1">
                        <div className="max-w-[650px]">
                            {/* Slide Content */}
                            <div className="transition-all duration-500 ease-in-out">
                                <p className="text-[27px] leading-[1.2em] font-medium mb-8">
                                    “{testimonials[current].quote}”
                                </p>

                                <div className="mb-8">
                                    <h4 className="font-semibold text-lg">
                                        {testimonials[current].name}
                                    </h4>
                                    <p className="text-sm text-[#555]">
                                        {testimonials[current].location}
                                    </p>
                                </div>
                            </div>

                            {/* Navigation Buttons - Bottom Center */}
                            <div className="flex items-center gap-4">
                                <button onClick={prevSlide} className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-[#c1a37c] transition cursor-pointer">
                                    <ChevronLeftIcon className="w-5 h-5" />
                                </button>

                                <button onClick={nextSlide} className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-[#c1a37c] transition cursor-pointer">
                                    <ChevronRightIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;