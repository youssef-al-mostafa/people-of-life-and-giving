import React, { useState } from 'react';
import SvgIcon from '@/components/common/svgIcon';

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

    const contactMethods = [
        {
            title: 'General Inquiries',
            email: 'info@quad-bh.com',
            description: 'Business inquiries and partnerships'
        },
        {
            title: 'Business Development',
            email: 'business@quad-bh.com',
            description: 'Strategic partnerships and collaborations'
        },
        {
            title: 'Support',
            email: 'support@quad-bh.com',
            description: 'Technical support and assistance'
        },
        {
            title: 'Direct Contact',
            email: '+961 3 399474',
            description: 'Mon-Fri from 8:00 am - 6:00 pm'
        }
    ];

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';

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
        <section id="contact" className="bg-gray-50 py-16 lg:py-24 relative overflow-hidden">

            <div className="max-w-[1350px] mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center mb-16 lg:mb-20">
                    <div className="inline-block">
                        <span className="text-orange-400 font-medium uppercase tracking-wider text-sm lg:text-base
                                       mb-4 block">
                            Get in Touch
                        </span>
                        <div className="w-16 h-1 bg-orange-400 rounded-full mx-auto mb-6"></div>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#363543]">
                        Let's Start a Conversation
                    </h2>

                    <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                        Ready to transform your digital presence? We're here to help you achieve your goals
                        through innovative solutions and strategic partnerships.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="space-y-8 h-full">
                        <div className="relative h-full">
                            <div className="aspect-[4/3] lg:aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br
                                           from-orange-400 to-orange-500 relative group w-full h-full relative">

                                <img
                                    src="/images/contact-img.jpg"
                                    alt="Hussein Zeid - Contact"
                                    className="w-full h-full object-cover transition-transform duration-700
                                             group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#363543]/80 via-transparent
                                               to-transparent opacity-80"></div>

                                <div className="absolute bottom-6 left-6 right-6 text-white">
                                    <h3 className="text-xl lg:text-2xl font-bold mb-2 text-white">
                                        Ready to Build Something Amazing?
                                    </h3>
                                    <p className="text-gray-200 text-sm lg:text-base">
                                        Let's discuss your vision and create something extraordinary together.
                                    </p>
                                </div>

                                <div className="absolute top-6 right-6 w-12 h-12 border-2 border-white/30
                                               rounded-full flex items-center justify-center">
                                    <div className="w-6 h-6 bg-orange-400 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
                        {isSubmitted ? (
                            <div className="text-center py-12">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <SvgIcon name="check" size={40} className="text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#363543] mb-4">
                                    Message Sent Successfully!
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    Thank you for reaching out. We'll get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="bg-orange-400 text-white px-8 py-3 rounded-lg font-medium
                                             hover:bg-orange-500 transition-colors duration-300"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="mb-8">
                                    <h3 className="text-2xl lg:text-3xl font-bold text-[#363543] mb-4">
                                        Send us a Message
                                    </h3>
                                    <div className="w-16 h-1 bg-orange-400 rounded-full mb-4"></div>
                                    <p className="text-gray-600">
                                        Fill out the form below and we'll get back to you as soon as possible.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-medium text-[#363543] mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400
                                                      focus:border-orange-400 transition-colors duration-300 outline-none
                                                      ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                                            placeholder="Enter your full name"
                                        />
                                        {errors.fullName && (
                                            <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-[#363543] mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400
                                                      focus:border-orange-400 transition-colors duration-300 outline-none
                                                      ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                            placeholder="your.email@example.com"
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-[#363543] mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2
                                                         focus:ring-orange-400 focus:border-orange-400 transition-colors
                                                         duration-300 outline-none"
                                                placeholder="+961 3 123 456"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-[#363543] mb-2">
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2
                                                         focus:ring-orange-400 focus:border-orange-400 transition-colors
                                                         duration-300 outline-none"
                                                placeholder="Your company"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-[#363543] mb-2">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400
                                                      focus:border-orange-400 transition-colors duration-300 outline-none
                                                      ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                                            placeholder="Brief description of your inquiry"
                                        />
                                        {errors.subject && (
                                            <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-[#363543] mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400
                                                      focus:border-orange-400 transition-colors duration-300 outline-none resize-none
                                                      ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                                            placeholder="Please provide details about your project, timeline, and any specific requirements..."
                                        ></textarea>
                                        {errors.message && (
                                            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                                        )}
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-4
                                                     rounded-lg font-medium text-lg hover:from-orange-500 hover:to-orange-600
                                                     transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                                                     transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center">
                                                    <SvgIcon name="loader" size={20} className="animate-spin mr-2" />
                                                    Sending Message...
                                                </span>
                                            ) : (
                                                'Send your Message'
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
