"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Banner
import Banner_Image from "../../../public/assets/img/bannerimage1.webp";

// Image paths (public folder)
const items = [
    "/prestige2.0/assets/latest/IMG_1513.JPG",
    "/prestige2.0/assets/latest/IMG_1521.JPG",
    "/prestige2.0/assets/latest/IMG_1522.JPG",
    "/prestige2.0/assets/latest/IMG_1525.JPG",
    "/prestige2.0/assets/latest/IMG_1527.JPG",
    "/prestige2.0/assets/latest/IMG_1528.JPG",
    "/prestige2.0/assets/latest/IMG_1529.JPG",
    "/prestige2.0/assets/latest/IMG_1531.JPG",
    "/prestige2.0/assets/latest/IMG_1532.JPG",
    "/prestige2.0/assets/latest/IMG_1536.JPG",
    "/prestige2.0/assets/latest/IMG_1559.JPG",
    "/prestige2.0/assets/latest/IMG_1560.JPG",
    "/prestige2.0/assets/latest/IMG_1583.JPG",
    "/prestige2.0/assets/latest/IMG_1614.JPG",
    "/prestige2.0/assets/latest/IMG_1618.JPG",
    "/prestige2.0/assets/latest/IMG_1619.JPG",
    "/prestige2.0/assets/latest/IMG_1620.JPG",
    "/prestige2.0/assets/latest/IMG_1624.JPG",
    "/prestige2.0/assets/latest/IMG_1625.JPG",
    "/prestige2.0/assets/latest/IMG_1627.JPG",
    "/prestige2.0/assets/latest/IMG_1644.JPG",
    "/prestige2.0/assets/latest/IMG_1674.JPG",
    "/prestige2.0/assets/latest/IMG_1676.JPG",
    "/prestige2.0/assets/latest/IMG_1678.JPG",
    "/prestige2.0/assets/latest/IMG_1685.JPG",
    "/prestige2.0/assets/latest/IMG_1698.JPG",
    "/prestige2.0/assets/latest/IMG_1738.JPG",
    "/prestige2.0/assets/latest/IMG_1739.JPG",
    "/prestige2.0/assets/latest/IMG_1742.JPG",
    "/prestige2.0/assets/latest/IMG_1757.JPG",
    "/prestige2.0/assets/latest/IMG_1759.JPG",
    "/prestige2.0/assets/latest/IMG_1760.JPG",
    "/prestige2.0/assets/latest/IMG_1761.JPG",
    "/prestige2.0/assets/latest/IMG_1762.JPG",
    "/prestige2.0/assets/latest/IMG_1765.JPG",
    "/prestige2.0/assets/latest/IMG_1774.JPG",
    "/prestige2.0/assets/latest/IMG_1779.JPG",
    "/prestige2.0/assets/latest/IMG_1782.JPG",
    "/prestige2.0/assets/latest/IMG_1783.JPG",
    "/prestige2.0/assets/latest/IMG_1784.JPG",
    "/prestige2.0/assets/latest/IMG_1786.JPG",
    "/prestige2.0/assets/latest/IMG_1788.JPG",
    "/prestige2.0/assets/latest/IMG_1792.JPG",
    "/prestige2.0/assets/latest/IMG_1799.JPG",
    "/prestige2.0/assets/latest/IMG_1800.JPG",
    "/prestige2.0/assets/latest/IMG_1801.JPG",
    "/prestige2.0/assets/latest/IMG_1802.JPG",
    "/prestige2.0/assets/latest/IMG_1803.JPG",
    "/prestige2.0/assets/latest/IMG_1804.JPG",
    "/prestige2.0/assets/latest/IMG_1805.JPG",
    "/prestige2.0/assets/latest/IMG_1806.JPG",
    "/prestige2.0/assets/latest/IMG_1807.JPG",
    "/prestige2.0/assets/latest/IMG_1809.JPG",
    "/prestige2.0/assets/latest/IMG_1810.JPG",
    "/prestige2.0/assets/latest/IMG_1816.JPG",
    "/prestige2.0/assets/latest/IMG_1819.JPG",
    "/prestige2.0/assets/latest/IMG_1820.JPG",
    "/prestige2.0/assets/latest/IMG_1821.JPG",
    "/prestige2.0/assets/latest/IMG_1822.JPG",
    "/prestige2.0/assets/latest/IMG_1823.JPG",
    "/prestige2.0/assets/latest/IMG_1825.JPG",
    "/prestige2.0/assets/latest/IMG_1831.JPG",
    "/prestige2.0/assets/latest/IMG_1837.JPG",
    "/prestige2.0/assets/latest/IMG_1838.JPG",
    "/prestige2.0/assets/latest/IMG_1840.JPG",
    "/prestige2.0/assets/latest/IMG_1841.JPG",
    "/prestige2.0/assets/latest/IMG_1844.JPG",
    "/prestige2.0/assets/latest/IMG_1847.JPG",
    "/prestige2.0/assets/latest/IMG_1848.JPG",
    "/prestige2.0/assets/latest/IMG_1849.JPG",
    "/prestige2.0/assets/latest/IMG_1850.JPG",
    "/prestige2.0/assets/latest/IMG_1851.JPG",
    "/prestige2.0/assets/latest/IMG_1852.JPG",
    "/prestige2.0/assets/latest/IMG_1853.JPG",
    "/prestige2.0/assets/latest/IMG_1855.JPG",
    "/prestige2.0/assets/latest/IMG_1868.JPG",
    "/prestige2.0/assets/latest/IMG_1869.JPG",
    "/prestige2.0/assets/latest/IMG_1870.JPG",
    "/prestige2.0/assets/latest/IMG_1871.JPG",
    "/prestige2.0/assets/latest/IMG_1872.JPG",
    "/prestige2.0/assets/latest/IMG_1873.JPG",
    "/prestige2.0/assets/latest/IMG_1874.JPG",
    "/prestige2.0/assets/latest/IMG_1875.JPG",
    "/prestige2.0/assets/latest/IMG_1876.JPG",
    "/prestige2.0/assets/latest/IMG_1877.JPG",
    "/prestige2.0/assets/latest/IMG_1878.JPG",
    "/prestige2.0/assets/latest/IMG_1879.JPG",
    "/prestige2.0/assets/latest/IMG_1880.JPG",

    "/prestige2.0/assets/img/1.jpeg",
    "/prestige2.0/assets/img/2.jpeg",
    "/prestige2.0/assets/img/3.jpeg",
    "/prestige2.0/assets/img/4.jpeg",
    "/prestige2.0/assets/img/5.jpeg",
    "/prestige2.0/assets/img/6.jpeg",
    "/prestige2.0/assets/img/7.jpeg",
    "/prestige2.0/assets/img/8.jpeg",
    "/prestige2.0/assets/img/WhatsApp Image 2026-02-16 at 10.51.36 AM.jpeg",
    "/prestige2.0/assets/img/WhatsApp Image 2026-02-16 at 10.51.59 AM (1).jpeg",
    "/prestige2.0/assets/img/WhatsApp Image 2026-02-16 at 10.51.59 AM.jpeg",
    "/prestige2.0/assets/img/WhatsApp Image 2026-02-16 at 10.52.00 AM.jpeg",
    "/prestige2.0/assets/img/WhatsApp Image 2026-02-16 at 10.52.01 AM.jpeg",
    "/prestige2.0/assets/img/WhatsApp Image 2026-02-16 at 10.52.11 AM.jpeg",
    "/prestige2.0/assets/img/WhatsApp Image 2026-02-16 at 10.52.17 AM.jpeg",
    "/prestige2.0/assets/img/WhatsApp Image 2026-02-16 at 10.52.18 AM (1).jpeg",
    "/prestige2.0/assets/img/WhatsApp Image 2026-02-16 at 10.52.18 AM (2).jpeg",
    "/prestige2.0/assets/img/WhatsApp Image 2026-02-16 at 10.52.18 AM.jpeg",
    "/prestige2.0/assets/img/WhatsApp Image 2026-02-16 at 10.52.33 AM.jpeg",
    "/prestige2.0/assets/img/WhatsApp Image 2026-02-16 at 10.54.19 AM (1).jpeg",
    "/prestige2.0/assets/img/WhatsApp Image 2026-02-16 at 10.54.19 AM.jpeg",
    "/prestige2.0/assets/img/bannerimage1.webp",
    "/prestige2.0/assets/img/bannerimage2.jpg",
    "/prestige2.0/assets/img/bannerimage3.webp",
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
            setSelectedIndex((selectedIndex - 1 + items.length) % items.length);
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
                        <h1 className="text-white font-bold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[46px]">
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

            {/* ================= GRID GALLERY ================= */}
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
                        className="relative w-full max-w-6xl h-[85vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={items[selectedIndex]}
                            alt="Preview"
                            fill
                            className="object-contain"
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