// 금요모임 순서

export interface ProgramItem {
  time: string;
  activity: string;
  note?: string;
}

export const fridayMeetingProgram: ProgramItem[] = [
  { time: '6:00-6:30', activity: '요리/간식', note: '격주로 진행' },
  { time: '6:30-7:00', activity: '큐티모임' },
  { time: '7:00-7:05', activity: '기도로 예배 준비', note: '대표기도자' },
  { time: '7:05-7:20', activity: '찬양' },
  { time: '7:20-7:35', activity: '말씀' },
  { time: '7:35-8:00', activity: '개인기도' },
];

// 모임 기본 정보
export const meetingInfo = {
  name: 'San Angelo KBC 청년부',
  day: '금요일',
  startTime: '6:00 PM',
  location: 'San Angelo Korean Baptist Church',
};
