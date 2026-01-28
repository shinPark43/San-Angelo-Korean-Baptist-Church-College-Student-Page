"use client";

import { useState } from "react";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import { cookingTeams, dishwashingTeams, sundaySideDishTeams, qtGroups } from "@/data/teams";
import { Team } from "@/data/teams";

const categories = [
  { id: "all", label: "전체 보기" },
  { id: "cooking", label: "음식 준비팀" },
  { id: "dishwashing", label: "설거지팀" },
  { id: "sunday", label: "주일 반찬팀" },
  { id: "qt", label: "큐티 모임" },
];

function TeamSection({ title, teams }: { title: string; teams: Team[] }) {
  return (
    <section className="mb-8">
      <h2 className="text-[13px] font-semibold text-text-secondary uppercase tracking-wide mb-4">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {teams.map((team) => (
          <div key={team.name} className="card p-4">
            <p className="text-[13px] font-semibold text-accent mb-3">{team.name}</p>
            <ul className="space-y-1.5">
              {team.members.map((member) => (
                <li key={member} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  <span className="text-[14px]">{member}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function TeamsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="min-h-screen pb-20 bg-background">
      <Header />

      <main className="px-6 pt-6">
        {/* Category Dropdown */}
        <div className="mb-6">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-3 rounded-xl bg-white border border-border-light text-[15px] font-medium text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234A6FA5' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 12px center",
              backgroundSize: "20px",
            }}
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        {(selectedCategory === "all" || selectedCategory === "cooking") && (
          <TeamSection title="음식 준비팀" teams={cookingTeams} />
        )}
        {(selectedCategory === "all" || selectedCategory === "dishwashing") && (
          <TeamSection title="설거지팀" teams={dishwashingTeams} />
        )}
        {(selectedCategory === "all" || selectedCategory === "sunday") && (
          <TeamSection title="주일 반찬팀" teams={sundaySideDishTeams} />
        )}
        {(selectedCategory === "all" || selectedCategory === "qt") && (
          <TeamSection title="큐티 모임" teams={qtGroups} />
        )}
      </main>

      <BottomNav />
    </div>
  );
}
