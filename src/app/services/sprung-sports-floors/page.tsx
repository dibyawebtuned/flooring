import type { Metadata } from "next";

export const metadata: Metadata = {
    title: " Sprung Sports Flooring Solutions | Prestige Timber Flooring",
    description:
        "Sprung sports flooring systems are engineered for superior shock absorption and performance, providing a safe and durable surface for athletic activities.",

    authors: [{ name: "Prestige Timber Flooring" }],
    creator: "Prestige Timber Flooring",
    publisher: "Prestige Timber Flooring",
    openGraph: {
        title: "Prestige Timber Flooring",
        description:
            "Sprung sports flooring systems are engineered for superior shock absorption and performance, providing a safe and durable surface for athletic activities.",
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
import SprungSportFloors from './SprungSportFloors'

const page = () => {
    return (
        <div>
            <SprungSportFloors />
        </div>
    )
}

export default page