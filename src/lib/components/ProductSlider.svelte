<!-- /src/lib/components/ProductSlider.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { PRODUCT_SLIDES } from '$lib/data/productSlides';

  let index = 0;
  let timer: any;

  const next = () => index = (index + 1) % PRODUCT_SLIDES.length;
  const prev = () => index = (index - 1 + PRODUCT_SLIDES.length) % PRODUCT_SLIDES.length;

  onMount(() => {
    timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  });
</script>

<div class="slider">
  {#each PRODUCT_SLIDES as p, i (p.id)}
    <div class="slide {i === index ? 'active' : ''}">
      <img src={p.image} alt={p.name} />

      <div class="info">
        <h2>{p.name}</h2>
        <p>{p.desc}</p>
        <span class="period">출하시기 {p.harvestPeriod}</span>
        <button>{p.cta}</button>
      </div>
    </div>
  {/each}

  <button class="nav left" on:click={prev}>‹</button>
  <button class="nav right" on:click={next}>›</button>
</div>

<style>
    .slider {
  position: relative;
  overflow: hidden;
}

.slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: translateX(40px);
  transition: .6s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
}

.slide.active {
  opacity: 1;
  transform: translateX(0);
  z-index: 2;
}

.slide img {
  width: 340px;
}

.info button {
  margin-top: 12px;
  background: #ff8c00;
  color: white;
  border-radius: 8px;
  padding: 12px 24px;
}
</style>