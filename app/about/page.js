// app/about/page.js (Server component)
export const metadata = {
  title: "About — Sapphire Design LTD",
  description:
    "Sapphire Design Limited — Founded 2005. End-to-end apparel manufacturing: knitwear, woven, jackets, printing, embroidery. 500k pcs/month capacity across 6 plants. OEKO-TEX certified.",
};

import Stats from "./_components/Stats";
import TeamGrid from "./_components/TeamGrid";
import Testimonials from "./_components/Testimonials";
import Timeline from "./_components/Timeline";

export default function Page() {
  return (
    <section className="space-y-12">
      {/* Hero */}
      <div className="rounded-3xl bg-gradient-to-br from-white via-slate-50 to-indigo-50 border p-8 md:p-14">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              About Sapphire Design Limited
            </h1>
            <p className="mt-4 text-gray-700 leading-relaxed md:text-lg">
              Founded in 2005 and headquartered in Dhaka, Sapphire Design
              Limited is a vertically integrated garment manufacturer
              specialising in knitwear, woven, and jackets. We combine
              export-grade manufacturing with compliance and sustainability to
              serve brands in Europe, the USA and the Middle East.
            </p>

            <div className="mt-6 flex gap-3 flex-wrap">
              <a href="/contact" className="btn px-5 py-3">
                Contact Sales
              </a>
              <a href="/products" className="btn-secondary px-5 py-3">
                View Products
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border bg-gray-50 p-6">
            <img
              src="/images/placeholders/about-hero.jpg"
              alt="Sapphire Design facility"
              className="w-full h-64 object-cover rounded-xl"
            />
            <p className="mt-4 text-sm text-gray-600">
              Factory snapshot — production lines, sampling room, finishing.
            </p>
          </div>
        </div>
      </div>

      {/* Key Stats */}
      <div className="max-w-6xl mx-auto">
        <Stats
          items={[
            { label: "Years experience", value: 20 },
            { label: "Workforce", value: 1200 },
            { label: "Plants", value: 6 },
            {
              label: "Markets",
              value: 3,
              suffix: "+",
              notes: "Europe · USA · Middle East",
            },
          ]}
        />
      </div>

      {/* Leadership */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold">Leadership</h2>
        <p className="text-gray-600">
          Our senior leadership drives quality, compliance and customer
          partnerships.
        </p>

        <TeamGrid
          members={[
            {
              name: "Shah Md. Rafiqul Islam",
              role: "Chairman",
              region: "Exports to USA, Europe",
              img: "/images/placeholders/team-rafiqul.jpg",
              quote: "—",
              vision: "Chairman's vision text goes here.",
            },
            {
              name: "S.M. Reazul Islam",
              role: "Managing Director",
              region: "Exports to Middle East",
              img: "/images/placeholders/team-reazul.jpg",
              quote: "—",
              vision: "MD's vision text goes here.",
            },
            {
              name: "S.M. Refaeatul Islam",
              role: "Director",
              region: "Exports to Europe",
              img: "/images/placeholders/team-refaeat.jpg",
              quote: "—",
              vision: "Director's vision text goes here.",
            },
            {
              name: "S.M. Rehanul Islam",
              role: "Executive Director",
              region: "Exports to USA, Europe, ME",
              img: "/images/placeholders/team-rehan.jpg",
              quote: "—",
              vision: "ED's vision text goes here.",
            },
          ]}
        />
      </div>

      {/* What we do */}
      <div className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          What we do — end-to-end
        </h2>
        <p className="text-gray-700">
          Full-package manufacturing (sampling → PP → bulk → FOB/DPD) with
          in-house printing, embroidery, trimming, washing & finishing. We
          handle complex jackets, bonded constructions, and high-stitch-count
          embroidery.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="p-6 border rounded-2xl bg-white">
            <h3 className="font-semibold">Sampling & Development</h3>
            <p className="text-sm text-gray-600 mt-2">
              Rapid sample room, tech pack support, fit iterations.
            </p>
          </div>
          <div className="p-6 border rounded-2xl bg-white">
            <h3 className="font-semibold">In-house Embroidery & Printing</h3>
            <p className="text-sm text-gray-600 mt-2">
              Screen, DTF, digital; flat & 3D embroidery with QA at stitch
              level.
            </p>
          </div>
          <div className="p-6 border rounded-2xl bg-white">
            <h3 className="font-semibold">Washing & Finishing</h3>
            <p className="text-sm text-gray-600 mt-2">
              Advanced wet processing, stone/enzyme/ozone finishes and water
              recycling.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline / Milestones */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold">Milestones</h2>
        <Timeline
          items={[
            {
              year: 2005,
              title: "Founded",
              blurb: "Sapphire Design Limited established in Dhaka.",
            },
            {
              year: 2010,
              title: "Capacity Expansion",
              blurb: "Added two production lines and new finishing unit.",
            },
            {
              year: 2016,
              title: "Sustainability Drive",
              blurb: "Launched water recycling & solar adoption.",
            },
            {
              year: 2021,
              title: "OEKO-TEX",
              blurb: "OEKO-TEX Standard 100 certification obtained.",
            },
            {
              year: 2024,
              title: "6 Plants Operational",
              blurb: "Scaled to 6 production plants across Dhaka region.",
            },
          ]}
        />
      </div>

      {/* Testimonials + Clients */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold">
          Clients & Testimonials
        </h2>
        <p className="text-gray-600">
          Trusted by international brands — demo logos and testimonials below
          (replace with real ones).
        </p>

        <div className="mt-6">
          <Testimonials
            items={[
              {
                quote:
                  "Sapphire delivered consistent quality at scale — great partner.",
                author: "Buyer (demo)",
              },
              {
                quote: "Fast development samples and strong tech support.",
                author: "Retailer (demo)",
              },
              {
                quote: "Responsive team and transparent processes.",
                author: "Brand (demo)",
              },
            ]}
          />
        </div>

        <div className="mt-8 grid grid-cols-3 sm:grid-cols-6 gap-4 items-center">
          {[
            "client-1.png",
            "client-2.png",
            "client-3.png",
            "client-4.png",
            "client-5.png",
            "client-6.png",
          ].map((c, i) => (
            <div
              key={i}
              className="p-4 border rounded-xl bg-white flex items-center justify-center"
            >
              <img
                src={`/images/placeholders/${c}`}
                alt={`Client ${i + 1}`}
                className="max-h-8 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-6xl mx-auto text-center py-10">
        <h3 className="text-xl font-semibold">Visit Our Factory</h3>
        <p className="text-gray-600 mt-2">
          We welcome buyer visits. Contact us to schedule a tour or video
          walkthrough.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="/contact" className="btn px-6 py-3">
            Request Visit
          </a>
          <a href="/rfq" className="btn-secondary px-6 py-3">
            Start RFQ
          </a>
        </div>
      </div>
    </section>
  );
}
