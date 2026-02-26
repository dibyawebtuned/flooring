import type { Metadata } from "next";

export const metadata: Metadata = {
    title: " Floor Sanding & Polishing | Prestige Timber Flooring",
    description:
        "Our professional floor sanding and polishing service restores tired, scratched, and worn timber floors back to their original beauty.",

    authors: [{ name: "Prestige Timber Flooring" }],
    creator: "Prestige Timber Flooring",
    publisher: "Prestige Timber Flooring",
    openGraph: {
        title: "Prestige Timber Flooring",
        description:
            "Our professional floor sanding and polishing service restores tired, scratched, and worn timber floors back to their original beauty.",
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
import FloorSandingPolishing from './FloorSandingPolishing'

const page = () => {
    return (
        <div>
            <FloorSandingPolishing />
        </div>
    )
}

export default page