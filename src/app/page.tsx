import AnnouncementBanner from "@/components/AnnouncementBanner";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import MemberSearch from "@/components/MemberSearch";
import PhotoCarousel from "@/components/PhotoCarousel";
import { schedule } from "@/data";
import { dishwashingTeams, cookingTeams } from "@/data/teams";

function getCurrentWeekSchedule() {
  const now = new Date();
  const currentYear = now.getFullYear();

  for (const entry of schedule) {
    const [month, day] = entry.date.split('/').map(Number);
    const entryDate = new Date(currentYear, month - 1, day);
    const diffDays = Math.ceil((entryDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays >= -1 && diffDays <= 6) {
      return entry;
    }
  }
  return schedule[0];
}

function getDishwashingMembers(teamLetter: string) {
  const team = dishwashingTeams.find(t => t.name === `${teamLetter}팀`);
  return team?.members || [];
}

function getCookingMembers(teamName: string) {
  if (teamName.includes('임원')) return null;
  const team = cookingTeams.find(t => t.name === teamName);
  return team?.members || null;
}

export default function Home() {
  const thisWeek = getCurrentWeekSchedule();
  const dishwashingMembers = getDishwashingMembers(thisWeek.dishwashingTeam);
  const cookingMembers = getCookingMembers(thisWeek.prepTeam);

  return (
    <div className="min-h-screen pb-20 bg-background">
      <Header />

      {/* Announcement Banner */}
      <AnnouncementBanner />

      {/* Group Photo Carousel */}
      <div className="px-6 pt-6 mb-6">
        <PhotoCarousel />
      </div>

      <main className="px-6">
        {/* Member Search */}
        <MemberSearch />

        {/* This Week Section */}
        <section>
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-[13px] font-semibold text-text-secondary uppercase tracking-wide">
              이번 주 당번
            </h2>
            <span className="text-[13px] text-accent font-medium">
              {thisWeek.date} 금요일
            </span>
          </div>

          <div className="space-y-3">
            {/* Food Card - Featured */}
            <div className="card p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent-light flex items-center justify-center">
                  <FoodIcon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-[13px] text-text-secondary">음식</p>
                  <p className="text-xl font-semibold">{thisWeek.food}</p>
                </div>
              </div>
              <div className="pt-3 border-t border-border-light">
                <p className="text-[13px] text-text-secondary mb-1">담당</p>
                <p className="font-medium">{thisWeek.prepTeam}</p>
                {cookingMembers && (
                  <p className="text-[13px] text-text-tertiary mt-1">
                    {cookingMembers.join(', ')}
                  </p>
                )}
              </div>
            </div>

            {/* Prayer & Dishes Row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="card p-4">
                <div className="w-8 h-8 rounded-full bg-accent-light flex items-center justify-center mb-3">
                  <PrayerIcon className="w-4 h-4 text-accent" />
                </div>
                <p className="text-[12px] text-text-secondary mb-0.5">대표기도</p>
                <p className="font-semibold text-[15px]">{thisWeek.prayerLeader}</p>
              </div>

              <div className="card p-4">
                <div className="w-8 h-8 rounded-full bg-accent-light flex items-center justify-center mb-3">
                  <DishesIcon className="w-4 h-4 text-accent" />
                </div>
                <p className="text-[12px] text-text-secondary mb-0.5">설거지</p>
                <p className="font-semibold text-[15px]">{thisWeek.dishwashingTeam}팀</p>
                <p className="text-[12px] text-text-tertiary mt-1 leading-relaxed">
                  {dishwashingMembers.join(', ')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* YouTube Video */}
        <section className="mt-10">
          <h2 className="text-[13px] font-semibold text-text-secondary uppercase tracking-wide mb-4">
            예배 영상
          </h2>
          <div className="card overflow-hidden">
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/IvjECR7_d4w"
                title="예배 영상"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Bible Scripture */}
        <section className="mt-8 mb-4">
          <div className="text-center px-4 py-6 bg-accent-light/50 rounded-2xl">
            <p className="text-[15px] text-foreground leading-relaxed italic">
              &ldquo;In all your ways submit to him,<br />
              and he will make your paths straight.&rdquo;
            </p>
            <p className="text-[13px] text-accent font-medium mt-3">
              Proverbs 3:6
            </p>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

function FoodIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m18-4.5a9.002 9.002 0 0 0-18 0" />
    </svg>
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
