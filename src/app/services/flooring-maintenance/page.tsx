import type { Metadata } from "next";

export const metadata: Metadata = {
    title: " Flooring Maintenance Services | Prestige Timber Flooring",
    description:
        "Regular flooring maintenance is essential to preserve the appearance, durability, and performance of your timber floors.",

    authors: [{ name: "Prestige Timber Flooring" }],
    creator: "Prestige Timber Flooring",
    publisher: "Prestige Timber Flooring",
    openGraph: {
        title: "Prestige Timber Flooring",
        description:
            "Regular flooring maintenance is essential to preserve the appearance, durability, and performance of your timber floors.",
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
import FlooringMaintenance from './FlooringMaintenance'

const page = () => {
    return (
        <div>
            <FlooringMaintenance />
        </div>
    )
}

export default page