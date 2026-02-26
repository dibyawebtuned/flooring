import type { Metadata } from "next";

export const metadata: Metadata = {
    title: " About us | Prestige Timber Flooring",
    description:
        "Sydney’s trusted timber flooring specialists for over 20 years, delivering high-quality floors for homes, offices, and commercial spaces. We specialize in the supply, installation, sanding, polishing, staining, and maintenance",

    authors: [{ name: "Prestige Timber Flooring" }],
    creator: "Prestige Timber Flooring",
    publisher: "Prestige Timber Flooring",
    openGraph: {
        title: "Prestige Timber Flooring",
        description:
            "Sydney’s trusted timber flooring specialists for over 20 years, delivering high-quality floors for homes, offices, and commercial spaces. We specialize in the supply, installation, sanding, polishing, staining, and maintenance",
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
import AboutComponent from './AboutComponent'

const page = () => {
    return (
        <div>
            <AboutComponent />
        </div>
    )
}

export default page