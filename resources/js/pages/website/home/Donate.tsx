import { Phone, Heart, DollarSign, Shield, Star } from 'lucide-react';

const Donate = () => {

    const phoneNumber = "+961 3 123 456";
    const formattedPhone = phoneNumber.replace(/\s/g, '');

    return (
        <section id='donate' className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-pink-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center mb-16 lg:mb-20">

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#363543]">
                        Make a{' '}
                        <span className="text-transparent bg-gradient-to-r
                        from-pink-500 to-red-500 bg-clip-text">Difference</span>
                    </h2>

                    <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                        Join us in transforming lives and building stronger communities. Your generosity creates ripples of hope
                        that reach families and individuals in need across our region.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
                        <div className="text-center mb-8">
                            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <img src="/images/logos/whish_logo.png" alt="Logo Whish" loading='lazy' />
                            </div>

                            <h3 className="text-2xl lg:text-3xl font-bold text-[#363543] mb-4">
                                Donate by Phone
                            </h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Make your donation quickly and securely by calling our dedicated phone line.
                                Our team is ready to assist you with your generous contribution.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-2xl p-6 mb-8 border border-pink-100">
                            <div className="text-center">
                                <a
                                    href={`tel:${formattedPhone}`}
                                    className="text-2xl lg:text-3xl font-bold text-transparent
                                               bg-gradient-to-r from-pink-500 to-red-500
                                               bg-clip-text hover:from-pink-600 hover:to-red-600
                                               transition-all duration-300 block">
                                    {phoneNumber}
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="space-y-8 my-auto">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl
                                        p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-400/20 to-transparent rounded-full blur-2xl"></div>

                            <div className="relative z-10">
                                <h3 className="text-white text-2xl font-bold mb-6">
                                    Trusted & Transparent
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                                            <Shield className="w-4 h-4 text-green-400" />
                                        </div>
                                        <span className="text-gray-300">100% secure donation processing</span>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                                            <Star className="w-4 h-4 text-blue-400" />
                                        </div>
                                        <span className="text-gray-300">Transparent fund allocation</span>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                                            <Heart className="w-4 h-4 text-purple-400" />
                                        </div>
                                        <span className="text-gray-300">Regular impact reports</span>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-gray-700">
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Your donation goes directly to helping families and communities in need. We provide regular updates
                                        on how your contribution is making a difference in real lives.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Donate;
