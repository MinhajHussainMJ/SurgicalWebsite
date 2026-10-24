export default function Services() {
  const services = [
    {
      icon: "fa-industry",
      title: "Manufacturing",
      description:
        "State-of-the-art CNC machining, forging, and finishing with German-grade stainless steel for unmatched precision.",
      features: ["CNC Machining", "Precision Forging", "Mirror Finish", "Satin Finish"],
    },
    {
      icon: "fa-ship",
      title: "Export & Shipping",
      description:
        "Worldwide shipping with proper documentation, customs clearance, and door-to-door delivery services.",
      features: ["FOB/CIF Terms", "Air & Sea Freight", "Custom Clearance", "Door-to-Door"],
    },
    {
      icon: "fa-cogs",
      title: "OEM / Private Label",
      description:
        "Custom branding, packaging design, and private label manufacturing to build your own instrument brand.",
      features: ["Custom Logos", "Branded Packaging", "Private Label", "Custom Catalogs"],
    },
    {
      icon: "fa-clipboard-check",
      title: "Quality Assurance",
      description:
        "Rigorous quality control at every stage — from raw material inspection to final packaging and sterilization.",
      features: ["ISO 13485", "CE Marking", "FDA Compliant", "Batch Testing"],
    },
    {
      icon: "fa-hand-holding-medical",
      title: "Import Services",
      description:
        "We facilitate import of raw materials, specialized alloys, and components from global suppliers.",
      features: ["Raw Material Sourcing", "Import Documentation", "Supplier Network", "Quality Inspection"],
    },
    {
      icon: "fa-headset",
      title: "After-Sales Support",
      description:
        "Dedicated customer support, instrument re-sharpening, repair services, and warranty claims handling.",
      features: ["24/7 Support", "Re-sharpening", "Repair Services", "Warranty Claims"],
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 bg-teal-600/20 text-teal-400 rounded-full text-sm font-medium mb-4">
            <i className="fas fa-concierge-bell mr-2"></i>
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            End-to-End <span className="text-teal-400">Import & Export</span> Solutions
          </h2>
          <p className="text-gray-400 text-lg">
            From manufacturing to delivery, we handle every aspect of the surgical instruments
            supply chain with expertise and precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-teal-500/50 transition-all group hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className={`fas ${service.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-5 leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
