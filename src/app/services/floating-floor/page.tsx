import type { Metadata } from "next";

export const metadata: Metadata = {
    title: " Floating Floor Installation | Prestige Timber Flooring",
    description:
        "Floating floors are a modern and versatile flooring solution designed for efficiency, durability, and style.",

    authors: [{ name: "Prestige Timber Flooring" }],
    creator: "Prestige Timber Flooring",
    publisher: "Prestige Timber Flooring",
    openGraph: {
        title: "Prestige Timber Flooring",
        description:
            "Floating floors are a modern and versatile flooring solution designed for efficiency, durability, and style.",
        siteName: "Prestige Timber Flooring",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Prestige Timber Flooring",
            },
        ],
        locale: "en_AU",
        type: "website",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};


import React from 'react'
import FloatingFloor from './FloatingFloor'

const page = () => {
    return (
        <div>
            <FloatingFloor />
        </div>
    )
}

export default page