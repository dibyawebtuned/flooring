import React from "react";
import Link from "next/link";
import Image_1 from "../../public/assets/img/1.jpeg";
import { HomeIcon, Squares2X2Icon, SparklesIcon, RectangleStackIcon } from "@heroicons/react/24/solid"; // npm install @heroicons/react

const cardData = [
    {
        title: "Solid Timber Flooring",
        description:
            "Our solid timber floors are crafted for lasting beauty and strength. Perfect for both new constructions and renovations, these floors bring a warm, natural look.",
        link: "#",
        image: Image_1,
        icon: HomeIcon,
    },
    {
        title: "Laminate Flooring",
        description:
            "Laminate flooring offers a durable, wear-resistant surface ideal for busy homes and offices. It mimics the look of timber while being cost-effective.",
        link: "#",
        image: Image_1,
        icon: Squares2X2Icon,
    },
    {
        title: "Decking",
        description:
            "Enhance your outdoor spaces with beautiful timber decking. Our decking solutions are designed for durability, safety, and outstanding visual appeal.",
        link: "#",
        image: Image_1,
        icon: SparklesIcon,
    },
    {
        title: "Floor Preparation & Leveling",
        description:
            "We ensure your sub-floor, whether concrete or timber, is perfectly level before installation. This guarantees a flawless finish and long-lasting performance.",
        link: "#",
        image: Image_1,
        icon: RectangleStackIcon,
    },
    {
        title: "Parquetry",
        description:
            "Add timeless elegance with expertly installed parquetry flooring that combines intricate. Elegance with expertly installed parquetry flooring that combines.",
        link: "#",
        image: Image_1,
        icon: RectangleStackIcon,
    },
    {
        title: "Blackbutt timber floors",
        description:
            "Achieve a warm, natural look with Blackbutt timber flooring known for its strength, natural look with Blackbutt timber flooring known.",
        link: "#",
        image: Image_1,
        icon: RectangleStackIcon,
    },
];

const Service = () => {
    return (
        <div className="bg-[#F6F4EF]">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-12 sm:py-20 flex flex-col gap-[45px]">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
                    <div className="flex-1">
                        <h1 className="font-space-grotesk font-medium text-3xl sm:text-4xl md:text-[47px] leading-snug sm:leading-tight md:leading-[55px] tracking-[-0.94px] mb-4">
                            Expert Timber Flooring Solutions
                        </h1>
                        <p className="font-inter font-medium text-base sm:text-lg text-[#464646] leading-6 sm:leading-7 md:leading-[25px]">
                            We provide a wide range of timber flooring solutions tailored to your home, office, or
                            commercial space. Each service is designed to combine durability, elegance, and expert
                            craftsmanship.
                        </p>
                    </div>

                    <div className="flex-1 flex justify-start lg:justify-end items-start lg:items-center mt-6 lg:mt-0">
                        <button className="px-5 py-3 bg-[#111111] text-[#F6F4EF] font-semibold rounded-md hover:bg-[#c1a37c] transition-colors">
                            View All Services
                        </button>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                    {cardData.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <div
                                key={index}
                                className="relative rounded-[5px] overflow-hidden h-64 w-full flex flex-col items-center text-center"
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${card.image.src})` }}
                                ></div>

                                {/* Overlay for opacity */}
                                <div className="absolute inset-0 bg-black/60"></div>

                                {/* Content */}
                                <div className="relative z-10 p-6 flex flex-col gap-[10px] items-start justify-center text-start h-full w-full">
                                    {/* Icon */}
                                    <div className="w-10 h-10 bg-[#E6E0D6] flex items-center justify-center rounded-[5px]">
                                        <Icon className="w-5 h-5 text-[#111111]" />
                                    </div>

                                    <div className="flex flex-col gap-[15px]">
                                        <div className="flex flex-col gap-[5px]">
                                            {/* Title & Description */}
                                            <h3 className="font-semibold text-[24px] text-white">{card.title}</h3>
                                            <p className="text-gray-100 text-sm font-inter">{card.description}</p>
                                        </div>

                                        <div>
                                            {/* Link */}
                                            <Link href={card.link} className="bg-[#E6E0D6] text-[#111111] text-[14px] space-grotesk space-grotesk-500 px-[11px] py-[7px] rounded-[5px]">
                                                View More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Service;