import React from "react";

interface HeroBannerProps {
    backgroundImage: string;
    title: string;
    description: string;
    points?: string[];
    height?: string;
    overlayOpacity?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
    backgroundImage,
    title,
    description,
    points = [],
    height = "h-[50vh]",
    overlayOpacity = "bg-black/70",
}) => {
    return (
        <section className={`relative w-full ${height} min-h-[400px] flex items-end`}>
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
            />

            {/* Dark Overlay */}
            <div className={`absolute inset-0 ${overlayOpacity}`} />

            {/* Content */}
            <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-[40px] xl:px-[80px] w-full pb-6 mb:pb-12">
                <div className="grid lg:grid-cols-2 gap-4 md:gap-12 items-center">
                    {/* Left */}
                    <div>
                        <h1 className="text-white font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[47px]">
                            {title}
                        </h1>
                    </div>

                    {/* Right */}
                    <div className="text-gray-200 max-w-md lg:ml-auto">
                        <p className="mb-3 text-sm leading-relaxed">
                            {description}
                        </p>

                        {points.length > 0 && (
                            <ul className="space-y-2 text-sm">
                                {points.map((point, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="mt-2 h-2 w-2 bg-white rounded-full"></span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroBanner;