import React from 'react';
import SvgIcon from "@/components/common/svgIcon";
import CompanyCard from '@/components/website/core/CompanyCard';


const Vision: React.FC = () => {
    const companies = [
        {
            title: "QUAD Digital Media",
            description: "Content creation, social media management, video production, web development.",
            logo: "/images/logos/quad-digital-media.png"
        },
        {
            title: "QUAD Academy",
            description: "Training courses in social media, graphic design, TV production, web & mobile development.",
            logo: "/images/logos/quad-academy.png"
        },
        {
            title: "The Business House",
            description: "Business consultancy and digital transformation services.",
            logo: "/images/logos/BadawiQWS.png"
        }
    ];


    const quote = {
        text: "Transforming vision into reality through strategic innovation and relentless execution.",
        author: "Hussein Zeid"
    };

    return (
        <section id="vision" className="bg-[#363543] py-16 lg:py-24 relative overflow-hidden">
            <div className="max-w-[1350px] mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6
                                  bg-gradient-to-r from-white to-gray-300
                                  bg-clip-text text-transparent">
                        Vision into Actions
                    </h2>
                </div>

                <div className="mb-16 lg:mb-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 text-6xl text-orange-400/30 font-serif">"</div>
                            <div className="absolute -bottom-8 -right-4 text-6xl text-orange-400/30 font-serif">"</div>

                            <blockquote className="text-2xl lg:text-3xl font-light text-white leading-relaxed
                                                 italic px-8 py-6">
                                {quote.text}
                            </blockquote>

                            <div className="mt-6">
                                <div className="w-12 h-1 bg-orange-400 rounded-full mx-auto mb-4"></div>
                                <cite className="text-gray-300 not-italic font-medium">
                                    — {quote.author}
                                </cite>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {companies.map((company, index) => (
                        <CompanyCard
                            key={index}
                            title={company.title}
                            description={company.description}
                            logo={company.logo}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Vision;
