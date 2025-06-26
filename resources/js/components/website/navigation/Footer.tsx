import React from 'react';

const Footer = () => {
    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        sectionId: string
    ) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <footer
            className="relative overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #1a4d3a 0%, #0f2922 50%, #2d5a3d 100%)',
            }}
        >
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-300 rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
                <div className="py-16 lg:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

                        <div className="lg:col-span-2">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-lg
                                                flex items-center justify-center mr-4
                                                text-white">
                                   <img src="/images/logos/logo-white.png"
                                        alt="Logo"
                                        className='text-white'
                                        loading='lazy' />
                                </div>
                                <h3 className="text-2xl font-bold text-white">People of Life and Giving</h3>
                            </div>

                            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                                Dedicated to transforming lives and building stronger communities through
                                compassion, support, and essential resources for those in need.
                            </p>
                        </div>

                        <div className="text-center md:text-left">
                            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="#about"
                                        onClick={(e) => handleNavClick(e, 'about')}
                                        className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#services"
                                        onClick={(e) => handleNavClick(e, 'services')}
                                        className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                                    >
                                        Our Programs
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#collaboration"
                                        onClick={(e) => handleNavClick(e, 'collaboration')}
                                        className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                                    >
                                        Collaborations
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#impact"
                                        onClick={(e) => handleNavClick(e, 'impact')}
                                        className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                                    >
                                        Our Impact
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#volunteer"
                                        onClick={(e) => handleNavClick(e, 'volunteer')}
                                        className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                                    >
                                        Volunteer
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#contact"
                                        onClick={(e) => handleNavClick(e, 'contact')}
                                        className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* <div>
                            <h4 className="text-lg font-bold text-white mb-6">Get Involved</h4>
                            <ul className="space-y-3">
                                <li><a href="#donate" className="text-gray-300 hover:text-green-400 transition-colors duration-300">Donate Now</a></li>
                                <li><a href="#volunteer" className="text-gray-300 hover:text-green-400 transition-colors duration-300">Become a Volunteer</a></li>
                                <li><a href="#partner" className="text-gray-300 hover:text-green-400 transition-colors duration-300">Partner With Us</a></li>
                                <li><a href="#fundraise" className="text-gray-300 hover:text-green-400 transition-colors duration-300">Fundraise</a></li>
                                <li><a href="#sponsor" className="text-gray-300 hover:text-green-400 transition-colors duration-300">Corporate Sponsors</a></li>
                                <li><a href="#newsletter" className="text-gray-300 hover:text-green-400 transition-colors duration-300">Newsletter</a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>

                <div className="py-6 border-t border-green-400 border-opacity-20">
                    <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0">
                        <div className="text-gray-300 text-sm">
                            © {new Date().getFullYear()} People of Life and Giving. All rights reserved.
                        </div>
                        {/* <div className="flex space-x-6 text-sm">
                            <a href="#privacy" className="text-gray-300 hover:text-green-400 transition-colors duration-300">Privacy Policy</a>
                            <a href="#terms" className="text-gray-300 hover:text-green-400 transition-colors duration-300">Terms of Service</a>
                            <a href="#cookies" className="text-gray-300 hover:text-green-400 transition-colors duration-300">Cookie Policy</a>
                        </div> */}
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
