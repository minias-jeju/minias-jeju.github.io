<script lang="ts">
  import { onMount } from 'svelte';
  import { PRODUCTS } from '$lib/data/products';
  import ProductCard from '$lib/components/ProductCard.svelte';

  let index = 0;
  let timer: any;

  // ───────── 기본 이동 ─────────
  const next = () => index = (index + 1) % PRODUCTS.length;
  const prev = () => index = (index - 1 + PRODUCTS.length) % PRODUCTS.length;

  // ───────── 자동 슬라이드 ─────────
  onMount(() => {
    timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  });

  // ───────── 터치 슬라이드 ─────────
  let startX = 0;

  function onTouchStart(e: TouchEvent) {
    startX = e.touches[0].clientX;
  }

  function onTouchEnd(e: TouchEvent) {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
  }
</script>

<section id="product" class="hero"
  on:touchstart|passive={onTouchStart}
  on:touchend|passive={onTouchEnd}
>
  <div class="slides">
    {#each PRODUCTS as p, i (p.id)}
      <article class="slide {i === index ? 'active' : ''}">
        <ProductCard product={p} />
      </article>
    {/each}
  </div>

  <button class="nav left" on:click={prev}>‹</button>
  <button class="nav right" on:click={next}>›</button>
</section>

<style>
  .hero {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .slides {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .slide {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transform: translateX(60px);
    transition: .7s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slide.active {
    opacity: 1;
    transform: translateX(0);
    z-index: 2;
  }

  .nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 48px;
    background: rgba(255,255,255,.85);
    border: none;
    border-radius: 50%;
    width: 56px;
    cursor: pointer;
    z-index: 10;
  }

  .nav.left { left: 24px; }
  .nav.right { right: 24px; }
</style>
