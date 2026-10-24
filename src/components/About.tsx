export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
              <i className="fas fa-building mr-2"></i>
              About Our Company
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Sialkot's Premier Surgical Instruments{" "}
              <span className="text-teal-600">Export House</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Based in the heart of Sialkot — the world-renowned hub for surgical instrument
              manufacturing — we have been delivering premium quality instruments to hospitals,
              clinics, and distributors across 60+ countries for over 25 years.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our state-of-the-art manufacturing facility combines traditional craftsmanship
              with modern technology, ensuring every instrument meets the highest international
              standards of precision, durability, and sterility.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: "fa-award", title: "ISO Certified", desc: "ISO 13485:2016" },
                { icon: "fa-globe", title: "Global Reach", desc: "60+ Countries" },
                { icon: "fa-flask", title: "R&D Facility", desc: "Innovation Lab" },
                { icon: "fa-handshake", title: "OEM/ODM", desc: "Custom Solutions" },
              ].map((item) => (
                <div key={item.title} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`fas ${item.icon} text-teal-600`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-teal-600 to-blue-700 rounded-3xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">25+</div>
                  <div className="text-teal-200 text-sm">Years of Excellence</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">5000+</div>
                  <div className="text-teal-200 text-sm">Product Range</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">500+</div>
                  <div className="text-teal-200 text-sm">Happy Clients</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">CE</div>
                  <div className="text-teal-200 text-sm">Mark Certified</div>
                </div>
              </div>

              <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Manufacturing Hub</h4>
                    <p className="text-teal-200 text-sm">
                      Small Industrial Estate, Sialkot, Punjab, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-200/50 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200/50 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
