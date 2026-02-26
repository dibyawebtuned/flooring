import type { Metadata } from "next";

export const metadata: Metadata = {
    title: " Decking Solutions | Prestige Timber Flooring",
    description:
        "A professionally installed deck transforms outdoor spaces into functional and stylish living areas.",

    authors: [{ name: "Prestige Timber Flooring" }],
    creator: "Prestige Timber Flooring",
    publisher: "Prestige Timber Flooring",
    openGraph: {
        title: "Prestige Timber Flooring",
        description:
            "A professionally installed deck transforms outdoor spaces into functional and stylish living areas.",
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
import DeckingComponent from './DeckingComponent'

const page = () => {
    return (
        <div>
            <DeckingComponent />
        </div>
    )
}

export default page