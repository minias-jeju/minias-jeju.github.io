<!-- /src/lib/components/product.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { PRODUCTS } from '$lib/data/products';
  import ProductCard from '$lib/components/ProductCard.svelte';

  let index = 0;
  let timer: any;

  const next = () => index = (index + 1) % PRODUCTS.length;
  const prev = () => index = (index - 1 + PRODUCTS.length) % PRODUCTS.length;

  onMount(() => {
    timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  });
</script>

<section id="product" class="hero">
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
  /* 섹션 전체가 슬라이드 영역 */
  .hero {
    position: relative;
    width: 100vw;
    height: 100vh;         /* 판매 섹션이 화면을 꽉 채움 */
    overflow: hidden;
  }

  .slides {
    width: 100%;
    height: 100%;
    position: relative;
  }

  /* 각 슬라이드 = 섹션 전체 */
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
    background: rgba(255,255,255,.8);
    border: none;
    border-radius: 50%;
    width: 56px;
    height: 56px;
    cursor: pointer;
  }

  .nav.left { left: 24px; }
  .nav.right { right: 24px; }
</style>
