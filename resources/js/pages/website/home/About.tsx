// resources/js/components/website/About.tsx
import React from 'react';

interface TimelineItemProps {
    year: string;
    title: string;
    company: string;
    description: string;
    isLeft: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, company, description, isLeft }) => (
    <div className={`flex items-center mb-12 lg:mb-16 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        <div className={`flex-1 ${isLeft ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100
                           hover:shadow-xl hover:border-orange-400/20 transition-all duration-500
                           group hover:scale-105">
                <span className="inline-block px-3 py-1 bg-orange-400 text-white text-sm font-medium
                               rounded-full mb-4">
                    {year}
                </span>
                <h3 className="text-xl lg:text-2xl font-bold text-[#363543] mb-2
                              group-hover:text-orange-600 transition-colors duration-300">
                    {title}
                </h3>
                <h4 className="text-orange-500 font-semibold mb-3 text-lg">
                    {company}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>

        <div className="flex-shrink-0 flex flex-col items-center mx-4 lg:mx-8">
            <div className="w-4 h-4 bg-orange-400 rounded-full border-4 border-white shadow-lg
                           z-10 relative"></div>
        </div>

        <div className="flex-1 hidden lg:block"></div>
    </div>
);

const About: React.FC = () => {
    const timelineData = [
        {
            year: "2024",
            title: "Digital Transformation Leader",
            company: "The Business House",
            description: "Founded consultancy firm specializing in digital transformation services, helping traditional businesses adapt to the digital age through strategic planning and innovative solutions."
        },
        {
            year: "2022",
            title: "Educational Pioneer",
            company: "QUAD Academy",
            description: "Established comprehensive training platform offering specialized courses in social media management, graphic design, TV production, and web & mobile development, empowering the next generation of digital creators."
        },
        {
            year: "2020",
            title: "Media Entrepreneur",
            company: "QUAD Digital Media",
            description: "Launched full-service digital media agency providing content creation, social media management, video production, and web development services to brands across the Middle East."
        },
        {
            year: "2018",
            title: "Creative Director",
            company: "Regional Media House",
            description: "Led creative teams in developing award-winning campaigns for major brands, specializing in digital storytelling and brand positioning in the evolving media landscape."
        },
        {
            year: "2016",
            title: "Digital Marketing Specialist",
            company: "Innovation Agency",
            description: "Developed expertise in digital marketing strategies, social media management, and content creation while working with diverse clients across various industries."
        },
        {
            year: "2014",
            title: "Media Production Graduate",
            company: "University Journey Begins",
            description: "Graduated with honors in Media Production, laying the foundation for a career dedicated to bridging traditional media with digital innovation."
        }
    ];

    const passionPoints = [
        {
            title: "Digital Media Innovation",
            description: "Passionate about leveraging cutting-edge technology to create compelling digital experiences that connect brands with their audiences in meaningful ways."
        },
        {
            title: "Educational Excellence",
            description: "Committed to developing comprehensive educational programs that equip individuals with practical skills needed to thrive in the digital economy."
        },
        {
            title: "Strategic Leadership",
            description: "Dedicated to building sustainable businesses that drive positive change in the Lebanese market while setting new standards for digital excellence."
        }
    ];

    return (
        <section id="about" className="bg-gray-50 py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 right-10 w-2 h-2 bg-orange-400 rounded-full
                               animate-pulse opacity-30"></div>
                <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-orange-400 rounded-full
                               animate-pulse delay-1000 opacity-30"></div>
                <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-orange-400 rounded-full
                               animate-pulse delay-500 opacity-30"></div>
            </div>

            <div className="max-w-[1350px] mx-auto px-4 lg:px-8 relative z-10">

                <div className="text-center mb-16 lg:mb-20">
                    <div className="inline-block">
                        <span className="text-orange-400 font-medium uppercase tracking-wider text-sm lg:text-base
                                       mb-4 block">
                            About Hussein
                        </span>
                        <div className="w-16 h-1 bg-orange-400 rounded-full mx-auto mb-6"></div>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#363543]">
                        A Journey of Innovation
                    </h2>

                    <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                        Over a decade of experience transforming ideas into reality, building companies
                        that shape the digital landscape, and empowering others through education and innovation.
                    </p>
                </div>

                <div className="mb-16 lg:mb-20">
                    <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-[#363543]">
                        Professional Timeline
                    </h3>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b
                                       from-orange-400 to-orange-300 h-full hidden lg:block"></div>

                        <div className="lg:hidden absolute left-8 w-0.5 bg-gradient-to-b
                                       from-orange-400 to-orange-300 h-full"></div>

                        {timelineData.map((item, index) => (
                            <TimelineItem
                                key={index}
                                year={item.year}
                                title={item.title}
                                company={item.company}
                                description={item.description}
                                isLeft={index % 2 === 0}
                            />
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl lg:text-3xl font-bold text-[#363543] mb-4">
                            Passion & Vision
                        </h3>
                        <div className="w-16 h-1 bg-orange-400 rounded-full mx-auto mb-6"></div>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Driven by a deep commitment to digital innovation and educational excellence,
                            Hussein continues to push boundaries and create lasting impact.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        {passionPoints.map((point, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500
                                               rounded-2xl flex items-center justify-center mx-auto mb-6
                                               group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                        <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-[#363543] mb-4
                                              group-hover:text-orange-600 transition-colors duration-300">
                                    {point.title}
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                    {point.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
