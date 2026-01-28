"use client";

import { useState } from "react";
import { schedule, ScheduleEntry } from "@/data/schedule";
import { cookingTeams, dishwashingTeams, sundaySideDishTeams, qtGroups } from "@/data/teams";

interface MemberDuties {
  prayerDates: ScheduleEntry[];
  cookingTeam: string | null;
  cookingDates: string[];
  dishwashingTeam: string | null;
  dishwashingDates: string[];
  sundayTeam: string | null;
  qtGroup: string | null;
}

function findMemberDuties(name: string): MemberDuties {
  const normalizedName = name.trim();

  // Find prayer duties
  const prayerDates = schedule.filter(entry =>
    entry.prayerLeader.includes(normalizedName)
  );

  // Find cooking team
  const cookingTeamObj = cookingTeams.find(team =>
    team.members.some(member => member.includes(normalizedName))
  );
  const cookingTeam = cookingTeamObj?.name || null;

  // Find cooking dates (when their team is the prepTeam)
  const cookingDates = cookingTeam
    ? schedule.filter(entry => entry.prepTeam === cookingTeam).map(entry => entry.date)
    : [];

  // Find dishwashing team
  const dishwashingTeamObj = dishwashingTeams.find(team =>
    team.members.some(member => member.includes(normalizedName))
  );
  const dishwashingTeam = dishwashingTeamObj?.name || null;

  // Find dishwashing dates (when their team letter matches)
  const dishwashingDates = dishwashingTeam
    ? schedule.filter(entry => `${entry.dishwashingTeam}팀` === dishwashingTeam).map(entry => entry.date)
    : [];

  // Find Sunday side dish team
  const sundayTeam = sundaySideDishTeams.find(team =>
    team.members.some(member => member.includes(normalizedName))
  )?.name || null;

  // Find QT group
  const qtGroup = qtGroups.find(team =>
    team.members.some(member => member.includes(normalizedName))
  )?.name || null;

  return { prayerDates, cookingTeam, cookingDates, dishwashingTeam, dishwashingDates, sundayTeam, qtGroup };
}

export default function MemberSearch() {
  const [searchName, setSearchName] = useState("");
  const [duties, setDuties] = useState<MemberDuties | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    if (searchName.trim().length > 0) {
      const result = findMemberDuties(searchName);
      setDuties(result);
      setHasSearched(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const hasDuties = duties && (
    duties.prayerDates.length > 0 ||
    duties.cookingTeam ||
    duties.dishwashingTeam ||
    duties.sundayTeam ||
    duties.qtGroup
  );

  return (
    <section className="mb-8">
      <h2 className="text-[13px] font-semibold text-text-secondary uppercase tracking-wide mb-4">
        내 당번 찾기
      </h2>

      {/* Search Input */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="이름을 입력하세요"
          className="flex-1 min-w-0 px-4 py-3 rounded-xl bg-white border border-border text-[15px] placeholder:text-text-tertiary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
        />
        <button
          onClick={handleSearch}
          className="flex-shrink-0 px-4 py-3 bg-accent text-white rounded-xl font-medium text-[15px] active:scale-95 transition-transform"
        >
          검색
        </button>
      </div>

      {/* Results */}
      {hasSearched && (
        <div className="card p-4 relative">
          <button
            onClick={() => {
              setHasSearched(false);
              setSearchName("");
              setDuties(null);
            }}
            className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-text-tertiary hover:bg-gray-200 active:scale-95 transition-all"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {hasDuties ? (
            <div className="space-y-4">
              {/* Prayer Duties */}
              {duties.prayerDates.length > 0 && (
                <div>
                  <p className="text-[12px] text-text-secondary mb-2">대표기도</p>
                  <div className="flex flex-wrap gap-2">
                    {duties.prayerDates.map((entry, idx) => (
                      <span key={idx} className="px-3 py-1 bg-accent-light text-accent rounded-lg text-[14px] font-medium">
                        {entry.date}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Cooking Team with Dates */}
              {duties.cookingTeam && (
                <div>
                  <p className="text-[12px] text-text-secondary mb-2">
                    음식 준비 - {duties.cookingTeam}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {duties.cookingDates.map((date, idx) => (
                      <span key={idx} className="px-3 py-1 bg-accent-light text-accent rounded-lg text-[14px] font-medium">
                        {date}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Dishwashing Team with Dates */}
              {duties.dishwashingTeam && (
                <div>
                  <p className="text-[12px] text-text-secondary mb-2">
                    설거지 - {duties.dishwashingTeam}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {duties.dishwashingDates.map((date, idx) => (
                      <span key={idx} className="px-3 py-1 bg-accent-light text-accent rounded-lg text-[14px] font-medium">
                        {date}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Sunday Team & QT Group */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-border-light">
                {duties.sundayTeam && (
                  <div>
                    <p className="text-[12px] text-text-secondary mb-1">주일 반찬팀</p>
                    <p className="font-medium text-[15px]">{duties.sundayTeam}</p>
                  </div>
                )}
                {duties.qtGroup && (
                  <div>
                    <p className="text-[12px] text-text-secondary mb-1">큐티 모임</p>
                    <p className="font-medium text-[15px]">{duties.qtGroup}</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <p className="text-text-secondary text-[14px] text-center py-2">
              &quot;{searchName}&quot; 님의 당번을 찾을 수 없습니다
            </p>
          )}
        </div>
      )}
    </section>
  );
}
