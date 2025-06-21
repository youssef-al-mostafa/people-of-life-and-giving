import SvgIcon from "@/components/common/svgIcon";

interface BannerProps {
    loading?: boolean;
    attrs: Record<string, any>;
}

interface SocialLink {
    name: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'threads';
    url: string;
}

const Banner = ({ loading, attrs }: BannerProps) => {
    if (loading) {
        return <div className="min-h-[300px] flex items-center justify-center">Loading...</div>;
    }

    const content = {
        greeting: "I'm",
        bannerText: "Hussein Zeid",
        bannerSubtitle: "a passionate entrepreneur and creative leader with over 10 years of experience in media, education, and digital transformation.",
        heroImage: "/images/hero/hero-image.png",
        heroAlt: "Hero background",
        servicesLabel: "Services",
        servicesBannerText: "Follow me on social media for insights into branding, content creation, business growth, and the journey of building modern Lebanese ventures.",
    };

    const socialLinks: SocialLink[] = [
        { name: 'facebook', url: 'https://www.facebook.com/fakeprofile' },
        { name: 'twitter', url: 'https://www.twitter.com/fakeprofile' },
        { name: 'instagram', url: 'https://www.instagram.com/fakeprofile' },
        { name: 'linkedin', url: 'https://www.linkedin.com/in/fakeprofile' },
        { name: 'threads', url: 'https://www.threads.net/@fakeprofile' },
    ];

    return (
        <section id="home" className="hero bg-[#363543] h-[calc(100vh-140px)]
                                      relative overflow-hidden mt-[104px]">
            <SvgIcon
                name="blob"
                className="w-[50vw] absolute"
                size="50vw"
            />

            <div className="hero-content max-w-[1350px] flex flex-col lg:flex-row items-center
                            justify-between p-4 lg:p-0 w-full h-full relative z-10 mx-auto
                            px-4 lg:px-8 gap-8 lg:gap-0">

                <div className="flex-1 text-white space-y-4 lg:space-y-6 max-w-lg text-center
                                lg:text-left transition-transform-opacity">
                    <p className="lg:text-xl text-7xl text-gray-300 font-light">
                        {content.greeting}
                    </p>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight
                                   bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {content.bannerText}
                    </h1>

                    <div className="relative flex flex-col items-center lg:items-start">
                        <span className="mb-4 before:content-[''] before:block before:w-16 before:h-1
                                       before:bg-orange-400 before:rounded-full before:mx-auto before:lg:mx-0"></span>
                        <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed
                                     max-w-md mx-auto lg:mx-0">
                            {content.bannerSubtitle}
                        </p>
                    </div>
                </div>

                <div className="flex-1 hero-image h-auto lg:h-full w-full lg:w-[35%] flex justify-center
                               items-center lg:justify-center order-first lg:order-none">
                    <img
                        className="w-auto h-[300px] sm:h-[400px] lg:h-[calc(100vh-140px)] max-w-full
                                 object-contain relative z-20"
                        src={content.heroImage}
                        alt={content.heroAlt}
                        loading="lazy"
                    />
                </div>

                <div className="h-full mt-[20vh] flex-1 max-w-sm lg:max-w-md text-white space-y-4 lg:space-y-6
                               text-center lg:text-right transition-transform-opacity lg:pl-8">
                    <div className="text-sm lg:text-base text-orange-400 font-medium
                                    uppercase tracking-wider">
                        {content.servicesLabel}
                    </div>

                    <h3 className="text-lg lg:text-xl font-semibold leading-tight text-white">
                        {content.servicesBannerText}
                    </h3>

                    <div className="flex justify-center lg:justify-end space-x-4 pt-4 gap-3">
                        {socialLinks.map(({ name, url }) => (
                            <a
                                key={name}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-colors duration-200
                                           hover:text-orange-400 text-white"
                                aria-label={`Visit our ${name} page`}
                            >
                                <SvgIcon name={name} size={32} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
