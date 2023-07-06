import { IListData } from '../pages/Board.tsx';
import { IDetailData } from '../pages/BoardDetail.tsx';

export const BOARD_DETAIL: IDetailData = {
  title: '삼겹살 집중 적으로 조질 분 구합니다!',
  content:
    '삼겹살 집중 적으로 조질 분 구합니다! 삼겹살 집중 적으로 조질 분 구합니다! 삼겹살 집중 적으로 조질 분 구합니다! 삼겹살 집중 적으로 조질 분 구합니다! 삼겹살 집중 적으로 조질 분 구합니다! 삼겹살 집중 적으로 조질 분 구합니다! 삼겹살 집중 적으로 조질 분 구합니다! 삼겹살 집중 적으로 조질 분 구합니다! 삼겹살 집중 적으로 조질 분 구합니다! 삼겹살 집중 적으로 조질 분 구합니다! 삼겹살 집중 적으로 조질 분 구합니다!',
  image: '',
  createdAt: '2023-07-06T14:11:55.3304725',
  viewCount: 3,
  commentCount: 4,
  status: 'RECRUITING',
  category: 'SHOPPING',
  member: {
    memberId: 3,
    image: '/img/background_grocery.jpg',
    name: '끼룩갈메기',
    gender: 'MALE',
    avgStarRate: 3.0,
    eatStatus: false,
  },
  postTag: {
    postTagId: 3,
    foodTagId: 0,
    genderTagId: 1,
  },
  genderTag: {
    genderTagId: 1,
  },
  foodTag: {
    foodTagId: 1,
  },
  mate: {
    findNum: 2,
    mateNum: 4,
  },
  mateMembers: [
    {
      mateMemberId: 1,
      name: '마포호랑이',
    },
    {
      mateMemberId: 2,
      name: '신촌코끼리',
    },
  ],
  comments: [
    {
      commentId: 1,
      content: 'rrefccxcxx',
      memberId: 1,
      avgStarRate: 2.5,
      name: '마포호랑이',
      createdAt: '2023-06-22T18:16:55.3304725',
    },
    {
      commentId: 2,
      content: 'adkfjl;adkjfl;dkaf',
      memberId: 2,
      avgStarRate: 5,
      name: '신촌코끼리',
      createdAt: '2023-06-22T18:16:55.3304725',
    },
  ],
};

export const BOARD_LISTS: IListData[] = [
  {
    questionId: 1,
    memberId: 1,
    name: '마포갈메기',
    avgStarRate: 2.5,
    viewCount: 3,
    commentCount: 4,
    status: '모집 완료',
    category: '장보기',
    title: '과일 같이 사실 분@@',
    createdAt: '2023-07-04T15:16:55.3304725',
    image: '',
    genderTag: {
      genderTagId: 1,
    },
    foodTag: {
      foodTagId: 1,
    },
  },
  {
    questionId: 2,
    memberId: 2,
    name: '신촌호랑이',
    avgStarRate: 5,
    viewCount: 10,
    commentCount: 43,
    status: '모집 중',
    category: '밥먹기',
    title: '삼겹살 집중 적으로 조질 분 구합니다!',
    createdAt: '2023-06-30T18:16:55.3304725',
    image: '',
    genderTag: {
      genderTagId: 2,
    },
    foodTag: {
      foodTagId: 2,
    },
  },
  {
    questionId: 3,
    memberId: 3,
    name: '강남코끼리',
    avgStarRate: 4.6,
    viewCount: 3,
    commentCount: 4,
    status: '모집 완료',
    category: '장보기',
    title: '과일 같이 사실 분@@',
    createdAt: '2023-06-22T18:16:55.3304725',
    image: '',
    genderTag: {
      genderTagId: 1,
    },
    foodTag: {
      foodTagId: 1,
    },
  },
  {
    questionId: 4,
    memberId: 4,
    name: '잠실원숭이',
    avgStarRate: 3.5,
    viewCount: 10,
    commentCount: 43,
    status: '모집 종료',
    category: '밥먹기',
    title: '삼겹살 집중 적으로 조질 분 구합니다!',
    createdAt: '2023-06-30T18:16:55.3304725',
    image: '',
    genderTag: {
      genderTagId: 3,
    },
    foodTag: {
      foodTagId: 2,
    },
  },
  {
    questionId: 5,
    memberId: 5,
    name: '마포갈메기',
    avgStarRate: 2.5,
    viewCount: 88,
    commentCount: 4,
    status: '모집 완료',
    category: '장보기',
    title: '과일 같이 사실 분@@',
    createdAt: '2023-07-03T15:16:55.3304725',
    image: '',
    genderTag: {
      genderTagId: 3,
    },
    foodTag: {
      foodTagId: 5,
    },
  },
  {
    questionId: 6,
    memberId: 6,
    name: '신촌호랑이',
    avgStarRate: 5,
    viewCount: 19,
    commentCount: 43,
    status: '모집 중',
    category: '밥먹기',
    title: '삼겹살 집중 적으로 조질 분 구합니다!',
    createdAt: '2023-06-12T18:16:55.3304725',
    image: '',
    genderTag: {
      genderTagId: 1,
    },
    foodTag: {
      foodTagId: 4,
    },
  },
  {
    questionId: 7,
    memberId: 7,
    name: '강남코끼리',
    avgStarRate: 4.6,
    viewCount: 63,
    commentCount: 4,
    status: '모집 완료',
    category: '장보기',
    title: '과일 같이 사실 분@@',
    createdAt: '2023-06-02T18:16:55.3304725',
    image: '',
    genderTag: {
      genderTagId: 1,
    },
    foodTag: {
      foodTagId: 1,
    },
  },
  {
    questionId: 8,
    memberId: 8,
    name: '잠실원숭이',
    avgStarRate: 3.5,
    viewCount: 15,
    commentCount: 43,
    status: '모집 종료',
    category: '밥먹기',
    title: '삼겹살 집중 적으로 조질 분 구합니다!',
    createdAt: '2023-06-06T18:16:55.3304725',
    image: '',
    genderTag: {
      genderTagId: 3,
    },
    foodTag: {
      foodTagId: 2,
    },
  },
  {
    questionId: 9,
    memberId: 9,
    name: '마포갈메기',
    avgStarRate: 2.5,
    viewCount: 83,
    commentCount: 4,
    status: '모집 완료',
    category: '장보기',
    title: '과일 같이 사실 분@@',
    createdAt: '2023-07-01T15:16:55.3304725',
    image: '',
    genderTag: {
      genderTagId: 1,
    },
    foodTag: {
      foodTagId: 1,
    },
  },
  {
    questionId: 10,
    memberId: 10,
    name: '신촌호랑이',
    avgStarRate: 5,
    viewCount: 70,
    commentCount: 43,
    status: '모집 중',
    category: '밥먹기',
    title: '삼겹살 집중 적으로 조질 분 구합니다!',
    createdAt: '2023-06-15T18:16:55.3304725',
    image: '',
    genderTag: {
      genderTagId: 2,
    },
    foodTag: {
      foodTagId: 2,
    },
  },
  {
    questionId: 11,
    memberId: 11,
    name: '강남코끼리',
    avgStarRate: 4.6,
    viewCount: 33,
    commentCount: 4,
    status: '모집 완료',
    category: '장보기',
    title: '과일 같이 사실 분@@',
    createdAt: '2023-06-09T18:16:55.3304725',
    image: '',
    genderTag: {
      genderTagId: 1,
    },
    foodTag: {
      foodTagId: 1,
    },
  },
  {
    questionId: 12,
    memberId: 12,
    name: '잠실원숭이',
    avgStarRate: 3.5,
    viewCount: 10,
    commentCount: 43,
    status: '모집 종료',
    category: '밥먹기',
    title: '삼겹살 집중 적으로 조질 분 구합니다!',
    createdAt: '2023-06-10T18:16:55.3304725',
    image: '',
    genderTag: {
      genderTagId: 3,
    },
    foodTag: {
      foodTagId: 2,
    },
  },
];
