"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Logo from "../../../public/assets/img/Logo.png";
import ScrollLogo from "../../../public/assets/img/footer_logo.png";
import { ChevronDown, Phone, Mail, Send, Menu, X, Square, Hammer, Layers, Wrench, Paintbrush, LayoutGrid, Grid2x2, Volume2, Trees, Brush, Layers3, Trophy } from "lucide-react";

// Extracted services data for cleaner mapping and easy responsive layout
const servicesCol1 = [
    // One
    { name: "Installation", desc: "This residential project features premium Blackbutt solid timber flooring", icon: Square, href: "/services/installation" },
    // Two
    { name: "Floor Sanding & Polishing", desc: "Restore and refine your floors with professional sanding and polishing.", icon: Hammer, href: "/services/floor-sanding-polishing" },
    // Three
    { name: "Floor Staining", desc: "Enhance and protect your floors with professional staining that adds rich color.", icon: Paintbrush, href: "/services/floor-staining" },
    // Four
    { name: "Limewashing", desc: "Create a soft, contemporary finish with limewashed timber floors.", icon: Brush, href: "/services/limewashing" },
    // Five
    { name: "Solid Tongue and Groove Flooring", desc: "This residential project features premium Blackbutt solid timber flooring", icon: Square, href: "/services/solid-timber-flooring" },
    // Six
    { name: "Parquetry", desc: "Add timeless elegance with expertly installed parquetry flooring.", icon: LayoutGrid, href: "/services/parquetry" },
];

const servicesCol2 = [
    // Seven
    { name: "Engineered Flooring", desc: "Add timeless elegance with expertly installed parquetry flooring.", icon: LayoutGrid, href: "/services/parquetry" },
    // Eight
    { name: "Hybrid Flooring", desc: "Enjoy the look of timber with the durability of advanced hybrid flooring.", icon: Layers3, href: "/services/hybrid-flooring" },
    // Nine
    { name: "Laminate", desc: "Laminate flooring offers a durable, wear-resistant surface ideal for busy homes.", icon: Square, href: "/services/laminate" },
    // Ten
    { name: "Decking", desc: "Enhance your outdoor spaces with beautiful timber decking.", icon: Grid2x2, href: "/services/decking" },
    // Eleven
    { name: "Sprung Sports Floors", desc: "Deliver performance and safety with professionally installed sprung sports floors.", icon: Trophy, href: "/services/sprung-sports-floors" },
    // Twelve
    { name: "Flooring Maintenance", desc: "Keep your floors looking their best with routine maintenance.", icon: Wrench, href: "/services/flooring-maintenance" },
];

export default function Navbar() {
    const [openDesktop, setOpenDesktop] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-white shadow-lg text-black"
                : "bg-transparent text-white"
                }`}
        >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-[40px] xl:px-[80px] h-20 md:h-24 flex items-center justify-between">

                {/* LOGO WITH SMOOTH FADE SWITCH */}
                <Link
                    href="/"
                    className="relative w-[180px] md:w-[226px] h-[53px]"
                    onClick={closeMobileMenu}
                >
                    {/* Default Logo (Top of page) */}
                    <Image
                        src={Logo}
                        alt="Company Logo"
                        fill
                        priority
                        className={`object-contain transition-opacity duration-300 ${isScrolled ? "opacity-0" : "opacity-100"
                            }`}
                    />

                    {/* Scrolled Logo */}
                    <Image
                        src={ScrollLogo}
                        alt="Company Logo"
                        fill
                        priority
                        className={`object-contain transition-opacity duration-300 ${isScrolled ? "opacity-100" : "opacity-0"
                            }`}
                    />
                </Link>

                {/* DESKTOP NAVIGATION */}
                <nav className="hidden lg:flex items-center gap-8 text-[16px] relative">
                    <Link href="/" className="hover:opacity-70 transition-opacity">
                        Home
                    </Link>

                    {/* Services Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setOpenDesktop(true)}
                        onMouseLeave={() => setOpenDesktop(false)}
                    >
                        <div className="flex items-center gap-1 cursor-pointer py-2">
                            <span>Services</span>
                            <ChevronDown
                                className={`w-4 h-4 transition-transform duration-300 ${openDesktop ? "rotate-180" : ""
                                    }`}
                            />
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

                    <Link href="/about" className="hover:opacity-70 transition-opacity">
                        About
                    </Link>
                    <Link href="/project" className="hover:opacity-70 transition-opacity">
                        Projects
                    </Link>
                    <Link href="/contact" className="hover:opacity-70 transition-opacity">
                        Contact
                    </Link>
                </nav>

                {/* DESKTOP RIGHT SIDE */}
                <div className="hidden lg:flex items-center gap-6 text-[16px]">
                    <Link
                        href="tel:0414645200"
                        className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                    >
                        <Phone className="w-4 h-4" />
                        0414 645 200
                    </Link>

                    <div className="flex gap-2">
                        <a
                            href="mailto:info@prestigetimber.com"
                            className="w-9 h-9 border border-current/40 hover:bg-current/10 transition-all rounded flex items-center justify-center"
                        >
                            <Mail className="w-4 h-4" />
                        </a>
                        <Link
                            href="/contact"
                            className="w-9 h-9 border border-current/40 hover:bg-current/10 transition-all rounded flex items-center justify-center"
                        >
                            <Send className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    className="lg:hidden p-2 hover:bg-current/10 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? (
                        <X className="w-7 h-7" />
                    ) : (
                        <Menu className="w-7 h-7" />
                    )}
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