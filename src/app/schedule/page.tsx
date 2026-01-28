import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import { schedule } from "@/data";

export default function SchedulePage() {
  return (
    <div className="min-h-screen pb-20 bg-background">
      <Header />

      <main className="px-6 pt-6">
        <h2 className="text-[13px] font-semibold text-text-secondary uppercase tracking-wide mb-4">
          금요모임 스케줄
        </h2>
        <div className="card overflow-hidden">
          {schedule.map((entry, index) => (
            <div
              key={index}
              className={`p-4 ${
                index !== schedule.length - 1 ? 'border-b border-border-light' : ''
              }`}
            >
              {/* Date & Food Row */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center text-[13px] font-semibold text-accent">
                    {entry.date}
                  </span>
                  <div>
                    <p className="font-semibold text-[15px]">{entry.food}</p>
                    <p className="text-[12px]">
                      <span className="text-text-tertiary">담당: </span>
                      <span className="text-text-secondary">{entry.prepTeam}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Details Row */}
              <div className="flex gap-4 text-[13px]">
                <div className="flex items-center gap-1.5">
                  <span className="text-text-tertiary">기도</span>
                  <span className="text-text-secondary">{entry.prayerLeader}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-text-tertiary">설거지</span>
                  <span className="text-text-secondary">{entry.dishwashingTeam}팀</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
