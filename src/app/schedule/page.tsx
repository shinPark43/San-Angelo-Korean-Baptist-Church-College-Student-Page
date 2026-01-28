"use client";

import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import { schedule } from "@/data";

function isCurrentWeek(dateStr: string) {
  const now = new Date();
  const currentYear = now.getFullYear();
  const [month, day] = dateStr.split('/').map(Number);
  const entryDate = new Date(currentYear, month - 1, day);
  const diffDays = Math.ceil((entryDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  return diffDays >= -1 && diffDays <= 6;
}

export default function SchedulePage() {
  return (
    <div className="min-h-screen pb-20 bg-background">
      <Header />

      <main className="px-6 pt-6">
        <h2 className="text-[13px] font-semibold text-text-secondary uppercase tracking-wide mb-4">
          금요모임 스케줄
        </h2>

        <div className="space-y-4">
          {schedule.map((entry, index) => {
            const isCurrent = isCurrentWeek(entry.date);
            return (
              <div
                key={index}
                className={`card overflow-hidden ${isCurrent ? 'ring-2 ring-accent' : ''}`}
              >
                {/* Current Week Banner */}
                {isCurrent && (
                  <div className="bg-accent text-white text-center py-1.5 text-[12px] font-semibold">
                    이번 주
                  </div>
                )}

                <div className="p-4">
                  {/* Header: Date & Food */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center ${isCurrent ? 'bg-accent text-white' : 'bg-accent-light text-accent'}`}>
                      <span className="text-[10px] font-medium leading-none">
                        {entry.date.split('/')[0]}월
                      </span>
                      <span className="text-[17px] font-bold leading-tight">
                        {entry.date.split('/')[1]}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-[16px]">{entry.food}</p>
                      <p className="text-[13px] text-text-secondary">{entry.prepTeam}</p>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border-light">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-accent-light/70 flex items-center justify-center">
                        <PrayerIcon className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-[11px] text-text-tertiary">대표기도</p>
                        <p className="text-[14px] font-medium">{entry.prayerLeader}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-accent-light/70 flex items-center justify-center">
                        <DishesIcon className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-[11px] text-text-tertiary">설거지</p>
                        <p className="text-[14px] font-medium">{entry.dishwashingTeam}팀</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

function PrayerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
  );
}

function DishesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <ellipse cx="12" cy="17" rx="9" ry="3" />
      <path d="M3 17V14c0-1.5 4-3 9-3s9 1.5 9 3v3" />
      <ellipse cx="12" cy="11" rx="9" ry="3" />
    </svg>
  );
}
