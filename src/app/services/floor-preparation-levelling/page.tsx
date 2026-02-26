import type { Metadata } from "next";

export const metadata: Metadata = {
    title: " Floor Preparation & Levelling | Prestige Timber Flooring",
    description:
        "Proper floor preparation and levelling are essential for achieving a flawless and long-lasting flooring installation. ",

    authors: [{ name: "Prestige Timber Flooring" }],
    creator: "Prestige Timber Flooring",
    publisher: "Prestige Timber Flooring",
    openGraph: {
        title: "Prestige Timber Flooring",
        description:
            "Proper floor preparation and levelling are essential for achieving a flawless and long-lasting flooring installation. ",
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
import FloorPerparationLevelling from './FloorPerparationLevelling'

const page = () => {
    return (
        <div>
            <FloorPerparationLevelling />
        </div>
    )
}

export default page