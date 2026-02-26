"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Logo from "../../../public/assets/img/Logo.png";
import { ChevronDown, Phone, Mail, Send, Menu, X, Square, Hammer, Layers, Wrench, Paintbrush, LayoutGrid, Grid2x2, Volume2, Trees, Brush, Layers3, Trophy } from "lucide-react";

// Extracted services data for cleaner mapping and easy responsive layout
const servicesCol1 = [
    { name: "Solid Timber flooring", desc: "This residential project features premium Blackbutt solid timber flooring", icon: Square, href: "/services/solid-timber-flooring" },
    { name: "Floor Sanding & Polishing", desc: "Restore and refine your floors with professional sanding and polishing.", icon: Hammer, href: "/services/floor-sanding-polishing" },
    { name: "Floor Preparation & Levelling", desc: "Ensure a smooth, stable foundation with professional floor preparation.", icon: Layers, href: "/services/floor-preparation-levelling" },
    { name: "Flooring Maintenance", desc: "Keep your floors looking their best with routine maintenance.", icon: Wrench, href: "/services/flooring-maintenance" },
    { name: "Floor Staining", desc: "Enhance and protect your floors with professional staining that adds rich color.", icon: Paintbrush, href: "/services/floor-staining" },
    { name: "Floating Floor", desc: "We ensure your sub-floor, whether concrete or timber, is perfectly level.", icon: LayoutGrid, href: "/services/floating-floor" },
    { name: "Laminate", desc: "Laminate flooring offers a durable, wear-resistant surface ideal for busy homes.", icon: Square, href: "/services/laminate" },
];

const servicesCol2 = [
    { name: "Parquetry", desc: "Add timeless elegance with expertly installed parquetry flooring.", icon: LayoutGrid, href: "/services/parquetry" },
    { name: "Decking", desc: "Enhance your outdoor spaces with beautiful timber decking.", icon: Grid2x2, href: "/services/decking" },
    { name: "Noise Reduction", desc: "Improve comfort and acoustics with flooring solutions designed to reduce noise.", icon: Volume2, href: "/services/noise-reduction" },
    { name: "Blackbutt timber floors", desc: "Achieve a warm, natural look with Blackbutt timber flooring.", icon: Trees, href: "/services/blackbutt-timber-floors" },
    { name: "Limewashing", desc: "Create a soft, contemporary finish with limewashed timber floors.", icon: Brush, href: "/services/limewashing" },
    { name: "Hybrid Flooring", desc: "Enjoy the look of timber with the durability of advanced hybrid flooring.", icon: Layers3, href: "/services/hybrid-flooring" },
    { name: "Sprung Sports Floors", desc: "Deliver performance and safety with professionally installed sprung sports floors.", icon: Trophy, href: "/services/sprung-sports-floors" },
];

export default function Navbar() {
    const [openDesktop, setOpenDesktop] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
    };

    return (
        <header className="absolute top-0 left-0 w-full z-50 text-white">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-[40px] xl:px-[80px] h-20 md:h-24 flex items-center justify-between">
                {/* LOGO */}
                <Link href="/" className="w-[180px] md:w-[226px] h-auto" onClick={closeMobileMenu}>
                    <Image src={Logo} alt="Company Logo" width={226} height={53} priority className="w-full h-auto" />
                </Link>

                {/* DESKTOP NAVIGATION */}
                <nav className="hidden lg:flex items-center gap-8 text-[16px] text-[#F6F4EF] relative">
                    <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>

                    {/* Desktop Services Dropdown */}
                    <div className="relative group"
                        onMouseEnter={() => setOpenDesktop(true)}
                        onMouseLeave={() => setOpenDesktop(false)}>
                        <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors py-2">
                            <span>Services</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDesktop ? "rotate-180" : ""}`} />
                        </div>

                        {/* Dropdown Menu */}
                        <div
                            className={`absolute left-[-200px] xl:left-[-150px] mt-2 w-[600px] bg-white text-black rounded-lg shadow-xl transition-all duration-300 flex ${openDesktop
                                ? "opacity-100 visible translate-y-0"
                                : "opacity-0 invisible -translate-y-2"
                                }`}>
                            {/* Column 1 */}
                            <div className="flex-1 py-4 border-r border-gray-100">
                                {servicesCol1.map((service, idx) => (
                                    <Link key={idx} href={service.href} className="flex items-start gap-3 px-5 py-2.5 hover:bg-gray-50 transition-colors group/item">
                                        <service.icon className="w-5 h-5 text-[#111] shrink-0 mt-0.5 group-hover/item:text-[#7e704e] transition-colors" />
                                        <div>
                                            <span className="block font-medium space-grotesk text-[#111] text-sm leading-tight mb-1">{service.name}</span>
                                            <p className="text-[10px] font-inter text-[#9A9A9A] leading-snug">{service.desc}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            {/* Column 2 */}
                            <div className="flex-1 py-4">
                                {servicesCol2.map((service, idx) => (
                                    <Link key={idx} href={service.href} className="flex items-start gap-3 px-5 py-2.5 hover:bg-gray-50 transition-colors group/item">
                                        <service.icon className="w-5 h-5 text-[#111] shrink-0 mt-0.5 group-hover/item:text-[#7e704e] transition-colors" />
                                        <div>
                                            <span className="block font-medium space-grotesk text-[#111] text-sm leading-tight mb-1">{service.name}</span>
                                            <p className="text-[10px] font-inter text-[#9A9A9A] leading-snug">{service.desc}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
                    <Link href="/project" className="hover:text-gray-300 transition-colors">Projects</Link>
                    <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
                </nav>

                {/* DESKTOP RIGHT SIDE CONTACT */}
                <div className="hidden lg:flex items-center gap-6 text-[16px]">
                    <Link href="tel:0414645200" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
                        <Phone className="w-4 h-4" />
                        0414 645 200
                    </Link>

                    <div className="flex gap-2">
                        <a href="mailto:info@prestigetimber.com" className="w-9 h-9 border border-white/50 hover:border-white hover:bg-white/10 transition-all rounded flex items-center justify-center">
                            <Mail className="w-4 h-4" />
                        </a>
                        <Link href="/contact" className="w-9 h-9 border border-white/50 hover:border-white hover:bg-white/10 transition-all rounded flex items-center justify-center">
                            <Send className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* MOBILE MENU TOGGLE BUTTON */}
                <button
                    className="lg:hidden p-2 text-white hover:bg-white/10 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu">
                    {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
            </div>

            {/* MOBILE NAVIGATION MENU (Drawer) */}
            <div className={`lg:hidden fixed inset-0 top-[80px] bg-[#111111] overflow-y-auto transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <nav className="flex flex-col px-6 py-8 gap-6 text-lg">
                    <Link href="/" onClick={closeMobileMenu} className="border-b border-gray-800 pb-2">Home</Link>

                    {/* Mobile Services Accordion */}
                    <div className="flex flex-col border-b border-gray-800 pb-2">
                        <button
                            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                            className="flex items-center justify-between w-full text-left"
                        >
                            <span>Services</span>
                            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`} />
                        </button>

                        {/* Mobile Accordion Content */}
                        <div className={`flex flex-col gap-4 overflow-hidden transition-all duration-300 ease-in-out ${isMobileServicesOpen ? 'max-h-[1000px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                            {[...servicesCol1, ...servicesCol2].map((service, idx) => (
                                <Link key={idx} href={service.href} onClick={closeMobileMenu} className="flex items-center gap-3 pl-2 group">
                                    <service.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{service.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link href="/about" onClick={closeMobileMenu} className="border-b border-gray-800 pb-2">About</Link>
                    <Link href="/project" onClick={closeMobileMenu} className="border-b border-gray-800 pb-2">Projects</Link>
                    <Link href="/contact" onClick={closeMobileMenu} className="border-b border-gray-800 pb-2">Contact</Link>

                    {/* Mobile Contact Info */}
                    <div className="mt-6 flex flex-col gap-6">
                        <Link href="tel:0414645200" className="flex items-center gap-3 text-gray-300">
                            <Phone className="w-5 h-5" />
                            0414 645 200
                        </Link>
                        <div className="flex gap-4">
                            <a href="mailto:info@example.com" className="w-10 h-10 border border-gray-700 rounded flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-colors">
                                <Mail className="w-5 h-5" />
                            </a>
                            <Link href="/contact" onClick={closeMobileMenu} className="w-10 h-10 border border-gray-700 rounded flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-colors">
                                <Send className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}