import React from 'react'
import { ExternalLink, Play, Calendar, Tv } from 'lucide-react'

const Media = () => {
  const instagramVideos = [
    {
      id: 1,
      title: "Digital Transformation Interview - BBC Radio",
      description: "Discussing the future of digital business transformation in the Middle East",
      instagramUrl: "https://www.instagram.com/p/example1/",
      thumbnail: "/api/placeholder/400/300",
      date: "2024-03-15",
      publication: "BBC Radio UK",
      duration: "12:30"
    },
    {
      id: 2,
      title: "Entrepreneurship in Lebanon - Al Jazeera",
      description: "Talking about startup ecosystem development and youth empowerment",
      instagramUrl: "https://www.instagram.com/p/example2/",
      thumbnail: "/api/placeholder/400/300",
      date: "2024-02-20",
      publication: "Al Jazeera",
      duration: "8:45"
    },
    {
      id: 3,
      title: "AI in Arabic Content Creation - MTV Lebanon",
      description: "Exploring artificial intelligence applications for Arabic media content",
      instagramUrl: "https://www.instagram.com/p/example3/",
      thumbnail: "/api/placeholder/400/300",
      date: "2024-01-10",
      publication: "MTV Lebanon",
      duration: "15:20"
    },
    {
      id: 4,
      title: "Building Startup Communities - Future TV",
      description: "Strategies for creating thriving entrepreneurship ecosystems",
      instagramUrl: "https://www.instagram.com/p/example4/",
      thumbnail: "/api/placeholder/400/300",
      date: "2023-12-05",
      publication: "Future TV Lebanon",
      duration: "10:15"
    },
    {
      id: 5,
      title: "Digital Marketing Trends - Sputnik Radio",
      description: "Latest trends in digital marketing and social media strategy",
      instagramUrl: "https://www.instagram.com/p/example5/",
      thumbnail: "/api/placeholder/400/300",
      date: "2023-11-18",
      publication: "Sputnik Radio Russia",
      duration: "14:30"
    },
    {
      id: 6,
      title: "Youth Empowerment Program - ATV Turkey",
      description: "Discussing programs for developing digital skills among youth",
      instagramUrl: "https://www.instagram.com/p/example6/",
      thumbnail: "/api/placeholder/400/300",
      date: "2023-10-22",
      publication: "ATV Turkey",
      duration: "9:40"
    }
  ]

  const handleVideoClick = (url: string | URL | undefined) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      {/* Header Section */}
      <section id='media'className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Media Portfolio
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore Hussein's extensive media appearances across international networks,
            featuring interviews on digital transformation, entrepreneurship, and innovation.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <div className="bg-blue-50 px-4 py-2 rounded-full">
              <span className="text-blue-700 font-medium">📺 {instagramVideos.length} TV Interviews</span>
            </div>
            <div className="bg-green-50 px-4 py-2 rounded-full">
              <span className="text-green-700 font-medium">🌍 International Coverage</span>
            </div>
            <div className="bg-purple-50 px-4 py-2 rounded-full">
              <span className="text-purple-700 font-medium">🎤 Expert Commentary</span>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recent Interviews & Media Appearances
            </h2>
            <p className="text-gray-600">
              Watch Hussein's latest interviews and media features on Instagram
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instagramVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => handleVideoClick(video.instagramUrl)}
              >
                {/* Thumbnail */}
                <div className="relative group">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-gray-900 ml-1" />
                    </div>
                  </div>
                  {/* Duration Badge */}
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Publication */}
                  <div className="flex items-center gap-2 mb-3">
                    <Tv className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-600 font-medium text-sm">{video.publication}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {video.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {video.description}
                  </p>

                  {/* Date and Link */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <Calendar className="w-3 h-3" />
                      {new Date(video.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-1 text-blue-600 text-sm font-medium hover:text-blue-700">
                      <ExternalLink className="w-3 h-3" />
                      Watch on Instagram
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium">
              Load More Videos
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">240+</div>
              <div className="text-gray-600">Training Sessions</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">12K+</div>
              <div className="text-gray-600">People Trained</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">900+</div>
              <div className="text-gray-600">Digital Projects</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">22</div>
              <div className="text-gray-600">Countries</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Media
