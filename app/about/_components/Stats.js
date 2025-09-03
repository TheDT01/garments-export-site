// app/about/_components/Stats.js
"use client";
import { useEffect, useRef } from "react";

export default function Stats({ items = [] }) {
  // simple number animation
  const refs = useRef([]);

  useEffect(() => {
    const anims = refs.current.map((el, idx) => {
      if (!el) return null;
      const target = Number(items[idx]?.value || 0);
      const suffix = items[idx]?.suffix || "";
      const duration = 1400;
      const start = performance.now();
      const from = 0;
      const step = (t) => {
        const progress = Math.min((t - start) / duration, 1);
        const value = Math.floor(
          from + (target - from) * easeOutCubic(progress)
        );
        el.textContent = `${value}${suffix || ""}`;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      return true;
    });

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }
    return () => {};
  }, [items]);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((it, i) => (
        <div
          key={i}
          className="p-6 rounded-2xl bg-white border shadow-sm text-center"
        >
          <div
            className="text-4xl font-extrabold text-gray-900"
            ref={(el) => (refs.current[i] = el)}
          >
            {it.value}
            {it.suffix || ""}
          </div>
          <div className="mt-2 text-sm text-gray-600">{it.label}</div>
          {it.notes && (
            <div className="mt-2 text-xs text-gray-400">{it.notes}</div>
          )}
        </div>
      ))}
    </div>
  );
}
