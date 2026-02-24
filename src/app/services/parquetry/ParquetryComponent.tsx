import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import HeroBanner from '@/components/ui/HeroBanner';
import Banner_Image from "../../../../public/assets/img/bannerimage1.webp";
import { ClipboardCheck, ClipboardList, Wrench, Phone } from "lucide-react";
import Image_One from "../../../../public/assets/img/8.jpeg";
import Image_Two from "../../../../public/assets/img/7.jpeg";
import Image_Three from "../../../../public/assets/img/4.jpeg";
import Image_Four from "../../../../public/assets/img/3.jpeg";
import Image_Five from "../../../../public/assets/img/2.jpeg";

const ParquetryComponent = () => {
    return (
        <div>
            {/* HERO BANNER */}
            <HeroBanner
                backgroundImage={Banner_Image.src}
                title="Elegant Parquetry Flooring Solutions"
                description="Enhance your space with timeless parquetry flooring that blends intricate patterns with premium craftsmanship. Our parquetry solutions deliver a sophisticated aesthetic, exceptional durability, and a classic design that adds character and value to any interior."
            />


            <section className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-8 md:py-12'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10'>

                    {/* LEFT CONTENT */}
                    <div className='lg:col-span-8 space-y-8 md:space-y-10'>

                        {/* MAIN IMAGE */}
                        <div className='relative h-[250px] sm:h-[300px] md:h-[360px] rounded-xl overflow-hidden shadow-md'>
                            <Image
                                src={Image_Three}
                                alt="Solid Timber Flooring"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 66vw"
                            />
                        </div>

                        {/* CONTENT */}
                        <div className='space-y-4'>
                            <h4 className='text-xl sm:text-2xl lg:text-3xl font-semibold space-grotesk'>
                                Benefits of Parquetry Flooring
                            </h4>

                            <p className='text-[#464646] text-sm sm:text-base leading-relaxed'>
                                Parquetry flooring offers a timeless and elegant design that enhances the character
                                of any interior space. With its intricate patterns and premium craftsmanship,
                                parquetry delivers both aesthetic appeal and long-lasting durability. It is an
                                excellent choice for homeowners seeking a sophisticated flooring solution that
                                combines classic beauty with modern performance.
                            </p>

                            <ul className="space-y-2 text-[#464646] text-sm sm:text-base">
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-600">✔</span> Elegant & Timeless Design
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-600">✔</span> Adds Character & Value
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-600">✔</span> Durable & Long-Lasting Performance
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-600">✔</span> Wide Range of Patterns
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-600">✔</span> Suitable for Residential & Commercial Spaces
                                </li>
                            </ul>
                        </div>

                        {/* IMAGES GRID */}
                        <div className='flex flex-col md:flex-row gap-5'>
                            <div className='relative w-full md:w-2/5 h-[250px] md:h-[300px] rounded-xl overflow-hidden'>
                                <Image
                                    src={Image_Four}
                                    alt="Timber flooring close up"
                                    fill
                                    className='object-cover'
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                />
                            </div>
                            <div className='relative w-full md:w-3/5 h-[250px] md:h-[300px] rounded-xl overflow-hidden'>
                                <Image
                                    src={Image_Five}
                                    alt="Finished timber flooring room"
                                    fill
                                    className='object-cover'
                                    sizes="(max-width: 768px) 100vw, 60vw"
                                />
                            </div>
                        </div>

                        {/* CONTENT BOXES */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-5'>
                            <div className='flex flex-col gap-3 rounded-xl bg-gray-50/50 p-4 sm:p-0 sm:bg-transparent'>
                                <ClipboardCheck className="h-8 w-8 sm:h-10 sm:w-10 text-[#111111]" />
                                <div>
                                    <h5 className='text-base sm:text-lg font-semibold space-grotesk'>
                                        Design Consultation
                                    </h5>
                                    <p className='text-sm text-[#555] mt-1'>
                                        We assist you in selecting the ideal parquetry pattern and finish to complement
                                        your interior style and design vision.
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-col gap-3 rounded-xl bg-gray-50/50 p-4 sm:p-0 sm:bg-transparent'>
                                <ClipboardList className="h-8 w-8 sm:h-10 sm:w-10 text-[#111111]" />
                                <div>
                                    <h5 className='text-base sm:text-lg font-semibold space-grotesk'>
                                        Subfloor Preparation
                                    </h5>
                                    <p className='text-sm text-[#555] mt-1'>
                                        Proper subfloor preparation ensures stability and a flawless installation
                                        for long-term durability and performance.
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-col gap-3 rounded-xl bg-gray-50/50 p-4 sm:p-0 sm:bg-transparent sm:col-span-2 md:col-span-1'>
                                <Wrench className="h-8 w-8 sm:h-10 sm:w-10 text-[#111111]" />
                                <div>
                                    <h5 className='text-base sm:text-lg font-semibold space-grotesk'>
                                        Professional Installation
                                    </h5>
                                    <p className='text-sm text-[#555] mt-1'>
                                        Our skilled team installs parquetry flooring with precision, delivering
                                        a seamless and premium finish that enhances your space.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT NAV - STICKY */}
                    <div className='lg:col-span-4 mt-8 lg:mt-0'>
                        {/* Added top-[100px] so it sticks below fixed headers if you have one */}
                        <div className='sticky top-[30px] space-y-6'>

                            <div className='p-5 sm:p-6 rounded-xl bg-[#F6F4EF] border border-[#7e704e]/40 shadow-sm'>
                                <h5 className='text-xl sm:text-2xl font-semibold text-[#111] mb-4'>
                                    Our Services
                                </h5>

                                <nav>
                                    <ul className='space-y-3 sm:space-y-2'>
                                        {[
                                            { name: "Solid Timber Flooring", link: "/services/solid-timber-flooring" },
                                            { name: "Floor Sanding & Polishing", link: "/services/floor-sanding-polishing" },
                                            { name: "Floor Preparation & Levelling", link: "/services/floor-preparation-levelling" },
                                            { name: "Flooring Maintenance", link: "/services/flooring-maintenance" },
                                            { name: "Floor Staining", link: "/services/floor-staining" },
                                            { name: "Floating Floor", link: "/services/floating-floor" },
                                            { name: "Laminate", link: "/services/laminate-flooring" },
                                            // { name: "Parquetry", link: "/services/parquetry" },
                                            { name: "Decking", link: "/services/decking" },
                                            { name: "Noise Reduction", link: "/services/noise-reduction" },
                                            { name: "Blackbutt Timber Floors", link: "/services/blackbutt-timber-floors" },
                                            { name: "Limewashing", link: "/services/limewashing" },
                                            { name: "Hybrid Flooring", link: "/services/hybrid-flooring" },
                                            { name: "Sprung Sports Floors", link: "/services/sprung-sports-floors" },
                                        ].map((service) => (
                                            <li key={service.name}>
                                                <Link
                                                    href={service.link}
                                                    className="text-sm sm:text-base text-gray-700 hover:text-[#111] transition-all duration-200 ease-in-out hover:underline hover:underline-offset-4 block py-1 sm:py-0"
                                                >
                                                    • {service.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>

                            <div className='p-5 sm:p-6 rounded-xl border border-[#7e704e] space-y-3'>
                                <h5 className='text-xl sm:text-2xl font-semibold text-[#111]'>
                                    Need Help?
                                </h5>

                                <p className='text-sm text-gray-600 leading-relaxed'>
                                    Get in touch with our team for expert guidance and support. We’re here to help you.
                                </p>

                                <Link href="tel:0414645200" className="inline-flex items-center gap-2 text-base font-medium text-[#111] hover:underline pt-2">
                                    <Phone className="h-5 w-5" />
                                    0414 645 200
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ParquetryComponent