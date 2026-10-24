export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-blue-700 rounded-lg flex items-center justify-center">
                <i className="fas fa-heartbeat text-white text-lg"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Sialkot<span className="text-teal-400">Surgical</span>
                </h3>
                <p className="text-xs text-gray-500">Import & Export Co.</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Leading manufacturer and exporter of premium surgical instruments from Sialkot,
              Pakistan. Serving global healthcare since 1995.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: "fa-facebook-f", href: "#" },
                { icon: "fa-linkedin-in", href: "#" },
                { icon: "fa-whatsapp", href: "#" },
                { icon: "fa-instagram", href: "#" },
                { icon: "fa-youtube", href: "#" },
              ].map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  className="w-9 h-9 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all"
                >
                  <i className={`fab ${social.icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Products", href: "#products" },
                { name: "Services", href: "#services" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 text-sm transition-colors flex items-center"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 text-teal-600"></i>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-5">Products</h4>
            <ul className="space-y-3">
              {[
                "General Surgery",
                "Orthopedic Instruments",
                "Dental Instruments",
                "Veterinary Instruments",
                "Beauty & Cosmetic",
                "ENT & Micro Surgery",
              ].map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    className="text-gray-400 hover:text-teal-400 text-sm transition-colors flex items-center"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 text-teal-600"></i>
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt text-teal-500 mt-1"></i>
                <span className="text-gray-400 text-sm">
                  Small Industrial Estate, Paris Road,<br />
                  Sialkot 51310, Pakistan
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-phone text-teal-500"></i>
                <span className="text-gray-400 text-sm">+92 300 123 4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-envelope text-teal-500"></i>
                <span className="text-gray-400 text-sm">info@sialkotsurgical.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fab fa-whatsapp text-teal-500"></i>
                <span className="text-gray-400 text-sm">WhatsApp: +92 300 123 4567</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 SialkotSurgical Import & Export Co. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-500 hover:text-teal-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-teal-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-teal-400 text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
