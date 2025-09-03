// app/about/_components/TeamGrid.js
"use client";
import { useState } from "react";

function Card({ member }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="group border rounded-3xl p-6 bg-white shadow-md hover:shadow-lg transition-all">
      <div className="flex flex-col items-center text-center">
        <img
          src={member.img || "/images/placeholders/team-placeholder.jpg"}
          alt={member.name}
          className="h-28 w-28 object-cover rounded-full border-4 border-slate-200 shadow-md group-hover:scale-105 transition-transform"
        />
        <div className="mt-4">
          <h3 className="font-bold text-lg">{member.name}</h3>
          <p className="text-sm text-blue-600">{member.role}</p>
          <p className="mt-1 text-xs text-gray-500">
            {member.region || "Global Markets"}
          </p>
        </div>

        <button
          onClick={() => setOpen((s) => !s)}
          className="mt-4 text-sm px-4 py-2 rounded-lg border bg-gray-50 hover:bg-blue-50 text-blue-700"
        >
          {open ? "Hide Vision" : "View Vision"}
        </button>

        <div
          className={`mt-4 text-sm text-gray-600 transition-all duration-500 ease-in-out ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <p>{member.vision}</p>
          {member.quote && (
            <p className="mt-3 italic text-gray-400 text-xs">
              “{member.quote}”
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TeamGrid({ members = [] }) {
  return (
    <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {members.map((m, i) => (
        <Card key={i} member={m} />
      ))}
    </div>
  );
}
