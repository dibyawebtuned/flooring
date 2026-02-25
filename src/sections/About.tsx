import React from 'react'
import Link from 'next/link'
import ParallaxFeatures from '@/components/ui/AboutEffect'


const About = () => {
    return (
        <div className='max-w-[1440px] mx-auto px-4 sm:px-[40px] xl:px-[80px] pt-12 sm:pt-16 lg:pt-20'>
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-20'>
                {/* Left Section */}
                <div className='flex-1 flex flex-col gap-6 sm:gap-8'>
                    <h1 className='font-space-grotesk font-medium text-3xl sm:text-4xl md:text-[47px] leading-snug sm:leading-tight md:leading-[55px] tracking-[-0.94px]'>
                        Prestige Timber Flooring is Sydney’s trusted leader in timber flooring
                    </h1>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Link href="/about" className="px-5 py-3 bg-[#111111] text-[#F6F4EF] font-semibold rounded-md hover:bg-[#c1a37c] transition-colors">
                            Know More
                        </Link>

                        <Link href="/contact" className="px-5 py-3 bg-transparent border border-[#111111] text-[#111111] font-semibold rounded-md hover:bg-white hover:text-black transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* Right Section */}
                <div className='flex-1'>
                    <p className='font-inter inter-400 text-base sm:text-md text-[#464646] leading-6 sm:leading-7 md:leading-[25px]'>
                        Sydney’s trusted timber flooring specialists for over 20 years, delivering
                        high-quality floors for homes, offices, and commercial spaces. We specialize
                        in the supply, installation, sanding, polishing, staining, and maintenance of
                        all types of timber flooring, including solid timber, engineered and floating
                        floors, parquetry, laminate, and decking. Our team is committed to craftsmanship,
                        durability, and customer satisfaction, ensuring every project—big or small—achieves
                        a flawless, long-lasting finish. Whether you are renovating, building new, or
                        maintaining existing floors, Prestige Flooring combines expertise, quality materials.
                    </p>
                </div>
            </div>

            <div>
                <ParallaxFeatures />
            </div>
        </div>
    )
}

export default About