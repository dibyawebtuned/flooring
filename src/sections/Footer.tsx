import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";
import Footer_Logo from "../../public/assets/img/footer_logo.png";

export default function Footer() {
    return (
        <footer className="w-full bg-[#e9e7e3] text-[#2b2b2b]">
            <div className="max-w-[1440px] mx-auto px-[80px] py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Logo Section */}
                    <div className="flex flex-col gap-5">
                        <Link href="/" className="w-[180px] md:w-[226px]">
                            <Image
                                src={Footer_Logo}
                                alt="Company Logo"
                                width={226}
                                height={53}
                                priority
                                className="w-full h-auto"
                            />
                        </Link>

                        <div className="flex gap-4">
                            <Link
                                href="#"
                                className="w-10 h-10 border border-black rounded-md flex items-center justify-center 
                                hover:bg-black hover:text-white transition">
                                <Facebook size={18} />
                            </Link>

                            <Link
                                href="#"
                                className="w-10 h-10 border border-black rounded-md flex items-center justify-center 
                                hover:bg-black hover:text-white transition">
                                <Instagram size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Company */}
                    <div className="sm:border-l sm:pl-6 lg:pl-10 border-black/30">
                        <h3 className="text-lg md:text-xl font-semibold mb-4">Company</h3>
                        <ul className="space-y-3 text-gray-700">
                            <li><Link href="#">About us</Link></li>
                            <li><Link href="#">Projects</Link></li>
                            <li><Link href="#">FAQs</Link></li>
                            <li><Link href="#">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="sm:border-l sm:pl-6 lg:pl-10 border-black/30">
                        <h3 className="text-lg md:text-xl font-semibold mb-4">Services</h3>
                        <ul className="space-y-3 text-gray-700">
                            <li><Link href="#">Floor Sanding & Polishing</Link></li>
                            <li><Link href="#">Floor Preparation & Levelling</Link></li>
                            <li><Link href="#">Blackbutt Timber Floors</Link></li>
                            <li><Link href="#">Flooring Maintenance</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="sm:border-l sm:pl-6 lg:pl-10 border-black/30">
                        <h3 className="text-lg md:text-xl font-semibold mb-4">
                            Sign up to our newsletter
                        </h3>

                        <div className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Enter Your Email..."
                                className="w-full px-4 py-3 bg-[#dcdad6] outline-none rounded-md sm:rounded-l-md sm:rounded-r-none text-sm"
                            />
                            <button
                                className="px-6 py-3 bg-[#6c6a68] text-white rounded-md sm:rounded-r-md sm:rounded-l-none 
                                hover:bg-black transition"
                            >
                                Sign Up
                            </button>
                        </div>

                        <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                            Stay updated with the latest timber flooring trends, tips, and exclusive offers.
                        </p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-black/30 mt-12 pt-6 flex flex-col sm:flex-row 
                    justify-between text-sm text-gray-700 gap-2">
                    <p>© Copyright Prestige Flooring. All Right Reserved.</p>
                    <p>
                        Powered By{" "}
                        <Link href="https://www.murphystechnology.com.au/">
                            Murphy Technology
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}