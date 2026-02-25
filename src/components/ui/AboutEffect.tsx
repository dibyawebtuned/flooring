"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import about_image from "../../../public/assets/img/about_one.png";

const TimberFeaturesLayout = () => {
    // 1. Create a ref for the tall container
    const targetRef = useRef(null);

    // 2. Track scroll progress through this specific container (0 to 1)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    // 3. Map scroll progress to opacities and vertical movement for each feature
    // Feature 1 (0% to 20% scroll)
    const opacity1 = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [40, 0]);

    // Feature 2 (25% to 45% scroll)
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);
    const y2 = useTransform(scrollYProgress, [0.25, 0.45], [40, 0]);

    // Feature 3 (50% to 70% scroll)
    const opacity3 = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
    const y3 = useTransform(scrollYProgress, [0.5, 0.7], [40, 0]);

    // Feature 4 (75% to 95% scroll)
    const opacity4 = useTransform(scrollYProgress, [0.75, 0.95], [0, 1]);
    const y4 = useTransform(scrollYProgress, [0.75, 0.95], [40, 0]);

    return (
        // The tall container that creates the scrollable space
        <section ref={targetRef} className="relative h-[400vh] bg-white font-inter">

            {/* The sticky container that locks to the screen while you scroll */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                <div className="max-w-[1280px] w-full mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-4 items-center relative">

                        {/* LEFT COLUMN */}
                        <div className="flex flex-col gap-12 lg:gap-[180px] order-2 lg:order-1 relative z-10">
                            {/* Feature 1 */}
                            <motion.div
                                style={{ opacity: opacity1, y: y1 }}
                                className="relative group lg:max-w-[320px]"
                            >
                                <h3 className="space-grotesk space-grotesk-500 text-2xl font-medium text-gray-900 leading-snug mb-4">
                                    Timeless Look &<br />Natural Feel
                                </h3>
                                <p className="font-inter inter-400 text-[#555555] text-[15px] leading-relaxed">
                                    Timber flooring delivers a unique look and feeling that enhances both new
                                    and older homes and offices, creating warmth and character that only real
                                    timber can provide.
                                </p>
                                <div className="hidden lg:block absolute top-[28px] -right-[60px] xl:-right-[110px] w-[60px] xl:w-[110px] h-[1px] bg-[#111] origin-left">
                                    <div className="absolute right-0 -top-[3.5px] w-[8px] h-[8px] bg-[#111] rounded-full"></div>
                                </div>
                            </motion.div>

                            {/* Feature 2 */}
                            <motion.div
                                style={{ opacity: opacity2, y: y2 }}
                                className="relative group lg:max-w-[320px]"
                            >
                                <h3 className="space-grotesk space-grotesk-500 text-2xl font-medium text-gray-900 leading-snug mb-4">
                                    Suitable for New &<br />Existing Floors
                                </h3>
                                <p className="font-inter inter-400 text-[#555555] text-[15px] leading-relaxed">
                                    Whether it is a new installation or restoring an existing floor, timber
                                    flooring can be constructed, sanded, polished, and maintained to achieve
                                    the desired finish.
                                </p>
                                <div className="hidden lg:block absolute top-[28px] -right-[100px] xl:-right-[160px] w-[100px] xl:w-[160px] h-[1px] bg-[#111]">
                                    <div className="absolute right-0 -top-[3.5px] w-[8px] h-[8px] bg-[#111] rounded-full"></div>
                                </div>
                            </motion.div>
                        </div>

                        {/* CENTER COLUMN: 3D IMAGE */}
                        {/* This remains completely static while the cards fade in around it */}
                        <div className="relative flex justify-center items-center order-1 lg:order-2 lg:h-[700px] z-0">
                            <div className="relative w-[280px] h-[350px] lg:w-[450px] lg:h-[600px]">
                                <div className="w-full h-full">
                                    <Image src={about_image} alt="" />
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="flex flex-col gap-12 lg:gap-[180px] order-3 lg:order-3 relative z-10 lg:pl-10 xl:pl-16">
                            {/* Feature 3 */}
                            <motion.div
                                style={{ opacity: opacity3, y: y3 }}
                                className="relative group lg:max-w-[320px]"
                            >
                                <h3 className="space-grotesk space-grotesk-500 text-2xl font-medium text-gray-900 leading-snug mb-4">
                                    Versatile Installation<br />Options
                                </h3>
                                <p className="font-inter inter-400 text-[#555555] text-[15px] leading-relaxed">
                                    Timber floors can be installed over bearers and joists, existing timber,
                                    particle board, or concrete, making them suitable for a wide range of
                                    building types.
                                </p>
                                <div className="hidden lg:block absolute top-[28px] -left-[100px] xl:-left-[180px] w-[100px] xl:w-[180px] h-[1px] bg-[#111]">
                                    <div className="absolute left-0 -top-[3.5px] w-[8px] h-[8px] bg-[#111] rounded-full"></div>
                                </div>
                            </motion.div>

                            {/* Feature 4 */}
                            <motion.div
                                style={{ opacity: opacity4, y: y4 }}
                                className="relative group lg:max-w-[320px]"
                            >
                                <h3 className="space-grotesk space-grotesk-500 text-2xl font-medium text-gray-900 leading-snug mb-4">
                                    Wide Range of Timber<br />Choices
                                </h3>
                                <p className="font-inter inter-400 text-[#555555] text-[15px] leading-relaxed">
                                    Timber flooring is available in solid tongue & groove, recycled, pre-finished,
                                    engineered, parquet, and laminate, allowing flexibility in style, grade, and colour.
                                </p>
                                <div className="hidden lg:block absolute top-[28px] -left-[60px] xl:-left-[120px] w-[60px] xl:w-[120px] h-[1px] bg-[#111]">
                                    <div className="absolute left-0 -top-[3.5px] w-[8px] h-[8px] bg-[#111] rounded-full"></div>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimberFeaturesLayout;