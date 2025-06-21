import SvgIcon from "@/components/common/svgIcon";
import { Heart } from "lucide-react";

interface BannerProps {
    loading?: boolean;
    attrs: Record<string, any>;
}

const Banner = ({ loading, attrs }: BannerProps) => {
    if (loading) {
        return <div className="min-h-[300px] flex items-center justify-center">Loading...</div>;
    }

    return (
        <section
            id="home"
            className="min-h-screen relative overflow-hidden bg-white mt-[105px]">

            <div className="hero-content max-w-[1350px] flex flex-col items-center
                      justify-center text-center min-h-screen relative
                      z-10 mx-auto px-4 lg:px-8">

                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                         font-bold text-green-900 mb-6">
                        People of {' '}
                        <span className="text-green-400">life</span>{' '}
                        and giving
                    </h1>
                </div>

                <div className="mb-16">
                    <button
                        className="group bg-transparent border-2 border-green-400 text-green-400
                                 px-8 py-4 rounded-full text-lg font-medium hover:bg-green-400 hover:text-white
                                 transition-colors duration-300 flex items-center gap-3">
                        Make a Difference
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">

                    <div className="bg-green-500 rounded-2xl p-8 text-white relative
                      overflow-hidden group hover:scale-105 transition-transform
                      duration-300">
                        <div className="absolute top-4 right-4 opacity-30">
                            <Heart size={64}/>
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg mb-4 flex items-center justify-center">
                                <Heart fill="black" size={24}/>
                            </div>
                            <h3 className="text-white text-xl font-bold mb-2">Donate Today</h3>
                            <p className="text-green-100 text-sm">Your contribution directly helps those in need</p>
                        </div>
                    </div>

                    <div className="bg-orange-500 rounded-2xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                        <div className="absolute top-4 right-4 opacity-30">
                            <svg className="w-18 h-18" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                            </svg>
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg mb-4 flex items-center justify-center">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                                </svg>
                            </div>
                            <h3 className="text-white text-xl font-bold mb-2">Food Relief</h3>
                            <p className="text-orange-100 text-sm">
                                Providing meals and nutrition to families in need</p>
                        </div>
                    </div>

                    <div className="bg-green-800 rounded-2xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                        <div className="absolute top-4 right-4 opacity-30">
                            <svg className="w-18 h-18" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg mb-4 flex items-center justify-center">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-white text-xl font-bold mb-2">Our Impact</h3>
                            <p className="text-green-200 text-sm">Discover how we're changing lives together</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Banner;
