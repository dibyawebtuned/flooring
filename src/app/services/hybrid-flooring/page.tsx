import type { Metadata } from "next";

export const metadata: Metadata = {
    title: " Hybrid Flooring Solutions | Prestige Timber Flooring",
    description:
        "Hybrid flooring combines the durability of vinyl with the refined appearance of timber, delivering a water-resistant, scratch-resistant, and low-maintenance flooring solution.",

    authors: [{ name: "Prestige Timber Flooring" }],
    creator: "Prestige Timber Flooring",
    publisher: "Prestige Timber Flooring",
    openGraph: {
        title: "Prestige Timber Flooring",
        description:
            "Hybrid flooring combines the durability of vinyl with the refined appearance of timber, delivering a water-resistant, scratch-resistant, and low-maintenance flooring solution.",
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
import HybridFlooring from './HybridFlooring'

const page = () => {
    return (
        <div>
            <HybridFlooring />
        </div>
    )
}

export default page