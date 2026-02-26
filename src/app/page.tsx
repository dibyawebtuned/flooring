import Image from "next/image";
import type { Metadata } from "next";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Service from "@/sections/Service";
import Project from "@/sections/Project";
import Testimonials from "@/sections/Testimonial";
import Banner from "@/sections/Banner"
import FaqComponent from "@/sections/Faq";
import Footer from "@/sections/Footer";



export const metadata: Metadata = {
  title: "Prestige Timber Flooring",
  description:
    "Sydney’s trusted timber flooring specialists for over 20 years, delivering high-quality floors for homes, offices, and commercial spaces. We specialize in the supply, installation, sanding, polishing, staining, and maintenance",
  authors: [{ name: "Prestige Timber Flooring" }],
  creator: "Prestige Timber Flooring",
  publisher: "Prestige Timber Flooring",
  // metadataBase: new URL("https://gratefultoursandtransportation.com/"),
  openGraph: {
    title: "Prestige Timber Flooring",
    description:
      "Sydney’s trusted timber flooring specialists for over 20 years, delivering high-quality floors for homes, offices, and commercial spaces. We specialize in the supply, installation, sanding, polishing, staining, and maintenance",
    // url: "https://gratefultoursandtransportation.com/",
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
  // twitter: {
  //       card: "summary_large_image",
  //       title: "Grateful Tours & Transportation | Car Rental & Travel Services in Nepal",
  //       description:
  //             "Book reliable and comfortable cars, SUVs, and vans with Grateful Tours & Transportation. Trusted for safe, professional, and on-time travel services in Nepal.",
  //       images: ["/og-image.jpg"],
  //       creator: "@GratefulTours",
  // },
  // icons: {
  //       icon: "/favicon.ico",
  //       shortcut: "/favicon.ico",
  //       apple: "/apple-touch-icon.png",
  // },
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

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <Project />
      <Testimonials />
      <Banner />
      <FaqComponent />
    </div>
  );
}