import type { Metadata } from "next";

export const metadata: Metadata = {
    title: " Laminate Flooring Solutions | Prestige Timber Flooring",
    description:
        "Laminate flooring is a modern, durable, and cost-effective solution that replicates the appearance of natural timber while offering superior resistance to scratches, stains, and everyday wear.",

    authors: [{ name: "Prestige Timber Flooring" }],
    creator: "Prestige Timber Flooring",
    publisher: "Prestige Timber Flooring",
    openGraph: {
        title: "Prestige Timber Flooring",
        description:
            "Laminate flooring is a modern, durable, and cost-effective solution that replicates the appearance of natural timber while offering superior resistance to scratches, stains, and everyday wear.",
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
import LaminateComponent from './LaminateComponent'

const page = () => {
    return (
        <div>
            <LaminateComponent />
        </div>
    )
}

export default page