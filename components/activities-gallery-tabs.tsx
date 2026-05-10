"use client";

import { useId, useState } from "react";
import type { GalleryItem } from "@/lib/types";

type ActivitiesGalleryTabsProps = {
  campusItems: GalleryItem[];
  schoolTripItems: GalleryItem[];
};

type TabKey = "campus" | "school-trips";

function GalleryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={`${item.title}-${item.src}`} className="group overflow-hidden rounded-[1.5rem] border-2 border-white bg-white shadow-[0_16px_40px_rgba(26,107,58,0.09)] transition duration-300 hover:-translate-y-1" style={{ borderLeft: "4px solid #1a6b3a" }}>
          {/* Placeholder for gallery image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e6f4ea] flex items-center justify-center">
            <span className="text-5xl opacity-40">🖼️</span>
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a6b3a]/10 to-transparent" />
          </div>
          <div className="p-5">
            <h3 className="text-lg font-semibold text-[#0f2318]">{item.title}</h3>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ActivitiesGalleryTabs({ campusItems, schoolTripItems }: ActivitiesGalleryTabsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("campus");
  const baseId = useId();
  const campusPanelId = `${baseId}-campus-panel`;
  const tripsPanelId = `${baseId}-trips-panel`;

  return (
    <div>
      <div role="tablist" aria-label="Activities gallery tabs" className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          role="tab"
          id={`${baseId}-campus-tab`}
          aria-selected={activeTab === "campus"}
          aria-controls={campusPanelId}
          onClick={() => setActiveTab("campus")}
          className={`rounded-xl px-4 py-2 text-sm font-extrabold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6b3a] ${
            activeTab === "campus" ? "bg-[#f59e0b] text-[#0f2318]" : "bg-white text-[#3d5c47] hover:bg-[#e6f4ea]"
          }`}
        >
          Campus Life
        </button>
        <button
          type="button"
          role="tab"
          id={`${baseId}-trips-tab`}
          aria-selected={activeTab === "school-trips"}
          aria-controls={tripsPanelId}
          onClick={() => setActiveTab("school-trips")}
          className={`rounded-xl px-4 py-2 text-sm font-extrabold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6b3a] ${
            activeTab === "school-trips" ? "bg-[#38bdf8] text-[#0f2318]" : "bg-white text-[#3d5c47] hover:bg-[#e6f4ea]"
          }`}
        >
          School Trips
        </button>
      </div>

      {activeTab === "campus" ? (
        <div role="tabpanel" id={campusPanelId} aria-labelledby={`${baseId}-campus-tab`}>
          <GalleryGrid items={campusItems} />
        </div>
      ) : (
        <div role="tabpanel" id={tripsPanelId} aria-labelledby={`${baseId}-trips-tab`}>
          <GalleryGrid items={schoolTripItems} />
        </div>
      )}
    </div>
  );
}
