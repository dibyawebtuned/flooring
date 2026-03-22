import React from 'react';
import Image from 'next/image';
import HeroBanner from '@/components/ui/HeroBanner';
import { ClipboardCheck, ClipboardList, Wrench, Check } from 'lucide-react';
import Banner_Image from '../../../../public/assets/img/bannerimage1.webp';
import Image_Four from '../../../../public/assets/img/WhatsApp Image 2026-02-16 at 10.52.18 AM.jpeg';
import Image_Five from '../../../../public/assets/img/WhatsApp Image 2026-02-16 at 10.52.18 AM (2).jpeg';

const FloorSandingPolishing: React.FC = () => {
  return (
    <div className="bg-white">
      {/* HERO BANNER */}
      <HeroBanner
        backgroundImage={Banner_Image.src}
        title="Revive Your Floors with Expert Sanding and Polishing"
        description="Timber and hardwood floors can lose their shine over time due to scratches, scuffs, and general wear. Our professional floor sanding and polishing services restore your floors to their original glory while improving durability."
      />

      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-12 md:py-16 space-y-12">

        {/* OUR PROCESS */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold space-grotesk text-[#111]">
            Our Process Includes
          </h2>
          <ul className="list-none space-y-3 text-[#464646] text-base sm:text-lg">
            <li className="flex items-start gap-3">
              <Check className="text-green-600 mt-1" />
              Comprehensive assessment of the floor’s condition
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-green-600 mt-1" />
              Sanding using advanced machinery to remove imperfections
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-green-600 mt-1" />
              Polishing with premium products for a smooth, glossy finish
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-green-600 mt-1" />
              Application of protective coatings to maintain the beauty longer
            </li>
          </ul>
        </div>

        {/* BENEFITS */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold space-grotesk text-[#111]">
            Benefits
          </h2>
          <ul className="list-none space-y-3 text-[#464646] text-base sm:text-lg">
            <li className="flex items-start gap-3">
              <Check className="text-green-600 mt-1" />
              Restores the natural look and warmth of your floors
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-green-600 mt-1" />
              Eliminates scratches, stains, and discoloration
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-green-600 mt-1" />
              Enhances the lifespan of your timber floors
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-green-600 mt-1" />
              Provides a safe, slip-resistant finish for your home or business
            </li>
          </ul>
        </div>

        {/* WHY CHOOSE US */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold space-grotesk text-[#111]">
            Why Choose Us
          </h2>
          <p className="text-[#464646] text-base sm:text-lg leading-relaxed">
            Our Sydney team is trained in the latest sanding and polishing techniques, ensuring even the most worn floors look brand new. We prioritize minimal disruption and maximum results, using eco-friendly products wherever possible.
          </p>
        </div>

        {/* IMAGE GRID */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="relative w-full md:w-2/5 h-[250px] md:h-[300px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={Image_Four}
              alt="Timber flooring close up"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <div className="relative w-full md:w-3/5 h-[250px] md:h-[300px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={Image_Five}
              alt="Finished timber flooring room"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
        </div>

      </section>
    </div>
  );
};

export default FloorSandingPolishing;