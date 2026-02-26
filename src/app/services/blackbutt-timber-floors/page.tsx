import type { Metadata } from "next";

export const metadata: Metadata = {
    title: " Blackbutt Timber Flooring | Prestige Timber Flooring",
    description:
        "Blackbutt timber flooring is renowned for its strength, natural warmth, and timeless appeal.",

    authors: [{ name: "Prestige Timber Flooring" }],
    creator: "Prestige Timber Flooring",
    publisher: "Prestige Timber Flooring",
    openGraph: {
        title: "Prestige Timber Flooring",
        description:
            "Blackbutt timber flooring is renowned for its strength, natural warmth, and timeless appeal.",
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
import BlackbuttTimberFloors from './BlackbuttTimberFloors'

const page = () => {
    return (
        <div>
            <BlackbuttTimberFloors />
        </div>
    )
}

export default page