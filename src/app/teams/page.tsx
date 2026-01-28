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

interface TeamResult {
  name: string;
  members: string[];
}

interface MemberTeams {
  cooking: TeamResult | null;
  dishwashing: TeamResult | null;
  sunday: TeamResult | null;
  qt: TeamResult | null;
}

function findMemberTeams(name: string): MemberTeams {
  const normalizedName = name.trim();

  const cookingTeam = cookingTeams.find(team =>
    team.members.some(member => member.includes(normalizedName))
  );

  const dishwashingTeam = dishwashingTeams.find(team =>
    team.members.some(member => member.includes(normalizedName))
  );

  const sundayTeam = sundaySideDishTeams.find(team =>
    team.members.some(member => member.includes(normalizedName))
  );

  const qtGroup = qtGroups.find(team =>
    team.members.some(member => member.includes(normalizedName))
  );

  return {
    cooking: cookingTeam ? { name: cookingTeam.name, members: cookingTeam.members } : null,
    dishwashing: dishwashingTeam ? { name: dishwashingTeam.name, members: dishwashingTeam.members } : null,
    sunday: sundayTeam ? { name: sundayTeam.name, members: sundayTeam.members } : null,
    qt: qtGroup ? { name: qtGroup.name, members: qtGroup.members } : null,
  };
}

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
  const [searchName, setSearchName] = useState("");
  const [memberTeams, setMemberTeams] = useState<MemberTeams | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    if (searchName.trim().length > 0) {
      const result = findMemberTeams(searchName);
      setMemberTeams(result);
      setHasSearched(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setHasSearched(false);
    setSearchName("");
    setMemberTeams(null);
  };

  const hasTeams = memberTeams && (
    memberTeams.cooking ||
    memberTeams.dishwashing ||
    memberTeams.sunday ||
    memberTeams.qt
  );

  return (
    <div className="min-h-screen pb-20 bg-background">
      <Header />

      <main className="px-6 pt-6">
        {/* Search Section */}
        <section className="mb-6">
          <h2 className="text-[13px] font-semibold text-text-secondary uppercase tracking-wide mb-4">
            내 팀 찾기
          </h2>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="이름을 입력하세요"
              className="flex-1 px-4 py-3 rounded-xl bg-white border border-border text-[15px] placeholder:text-text-tertiary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            />
            <button
              onClick={handleSearch}
              className="flex-shrink-0 px-6 py-3 bg-accent text-white rounded-xl font-medium text-[15px] active:scale-95 transition-transform"
            >
              검색
            </button>
          </div>

          {/* Search Results */}
          {hasSearched && (
            <div className="card p-4 relative">
              <button
                onClick={clearSearch}
                className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-text-tertiary hover:bg-gray-200 active:scale-95 transition-all z-10"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {hasTeams ? (
                <div className="space-y-3 pt-8">
                  {memberTeams.cooking && (
                    <div className="p-3 bg-accent-light/50 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[11px] text-text-tertiary">음식 준비</p>
                        <p className="text-[13px] font-semibold text-accent">{memberTeams.cooking.name}</p>
                      </div>
                      <p className="text-[13px] text-text-secondary">{memberTeams.cooking.members.join(', ')}</p>
                    </div>
                  )}
                  {memberTeams.dishwashing && (
                    <div className="p-3 bg-accent-light/50 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[11px] text-text-tertiary">설거지</p>
                        <p className="text-[13px] font-semibold text-accent">{memberTeams.dishwashing.name}</p>
                      </div>
                      <p className="text-[13px] text-text-secondary">{memberTeams.dishwashing.members.join(', ')}</p>
                    </div>
                  )}
                  {memberTeams.sunday && (
                    <div className="p-3 bg-accent-light/50 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[11px] text-text-tertiary">주일 반찬</p>
                        <p className="text-[13px] font-semibold text-accent">{memberTeams.sunday.name}</p>
                      </div>
                      <p className="text-[13px] text-text-secondary">{memberTeams.sunday.members.join(', ')}</p>
                    </div>
                  )}
                  {memberTeams.qt && (
                    <div className="p-3 bg-accent-light/50 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[11px] text-text-tertiary">큐티 모임</p>
                        <p className="text-[13px] font-semibold text-accent">{memberTeams.qt.name}</p>
                      </div>
                      <p className="text-[13px] text-text-secondary">{memberTeams.qt.members.join(', ')}</p>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-text-secondary text-[14px] text-center py-2 pt-6">
                  &quot;{searchName}&quot; 님의 팀을 찾을 수 없습니다
                </p>
              )}
            </div>
          )}
        </section>

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
