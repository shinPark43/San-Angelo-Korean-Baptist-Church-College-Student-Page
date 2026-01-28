// 팀 구성

export interface Team {
  name: string;
  members: string[];
}

// 금요모임 음식 준비 & 요리팀
export const cookingTeams: Team[] = [
  { name: '1팀', members: ['남예은', '김시연', '최보성'] },
  { name: '2팀', members: ['김유미', '남윤아', '정이수'] },
  { name: '3팀', members: ['이사랑', '유다연', '고현경'] },
];

export const allCookingMembers = [
  '이사랑', '남예은', '남윤아', '고현경', '유다연', '김시연', '김유미', '최보성', '정이수'
];

// 설거지 팀 (금요일 + 주일)
export const dishwashingTeams: Team[] = [
  { name: 'A팀', members: ['김유미', '남윤아', '최보성'] },
  { name: 'B팀', members: ['이사랑', '김시연'] },
  { name: 'C팀', members: ['정이수', '유다연'] },
  { name: 'D팀', members: ['고현경', '남예은'] },
];

// 주일 반찬 준비 팀
export const sundaySideDishTeams: Team[] = [
  { name: '1팀', members: ['최보성', '김유미', '홍지현'] },
  { name: '2팀', members: ['정이수', '김시연', '이사랑'] },
  { name: '3팀', members: ['남윤아', '남예은', '고현경'] },
];

// 큐티 모임 그룹
export const qtGroups: Team[] = [
  { name: '1팀', members: ['최보성', '이사랑', '남예은', '김윤수'] },
  { name: '2팀', members: ['정이수', '김유미', '유다연', '홍지현', '김하진'] },
  { name: '3팀', members: ['고현경', '남윤아', '김시연', '장서율'] },
];

export const allQtMembers = [
  '김윤수', '장서율', '정이수', '이사랑', '최보성', '김유미',
  '김시연', '남예은', '남윤아', '유다연', '홍지현', '고현경', '김하진'
];
