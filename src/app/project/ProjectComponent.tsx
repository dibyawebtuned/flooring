"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Banner_Image from "../../../public/assets/img/bannerimage1.webp";

import Img1 from "../../../public/assets/img/1.jpeg";
import Img2 from "../../../public/assets/img/2.jpeg";
import Img3 from "../../../public/assets/img/3.jpeg";
import Img4 from "../../../public/assets/img/4.jpeg";
import Img5 from "../../../public/assets/img/5.jpeg";
import Img6 from "../../../public/assets/img/6.jpeg";
import Img7 from "../../../public/assets/img/7.jpeg";
import Img8 from "../../../public/assets/img/8.jpeg";
import Img9 from "../../../public/assets/img/WhatsApp Image 2026-02-16 at 10.51.36 AM.jpeg";
import Img10 from "../../../public/assets/img/WhatsApp Image 2026-02-16 at 10.51.59 AM (1).jpeg";
import Img11 from "../../../public/assets/img/WhatsApp Image 2026-02-16 at 10.51.59 AM.jpeg";
import Img12 from "../../../public/assets/img/WhatsApp Image 2026-02-16 at 10.52.00 AM.jpeg";
import Img13 from "../../../public/assets/img/WhatsApp Image 2026-02-16 at 10.52.01 AM.jpeg";
import Img14 from "../../../public/assets/img/WhatsApp Image 2026-02-16 at 10.52.11 AM.jpeg";
import Img15 from "../../../public/assets/img/WhatsApp Image 2026-02-16 at 10.52.17 AM.jpeg";
import Img16 from "../../../public/assets/img/WhatsApp Image 2026-02-16 at 10.52.18 AM (1).jpeg";
import Img17 from "../../../public/assets/img/WhatsApp Image 2026-02-16 at 10.52.18 AM (2).jpeg";
import Img18 from "../../../public/assets/img/WhatsApp Image 2026-02-16 at 10.52.18 AM.jpeg";
import Img19 from "../../../public/assets/img/WhatsApp Image 2026-02-16 at 10.52.33 AM.jpeg";
import Img20 from "../../../public/assets/img/WhatsApp Image 2026-02-16 at 10.54.19 AM (1).jpeg";
import Img21 from "../../../public/assets/img/WhatsApp Image 2026-02-16 at 10.54.19 AM.jpeg";
import Img23 from "../../../public/assets/img/bannerimage1.webp";
import Img24 from "../../../public/assets/img/bannerimage2.jpg";
import Img25 from "../../../public/assets/img/bannerimage3.webp";

const items = [
    Img1, Img2, Img3, Img4, Img5, Img6,
    Img7, Img8, Img9, Img10, Img11, Img12, Img13, Img14, Img15, Img16, Img17, Img18, Img19, Img20, Img21,
    Img23, Img24, Img25
];

const ProjectComponent = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const closeLightbox = () => setSelectedIndex(null);

    const showNext = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % items.length);
        }
    };

    const showPrev = () => {
        if (selectedIndex !== null) {
            setSelectedIndex(
                (selectedIndex - 1 + items.length) % items.length
            );
        }
    };

    // Keyboard support
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") showNext();
            if (e.key === "ArrowLeft") showPrev();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [selectedIndex]);

    return (
        <div>

            {/* ================= HERO SECTION ================= */}
            <section className="relative w-full h-[45vh] sm:h-[50vh] min-h-[380px] flex items-end">
                <div className="absolute inset-0">
                    <Image
                        src={Banner_Image}
                        alt="Project Banner"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>

                <div className="absolute inset-0 bg-black/70" />

                <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 w-full pb-10">
                    <div className="grid lg:grid-cols-2 gap-8 items-end">
                        <h1 className="text-white font-bold leading-tight 
              text-2xl sm:text-3xl md:text-4xl lg:text-[46px]">
                            Crafting Premium Timber Floors with Precision
                        </h1>

                        <div className="text-gray-200 max-w-md lg:ml-auto">
                            <p className="mb-4 text-sm sm:text-base leading-relaxed">
                                Our gallery showcases high-quality timber flooring installations,
                                custom designs, and professional finishes. Each project reflects
                                craftsmanship, durability, and modern aesthetics tailored to
                                elevate residential and commercial spaces.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= GRID GALLERY (PLANE) ================= */}
            <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {items.map((img, index) => (
                        <div
                            key={index}
                            className="relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
                            onClick={() => setSelectedIndex(index)}
                        >
                            <Image
                                src={img}
                                alt={`Project ${index + 1}`}
                                fill
                                className="object-cover hover:scale-105 transition duration-300"
                                sizes="(max-width: 640px) 100vw,
                                       (max-width: 1024px) 50vw,
                                       (max-width: 1280px) 33vw,
                                       25vw"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= LIGHTBOX ================= */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] p-4"
                    onClick={closeLightbox}
                >
                    <div
                        className="relative max-w-6xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={items[selectedIndex]}
                            alt="Preview"
                            className="w-full h-auto object-contain max-h-[85vh]"
                        />

                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 text-white text-3xl"
                        >
                            ✕
                        </button>

                        {/* Prev */}
                        <button
                            onClick={showPrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl"
                        >
                            ‹
                        </button>

                        {/* Next */}
                        <button
                            onClick={showNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl"
                        >
                            ›
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectComponent;