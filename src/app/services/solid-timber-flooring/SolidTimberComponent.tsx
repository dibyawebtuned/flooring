import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import HeroBanner from '@/components/ui/HeroBanner'
import Banner_Image from "../../../../public/assets/img/bannerimage1.webp";
import Image_One from "../../../../public/assets/img/8.jpeg";
import Image_Two from "../../../../public/assets/img/7.jpeg";
import { ClipboardCheck, ClipboardList, Wrench } from "lucide-react";
import { Phone } from "lucide-react";

const SolidTimberComponent = () => {
  return (
    <div>
      <HeroBanner
        backgroundImage={Banner_Image.src}
        title="Premium Solid Timber Flooring Solutions"
        description="Our latest residential project showcases high-quality Blackbutt solid timber flooring, combining natural warmth with exceptional durability for a refined and lasting finish."
      />

      <section className='max-w-[1440px] mx-auto px-6 lg:px-20 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10'>

          {/* LEFT CONTENT */}
          <div className='lg:col-span-8 space-y-10'>

            {/* IMAGE */}
            <div className='relative h-[360px] rounded-xl overflow-hidden shadow-md'>
              <Image
                src={Banner_Image}
                alt=""
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className='space-y-4'>
              <h4 className='text-2xl lg:text-3xl font-semibold space-grotesk'>
                Benefits of our services
              </h4>

              <p className='text-[#464646] leading-relaxed'>
                Premium solid timber flooring combines natural elegance with outstanding durability,
                creating a sophisticated foundation for any home. Featuring high-grade Blackbutt
                timber, it offers rich character, long-lasting performance, and the flexibility to
                be refinished over time — making it a smart, enduring investment in both style and value.
              </p>

              <ul className="space-y-2 text-[#464646]">
                <li className="flex items-center gap-2">
                  <span className="text-gray-600">✔</span> Exceptional Durability
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-600">✔</span> Long-Term Investment
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-600">✔</span> Adds Property Value
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-600">✔</span> Easy to Maintain
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-600">✔</span> Sustainable & Natural
                </li>
              </ul>
            </div>

            {/* IMAGES GRID */}
            <div className='flex gap-5'>
              <div className='relative flex-1 h-[300px] rounded-xl overflow-hidden'>
                <Image
                  src={Image_One}
                  alt=""
                  fill
                  className='object-cover'
                />
              </div>
              <div className='relative flex-2 h-[300px] rounded-xl overflow-hidden'>
                <Image
                  src={Image_Two}
                  alt=""
                  fill
                  className='object-cover'
                />
              </div>
            </div>

            {/* CONTENT BOXES */}
            <div className='flex gap-5'>
              <div className='flex-1 flex flex-col gap-[15px] rounded-xl'>
                <ClipboardCheck className="h-10 w-10 text-[#111111]" />
                <div>
                  <h5 className='text-lg font-semibold space-grotesk'>
                    Booking Inspection
                  </h5>
                  <p className='text-sm text-[#555]'>
                    Schedule an on-site inspection to assess flooring requirements and provide accurate solutions.
                  </p>
                </div>
              </div>

              <div className='flex-1  rounded-xl flex flex-col gap-[15px]'>
                <ClipboardList className="h-10 w-10 text-[#111111]" />
                <div>
                  <h5 className='text-lg font-semibold space-grotesk'>
                    Work Planning
                  </h5>
                  <p className='text-sm text-[#555]'>
                    Detailed project planning to ensure seamless installation and optimal results.
                  </p>
                </div>
              </div>

              <div className='flex-1 flex flex-col gap-[15px] rounded-xl'>
                <Wrench className="h-10 w-10 text-[#111111]" />
                <div>
                  <h5 className='text-lg font-semibold space-grotesk'>
                    Fix and Install
                  </h5>
                  <p className='text-sm text-[#555]'>
                    Professional installation and repair services for durable and premium timber flooring.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT NAV - STICKY */}
          <div className='lg:col-span-4'>
            <div className='sticky top-5 space-y-4'>

              <div className='p-5 rounded-xl bg-[#F6F4EF] border border-[#7e704e]/40 shadow-sm'>
                <h5 className='text-2xl font-semibold text-[#111] mb-3'>
                  Our Services
                </h5>

                <nav>
                  <ul className='space-y-2'>
                    {[
                      { name: "Floor Sanding & Polishing", link: "/services/floor-sanding-polishing" },
                      { name: "Floor Preparation & Levelling", link: "/services/floor-preparation-levelling" },
                      { name: "Flooring Maintenance", link: "/services/flooring-maintenance" },
                      { name: "Floor Staining", link: "/services/floor-staining" },
                      { name: "Floating Floor", link: "/services/floating-floor" },
                      { name: "Laminate", link: "/services/laminate-flooring" },
                      { name: "Parquetry", link: "/services/parquetry" },
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
                          className="text-gray-700 hover:text-[#111] transition-all duration-200 ease-in-out hover:underline hover:underline-offset-4"
                        >
                          • {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className='p-5 rounded-xl border border-[#7e704e] space-y-3'>
                <h5 className='text-2xl font-semibold text-[#111]'>
                  Need Help?
                </h5>

                <p className='text-sm text-gray-600 leading-relaxed'>
                  Get in touch with our team for expert guidance and support. We’re here to help you.
                </p>

                <Link href="tel:0414 645 200" className="inline-flex items-center gap-2 text-sm font-medium text-[#111] hover:underline">
                  <Phone className="h-4 w-4" />
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

export default SolidTimberComponent