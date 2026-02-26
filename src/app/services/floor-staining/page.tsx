import type { Metadata } from "next";

export const metadata: Metadata = {
    title: " Floor Staining Services | Prestige Timber Flooring",
    description:
        "Floor staining enhances the natural beauty of timber while allowing you to customise the colour tone to perfectly match your interior style. ",

    authors: [{ name: "Prestige Timber Flooring" }],
    creator: "Prestige Timber Flooring",
    publisher: "Prestige Timber Flooring",
    openGraph: {
        title: "Prestige Timber Flooring",
        description:
            "Floor staining enhances the natural beauty of timber while allowing you to customise the colour tone to perfectly match your interior style. ",
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
import FlooringStaining from './FlooringStaining'

const page = () => {
    return (
        <div>
            <FlooringStaining />
        </div>
    )
}

export default page