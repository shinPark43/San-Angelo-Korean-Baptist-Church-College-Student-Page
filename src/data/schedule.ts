// 금요모임 주간 스케줄

export type DishwashingTeam = 'A' | 'B' | 'C' | 'D';

export interface ScheduleEntry {
  date: string;
  food: string;
  prepTeam: string;
  prayerLeader: string;
  dishwashingTeam: DishwashingTeam;
}

export const schedule: ScheduleEntry[] = [
  { date: '1/30', food: '제육볶음', prepTeam: '임원들', prayerLeader: '김유미', dishwashingTeam: 'A' },
  { date: '2/6', food: '피자', prepTeam: '임원', prayerLeader: '이사랑', dishwashingTeam: 'B' },
  { date: '2/13', food: '부대찌개', prepTeam: '1팀', prayerLeader: '최보성', dishwashingTeam: 'C' },
  { date: '2/20', food: '도넛', prepTeam: '임원', prayerLeader: '정이수', dishwashingTeam: 'D' },
  { date: '2/27', food: '미역국', prepTeam: '2팀', prayerLeader: '남예은', dishwashingTeam: 'A' },
  { date: '3/6', food: '컵라면/만두', prepTeam: '임원', prayerLeader: '남윤아', dishwashingTeam: 'B' },
  { date: '3/13', food: '닭볶음탕', prepTeam: '3팀', prayerLeader: '고현경', dishwashingTeam: 'C' },
  { date: '3/20', food: '피자', prepTeam: '임원', prayerLeader: '김시연', dishwashingTeam: 'D' },
  { date: '3/27', food: '떡국', prepTeam: '1팀', prayerLeader: '홍지현', dishwashingTeam: 'A' },
  { date: '4/3', food: '피자', prepTeam: '임원', prayerLeader: '장서율', dishwashingTeam: 'B' },
  { date: '4/10', food: '떡볶이', prepTeam: '2팀', prayerLeader: '유다연', dishwashingTeam: 'C' },
  { date: '4/17', food: '피자', prepTeam: '임원', prayerLeader: '김윤수', dishwashingTeam: 'D' },
  { date: '4/24', food: '닭갈비', prepTeam: '3팀', prayerLeader: '김유미', dishwashingTeam: 'A' },
  { date: '5/1', food: '고기파티', prepTeam: '임원', prayerLeader: '양주섭 목사님', dishwashingTeam: 'B' },
];
