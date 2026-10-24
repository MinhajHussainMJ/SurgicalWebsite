import { useState } from "react";

const categories = [
  {
    id: "general",
    name: "General Surgery",
    icon: "fa-cut",
    description: "Scalpels, scissors, forceps, retractors, needle holders, and clamps for all surgical procedures.",
    items: ["Scalpels & Blades", "Surgical Scissors", "Forceps & Clamps", "Retractors", "Needle Holders", "Dissecting Instruments"],
  },
  {
    id: "orthopedic",
    name: "Orthopedic",
    icon: "fa-bone",
    description: "Complete range of orthopedic instruments for bone surgery, fracture management, and joint procedures.",
    items: ["Bone Plates & Screws", "Intramedullary Nails", "Orthopedic Drills", "Bone Saws", "Reduction Forceps", "Elevators & Rasps"],
  },
  {
    id: "dental",
    name: "Dental & Oral",
    icon: "fa-tooth",
    description: "Professional dental instruments for extraction, periodontal, endodontic, and implant procedures.",
    items: ["Extraction Forceps", "Elevators", "Scalers & Curettes", "Mirrors & Probes", "Impression Trays", "Implant Kits"],
  },
  {
    id: "veterinary",
    name: "Veterinary",
    icon: "fa-paw",
    description: "Specialized veterinary surgical instruments for large and small animal surgical procedures.",
    items: ["Large Animal Sets", "Small Animal Sets", "Equine Instruments", "Castration Sets", "Dehorning Sets", "Obstetric Instruments"],
  },
  {
    id: "beauty",
    name: "Beauty & Cosmetic",
    icon: "fa-spa",
    description: "Precision beauty and cosmetic instruments for professional salons, spas, and cosmetic surgery.",
    items: ["Nail Instruments", "Eyelash Tools", "Tweezers & Nippers", "Facial Scissors", "Manicure Sets", "Pedicure Sets"],
  },
  {
    id: "ent",
    name: "ENT & Micro",
    icon: "fa-head-side-medical",
    description: "Fine micro-surgical instruments for ear, nose, and throat procedures with precision engineering.",
    items: ["Ear Forceps", "Nasal Instruments", "Tonsil Instruments", "Micro Scissors", "Suction Tubes", "Biopsy Forceps"],
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("general");
  const activeProduct = categories.find((c) => c.id === activeCategory)!;

  return (
    <section id="products" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
            <i className="fas fa-boxes mr-2"></i>
            Our Product Range
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Surgical <span className="text-teal-600">Instrument Catalog</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Over 5,000 products across multiple medical specialties, all manufactured with
            premium-grade German stainless steel.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center px-5 py-3 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-teal-600 text-white shadow-lg shadow-teal-600/30"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <i className={`fas ${cat.icon} mr-2`}></i>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="bg-gradient-to-br from-gray-50 to-teal-50/30 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center">
                  <i className={`fas ${activeProduct.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{activeProduct.name}</h3>
              </div>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {activeProduct.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-semibold transition-all"
              >
                <i className="fas fa-file-pdf mr-2"></i>
                Download Catalog
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {activeProduct.items.map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                      <i className="fas fa-check text-teal-600 text-xs"></i>
                    </div>
                    <span className="text-gray-700 font-medium text-sm">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
