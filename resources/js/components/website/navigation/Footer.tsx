// resources/js/components/website/Footer.tsx
import React from 'react';
import SvgIcon from '@/components/common/svgIcon';

interface SocialLink {
    name: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'threads';
    url: string;
}

interface CompanyLink {
    name: string;
    url: string;
}

const Footer: React.FC = () => {
    const socialLinks: SocialLink[] = [
        { name: 'facebook', url: 'https://www.facebook.com/husseinzeid' },
        { name: 'twitter', url: 'https://www.twitter.com/husseinzeid' },
        { name: 'instagram', url: 'https://www.instagram.com/husseinzeid' },
        { name: 'linkedin', url: 'https://www.linkedin.com/in/husseinzeid' },
        { name: 'threads', url: 'https://www.threads.net/@husseinzeid' },
    ];

    const companies: CompanyLink[] = [
        { name: 'QUAD Digital Media', url: '#' },
        { name: 'QUAD Academy', url: '#' },
        { name: 'The Business House', url: '#' },
    ];

    const quickLinks = [
        { name: 'About', url: '#about' },
        { name: 'Vision into Action', url: '#vision' },
        { name: 'Portfolio', url: '#portfolio' },
        { name: 'Contact', url: '#contact' },
    ];

    const contactInfo = {
        email: 'hello@husseinzeid.com',
        phone: '+961 70 123 456',
        location: 'Beirut, Lebanon'
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#363543] text-white relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <SvgIcon
                    name="blob"
                    className="w-[60vw] absolute -bottom-20 -left-20 opacity-5 rotate-12"
                    size="60vw"
                />
            </div>

            <div className="max-w-[1350px] mx-auto px-4 lg:px-8 relative z-10">

                <div className="pt-16 lg:pt-20 pb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        <div className="lg:col-span-1">
                            <div className="mb-6">
                                <h3 className="text-2xl lg:text-3xl font-bold mb-4
                                              bg-gradient-to-r from-white to-gray-300
                                              bg-clip-text text-transparent">
                                    Hussein Zeid
                                </h3>
                                <div className="w-16 h-1 bg-orange-400 rounded-full mb-6"></div>
                                <p className="text-gray-300 leading-relaxed max-w-md">
                                    Passionate entrepreneur and creative leader transforming ideas into reality
                                    through digital innovation, education, and strategic business development.
                                </p>
                            </div>
                            <div className="mb-8">
                                <h4 className="text-orange-400 font-medium uppercase tracking-wider text-sm mb-4">
                                    Follow the Journey
                                </h4>
                                <div className="flex space-x-4">
                                    {socialLinks.map(({ name, url }) => (
                                        <a
                                            key={name}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20
                                                     rounded-xl flex items-center justify-center
                                                      hover:border-orange-400/40
                                                     transition-all duration-300 group"
                                            aria-label={`Visit our ${name} page`}
                                        >
                                            <SvgIcon
                                                name={name}
                                                size={24}
                                                className="text-white group-hover:text-orange-400
                                                         transition-colors duration-300"
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='lg:col-span-2 flex justify-end gap-20'>
                            <div>
                                <h4 className="text-orange-400 font-medium uppercase tracking-wider text-sm mb-6">
                                    Companies
                                </h4>
                                <ul className="space-y-4">
                                    {companies.map((company, index) => (
                                        <li key={index}>
                                            <a
                                                href={company.url}
                                                className="text-gray-300 hover:text-orange-400 transition-colors
                                                     duration-300 flex items-center group"
                                            >
                                                <span className="w-2 h-2 bg-orange-400/50 rounded-full mr-3
                                                           group-hover:bg-orange-400 transition-colors duration-300"></span>
                                                {company.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-orange-400 font-medium uppercase tracking-wider text-sm mb-6">
                                    Quick Links
                                </h4>
                                <ul className="space-y-4 mb-8">
                                    {quickLinks.map((link, index) => (
                                        <li key={index}>
                                            <a
                                                href={link.url}
                                                className="text-gray-300 hover:text-orange-400 transition-colors
                                                     duration-300 flex items-center group"
                                            >
                                                <span className="w-2 h-2 bg-orange-400/50 rounded-full mr-3
                                                           group-hover:bg-orange-400 transition-colors duration-300"></span>
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-orange-400 font-medium uppercase tracking-wider text-sm mb-4">
                                    Get in Touch
                                </h4>
                                <div className="space-y-3 text-sm">
                                    <a
                                        href={`mailto:${contactInfo.email}`}
                                        className="text-gray-300 hover:text-orange-400 transition-colors duration-300
                                                 block"
                                    >
                                        {contactInfo.email}
                                    </a>
                                    <a
                                        href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                                        className="text-gray-300 hover:text-orange-400 transition-colors duration-300
                                                 block"
                                    >
                                        {contactInfo.phone}
                                    </a>
                                    <span className="text-gray-400 block">
                                        {contactInfo.location}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-600/50 py-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                        <div className="text-gray-400 text-sm text-center lg:text-left">
                            © {currentYear} Hussein Zeid. All rights reserved.
                        </div>

                        <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6
                                       text-sm text-gray-400">
                            <a href="#"
                               className="hover:text-orange-400 transition-colors
                                          duration-300 text-white">
                                Privacy Policy
                            </a>
                            <a href="#"
                               className="hover:text-orange-400 transition-colors
                                          duration-300 text-white">
                                Terms & Conditions
                            </a>
                            {/* <span className="text-gray-500">
                                Made with ❤️ in Lebanon
                            </span> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
