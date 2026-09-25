export default function Certifications() {
  const certifications = [
    { name: "ISO 13485:2016", description: "Medical Device Quality Management System", icon: "fa-certificate" },
    { name: "CE Mark", description: "European Conformity Certification", icon: "fa-check-circle" },
    { name: "FDA Registered", description: "US Food & Drug Administration", icon: "fa-shield-alt" },
    { name: "ISO 9001:2015", description: "Quality Management System", icon: "fa-award" },
    { name: "WHO GMP", description: "Good Manufacturing Practices", icon: "fa-hospital" },
    { name: "Free Sale Certificate", description: "Export Compliance Document", icon: "fa-file-alt" },
  ];

  const partners = [
    "Hospitals", "Distributors", "Medical Schools", "Government Tenders",
    "Private Clinics", "Pharmaceutical Companies", "NGOs", "Research Labs"
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
            <i className="fas fa-shield-alt mr-2"></i>
            Certifications & Compliance
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Internationally <span className="text-teal-600">Certified & Compliant</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Our products meet the strictest international standards, enabling seamless export
            to regulated markets worldwide.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all flex items-start space-x-4"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className={`fas ${cert.icon} text-white`}></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">{cert.name}</h4>
                <p className="text-gray-500 text-sm">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Export Markets */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Global Export Markets</h3>
            <p className="text-gray-500">Serving clients across every continent</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { region: "Europe", countries: "Germany, UK, France, Italy, Spain", flag: "🇪🇺" },
              { region: "North America", countries: "USA, Canada, Mexico", flag: "🌎" },
              { region: "Middle East", countries: "UAE, Saudi Arabia, Qatar", flag: "🌍" },
              { region: "Asia Pacific", countries: "Japan, Australia, Korea", flag: "🌏" },
            ].map((market) => (
              <div key={market.region} className="bg-gray-50 rounded-xl p-5 text-center">
                <div className="text-3xl mb-2">{market.flag}</div>
                <h4 className="font-bold text-gray-900">{market.region}</h4>
                <p className="text-xs text-gray-500 mt-1">{market.countries}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {partners.map((partner) => (
              <span
                key={partner}
                className="px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
