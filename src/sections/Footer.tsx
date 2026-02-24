import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-[#e9e7e3] text-[#2b2b2b]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
                    {/* Logo Section */}
                    <div className="space-y-6">
                        {/* <div>
                            <h2 className="text-3xl font-bold tracking-wide">
                                PRESTIGE
                            </h2>
                            <p className="text-sm tracking-[0.3em]">
                                TIMBER FLOORING
                            </p>
                        </div> */}

                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 border border-black rounded-md flex items-center justify-center hover:bg-black hover:text-white transition">
                                <Facebook size={18} />
                            </Link>

                            <Link href="#" className="w-10 h-10 border border-black rounded-md flex items-center justify-center hover:bg-black hover:text-white transition">
                                <Instagram size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Company */}
                    <div className="md:border-l md:pl-10 border-black/30">
                        <h3 className="text-xl font-semibold mb-6">Company</h3>
                        <ul className="space-y-4 text-gray-700">
                            <li><Link href="#">About us</Link></li>
                            <li><Link href="#">Projects</Link></li>
                            <li><Link href="#">FAQs</Link></li>
                            <li><Link href="#">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="md:border-l md:pl-10 border-black/30">
                        <h3 className="text-xl font-semibold mb-6">Services</h3>
                        <ul className="space-y-4 text-gray-700">
                            <li><Link href="#">Floor Sanding & Polishing</Link></li>
                            <li><Link href="#">Floor Preparation & Levelling</Link></li>
                            <li><Link href="#">Blackbutt timber floors</Link></li>
                            <li><Link href="#">Flooring Maintenance</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="md:border-l md:pl-10 border-black/30">
                        <h3 className="text-xl font-semibold mb-6">
                            Sign up to our newsletter
                        </h3>

                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter Your Email..."
                                className="w-full px-4 py-3 bg-[#dcdad6] outline-none rounded-l-md text-sm"
                            />
                            <button className="px-6 py-3 bg-[#6c6a68] text-white rounded-r-md hover:bg-black transition">
                                Sign Up
                            </button>
                        </div>

                        <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                            Stay updated with the latest timber flooring trends, tips, and exclusive offers.
                        </p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-black/30 mt-14 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-700">
                    <p>© Copyright Prestige Flooring. All Right Reserved.</p>
                    <p>Powered By <Link href="https://www.murphystechnology.com.au/"> Murphy Technology </Link></p>
                </div>
            </div>
        </footer>
    );
}