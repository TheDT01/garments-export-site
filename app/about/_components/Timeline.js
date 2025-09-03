// app/about/_components/Timeline.js
export default function Timeline({ items = [] }) {
  return (
    <div className="mt-6 space-y-4">
      {items.map((it, i) => (
        <div key={i} className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-14">
            <div className="text-sm font-semibold">{it.year}</div>
          </div>
          <div className="flex-1">
            <div className="font-semibold">{it.title}</div>
            <div className="text-sm text-gray-600 mt-1">{it.blurb}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
