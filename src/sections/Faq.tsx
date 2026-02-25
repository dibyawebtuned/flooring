"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface FAQItem {
    q: string;
    a: string;
}

const faqs: FAQItem[] = [
    {
        q: "What types of timber flooring do you offer?",
        a: "We offer a wide range of hardwood, engineered timber, and laminate flooring options to suit different styles and budgets.",
    },
    {
        q: "Do you provide free quotes?",
        a: "Yes. We offer a free measure and quote. One of our experienced consultants will visit your site, assess your requirements, and recommend the best solution.",
    },
    {
        q: "How long does timber flooring installation take?",
        a: "Installation time depends on the size of the project, but most residential projects are completed within a few days.",
    },
    {
        q: "Can timber flooring be installed over concrete?",
        a: "Yes, timber flooring can be installed over concrete using the appropriate underlay and moisture barrier system.",
    },
    {
        q: "Do you offer sanding and polishing for existing floors?",
        a: "Yes, we provide professional sanding and polishing services to restore and refresh existing timber floors.",
    },
    {
        q: "Is timber flooring suitable for high-traffic areas?",
        a: "Absolutely. We recommend durable hardwood options for high-traffic areas to ensure long-term performance.",
    },
    {
        q: "Do you provide maintenance services?",
        a: "Yes, we offer ongoing maintenance and care advice to help extend the life of your flooring.",
    },
];

const FaqComponent = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(1);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="max-w-[1440px] mx-auto px-4 sm:px-[40px] xl:px-[80px] py-20">
            {/* Equal Height Grid */}
            <div className="grid md:grid-cols-2 gap-16 items-stretch">

                {/* LEFT SIDE */}
                <div>
                    <h2 className="text-4xl lg:text-5xl font-semibold mb-12">
                        Frequently Asked Questions
                    </h2>

                    <div>
                        {faqs.map((item, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={index}
                                    className="border-t border-gray-300 last:border-b"
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex justify-between items-center py-6 text-left"
                                    >
                                        <span className="font-medium text-lg">
                                            {item.q}
                                        </span>

                                        <ChevronDown
                                            className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {/* Smooth height animation (no max-height hack) */}
                                    <div
                                        className={`grid transition-all duration-500 ease-in-out ${isOpen
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="pb-6 text-gray-600 leading-relaxed">
                                                {item.a}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div className="relative w-full h-full rounded-xl overflow-hidden md:sticky md:top-24">
                    <Image
                        src="/assets/img/1.jpeg"
                        alt="Timber flooring"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        priority
                    />
                </div>

            </div>
        </section>
    );
};

export default FaqComponent;