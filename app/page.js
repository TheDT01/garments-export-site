// app/page.js (Home Page)
export const metadata = {
  title: "Sapphire Design LTD — Global Apparel Partner",
  description:
    "Premium apparel manufacturing partner since 2005. Explore our expertise in knitwear, woven, jackets, denim, and more. Trusted worldwide for quality, compliance, and innovation.",
};

import Image from "next/image";

export default function Home() {
  return (
    <main className="space-y-24">
      {/* HERO SECTION WITH SLIDESHOW */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <div className="absolute inset-0 animate-fade">
          <Image
            src="/images/hero1.jpg"
            alt="Factory Overview"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
            Global Apparel Partner Since 2005
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-200">
            Delivering excellence in apparel manufacturing with sustainable
            practices, global compliance, and innovative solutions.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="/products"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg"
            >
              Explore Products
            </a>
            <a
              href="/products#rfq"
              className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-medium"
            >
              Start an RFQ
            </a>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Global Footprint</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Years of Excellence", value: "20+" },
            { label: "Countries Exported", value: "20+" },
            { label: "Employees", value: "1200+" },
            { label: "Production Plants", value: "6" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <p className="text-4xl font-extrabold text-indigo-600">
                {stat.value}
              </p>
              <p className="mt-2 text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SATISFACTION TABLES */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Our Performance Indicators
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl shadow-md overflow-hidden">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="p-3 text-left">Metric</th>
                <th className="p-3 text-left">Score</th>
                <th className="p-3 text-left">Confidence</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">Customer Satisfaction</td>
                <td className="p-3">96%</td>
                <td className="p-3">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">On-Time Delivery</td>
                <td className="p-3">94%</td>
                <td className="p-3">⏱️</td>
              </tr>
              <tr>
                <td className="p-3">Product Quality</td>
                <td className="p-3">98%</td>
                <td className="p-3">🧵</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FEATURES EXPLAINED */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-3xl font-bold">Powerful Tools for Buyers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "RFQ Configurator",
                desc: "Submit detailed requirements (fabric, trims, quantities, delivery windows) and get tailored offers.",
              },
              {
                title: "Estimator",
                desc: "Preview indicative MOQ, lead times, and cost breakdowns before committing.",
              },
              {
                title: "Fabric Library",
                desc: "Explore curated fabrics, finishes, and trims with composition and GSM details.",
              },
              {
                title: "Compliance Wall",
                desc: "Certifications and sustainability commitments: OEKO-TEX, BSCI, SEDEX, WRAP, and more.",
              },
              {
                title: "Sample Wizard",
                desc: "Request development, fit, or PP samples with courier preferences.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h3 className="font-semibold text-xl">{f.title}</h3>
                <p className="mt-2 text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Journey Since 2005
        </h2>
        <ol className="relative border-l border-gray-300">
          {[
            { year: "2005", event: "Company founded" },
            { year: "2010", event: "First exports to Europe" },
            { year: "2015", event: "Expanded to 4 plants" },
            { year: "2023", event: "Recognized for sustainability leadership" },
          ].map((item, idx) => (
            <li key={idx} className="mb-10 ml-6">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-indigo-600 text-white">
                •
              </span>
              <h3 className="font-semibold text-lg">{item.year}</h3>
              <p className="text-gray-600">{item.event}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* CLIENTS & TESTIMONIALS */}
      <section className="bg-slate-100 py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-12 text-center">
          <h2 className="text-3xl font-bold">Trusted by Leading Buyers</h2>
          {/* Logos */}
          <div className="flex flex-wrap justify-center gap-8">
            {["nike", "zara", "hm", "gap"].map((c, i) => (
              <div
                key={i}
                className="h-16 w-32 bg-white rounded-lg shadow flex items-center justify-center"
              >
                <span className="text-gray-400 uppercase">{c}</span>
              </div>
            ))}
          </div>
          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              {
                quote:
                  "Sapphire Design has been a reliable partner for years, delivering consistent quality and on-time shipments.",
                name: "Global Buyer A",
              },
              {
                quote:
                  "Their transparency and compliance focus give us confidence in every order we place.",
                name: "Retailer B",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg"
              >
                <p className="italic text-gray-700">“{t.quote}”</p>
                <p className="mt-4 font-semibold">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="text-center py-16 px-6">
        <h2 className="text-3xl font-bold">
          Ready to Start Your Next Collection?
        </h2>
        <p className="text-gray-600 mt-2">
          Partner with Sapphire Design LTD for quality, speed, and compliance.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/products#rfq"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl shadow"
          >
            Start an RFQ
          </a>
          <a
            href="/products"
            className="bg-white border border-indigo-600 text-indigo-600 px-6 py-3 rounded-xl hover:bg-indigo-50"
          >
            Explore Products
          </a>
        </div>
      </section>
    </main>
  );
}
