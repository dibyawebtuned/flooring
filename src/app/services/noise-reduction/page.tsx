import type { Metadata } from "next";

export const metadata: Metadata = {
    title: " Noise Reduction Flooring Solutions | Prestige Timber Flooring",
    description:
        "Noise-reduction flooring solutions are designed to minimise sound transmission and enhance acoustic comfort in residential and commercial spaces.",

    authors: [{ name: "Prestige Timber Flooring" }],
    creator: "Prestige Timber Flooring",
    publisher: "Prestige Timber Flooring",
    openGraph: {
        title: "Prestige Timber Flooring",
        description:
            "Noise-reduction flooring solutions are designed to minimise sound transmission and enhance acoustic comfort in residential and commercial spaces.",
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
import NoiseReductionComponent from './NoiseReductionComponent'

const page = () => {
    return (
        <div>
            <NoiseReductionComponent />
        </div>
    )
}

export default page