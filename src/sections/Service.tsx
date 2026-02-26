"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image_1 from "../../public/assets/img/1.jpeg";
import Image_2 from "../../public/assets/img/2.jpeg";
import Image_3 from "../../public/assets/img/3.jpeg";
import Image_4 from "../../public/assets/img/4.jpeg";
import Image_5 from "../../public/assets/img/5.jpeg";
import Image_6 from "../../public/assets/img/7.jpeg";
import { Square, Hammer, Layers, Wrench, Paintbrush, LayoutGrid } from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";

const cardData = [
    {
        title: "Solid Timber Flooring",
        description:
            "Our solid timber floors are crafted for lasting beauty and strength. Perfect for both new constructions and renovations, these floors bring a warm, natural look.",
        link: "/services/solid-timber-flooring",
        image: Image_1,
        icon: Square,
    },
    {
        title: "Floor Sanding & Polishing",
        description:
            "Laminate flooring offers a durable, wear-resistant surface ideal for busy homes and offices. It mimics the look of timber while being cost-effective.",
        link: "/services/floor-sanding-polishing",
        image: Image_2,
        icon: Hammer,
    },
    {
        title: "Floor Preparation & Levelling",
        description:
            "Enhance your outdoor spaces with beautiful timber decking. Our decking solutions are designed for durability, safety, and outstanding visual appeal.",
        link: "/services/floor-preparation-levelling",
        image: Image_3,
        icon: Layers,
    },
    {
        title: "Flooring Maintenance",
        description:
            "We ensure your sub-floor, whether concrete or timber, is perfectly level before installation. This guarantees a flawless finish and long-lasting performance.",
        link: "/services/flooring-maintenance",
        image: Image_4,
        icon: Wrench,
    },
    {
        title: "Floor Staining",
        description:
            "Add timeless elegance with expertly installed parquetry flooring that combines intricate detail with superior craftsmanship.",
        link: "/services/floor-staining",
        image: Image_5,
        icon: Paintbrush,
    },
    {
        title: "Floating Floor",
        description:
            "Achieve a warm, natural look with Blackbutt timber flooring known for its strength and timeless appeal.",
        link: "/services/floating-floor",
        image: Image_6,
        icon: LayoutGrid,
    },
];

const Service = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <section className="bg-[#F6F4EF]">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-[40px] xl:px-[80px] py-12 sm:py-16 lg:py-20 flex flex-col gap-12">

                {/* Header */}
                <div
                    className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
                    data-aos="fade-up"
                >
                    <div className="max-w-2xl">
                        <h1 className="font-space-grotesk font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[46px] leading-tight mb-4">
                            Expert Timber Flooring Solutions
                        </h1>
                        <p className="text-[#464646] text-sm sm:text-base leading-relaxed">
                            We provide a wide range of timber flooring solutions tailored to your
                            home, office, or commercial space. Each service is designed to combine
                            durability, elegance, and expert craftsmanship.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="inline-block w-fit px-6 py-3 bg-[#111111] text-[#F6F4EF] font-medium rounded-md hover:bg-[#c1a37c] transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                    {cardData.map((card, index) => {
                        const Icon = card.icon;

                        return (
                            <div
                                key={index}
                                data-aos="zoom-in-up"
                                data-aos-delay={index * 150}
                                className="relative group rounded-md overflow-hidden min-h-[320px] sm:min-h-[340px] flex"
                            >
                                {/* Background */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                    style={{ backgroundImage: `url(${card.image.src})` }}
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-all duration-300" />

                                {/* Content */}
                                <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-between w-full text-left">
                                    <div className="flex flex-col gap-4">
                                        <div className="w-10 h-10 bg-[#E6E0D6] flex items-center justify-center rounded-md">
                                            <Icon className="w-5 h-5 text-[#111111]" />
                                        </div>

                                        <div>
                                            <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold text-white mb-2">
                                                {card.title}
                                            </h3>
                                            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <Link
                                            href={card.link}
                                            className="inline-block bg-[#E6E0D6] text-[#111111] text-sm font-medium px-4 py-2 rounded-md hover:bg-white transition"
                                        >
                                            View More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Service;