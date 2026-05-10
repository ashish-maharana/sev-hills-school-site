"use client";

import { useId, useState } from "react";
import { PersonProfileCard } from "@/components/person-profile-card";
import { Reveal } from "@/components/reveal";
import type { FacultyContent, ManagementContent, PersonProfile } from "@/lib/types";

type AboutPeopleTabsProps = {
  management: ManagementContent;
  faculty: FacultyContent;
};

type TabKey = "management" | "faculty";

function PeopleCardsGrid({ members, imageClassName }: { members: PersonProfile[]; imageClassName?: string }) {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((person) => (
        <Reveal key={person.name}>
          <PersonProfileCard person={person} imageClassName={imageClassName} />
        </Reveal>
      ))}
    </div>
  );
}

export function AboutPeopleTabs({ management, faculty }: AboutPeopleTabsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("management");
  const tabsBaseId = useId();
  const unifiedPortraitImageClass = "h-80 object-contain object-top bg-[#e6f4ea]";

  const managementPanelId = `${tabsBaseId}-management-panel`;
  const facultyPanelId = `${tabsBaseId}-faculty-panel`;

  return (
    <section className="section-wrap">
      <div role="tablist" aria-label="About people sections" className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          role="tab"
          id={`${tabsBaseId}-management-tab`}
          aria-selected={activeTab === "management"}
          aria-controls={managementPanelId}
          onClick={() => setActiveTab("management")}
          className={`rounded-xl px-4 py-2 text-sm font-extrabold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6b3a] ${
            activeTab === "management" ? "bg-[#f59e0b] text-[#0f2318]" : "bg-white text-[#3d5c47] hover:bg-[#e6f4ea]"
          }`}
        >
          Management
        </button>
        <button
          type="button"
          role="tab"
          id={`${tabsBaseId}-faculty-tab`}
          aria-selected={activeTab === "faculty"}
          aria-controls={facultyPanelId}
          onClick={() => setActiveTab("faculty")}
          className={`rounded-xl px-4 py-2 text-sm font-extrabold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6b3a] ${
            activeTab === "faculty" ? "bg-[#38bdf8] text-[#0f2318]" : "bg-white text-[#3d5c47] hover:bg-[#e6f4ea]"
          }`}
        >
          Faculty
        </button>
      </div>

      {activeTab === "management" ? (
        <div
          role="tabpanel"
          id={managementPanelId}
          aria-labelledby={`${tabsBaseId}-management-tab`}
          className="mt-6"
        >
          <PeopleCardsGrid members={management.leaders} imageClassName={unifiedPortraitImageClass} />

          <article className="signal-card glass-panel relative mt-10 overflow-hidden p-7 sm:p-9">
            <p className="sticker bg-[#f59e0b] text-[#0f2318]">
              {management.chairmanMessage.title}
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-[#3d5c47] sm:text-base">
              {management.chairmanMessage.intro}
            </p>
            <blockquote className="mt-6 border-l-4 border-[#1a6b3a] pl-5 text-lg font-semibold italic leading-8 text-[#0f2318]">
              &ldquo;{management.chairmanMessage.quote}&rdquo;
            </blockquote>
            <p className="mt-3 text-sm font-extrabold text-[#1a6b3a]">{management.chairmanMessage.quoteSource}</p>
            <div className="mt-6 space-y-4 text-sm font-medium leading-7 text-[#3d5c47] sm:text-base">
              {management.chairmanMessage.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        </div>
      ) : (
        <div
          role="tabpanel"
          id={facultyPanelId}
          aria-labelledby={`${tabsBaseId}-faculty-tab`}
          className="mt-6"
        >
          <p className="text-sm font-medium leading-7 text-[#3d5c47] sm:text-base">{faculty.quickIntro}</p>

          <PeopleCardsGrid members={faculty.members} imageClassName={unifiedPortraitImageClass} />
        </div>
      )}
    </section>
  );
}
