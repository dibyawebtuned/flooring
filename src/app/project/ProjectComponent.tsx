import React from "react";
import Banner_Image from "../../../public/assets/img/bannerimage1.webp";

const ProjectComponent = () => {
    return (
        <div>
            <section className="relative w-full h-[50vh] min-h-[400px] flex items-end">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${Banner_Image.src})`,
                    }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70" />

                {/* Content Container */}
                <div className="relative z-10 max-w-[1440px] mx-auto px-[80px] w-full pb-15">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left Side - Heading */}
                        <div>
                            <h1 className="text-white font-bold leading-tight text-[47px]">
                                Handyman experts with a passion for precision
                            </h1>
                        </div>

                        {/* Right Side - Description */}
                        <div className="text-gray-200 max-w-md lg:ml-auto">
                            <p className="mb-2 text-[14px] leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur. Mattis nulla uctor nec
                                vestibulum urna lobortis tempor.
                            </p>

                            <ul className="space-y-1.5 text-[14px]">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-2 w-2 bg-white rounded-full"></span>
                                    Helping homes stay strong
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-2 w-2 bg-white rounded-full"></span>
                                    Built on trust & quality
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-2 w-2 bg-white rounded-full"></span>
                                    Reliable repairs, Real people
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>


            <section className="max-w-[1440px] mx-auto px-[80px] py-[50px]">
                {/* Masonry Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                    {/* Column 1 */}
                    <div className="grid gap-4">
                        <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="Project 1" />
                        <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="Project 2" />
                        <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="Project 3" />
                    </div>

                    {/* Column 2 */}
                    <div className="grid gap-4">
                        <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="Project 4" />
                        <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="Project 5" />
                        <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="Project 6" />
                    </div>

                    {/* Column 3 */}
                    <div className="grid gap-4">
                        <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="Project 7" />
                        <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="Project 8" />
                        <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="Project 9" />
                    </div>

                    {/* Column 4 */}
                    <div className="grid gap-4">
                        <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="Project 10" />
                        <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="Project 11" />
                        <img className="h-auto max-w-full rounded-md" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="Project 12" />
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ProjectComponent;