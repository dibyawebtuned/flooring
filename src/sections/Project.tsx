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
                    <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="Project 1" />
                    <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="Project 2" />
                    <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="Project 3" />
                </div>

                {/* Column 2 */}
                <div className="grid gap-4">
                    <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="Project 4" />
                    <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="Project 5" />
                    <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="Project 6" />
                </div>

                {/* Column 3 */}
                <div className="grid gap-4">
                    <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="Project 7" />
                    <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="Project 8" />
                    <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="Project 9" />
                </div>

                {/* Column 4 */}
                <div className="grid gap-4">
                    <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="Project 10" />
                    <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="Project 11" />
                    <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="Project 12" />
                </div>

            </div>
        </div>
    );
};

export default Project;