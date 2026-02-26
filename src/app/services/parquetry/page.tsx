import type { Metadata } from "next";

export const metadata: Metadata = {
    title: " Parquetry Flooring Solutions | Prestige Timber Flooring",
    description:
        "Parquetry flooring offers a timeless and elegant design that enhances the character of any interior space.",

    authors: [{ name: "Prestige Timber Flooring" }],
    creator: "Prestige Timber Flooring",
    publisher: "Prestige Timber Flooring",
    openGraph: {
        title: "Prestige Timber Flooring",
        description:
            "Parquetry flooring offers a timeless and elegant design that enhances the character of any interior space.",
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
import ParquetryComponent from './ParquetryComponent'

const page = () => {
    return (
        <div>
            <ParquetryComponent />
        </div>
    )
}

export default page