"use client";

import { useState } from "react";

interface Announcement {
  title: string;
  summary: string;
  details: string;
}

const announcement: Announcement = {
  title: "공지사항",
  summary: "이번 주 금요모임 안내",
  details: "이번 주 금요모임은 정상적으로 진행됩니다. 6시에 식사, 6시 30분에 큐티모임으로 시작합니다. 모두 참석해주세요!",
};

export default function AnnouncementBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Banner */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full px-4 py-3 bg-accent text-white flex items-center justify-between active:bg-accent/90 transition-colors"
      >
        <div className="flex items-center gap-3">
          <MegaphoneIcon className="w-5 h-5 flex-shrink-0" />
          <div className="text-left">
            <p className="text-[13px] font-semibold">{announcement.title}</p>
            <p className="text-[12px] opacity-90">{announcement.summary}</p>
          </div>
        </div>
        <ChevronRightIcon className="w-5 h-5 opacity-70" />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-6"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-sm overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-accent px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <MegaphoneIcon className="w-5 h-5" />
                <h2 className="font-semibold">{announcement.title}</h2>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"
                aria-label="Close"
              >
                <CloseIcon className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5">
              <h3 className="font-semibold text-[16px] mb-3">{announcement.summary}</h3>
              <p className="text-[14px] text-text-secondary leading-relaxed">
                {announcement.details}
              </p>
            </div>

            {/* Modal Footer */}
            <div className="px-5 pb-5">
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full py-3 bg-accent text-white rounded-xl font-medium active:scale-98 transition-transform"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function MegaphoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
}
