// app/products/_components/stubs/ComplianceWall.js
export default function ComplianceWall() {
  const certifications = [
    {
      name: "OEKO-TEX® Standard 100",
      desc: "Certified safe textiles free from harmful substances.",
    },
    {
      name: "BSCI / Amfori",
      desc: "Ethical trade and social compliance for responsible sourcing.",
    },
    {
      name: "SEDEX (SMETA)",
      desc: "Audited for labor standards, health & safety, environment, and ethics.",
    },
    {
      name: "WRAP",
      desc: "Worldwide Responsible Accredited Production certification.",
    },
    {
      name: "GOTS / GRS",
      desc: "Organic & recycled content certifications ensuring sustainable sourcing.",
    },
    {
      name: "HIGG FEM / FSLM",
      desc: "Sustainability and labor management performance index.",
    },
    {
      name: "ZDHC",
      desc: "Zero Discharge of Hazardous Chemicals program compliance.",
    },
  ];

  return (
    <section className="p-8 border rounded-2xl bg-white shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Compliance & Certifications</h2>
      <p className="text-gray-600 mb-6">
        We adhere to international standards of sustainability, safety, and
        ethical production. Below are the certifications and audits our
        facilities maintain:
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert, i) => (
          <div
            key={i}
            className="p-4 border rounded-xl bg-slate-50 hover:bg-slate-100 transition"
          >
            <h3 className="font-semibold text-lg">{cert.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{cert.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-500 text-sm">
          *Certification copies and audit reports available upon request.
        </p>
      </div>
    </section>
  );
}
