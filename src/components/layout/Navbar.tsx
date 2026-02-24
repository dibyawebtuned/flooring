"use client";

import Link from "next/link";
import { ChevronDown, Phone, Mail, Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Logo from "../../../public/assets/img/Logo.png";

import { Square, Hammer, Layers, Wrench, Paintbrush, LayoutGrid, Grid2x2, Volume2, Trees, Brush, Layers3, Trophy } from "lucide-react";


export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 w-full z-50 text-white">
            <div className="max-w-[1440px] mx-auto px-8 md:px-[80px] h-24 flex items-center justify-between">
                {/* LOGO */}
                <div className="w-[226px] h-[53px]">
                    <Image src={Logo} alt="Company Logo" width={226} height={53} priority />
                </div>

                {/* Navigation */}
                <nav className="hidden lg:flex items-center gap-8 text-[16px] text-[#F6F4EF] relative">
                    <Link href="/">Home</Link>
                    {/* Services Dropdown */}
                    <div className="relative group"
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}>
                        <div className="flex items-center gap-1 cursor-pointer">
                            <span>Services</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                        </div>

                        {/* Dropdown Menu */}
                        <div
                            className={`absolute left-0 mt-4 w-[558px] bg-white text-black rounded-md shadow-lg transition-all duration-300 flex ${open
                                ? "opacity-100 visible translate-y-0"
                                : "opacity-0 invisible -translate-y-2"
                                }`}>
                            <div className="flex-1 py-3">

                                <Link href="/services/solid-timber-flooring" className="flex items-start gap-3 px-5 py-2 hover:bg-gray-100 transition-colors text-gray-800">
                                    <div className="pt-2">
                                        <Square className="w-5 h-5 text-[#111111] shrink-0" />
                                    </div>
                                    <div>
                                        <span className="font-medium space-grotesk space-grotesk-600 text-[#111111]">
                                            Solid Timber flooring
                                        </span>
                                        <p className="text-[10px] font-inter inter-500 text-[#9A9A9A]">
                                            This residential project features premium Blackbutt solid timber flooring
                                        </p>
                                    </div>
                                </Link>

                                <Link href="/services/floor-sanding-polishing" className="flex items-start gap-3 px-5 py-2 hover:bg-gray-100 transition-colors text-gray-800">
                                    <div className="pt-2">
                                        <Hammer className="w-5 h-5 text-[#111111] shrink-0" />
                                    </div>
                                    <div>
                                        <span className="font-medium space-grotesk space-grotesk-600 text-[#111111]">
                                            Floor Sanding & Polishing
                                        </span>
                                        <p className="text-[10px] font-inter inter-500 text-[#9A9A9A]">
                                            Restore and refine your floors with professional sanding and polishing.
                                        </p>
                                    </div>
                                </Link>

                                <Link href="/services/floor-preparation-levelling" className="flex items-start gap-3 px-5 py-2 hover:bg-gray-100 transition-colors text-gray-800">
                                    <div className="pt-2">
                                        <Layers className="w-5 h-5 text-[#111111] shrink-0" />
                                    </div>
                                    <div>
                                        <span className="font-medium space-grotesk space-grotesk-600 text-[#111111]">
                                            Floor Preparation & Levelling
                                        </span>
                                        <p className="text-[10px] font-inter inter-500 text-[#9A9A9A]">
                                            Ensure a smooth, stable foundation with professional floor preparation and levelling.
                                        </p>
                                    </div>
                                </Link>

                                <Link href="/services/flooring-maintenance" className="flex items-start gap-3 px-5 py-2 hover:bg-gray-100 transition-colors text-gray-800">
                                    <div className="pt-2">
                                        <Wrench className="w-5 h-5 text-[#111111] shrink-0" />
                                    </div>
                                    <div>
                                        <span className="font-medium space-grotesk space-grotesk-600 text-[#111111]">
                                            Flooring Maintenance
                                        </span>
                                        <p className="text-[10px] font-inter inter-500 text-[#9A9A9A]">
                                            Keep your floors looking their best with routine maintenance designed to preserve..
                                        </p>
                                    </div>
                                </Link>

                                <Link href="/services/floor-staining" className="flex items-start gap-3 px-5 py-2 hover:bg-gray-100 transition-colors text-gray-800">
                                    <div className="pt-2">
                                        <Paintbrush className="w-5 h-5 text-[#111111] shrink-0" />
                                    </div>
                                    <div>
                                        <span className="font-medium space-grotesk space-grotesk-600 text-[#111111]">
                                            Floor Staining
                                        </span>
                                        <p className="text-[10px] font-inter inter-500 text-[#9A9A9A]">
                                            Enhance and protect your floors with professional staining that adds rich color,
                                        </p>
                                    </div>
                                </Link>

                                <Link href="/services/floating-floor" className="flex items-start gap-3 px-5 py-2 hover:bg-gray-100 transition-colors text-gray-800">
                                    <div className="pt-2">
                                        <LayoutGrid className="w-5 h-5 text-[#111111] shrink-0" />
                                    </div>
                                    <div>
                                        <span className="font-medium space-grotesk space-grotesk-600 text-[#111111]">
                                            Floating Floor
                                        </span>
                                        <p className="text-[10px] font-inter inter-500 text-[#9A9A9A]">
                                            We ensure your sub-floor, whether concrete or timber, is perfectly level before installation.
                                        </p>
                                    </div>
                                </Link>

                                <Link href="/services/laminate" className="flex items-start gap-3 px-5 py-2 hover:bg-gray-100 transition-colors text-gray-800">
                                    <div className="pt-2">
                                        <Square className="w-5 h-5 text-[#111111] shrink-0" />
                                    </div>
                                    <div>
                                        <span className="font-medium space-grotesk space-grotesk-600 text-[#111111]">
                                            Laminate
                                        </span>
                                        <p className="text-[10px] font-inter inter-500 text-[#9A9A9A]">
                                            Laminate flooring offers a durable, wear-resistant surface ideal for busy homes,
                                        </p>
                                    </div>
                                </Link>
                            </div>

                            <div className="flex-1 py-3">
                                <Link href="/services/parquetry" className="flex items-start gap-3 px-5 py-2 hover:bg-gray-100 transition-colors text-gray-800">
                                    <div className="pt-2">
                                        <LayoutGrid className="w-5 h-5 text-[#111111] shrink-0" />
                                    </div>
                                    <div>
                                        <span className="font-medium space-grotesk space-grotesk-600 text-[#111111]">
                                            Parquetry
                                        </span>
                                        <p className="text-[10px] font-inter inter-500 text-[#9A9A9A]">
                                            Add timeless elegance with expertly installed parquetry flooring that combines intricate
                                        </p>
                                    </div>
                                </Link>

                                <Link href="/services/floor-sanding-polishing" className="flex items-start gap-3 px-5 py-2 hover:bg-gray-100 transition-colors text-gray-800">
                                    <div className="pt-2">
                                        <Grid2x2 className="w-5 h-5 text-[#111111] shrink-0" />
                                    </div>
                                    <div>
                                        <span className="font-medium space-grotesk space-grotesk-600 text-[#111111]">
                                            Decking
                                        </span>
                                        <p className="text-[10px] font-inter inter-500 text-[#9A9A9A]">
                                            Enhance your outdoor spaces with beautiful timber decking.
                                        </p>
                                    </div>
                                </Link>

                                <Link href="/services/floor-sanding-polishing" className="flex items-start gap-3 px-5 py-2 hover:bg-gray-100 transition-colors text-gray-800">
                                    <div className="pt-2">
                                        <Volume2 className="w-5 h-5 text-[#111111] shrink-0" />
                                    </div>
                                    <div>
                                        <span className="font-medium space-grotesk space-grotesk-600 text-[#111111]">
                                            Noise Reduction
                                        </span>
                                        <p className="text-[10px] font-inter inter-500 text-[#9A9A9A]">
                                            Improve comfort and acoustics with flooring solutions designed to reduce noise.
                                        </p>
                                    </div>
                                </Link>

                                <Link href="/services/floor-sanding-polishing" className="flex items-start gap-3 px-5 py-2 hover:bg-gray-100 transition-colors text-gray-800">
                                    <div className="pt-2">
                                        <Trees className="w-5 h-5 text-[#111111] shrink-0" />
                                    </div>
                                    <div>
                                        <span className="font-medium space-grotesk space-grotesk-600 text-[#111111]">
                                            Blackbutt timber floors
                                        </span>
                                        <p className="text-[10px] font-inter inter-500 text-[#9A9A9A]">
                                            Achieve a warm, natural look with Blackbutt timber flooring known for its strength,
                                        </p>
                                    </div>
                                </Link>

                                <Link href="/services/floor-sanding-polishing" className="flex items-start gap-3 px-5 py-2 hover:bg-gray-100 transition-colors text-gray-800">
                                    <div className="pt-2">
                                        <Brush className="w-5 h-5 text-[#111111] shrink-0" />
                                    </div>
                                    <div>
                                        <span className="font-medium space-grotesk space-grotesk-600 text-[#111111]">
                                            Limewashing
                                        </span>
                                        <p className="text-[10px] font-inter inter-500 text-[#9A9A9A]">
                                            Create a soft, contemporary finish with limewashed timber floors that enhance..
                                        </p>
                                    </div>
                                </Link>

                                <Link href="/services/floor-sanding-polishing" className="flex items-start gap-3 px-5 py-2 hover:bg-gray-100 transition-colors text-gray-800">
                                    <div className="pt-2">
                                        <Layers3 className="w-5 h-5 text-[#111111] shrink-0" />
                                    </div>
                                    <div>
                                        <span className="font-medium space-grotesk space-grotesk-600 text-[#111111]">
                                            Hybrid Flooring
                                        </span>
                                        <p className="text-[10px] font-inter inter-500 text-[#9A9A9A]">
                                            Enjoy the look of timber with the durability of advanced hybrid flooring.
                                        </p>
                                    </div>
                                </Link>

                                <Link href="/services/floor-sanding-polishing" className="flex items-start gap-3 px-5 py-2 hover:bg-gray-100 transition-colors text-gray-800">
                                    <div className="pt-2">
                                        <Trophy className="w-5 h-5 text-[#111111] shrink-0" />
                                    </div>
                                    <div>
                                        <span className="font-medium space-grotesk space-grotesk-600 text-[#111111]">
                                            Sprung Sports Floors
                                        </span>
                                        <p className="text-[10px] font-inter inter-500 text-[#9A9A9A]">
                                            Deliver performance and safety with professionally installed sprung sports floors
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link href="/about">About</Link>
                    <Link href="/project">Projects</Link>
                    <Link href="/contact">Contact</Link>
                </nav>

                {/* Right Side */}
                <div className="hidden md:flex items-center gap-6 text-[16px]">
                    <Link href="tel:0414645200" className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        0414 645 200
                    </Link>

                    <div className="flex gap-2">
                        <a className="w-9 h-9 border border-white rounded flex items-center justify-center">
                            <Mail className="w-4 h-4" />
                        </a>
                        <a className="w-9 h-9 border border-white rounded flex items-center justify-center">
                            <Send className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}