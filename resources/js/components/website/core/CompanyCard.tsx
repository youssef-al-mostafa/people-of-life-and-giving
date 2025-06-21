import React from 'react';

interface CompanyCardProps {
    title: string;
    description: string;
    logo: string;
    logoAlt?: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ title, description, logo, logoAlt }) => (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50
                    p-6 lg:p-8 backdrop-blur-sm border border-gray-700/30 hover:border-orange-400/30
                    transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-400/10">

        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/5 to-transparent
                       opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative z-10">
            <div className="mb-6 flex items-center justify-center lg:justify-start">
                {/* <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl bg-white/10 backdrop-blur-sm
                               border border-white/20 flex items-center justify-center p-3
                               group-hover:bg-orange-400/20 group-hover:border-orange-400/40
                               transition-all duration-500"> */}
                    <img
                        src={logo}
                        alt={logoAlt || `${title} logo`}
                        className="w-16 h-16 lg:w-20 lg:h-20 object-contain
                                 group-hover:brightness-100 group-hover:invert-0
                                 transition-all duration-500"
                    />
                {/* </div> */}
            </div>

            <h3 className="text-xl lg:text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300
                          bg-clip-text text-transparent group-hover:from-orange-400 group-hover:to-orange-300
                          transition-all duration-500 text-center lg:text-left">
                {title}
            </h3>

            <div className="w-12 h-1 bg-orange-400 rounded-full mb-4 group-hover:w-16
                           transition-all duration-500 mx-auto lg:mx-0"></div>

            <p className="text-gray-300 leading-relaxed group-hover:text-gray-200
                         transition-colors duration-500 text-center lg:text-left">
                {description}
            </p>
        </div>

        <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-orange-400/10
                       to-transparent rounded-tr-full opacity-0 group-hover:opacity-100
                       transition-opacity duration-500"></div>
    </div>
);

export default CompanyCard;
