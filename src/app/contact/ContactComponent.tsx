import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeroBanner from "@/components/ui/HeroBanner";
import Banner_Image from "../../../public/assets/img/bannerimage1.webp";
import FaqComponent from "@/sections/Faq";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
} from "react-icons/fa";

const ContactComponent = () => {
    return (
        <div>
            <HeroBanner
                backgroundImage={Banner_Image.src}
                title="Let’s Connect – We’re Ready to Assist You"
                description="Fill out the form below or reach out via email or phone. Our team will get back to you as soon as possible."
                points={[
                    "Expert installation, flawless finishes",
                    "Enhancing spaces with premium timber flooring",
                    "Flooring excellence, delivered with expertise",
                ]}
            />

            <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-12 sm:py-16 flex flex-col gap-12">
                {/* INFO BAR */}
                <div className="flex flex-col lg:flex-row gap-6 rounded-md border border-gray-300 p-6">
                    <div className="flex-1 flex items-center gap-3">
                        <FaMapMarkerAlt className="text-gray-600" />
                        <span>Sydney, Australia</span>
                    </div>

                    <div className="flex-1 flex items-center gap-3">
                        <FaPhoneAlt className="text-gray-600" />
                        <Link href="tel:0414645200" className="hover:underline">
                            0414 645 200
                        </Link>
                    </div>

                    <div className="flex-1 flex items-center gap-3">
                        <FaEnvelope className="text-gray-600" />
                        <Link href="mailto:info@prestigetimber.com" className="hover:underline">
                            info@prestigetimber.com
                        </Link>
                    </div>

                    <div className="flex-1 flex items-center lg:justify-end gap-4">
                        {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, index) => (
                            <Link
                                key={index}
                                href="#"
                                className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                            >
                                <Icon className="w-4 h-4 text-gray-700" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* FORM + IMAGE */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
                    {/* FORM */}
                    <div className="flex flex-col gap-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        />

                        <textarea
                            rows={5}
                            placeholder="Your Message"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
                        >
                            Send Message
                        </button>
                    </div>

                    {/* IMAGE */}
                    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-full rounded-md overflow-hidden">
                        <Image
                            src={Banner_Image}
                            alt="Contact us"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* MAP */}
                <div className="w-full">
                    <iframe
                        title="Location Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.353470808904!2d151.20929531521062!3d-33.86881998065602!2m3!1f0!2f0!3m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b1d7b4f8e8f5%3A0x5045675218ceed0!2sSydney!5e0!3m2!1sen!2sau!4v1670000000000"
                        className="w-full h-72 sm:h-96 rounded-md border-0"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </section>

            {/* FAQ */}
            <FaqComponent />
        </div>
    );
};

export default ContactComponent;