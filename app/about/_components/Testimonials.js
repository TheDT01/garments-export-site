// app/about/_components/Testimonials.js
"use client";
import { useEffect, useState } from "react";

export default function Testimonials({ items = [] }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 5000);
    return () => clearInterval(id);
  }, [items.length]);

  if (!items || items.length === 0) return null;

  return (
    <div className="relative">
      <div className="p-6 border rounded-2xl bg-white shadow-sm">
        <blockquote className="text-gray-800 text-lg">
          “{items[index].quote}”
        </blockquote>
        <div className="mt-4 text-sm text-gray-600">
          — {items[index].author}
        </div>
      </div>

      <div className="mt-3 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to ${i}`}
            onClick={() => setIndex(i)}
            className={`h-2 w-8 rounded-full ${
              i === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
