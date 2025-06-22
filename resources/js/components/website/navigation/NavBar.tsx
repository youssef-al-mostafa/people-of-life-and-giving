import React, { useState, useEffect } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
        sectionId: string
    ) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element && sectionId != 'home') {
            const offsetTop = element.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        } else {
            if (sectionId == 'home') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            const sections = ['about', 'vision', 'media', 'contact'];
            const scrollPosition = window.scrollY + 200;

            if (window.scrollY < 100) {
                setActiveSection('');
                return;
            }

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className='fixed top-0 w-full z-50 transition-all duration-300 bg-white backdrop-blur-lg
                         border-b border-gray-200/50'>
            <div className="navbar max-w-[1350px] mx-auto transition-all duration-300 backdrop-blur-sm py-1">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0}
                            role="button"
                            className='btn btn-ghost lg:hidden transition-all duration-300 rounded-lg text-[#363543] hover:bg-gray-100'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 transition-transform duration-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content bg-white
                                       rounded-xl z-1 mt-3 w-52 p-2 shadow-xl border
                                       border-gray-200/50">
                            <li>
                                <button
                                    onClick={(e) => handleNavClick(e, 'about')}
                                    className={`rounded-lg hover:bg-gray-100 transition-colors
                                               duration-200 focus:bg-gray-100 active:bg-gray-100
                                               text-gray-700 hover:text-gray-900 ${activeSection === 'about' ? 'bg-gray-100 text-gray-900 font-semibold' : ''
                                        }`}>
                                    About
                                </button>
                            </li>
                            <li>
                                <a href="#vision"
                                    onClick={(e) => handleNavClick(e, 'vision')}
                                    className={`rounded-lg hover:bg-gray-100 transition-colors
                                               duration-200 focus:bg-gray-100 active:bg-gray-100
                                               text-gray-700 hover:text-gray-900 ${activeSection === 'vision' ? 'bg-gray-100 text-gray-900 font-semibold' : ''
                                        }`}>
                                    Vision into Action
                                </a>
                            </li>
                            <li>
                                <a href="#media"
                                    onClick={(e) => handleNavClick(e, 'media')}
                                    className={`rounded-lg hover:bg-gray-100 transition-colors
                                               duration-200 focus:bg-gray-100 active:bg-gray-100
                                               text-gray-700 hover:text-gray-900 ${activeSection === 'media' ? 'bg-gray-100 text-gray-900 font-semibold' : ''
                                        }`}>
                                    Media
                                </a>
                            </li>
                        </ul>
                    </div>

                    <ul className="menu menu-horizontal px-1 text-lg space-x-1">
                        <li>
                            <a href="#about"
                                onClick={(e) => handleNavClick(e, 'about')}
                                className={`rounded-lg px-4 py-2 transition-all duration-300 transform
                                           hover:scale-105 relative group font-medium bg-transparent
                                           focus:bg-transparent active:bg-transparent text-black`}>
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#donate"
                                onClick={(e) => handleNavClick(e, 'donate')}
                                className={`rounded-lg px-4 py-2 transition-all duration-300 transform
                                           hover:scale-105 relative group font-medium bg-transparent
                                           focus:bg-transparent active:bg-transparent text-black`}>
                                Donate
                            </a>
                        </li>
                    </ul>

                </div>
                <div className={`navbar-center hidden lg:flex transition-colors duration-300 ${isScrolled ? 'text-[#363543]' : 'text-white'
                    }`}>
                    <a href="#home"
                        className={`font-bold text-xl transition-all duration-300
                                    transform hover:scale-105 text-[#363543]`}
                        onClick={(e) => handleNavClick(e, 'home')}>
                        <img src="/images/logos/logo_no_bg_small.png"
                            className="w-[96px]"
                            alt="Logo People Of Life and Giving" />
                    </a>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1 text-lg space-x-1">
                        <li>
                            <a href="#collaboration"
                                onClick={(e) => handleNavClick(e, 'collaboration')}
                                className={`rounded-lg px-4 py-2 transition-all duration-300 transform
                                           hover:scale-105 relative group font-medium bg-transparent
                                           focus:bg-transparent active:bg-transparent text-black`}>
                                Our Collaboration
                            </a>
                        </li>
                        <li>
                            <a href="#contact"
                                onClick={(e) => handleNavClick(e, 'contact')}
                                className={`rounded-lg px-4 py-2 transition-all duration-300 transform
                                           hover:scale-105 relative group font-medium bg-transparent
                                           focus:bg-transparent active:bg-transparent text-black`}>
                                Conact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
