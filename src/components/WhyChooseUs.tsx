export default function WhyChooseUs() {
  const reasons = [
    {
      icon: "fa-gem",
      title: "Premium German Steel",
      description:
        "We use only the highest grade AISI 420 & 440 stainless steel sourced from certified European mills for superior corrosion resistance.",
    },
    {
      icon: "fa-users-cog",
      title: "Skilled Craftsmen",
      description:
        "Our master craftsmen carry forward generations of expertise from Sialkot's 100+ year legacy of surgical instrument making.",
    },
    {
      icon: "fa-microscope",
      title: "Advanced R&D",
      description:
        "Continuous innovation through our dedicated research facility, developing new designs and improving existing instruments.",
    },
    {
      icon: "fa-dollar-sign",
      title: "Competitive Pricing",
      description:
        "Direct manufacturer pricing with no middlemen. Get premium quality instruments at factory-direct export rates.",
    },
    {
      icon: "fa-shipping-fast",
      title: "Fast Delivery",
      description:
        "Efficient production scheduling and established logistics partnerships ensure timely delivery to any destination worldwide.",
    },
    {
      icon: "fa-file-contract",
      title: "Flexible MOQ",
      description:
        "Whether you need 50 pieces or 50,000 — we accommodate orders of all sizes with the same quality commitment.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
            <i className="fas fa-star mr-2"></i>
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            The SialkotSurgical <span className="text-teal-600">Advantage</span>
          </h2>
          <p className="text-gray-600 text-lg">
            What sets us apart from thousands of manufacturers in the surgical instruments industry.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all group"
            >
              <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 group-hover:text-teal-50 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-teal-600 transition-colors">
                <i
                  className={`fas ${reason.icon} text-teal-600 text-xl group-hover:text-white transition-colors`}
                ></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-teal-600 to-blue-700 rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Ready to Start Your Import/Export Journey?
          </h3>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Get in touch today for a free consultation and customized quote for your surgical
            instruments requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-700 rounded-xl font-bold hover:bg-gray-100 transition-colors"
            >
              <i className="fas fa-paper-plane mr-2"></i>
              Send Inquiry
            </a>
            <a
              href="tel:+923001234567"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white border border-white/30 rounded-xl font-bold hover:bg-white/20 transition-colors"
            >
              <i className="fas fa-phone mr-2"></i>
              +92 300 123 4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
