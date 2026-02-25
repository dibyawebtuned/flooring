"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Masonry from "@mui/lab/Masonry";

// Import multiple images
import Img1 from "../../public/assets/img/1.jpeg";
import Img2 from "../../public/assets/img/2.jpeg";
import Img3 from "../../public/assets/img/3.jpeg";
import Img4 from "../../public/assets/img/4.jpeg";
import Img5 from "../../public/assets/img/5.jpeg";
import Img6 from "../../public/assets/img/6.jpeg";

const items = [
    { image: Img1, height: 250 },
    { image: Img2, height: 120 },
    { image: Img3, height: 200 },
    { image: Img4, height: 160 },
    { image: Img5, height: 140 },
    { image: Img6, height: 220 },
    { image: Img1, height: 150 },
    { image: Img2, height: 190 },
    { image: Img3, height: 110 },
    { image: Img4, height: 170 },
    { image: Img5, height: 130 },
    { image: Img6, height: 210 },
];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    ...(theme as any).applyStyles?.("dark", {
        backgroundColor: "#1A2027",
    }),
}));

const Project = () => {
    return (
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-20">

            {/* Header */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 mb-12">

                <div className="flex-1">
                    <h1 className="font-space-grotesk font-medium text-3xl sm:text-4xl md:text-[47px] leading-snug md:leading-[55px] tracking-[-0.94px]">
                        Crafting Premium Timber Floors Across Sydney
                    </h1>
                </div>

                <div className="flex-1 flex justify-start lg:justify-end items-start lg:items-center">
                    <Link
                        href="#"
                        className="px-5 py-3 bg-[#111111] text-[#F6F4EF] font-semibold rounded-md hover:bg-[#c1a37c] transition-colors duration-300"
                    >
                        View Projects
                    </Link>
                </div>

            </div>

            {/* Masonry Gallery */}
            <Box sx={{ width: "100%", minHeight: 500 }}>
                <Masonry
                    columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
                    spacing={2}
                    sequential
                >
                    {items.map((item, index) => (
                        <Item key={index} sx={{ height: item.height }}>
                            <Image
                                src={item.image}
                                alt={`Project ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </Item>
                    ))}
                </Masonry>
            </Box>

        </section>
    );
};

export default Project;