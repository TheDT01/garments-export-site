// app/products/page.js (server component)
export const metadata = {
  title: "Products — Sapphire Design LTD",
  description:
    "Corporate catalogue: knitwear, woven, jackets, denim, sportswear, uniforms, kidswear, printing, embroidery, workwear, sleepwear. Includes RFQ, Estimator, Fabric Library, Compliance Wall, Sample Wizard.",
};

import CategoryHub from "./_components/CategoryHub";
import FactoryTour from "./_components/FactoryTour";

// Import heavy feature stubs (replace later with real ones if needed)
import ComplianceWall from "./_components/stubs/ComplianceWallStub";

export default function Page() {
  return (
    <section className="space-y-14">
      {/* Hero */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-50 via-white to-indigo-50 border p-8 md:p-14">
        <div className="max-w-5xl mx-auto text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Corporate Product & Services Catalogue
          </h1>
          <p className="mt-4 text-gray-600 md:text-lg">
            End-to-end apparel manufacturing: knitwear, woven, jackets, denim,
            sportswear, uniforms, kidswear, embellishments, trims, washing &
            finishing — plus sustainability, QA/AQL, logistics, and industrial
            solutions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            <a href="#categories" className="btn">
              Explore Categories
            </a>
          </div>
        </div>
      </div>

      {/* Category Hub */}
      <div id="categories" className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">Categories</h2>
        <CategoryHub />
      </div>

      {/* Virtual Factory Tour */}
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">Virtual Factory Tour</h2>
        <p className="text-gray-600">
          A quick look inside our production floors: cutting, sewing, finishing,
          and compliance facilities.
        </p>
        <FactoryTour videoId="dQw4w9WgXcQ" />
      </div>

      {/* Compliance Wall */}
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">
          Compliance & Certifications
        </h2>
        <p className="text-gray-600">
          OEKO-TEX certified. Pursuing BSCI/Amfori, SEDEX, WRAP, GOTS/GRS, HIGG
          FEM/FSLM, ZDHC.
        </p>
        <ComplianceWall />
      </div>
    </section>
  );
}
