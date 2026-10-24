export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-teal-900">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-4 py-2 bg-teal-600/20 border border-teal-500/30 rounded-full mb-6">
            <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-teal-300 text-sm font-medium">
              Trusted Since 1995 | Sialkot, Pakistan
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Premium Surgical Instruments for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
              Global Healthcare
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Leading manufacturer and exporter of high-quality surgical, dental, and veterinary
            instruments from Sialkot — the world's surgical instruments capital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#products"
              className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-lg font-semibold transition-all shadow-xl shadow-teal-600/30 hover:shadow-teal-600/50 hover:-translate-y-0.5"
            >
              <i className="fas fa-microscope mr-3"></i>
              Explore Products
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl text-lg font-semibold transition-all backdrop-blur-sm"
            >
              <i className="fas fa-envelope mr-3"></i>
              Request Quote
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { number: "25+", label: "Years Experience" },
              { number: "5000+", label: "Products" },
              { number: "60+", label: "Countries" },
              { number: "100%", label: "Quality Assured" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/50 hover:text-white transition-colors">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
}
