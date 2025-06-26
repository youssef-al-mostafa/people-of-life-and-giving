import { Heart, Users, Target} from 'lucide-react';
import Video from '@/components/website/core/Video';


const Collaboration = () => {
    return (
        <section id='collaboration' className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Our Collaboration
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Together with <span className="text-green-600 font-semibold">Heart to Heart Charity</span>,
                        we're creating a bigger impact and reaching more lives
                    </p>
                </div>

                <div className="mb-20">
                    <div className="bg-white rounded-2xl p-12 shadow-lg max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Our Trusted Partner</h3>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                            <div className="w-48 h-48 bg-gray-100 rounded-2xl flex items-center justify-center shadow-md">
                                <img
                                    src="/images/logos/heart_to_heart_charity_logo.png"
                                    alt="Heart to Heart Charity Logo"
                                    className="max-w-full max-h-full p-4"
                                />
                            </div>
                            <div className="text-center md:text-left max-w-md">
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">Heart to Heart Charity</h4>
                                <p className="text-gray-600">
                                    A dedicated organization committed to bringing hope and healing to communities
                                    worldwide through sustainable development and compassionate care.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-20">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-4 md:p-8 shadow-lg">
                        <h3 className="text-2xl font-bold text-center text-white mb-8">See Our Impact in Action</h3>
                        <div className="relative max-w-full md:max-w-4xl mx-auto">
                            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black">
                                <div className="relative pb-[56.25%]">
                                  <Video/>
                                </div>
                            </div>
                            <p className="text-center text-white mt-4 text-sm">
                                Watch how our partnership is transforming lives in communities across the region
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-20">
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-green-200 -z-10"></div>
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-full md:w-1/2 text-center md:text-right pr-0 md:pr-8">
                                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="flex justify-center md:justify-end mb-4">
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                            <Heart className="w-6 h-6 text-green-600" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">United by Purpose</h3>
                                    <p className="text-gray-600">
                                        We joined forces with Heart to Heart Charity, recognizing our
                                        shared vision of transforming lives through compassion and sustainable support.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 pl-0 md:pl-8">
                                <img
                                    src="/images/collaboration/collaboration_1.jpg"
                                    alt="Partnership handshake"
                                    className="rounded-2xl shadow-lg w-full h-64 object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                            <div className="w-full h-auto md:h-[100vh] md:w-1/2 text-center md:text-left pl-0 md:pl-8">
                                <div className='w-full h-full flex flex-col justify-around space-y-8 md:space-y-0'>
                                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                                        <div className="flex justify-center md:justify-start mb-4">
                                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                                <Target className="w-6 h-6 text-orange-600" />
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-3">Shared Goals, Double Impact</h3>
                                        <p className="text-gray-600">
                                            Together, we've expanded our reach to serve more families and communities,
                                            combining our resources to provide essential support such as food, shelter,
                                            education, and healthcare.
                                        </p>
                                    </div>
                                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                                        <div className="flex justify-center md:justify-end mb-4">
                                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                                <Users className="w-6 h-6 text-green-600" />
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-3">Joint Community Programs</h3>
                                        <p className="text-gray-600">
                                            Our collaboration has birthed innovative programs like the "Hope & Healing"
                                            initiative, providing comprehensive support to vulnerable communities.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-full md:w-1/2 pr-0 md:pr-8">
                                <img
                                    src="/images/collaboration/collaboration_3.jpg"
                                    alt="Helping communities"
                                    className="rounded-2xl shadow-lg w-full h-64 md:h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Collaboration;
