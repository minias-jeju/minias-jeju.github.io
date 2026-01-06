// /src/lib/domain/Product.ts
export interface Product {
  id: string;
  name: string;
  desc: string;
  image: string;
  harvestPeriod: string;   // 출하시기 (ex: 9~10월)
}
