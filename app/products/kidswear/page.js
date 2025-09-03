export const metadata = {
  title: "Kidswear — Sapphire Design LTD",
  description: "Baby, toddler & junior.",
};

import Link from "next/link";
import ComplianceWall from "../_components/stubs/ComplianceWallStub";

export default function Page() {
  return (
    <section className="space-y-10">
      <div className="rounded-3xl bg-gradient-to-br from-slate-50 via-white to-indigo-50 border p-8 md:p-14">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Kidswear
        </h1>
        <p className="mt-4 text-gray-600 md:text-lg">Baby, toddler & junior.</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">Specs & Capabilities</h2>
        <p className="text-gray-600">
          Technical details, MOQ, lead-time, trims, embellishment options and
          finishing techniques for Kidswear.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">Gallery</h2>
        <p className="text-gray-600">
          Image gallery and 360° product viewer for Kidswear.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">Compliance</h2>
        <ComplianceWall />
      </div>

      <div className="pt-6">
        <Link href="/products" className="btn-secondary">
          ← Back to Products
        </Link>
      </div>
    </section>
  );
}
