import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import { fridayMeetingProgram, meetingInfo } from "@/data/meetingInfo";

export default function InfoPage() {
  return (
    <div className="min-h-screen pb-20 bg-background">
      <Header />

      <main className="px-6 pt-6">
        {/* Basic Info Section */}
        <section className="mb-8">
          <h2 className="text-[13px] font-semibold text-text-secondary uppercase tracking-wide mb-4">
            기본 정보
          </h2>
          <div className="card p-5 space-y-4">
            <InfoRow label="모임" value={meetingInfo.name} />
            <InfoRow label="요일" value={meetingInfo.day} />
            <InfoRow label="시간" value={meetingInfo.startTime} />
            <InfoRow label="장소" value={meetingInfo.location} />
          </div>
        </section>

        {/* Program Section */}
        <section>
          <h2 className="text-[13px] font-semibold text-text-secondary uppercase tracking-wide mb-4">
            금요모임 순서
          </h2>
          <div className="card overflow-hidden">
            {fridayMeetingProgram.map((item, index) => (
              <div
                key={index}
                className={`p-4 flex items-start gap-4 ${
                  index !== fridayMeetingProgram.length - 1 ? 'border-b border-border-light' : ''
                }`}
              >
                <div className="w-16 shrink-0">
                  <span className="text-[12px] font-medium text-accent bg-accent-light px-2 py-1 rounded-md">
                    {item.time.split('-')[0]}
                  </span>
                </div>
                <div className="flex-1 pt-0.5">
                  <p className="font-medium text-[15px]">{item.activity}</p>
                  {item.note && (
                    <p className="text-[13px] text-text-tertiary mt-0.5">{item.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-1">
      <span className="text-[14px] text-text-secondary">{label}</span>
      <span className="font-medium text-[14px]">{value}</span>
    </div>
  );
}
