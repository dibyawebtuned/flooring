import type { Metadata } from "next";

export const metadata: Metadata = {
    title: " Limewashing Services | Prestige Timber Flooring",
    description:
        "Limewashing creates a soft, natural finish that enhances the texture and character of timber flooring while delivering a contemporary, light-toned aesthetic. ",

    authors: [{ name: "Prestige Timber Flooring" }],
    creator: "Prestige Timber Flooring",
    publisher: "Prestige Timber Flooring",
    openGraph: {
        title: "Prestige Timber Flooring",
        description:
            "Limewashing creates a soft, natural finish that enhances the texture and character of timber flooring while delivering a contemporary, light-toned aesthetic. ",
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
import LimewashingComponent from './LimewashingComponent'

const page = () => {
    return (
        <div>
            <LimewashingComponent />
        </div>
    )
}

export default page