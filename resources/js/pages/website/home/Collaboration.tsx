import React from 'react';

const Collaboration = () => {
  return (
    <section id='collaboration' className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">

        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-green-500">Collaboration</span>
          </h2>
        </div>

        {/* Main Partnership Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

            {/* Left Content */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <img
                  src="/images/logos/heart_to_heart_charity_logo.png"
                  alt="Heart to Heart Charity Logo"
                  className="w-16 h-16 mr-4"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Heart to Heart Charity</h3>
                  <p className="text-green-500 font-medium">Strategic Partner</p>
                </div>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our partnership with Heart to Heart Charity has enabled us to expand our reach and
                multiply our impact. Together, we've created comprehensive programs that address
                immediate needs while building long-term solutions for vulnerable communities.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-500">3+</div>
                  <div className="text-sm text-gray-600">Years Partnership</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-500">25+</div>
                  <div className="text-sm text-gray-600">Joint Programs</div>
                </div>
              </div>

              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300">
                Learn More About Our Partnership
              </button>
            </div>

            {/* Right Image */}
            <div className="h-full min-h-[400px] relative">
              <img
                src="/path/to/collaboration-main-image.jpg"
                alt="Collaboration with Heart to Heart"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Project Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

          {/* Project 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 relative overflow-hidden">
              <img
                src="/path/to/project1-image.jpg"
                alt="Food Distribution Program"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Food Relief
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Community Food Drive</h4>
              <p className="text-gray-600 mb-4">Joint food distribution reaching 500+ families monthly</p>
              <div className="flex items-center text-green-500 text-sm font-medium">
                <span>View Project</span>
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 relative overflow-hidden">
              <img
                src="/path/to/project2-image.jpg"
                alt="Emergency Relief Program"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Emergency Aid
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Crisis Response Team</h4>
              <p className="text-gray-600 mb-4">24/7 emergency support for families in urgent need</p>
              <div className="flex items-center text-green-500 text-sm font-medium">
                <span>View Project</span>
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 relative overflow-hidden">
              <img
                src="/path/to/project3-image.jpg"
                alt="Community Outreach Program"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Outreach
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Educational Support</h4>
              <p className="text-gray-600 mb-4">School supplies and learning resources for children</p>
              <div className="flex items-center text-green-500 text-sm font-medium">
                <span>View Project</span>
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Call-to-Action */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Join Our Mission?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Partner with us to create lasting change in communities that need it most
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300">
              Become a Partner
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-green-600 transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Collaboration;
