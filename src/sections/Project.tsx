"use client";

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

// Make sure your paths are correct relative to this file
import Img1 from "../../public/assets/img/1.jpeg";
import Img2 from "../../public/assets/img/2.jpeg";
import Img3 from "../../public/assets/img/3.jpeg";
import Img4 from "../../public/assets/img/4.jpeg";
import Img5 from "../../public/assets/img/5.jpeg";
import Img6 from "../../public/assets/img/6.jpeg";
import Img7 from "../../public/assets/img/7.jpeg";
import Img8 from "../../public/assets/img/8.jpeg";
import Img9 from "../../public/assets/img/WhatsApp Image 2026-02-16 at 10.51.36 AM.jpeg";
import Img10 from "../../public/assets/img/WhatsApp Image 2026-02-16 at 10.51.59 AM (1).jpeg";
import Img11 from "../../public/assets/img/WhatsApp Image 2026-02-16 at 10.51.59 AM.jpeg";
import Img12 from "../../public/assets/img/bannerimage3.webp";

/* ================= CUSTOM HEIGHT PER IMAGE ================= */
const items = [
    { src: Img1, height: 370 }, //1 
    { src: Img2, height: 270 }, //2 
    { src: Img3, height: 250 }, //3 
    { src: Img4, height: 220 }, //4 
    { src: Img5, height: 400 }, //5 
    { src: Img6, height: 270 }, //6 
    { src: Img7, height: 400 }, //7 
    { src: Img12, height: 270 }, //8 
    { src: Img8, height: 220 }, //9 
    { src: Img9, height: 410 }, //10 
    { src: Img10, height: 260 }, //11 
    { src: Img11, height: 220 }, //12
];

/* ================= COMPONENT ================= */
const Project = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const closeLightbox = useCallback(() => setSelectedIndex(null), []);

    const showNext = useCallback(() => {
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % items.length : null));
    }, []);

    const showPrev = useCallback(() => {
        setSelectedIndex((prev) => (prev !== null ? (prev - 1 + items.length) % items.length : null));
    }, []);

    /* ================= KEYBOARD SUPPORT & SCROLL LOCK ================= */
    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") showNext();
            if (e.key === "ArrowLeft") showPrev();
        };

        window.addEventListener("keydown", handleKey);
        
        return () => {
            window.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "auto";
        };
    }, [selectedIndex, closeLightbox, showNext, showPrev]);

    return (
        <>
            <section className="max-w-[1440px] mx-auto px-4 sm:px-[40px] xl:px-[80px] py-12 sm:py-16 lg:py-20 flex flex-col items-center">
                
                {/* HEADER */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full gap-8 mb-12">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-medium leading-tight max-w-2xl">
                        Crafting Premium Timber Floors Across Sydney
                    </h1>
                    <Link
                        href="/project"
                        className="inline-block w-fit px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-[#c1a37c] transition"
                    >
                        View Projects
                    </Link>
                </div>

                {/* TAILWIND CSS MASONRY GRID */}
                <div className="w-full columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedIndex(index)}
                            // break-inside-avoid prevents images from being cut in half across columns
                            className="relative w-full break-inside-avoid rounded-xl overflow-hidden cursor-pointer bg-gray-100 group"
                            style={{ height: `${item.height}px` }}
                        >
                            <Image
                                src={item.src}
                                alt={`Project ${index + 1}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* LIGHTBOX */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 bg-black/95 flex items-center justify-center z-[9999] p-4 sm:p-8"
                    onClick={closeLightbox}
                >
                    <div
                        className="relative w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={items[selectedIndex].src}
                            alt="Preview"
                            fill
                            sizes="100vw"
                            className="object-contain"
                            priority 
                        />

                        {/* Controls */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 sm:-top-10 sm:right-0 md:-right-12 z-50 text-white text-3xl opacity-70 hover:opacity-100 transition"
                            aria-label="Close"
                        >
                            ✕
                        </button>
                        <button
                            onClick={showPrev}
                            className="absolute left-4 md:-left-16 z-50 text-white text-5xl opacity-70 hover:opacity-100 transition"
                            aria-label="Previous"
                        >
                            ‹
                        </button>
                        <button
                            onClick={showNext}
                            className="absolute right-4 md:-right-16 z-50 text-white text-5xl opacity-70 hover:opacity-100 transition"
                            aria-label="Next"
                        >
                            ›
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Project;