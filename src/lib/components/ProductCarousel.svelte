<!-- src/lib/components/ProductCarousel.svelte -->
<script lang="ts">
  import { PRODUCTS } from '$lib/data/products';
  import ProductCard from './ProductCard.svelte';
  import { onMount } from 'svelte';

  let index = 0;
  let startX = 0;
  let currentX = 0;

  const max = PRODUCTS.length - 1;

  function next() {
    if (index < max) index++;
  }

  function prev() {
    if (index > 0) index--;
  }

  function touchStart(e: TouchEvent) {
    startX = e.touches[0].clientX;
  }

  function touchMove(e: TouchEvent) {
    currentX = e.touches[0].clientX;
  }

  function touchEnd() {
    if (startX - currentX > 50) next();
    if (currentX - startX > 50) prev();
  }
</script>

<div class="carousel"
     on:touchstart={touchStart}
     on:touchmove={touchMove}
     on:touchend={touchEnd}>
  <div class="track" style="transform: translateX(-{index * 100}%);">
    {#each PRODUCTS as p}
      <div class="slide">
        <ProductCard product={p}/>
      </div>
    {/each}
  </div>

  <button class="nav left" on:click={prev}>‹</button>
  <button class="nav right" on:click={next}>›</button>
</div>

<style>
.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.track {
  display: flex;
  transition: transform .4s ease;
}
.slide {
  min-width: 100%;
  display: flex;
  justify-content: center;
}
.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #00000088;
  color: white;
  border: none;
  font-size: 42px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  cursor: pointer;
}
.left { left: 12px; }
.right { right: 12px; }
@media (max-width: 768px) {
  .nav { display:none; }
}
</style>
