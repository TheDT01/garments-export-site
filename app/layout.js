import "./../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import PageTransition from "../app/_components/PageTransition"; // ✅ new import

export const metadata = {
  title: "Sapphire Design LTD — OEM Garment Manufacturer, Bangladesh",
  description:
    "Sapphire Design Limited: knitwear, woven, and jackets. 500k pcs/month, 10 lines. OEKO-TEX certified. Fast sampling (3–4d), bulk 60–75d.",
  openGraph: {
    title: "Sapphire Design LTD — OEM Garment Manufacturer",
    description: "500k pcs/month • OEKO-TEX • Knit & Jackets • Dhaka",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com",
    siteName: "Sapphire Design LTD",
    images: [{ url: "/images/og-placeholder.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-200 to-indigo-400 text-gray-900">
        <Header />
        <main id="main" className="container py-10">
          {/* ✅ Wrap content in page transition */}
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
