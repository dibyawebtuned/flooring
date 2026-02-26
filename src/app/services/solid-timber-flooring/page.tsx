import type { Metadata } from "next";

export const metadata: Metadata = {
    title: " Solid Timber Flooring | Prestige Timber Flooring",
    description:
        "Premium solid timber flooring combines natural elegance with outstanding durability, creating a sophisticated foundation for any home. ",

    authors: [{ name: "Prestige Timber Flooring" }],
    creator: "Prestige Timber Flooring",
    publisher: "Prestige Timber Flooring",
    openGraph: {
        title: "Prestige Timber Flooring",
        description:
            "Premium solid timber flooring combines natural elegance with outstanding durability, creating a sophisticated foundation for any home. ",
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
import SolidTimberComponent from './SolidTimberComponent'

const page = () => {
    return (
        <div>
            <SolidTimberComponent />
        </div>
    )
}

export default page
