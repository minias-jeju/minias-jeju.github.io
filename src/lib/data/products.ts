// /src/lib/data/products.ts
import type { Product } from '$lib/domain/Product';

export const PRODUCTS: Product[] = [
  {
    id: 'tangerine',
    name: '일반 감귤',
    desc: '제주 노지에서 자연 재배한 신선한 감귤',
    image: '/images/products/tangerine.png',
    harvestPeriod: '11~1월'
  },
  {
    id: 'redhyang',
    name: '레드향',
    desc: '고당도 프리미엄 만감류 레드향',
    image: '/images/products/redhyang.png',
    harvestPeriod: '1~3월'
  },
  {
    id: 'hallabong',
    name: '한라봉',
    desc: '진한 향과 새콤달콤한 제주 대표 과일',
    image: '/images/products/hallabong.png',
    harvestPeriod: '12~2월'
  }
];
