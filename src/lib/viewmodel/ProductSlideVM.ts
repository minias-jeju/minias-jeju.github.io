// /src/lib/viewmodel/ProductSlideVM.ts
import type { Product } from '$lib/domain/Product';

export interface ProductSlideVM extends Product {
  cta: string; // 버튼 문구
}
