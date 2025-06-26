import React, { useState, useEffect } from 'react';

type NavItem = {
    id: string;
    label: string;
    href: string;
};

interface NavLinkProps {
    item: NavItem;
    className?: string;
    isMobile?: boolean;
}

const NAVIGATION_ITEMS = [
    { id: 'about', label: 'About Us', href: '#about' },
    { id: 'donate', label: 'Donate', href: '#donate' },
    { id: 'collaboration', label: 'Our Collaboration', href: '#collaboration' },
    //{ id: 'contact', label: 'Contact Us', href: '#contact' }
];
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
        sectionId: string
    ) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        const element = document.getElementById(sectionId);
        if (element && sectionId !== 'home') {
            const offsetTop = element.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        } else if (sectionId === 'home') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = ['about', 'donate', 'collaboration', 'contact'];
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

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('keydown', handleEscape);
            return () => document.removeEventListener('keydown', handleEscape);
        }
    }, [isMobileMenuOpen]);

    const NavLink = ({ item, className = '', isMobile = false }: NavLinkProps) => (
        <a
            href={item.href}
            onClick={(e) => handleNavClick(e, item.id)}
            className={`${className} ${activeSection === item.id
                ? 'text-blue-600 font-semibold'
                : isMobile
                    ? 'text-gray-700 hover:text-blue-600'
                    : 'text-black hover:text-blue-600'
                } transition-colors duration-200`}
            aria-current={activeSection === item.id ? 'page' : undefined}
        >
            {item.label}
        </a>
    );

    return (
        <>
            <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white backdrop-blur-lg border-b border-gray-200/50">
                <div className="navbar max-w-[1350px] mx-auto px-4 py-2 flex justify-between">
                    <div className="navbar-start lg:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="btn btn-ghost p-2 hover:bg-gray-100 rounded-lg"
                            aria-label="Open mobile menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-700"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="navbar-start hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 space-x-1">
                            {NAVIGATION_ITEMS.slice(0, 2).map((item) => (
                                <li key={item.id}>
                                    <NavLink
                                        item={item}
                                        className="rounded-lg px-4 py-2 font-medium transition-all duration-300 hover:scale-105"
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="navbar-center">
                        <a
                            href="#home"
                            className="font-bold text-xl transition-all duration-300 transform hover:scale-105"
                            onClick={(e) => handleNavClick(e, 'home')}
                            aria-label="Go to homepage"
                        >
                            <img
                                src="/images/logos/logo_no_bg_small.png"
                                className="w-24 h-auto"
                                alt="People Of Life and Giving Logo"
                            />
                        </a>
                    </div>

                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 space-x-1">
                            {NAVIGATION_ITEMS.slice(2).map((item) => (
                                <li key={item.id}>
                                    <NavLink
                                        item={item}
                                        className="rounded-lg px-4 py-2 font-medium transition-all duration-300 hover:scale-105"
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-50 lg:hidden"
                    aria-hidden="true"
                >
                    <div
                        className="fixed inset-0 bg-opacity-50 transition-opacity"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />

                    <div className="fixed top-0 left-0 w-80 max-w-[85vw] h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
                        <div className="flex items-center justify-end p-6 border-b border-gray-200">
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                aria-label="Close mobile menu"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        <nav className="p-6">
                            <ul className="space-y-4">
                                <li>
                                    <a
                                        href="#home"
                                        onClick={(e) => handleNavClick(e, 'home')}
                                        className={`block py-3 px-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors text-gray-700 hover:text-blue-600 ${activeSection === 'home'
                                            ? 'text-blue-600 font-semibold' : ''} transition-colors duration-200`}
                                        aria-current={activeSection === 'home' ? 'page' : undefined}
                                    >
                                        Home
                                    </a>
                                </li>
                                {NAVIGATION_ITEMS.map((item) => (
                                    <li key={item.id}>
                                        <NavLink
                                            item={item}
                                            className="block py-3 px-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
                                            isMobile={true}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
