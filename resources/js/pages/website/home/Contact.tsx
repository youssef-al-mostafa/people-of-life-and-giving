import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Zap, Shield, Globe } from 'lucide-react';

interface FormData {
    fullName: string;
    email: string;
    phone: string;
    company: string;
    subject: string;
    message: string;
}

interface FormErrors {
    [key: string]: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters long';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setIsSubmitted(true);
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                company: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 lg:py-32 bg-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
                {/* Unique Header Design */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center space-x-4 mb-8">
                        <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
                        <div className="bg-orange-100 px-6 py-2 rounded-full">
                            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
                                Connect With Us
                            </span>
                        </div>
                        <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-400"></div>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <p className="text-gray-600 text-xl leading-relaxed">
                            Your message could be the beginning of something beautiful. Let's explore how we can
                            work together to create positive change in our community.
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 transform -skew-y-2 rounded-3xl"></div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-16 p-12 lg:p-16">
                        <div className="lg:col-span-2">
                            {isSubmitted ? (
                                <div className="text-center py-16">
                                    <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-8">
                                        <CheckCircle className="w-12 h-12 text-green-600" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-[#363543] mb-6">
                                        Thank You for Reaching Out!
                                    </h3>
                                    <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                                        Your message has been received. We'll respond within 24 hours to continue the conversation.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="inline-flex items-center space-x-2 bg-green-500 text-white px-8 py-3 rounded-xl font-medium hover:bg-green-600 transition-colors duration-300"
                                    >
                                        <MessageSquare className="w-5 h-5" />
                                        <span>Send Another Message</span>
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="mb-8">
                                        <h3 className="text-3xl font-bold text-[#363543] mb-4">
                                            Let's Connect
                                        </h3>
                                        <p className="text-gray-600 text-lg">
                                            Share your thoughts, questions, or ideas with us. Every conversation starts with a simple message.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                className={`w-full px-0 py-4 border-0 border-b-2 bg-transparent focus:ring-0 focus:border-green-500 transition-colors duration-300 text-lg placeholder-gray-400 ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="John Doe"
                                            />
                                            {errors.fullName && (
                                                <p className="text-sm text-red-600 mt-1">{errors.fullName}</p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className={`w-full px-0 py-4 border-0 border-b-2 bg-transparent focus:ring-0 focus:border-green-500 transition-colors duration-300 text-lg placeholder-gray-400 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="john@example.com"
                                            />
                                            {errors.email && (
                                                <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full px-0 py-4 border-0 border-b-2 border-gray-300 bg-transparent focus:ring-0 focus:border-green-500 transition-colors duration-300 text-lg placeholder-gray-400"
                                                placeholder="+961 3 123 456"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                                Organization
                                            </label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                className="w-full px-0 py-4 border-0 border-b-2 border-gray-300 bg-transparent focus:ring-0 focus:border-green-500 transition-colors duration-300 text-lg placeholder-gray-400"
                                                placeholder="Your Organization"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className={`w-full px-0 py-4 border-0 border-b-2 bg-transparent focus:ring-0 focus:border-green-500 transition-colors duration-300 text-lg placeholder-gray-400 ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                                            placeholder="What would you like to discuss?"
                                        />
                                        {errors.subject && (
                                            <p className="text-sm text-red-600 mt-1">{errors.subject}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                            Your Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className={`w-full px-0 py-4 border-0 border-b-2 bg-transparent focus:ring-0 focus:border-green-500 transition-colors duration-300 text-lg placeholder-gray-400 resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                                            placeholder="Tell us about your ideas, questions, or how you'd like to get involved..."
                                        />
                                        {errors.message && (
                                            <p className="text-sm text-red-600 mt-1">{errors.message}</p>
                                        )}
                                    </div>

                                    <div className="pt-8">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-green-500 text-white px-12 py-4 rounded-2xl font-bold text-lg hover:from-green-600 hover:to-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 shadow-xl hover:shadow-2xl"
                                        >
                                            <div className="flex items-center space-x-3">
                                                {isSubmitting ? (
                                                    <>
                                                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                        <span>Sending Your Message...</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span className='text-white'>Send Message</span>
                                                        <Send className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
                                                    </>
                                                )}
                                            </div>
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>

                        <div className="space-y-8">
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                <h4 className="text-xl font-bold text-[#363543] mb-6">Why Contact Us?</h4>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                                            <Zap className="w-5 h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <h5 className="font-semibold text-gray-800 mb-1">Quick Response</h5>
                                            <p className="text-gray-600 text-sm">We respond to all messages within 24 hours</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                                            <Globe className="w-5 h-5 text-orange-600" />
                                        </div>
                                        <div>
                                            <h5 className="font-semibold text-gray-800 mb-1">Global Impact</h5>
                                            <p className="text-gray-600 text-sm">Join our worldwide community of changemakers</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                                            <Shield className="w-5 h-5 text-gray-600" />
                                        </div>
                                        <div>
                                            <h5 className="font-semibold text-gray-800 mb-1">Privacy First</h5>
                                            <p className="text-gray-600 text-sm">Your information is always kept secure and private</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
