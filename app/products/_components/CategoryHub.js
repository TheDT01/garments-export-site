import Link from "next/link";

const categories = [
  {
    slug: "knitwear",
    title: "Knitwear",
    img: "/images/placeholders/knitwear.jpeg",
    blurb: "Tees, polos, hoodies, joggers with export-quality finishes.",
  },
  {
    slug: "woven",
    title: "Woven",
    img: "/images/placeholders/woven.jpeg",
    blurb: "Shirts, chinos, casual dresses tailored to perfection.",
  },
  {
    slug: "jackets",
    title: "Jackets & Outerwear",
    img: "/images/placeholders/jacket.jpeg",
    blurb: "Light padded, softshell & windbreakers built for global buyers.",
  },
  {
    slug: "denim",
    title: "Denim",
    img: "/images/placeholders/denim.jpeg",
    blurb: "Jeans & jackets with advanced controlled washing techniques.",
  },
  {
    slug: "sportswear",
    title: "Sportswear",
    img: "/images/placeholders/sportswear.jpeg",
    blurb: "Performance knits & activewear sets with moisture-wicking fabrics.",
  },
  {
    slug: "uniforms",
    title: "Uniforms & Workwear",
    img: "/images/placeholders/uniform.jpeg",
    blurb: "Corporate polos, coveralls, industrial-grade safety uniforms.",
  },
  {
    slug: "kidswear",
    title: "Kidswear",
    img: "/images/placeholders/kidswear.jpeg",
    blurb: "Baby, toddler & junior apparel with comfort & compliance.",
  },
  {
    slug: "printing",
    title: "Printing",
    img: "/images/placeholders/printing.jpeg",
    blurb: "Screen, digital & heat-transfer embellishments.",
  },
  {
    slug: "embroidery",
    title: "Embroidery",
    img: "/images/placeholders/embrodary.jpeg",
    blurb: "Flat, 3D & appliqué embroidery with high precision.",
  },
  {
    slug: "sleepwear",
    title: "Sleepwear & Loungewear",
    img: "/images/placeholders/sleepwear.jpeg",
    blurb: "Soft-handfeel loungewear, pajamas & robes.",
  },
];

export default function CategoryHub() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((c) => (
        <Link
          key={c.slug}
          href={`/products/${c.slug}`}
          className="group block rounded-2xl overflow-hidden border bg-white hover:shadow-xl transition"
        >
          <div className="relative h-40 w-full overflow-hidden">
            <img
              src={c.img}
              alt={c.title}
              className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg">{c.title}</h3>
            <p className="text-sm text-gray-600">{c.blurb}</p>
            <p className="mt-2 text-blue-600 group-hover:underline">
              View details →
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
