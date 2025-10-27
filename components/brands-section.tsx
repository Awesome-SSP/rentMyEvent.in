export default function BrandsSection() {
  const brands = [
    { name: "Arena Animation", logo: "/arena-animation-logo.jpg" },
    { name: "M3M", logo: "/m3m-logo.jpg" },
    { name: "Equinox", logo: "/equinox-logo.jpg" },
    { name: "Kajaria", logo: "/kajaria-logo.jpg" },
    { name: "Bata", logo: "/bata-logo.jpg" },
    { name: "Pristyn Care", logo: "/pristyn-care-logo.jpg" },
  ]

  return (
    <section className="diagonal-bg-purple py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Brands Trusted Us</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-white border border-gray-200 rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <img src={brand.logo || "/placeholder.svg"} alt={brand.name} className="max-w-full h-16 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
