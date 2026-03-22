import React from 'react';
import { CheckCircle } from "lucide-react";

const WhatWeOffer = () => {
    const services = [
        "Site inspection and preparation to ensure a smooth surface",
        "Expert installation of timber, laminate, hybrid, or engineered flooring",
        "Precision cutting and fitting for a seamless finish",
        "Clean, timely, and professional service from start to finish"
    ];

    return (
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-20 py-12 bg-gray-50 rounded-xl shadow-lg">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
                What We Offer
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-start gap-3 p-5 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
                    >
                        <CheckCircle className="h-8 w-8 text-green-600" />
                        <p className="text-gray-700 text-sm sm:text-base">{service}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhatWeOffer;