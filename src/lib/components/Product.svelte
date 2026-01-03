<script lang="ts">
  const products = [
    { name: '노지 감귤', desc: '자연 재배 제주 감귤' },
    { name: '하우스 감귤', desc: '당도 높은 프리미엄 감귤' }
  ];
</script>

<section id="product">
  <h2>주요 상품</h2>
  {#each products as p}
    <div class="card">
      <h3>{p.name}</h3>
      <p>{p.desc}</p>
    </div>
  {/each}
</section>
