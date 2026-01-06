// /src/lib/data/productSlides.ts
import type { ProductSlideVM } from '$lib/viewmodel/ProductSlideVM';

export const PRODUCT_SLIDES: ProductSlideVM[] = [
  {
    id: 'tangerine',
    name: '일반 감귤',
    desc: '가장 많이 찾는 제주 대표 감귤',
    image: '/images/products/tangerine.png',
    harvestPeriod: '11~1월',
    cta: '구매하기'
  },
  {
    id: 'redhyang',
    name: '레드향',
    desc: '당도 최상급 프리미엄 만감류',
    image: '/images/products/redhyang.png',
    harvestPeriod: '1~3월',
    cta: '프리미엄 구매'
  },
  {
    id: 'hallabong',
    name: '한라봉',
    desc: '향과 식감이 가장 진한 제주 대표 고급 감귤',
    image: '/images/products/hallabong.png',
    harvestPeriod: '12~2월',
    cta: '고급 선물용'
  }
];
