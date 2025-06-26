import React from 'react';

const About = () => {
    return (
        <section
            id="about"
            className="py-16 lg:py-24 relative overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #1a4d3a 0%, #0f2922 50%, #2d5a3d 100%)',
            }}>
            <div className="absolute right-0 top-1/2 transform translate-x-1/3 -translate-y-1/2 opacity-5">
                <img
                    src="/images/logos/logo_no_bg_small.png"
                    alt="Charity Logo Background"
                    className="w-224 h-224 object-contain text-green-200"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    <div className="text-white">
                        <div className="mb-8">
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6
                                           leading-tight text-white">
                                About Our
                                <span className="text-green-400 block">Mission</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
                            <p className='text-white'>
                                We are a dedicated charity organization committed to transforming lives and
                                building stronger communities. Our mission is simple yet profound: to ensure
                                that no one goes without the basic necessities of life.
                            </p>

                            <p className='text-white'>
                                Every day, we work tirelessly to provide food, shelter, and essential resources
                                to families and individuals facing hardship. Through our comprehensive programs,
                                we've been able to reach thousands of people, offering them hope and practical
                                support when they need it most.
                            </p>

                            <p className='text-white'>
                                What drives us is the belief that everyone deserves dignity, compassion, and
                                the opportunity to thrive. We're not just addressing immediate needs—we're
                                building pathways to long-term stability and empowerment.
                            </p>
                        </div>
                    </div>

                    {/* <div className="lg:pl-8">
                        <div className="grid grid-cols-2 gap-6">

                            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-center border border-green-400 border-opacity-20">
                                <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">5,000+</div>
                                <div className="text-green-900 font-bold text-sm lg:text-base">Families Helped</div>
                            </div>

                            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-center border border-green-400 border-opacity-20">
                                <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">15,000</div>
                                <div className="text-green-900 font-bold text-sm lg:text-base">Meals Provided</div>
                            </div>

                            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-center border border-green-400 border-opacity-20">
                                <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">50+</div>
                                <div className="text-green-900 font-bold text-sm lg:text-base">Community Partners</div>
                            </div>

                            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-center border border-green-400 border-opacity-20">
                                <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">24/7</div>
                                <div className="text-green-900 font-bold text-sm lg:text-base">Support Available</div>
                            </div>

                        </div>
                    </div> */}

                </div>
            </div>
        </section>
    );
};

export default About;
