<script lang="ts">
  import type { Product } from '$lib/domain/Product';
  export let product: Product;
</script>

<div class="hero-card">

  <!-- IMAGE -->
  <div class="image">
    <img src={product.image} alt={product.name} />
  </div>

  <!-- INFO -->
  <div class="info">
    <span class="badge">제주 직송</span>
    <h2>{product.name}</h2>
    <p class="desc">{product.desc}</p>

    <div class="meta">
      <span>출하시기</span>
      <b>{product.harvestPeriod}</b>
    </div>

    <!-- <button class="cta">구매하기</button> -->
  </div>
</div>

<style>
/* ===== Desktop ===== */
.hero-card {
  max-width: 1400px;
  margin: auto;
  min-height: 100vh;
  display: grid;

  /* 좌측 이미지, 우측 info */
  grid-template-columns: minmax(520px, 700px) minmax(420px, 1fr);

  column-gap: 96px;
  align-items: center;
  padding: 0 80px;
}
.info {
  min-width: 420px;
}
/* ===== Mobile ===== */
@media (max-width: 768px) {
  .hero-card {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: 120px 20px 60px;
  }

  .image img {
    width: 100%;
    border-radius: 12px;
    margin-right: 10px;
  }

  .info {
    margin-top: 28px;
    margin-left: 10px;
    align-items: flex-start;
  }

  h2 {
    font-size: 28px;
  }

  .desc {
    font-size: 15px;
  }

  /* .cta {
    width: 100%;
    text-align: center;
    margin-top: 24px;
  } */
}
</style>
