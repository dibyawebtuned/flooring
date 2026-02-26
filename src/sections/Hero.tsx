'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Image1 from "../../public/assets/img/bannerimage1.webp";
import Image2 from "../../public/assets/img/bannerimage2.jpg";
import Image3 from "../../public/assets/img/bannerimage3.webp";

import AOS from 'aos';
import 'aos/dist/aos.css';

const slides = [
    { id: 1, image: Image1 },
    { id: 2, image: Image2 },
    { id: 3, image: Image3 },
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true,
            mirror: false,
        });
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === slides.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    return (
        <div className="relative w-full h-[70vh] sm:h-[100vh] overflow-hidden bg-gray-900">

            {/* Background Slider */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${slide.image.src})` }}
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
            ))}

            {/* Text Content */}
            <div className="relative z-10 flex flex-col items-center justify-end h-full px-4 sm:px-[40px] xl:px-[80px] text-white">
                <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row">

                    <div className="flex-2 pb-8 sm:pb-10 lg:pb-[50px]">
                        <div
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="text-start font-inter text-sm sm:text-base font-medium text-[#F6F4EF] mb-2 sm:mb-[10px]">
                            Highest quality timber floors and timber flooring installation
                        </div>

                        <h1
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="space-grotesk space-grotesk-500 text-start text-[#F6F4EF] text-3xl sm:text-4xl md:text-5xl lg:text-[61px] leading-tight sm:leading-tight md:leading-tight lg:leading-[65px] mb-3 sm:mb-[10px]">
                            {`Welcome to Sydney's quality leader in timber floors.`}
                        </h1>

                        <p
                            data-aos="fade-up"
                            data-aos-delay="500"
                            className="text-start text-[#E6E0D6] text-sm sm:text-base font-medium max-w-full sm:max-w-xl lg:max-w-2xl mb-5 sm:mb-[20px]">
                            With over 20 years of experience, we specialise exclusively in timber flooring—delivering A1-class
                            workmanship, premium materials, and outstanding customer service across Sydney.
                        </p>

                        {/* Buttons */}
                        <div data-aos="fade-up" className="flex flex-row gap-3 sm:gap-4">
                            <Link href="/about" className="inline-block px-5 py-3 sm:px-5 sm:py-[11px] bg-[#F6F4EF] text-black font-semibold rounded-md transition-all duration-300 ease-in-out hover:bg-[#c1a37c] hover:text-white">
                                Know More
                            </Link>

                            <Link href="/contact" className="px-5 py-3 sm:px-[20px] sm:py-[11px] bg-transparent border border-white text-white font-semibold rounded-[4px] hover:bg-white hover:text-black transition-colors">
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    <div className="hidden lg:block flex-1"></div>
                </div>
            </div>

            {/* Navigation */}
            <button
                onClick={prevSlide}
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-all"
            >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-all"
            >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
        </div>
    );
};

export default Hero;