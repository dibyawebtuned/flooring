import React from "react";
import Image from "next/image";
import Image_One from "../../public/assets/img/1.jpeg";

const Project = () => {
    return (
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-20">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 mb-12">
                <div className="flex-1">
                    <h1 className="font-space-grotesk font-medium text-3xl sm:text-4xl md:text-[47px] leading-snug sm:leading-tight md:leading-[55px] tracking-[-0.94px]">
                        Crafting Premium Timber Floors Across Sydney
                    </h1>
                </div>

                <div className="flex-1 flex justify-start lg:justify-end items-start lg:items-center">
                    <button className="px-5 py-3 bg-[#111111] text-[#F6F4EF] font-semibold rounded-md hover:bg-[#c1a37c] transition-colors">
                        View Projects
                    </button>
                </div>
            </div>

            {/* Masonry Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Column 1 */}
                <div className="grid gap-4">
                    <Image className="h-auto max-w-full rounded-md" src={Image_One} alt="Project 1" />
                    <Image className="h-auto max-w-full rounded-md" src={Image_One} alt="Project 2" />
                    <Image className="h-auto max-w-full rounded-md" src={Image_One} alt="Project 3" />
                </div>

                {/* Column 2 */}
                <div className="grid gap-4">
                    <Image className="h-auto max-w-full rounded-md" src={Image_One} alt="Project 4" />
                    <Image className="h-auto max-w-full rounded-md" src={Image_One} alt="Project 5" />
                    <Image className="h-auto max-w-full rounded-md" src={Image_One} alt="Project 6" />
                </div>

                {/* Column 3 */}
                <div className="grid gap-4">
                    <Image className="h-auto max-w-full rounded-md" src={Image_One} alt="Project 7" />
                    <Image className="h-auto max-w-full rounded-md" src={Image_One} alt="Project 8" />
                    <Image className="h-auto max-w-full rounded-md" src={Image_One} alt="Project 9" />
                </div>

                {/* Column 4 */}
                <div className="grid gap-4">
                    <Image className="h-auto max-w-full rounded-md" src={Image_One} alt="Project 10" />
                    <Image className="h-auto max-w-full rounded-md" src={Image_One} alt="Project 11" />
                    <Image className="h-auto max-w-full rounded-md" src={Image_One} alt="Project 12" />
                </div>

            </div>
        </div>
    );
};

export default Project;