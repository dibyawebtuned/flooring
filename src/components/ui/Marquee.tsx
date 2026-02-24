"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
    return (
        <div className="bg-[#111111]/80 py-8">
            <Marquee
                speed={60}
                pauseOnHover={false}
                gradient={false}
                className="overflow-hidden"
            >
                <div className="flex gap-16 px-8">
                    <span className="text-2xl md:text-3xl font-semibold text-[#F6F4EF]">
                        Professional Service
                    </span>
                    <span className="text-2xl md:text-3xl font-semibold text-[#F6F4EF]">
                        Trusted Experts
                    </span>
                    <span className="text-2xl md:text-3xl font-semibold text-[#F6F4EF]">
                        24/7 Support
                    </span>
                    <span className="text-2xl md:text-3xl font-semibold text-[#F6F4EF]">
                        Affordable Pricing
                    </span>
                    <span className="text-2xl md:text-3xl font-semibold text-[#F6F4EF]">
                        Quality Guaranteed
                    </span>
                </div>
            </Marquee>
        </div>
    );
};

export default MarqueeSection;