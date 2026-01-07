<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  const images = [
    '/images/hero/hero1.jpg',
    '/images/hero/hero2.jpg',
    '/images/hero/hero3.jpg'
  ];

  let current = 0;
  let timer: ReturnType<typeof setInterval>;

  onMount(() => {
    timer = setInterval(() => {
      current = (current + 1) % images.length;
    }, 3000); // 3초
  });

  onDestroy(() => clearInterval(timer));
</script>

<section id="hero" class="hero">
  {#each images as img, i}
    <div
      class="slide {i === current ? 'active' : ''}"
      style="background-image:url('{img}')"
      aria-hidden={i !== current}
    ></div>
  {/each}

  <div class="hero-overlay">
    <h1>제주에서 바로 따는 청명 감귤</h1>
    <p>산지 직송 · 당일 선별 · 신선 배송</p>
  </div>
</section>

<style>
.hero {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

/* 슬라이드 */
.slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transform: scale(1.08);
  transition: opacity 1.2s ease, transform 6s ease;
}

.slide.active {
  opacity: 1;
  transform: scale(1);
}

/* 텍스트 오버레이 */
.hero-overlay {
  position: absolute;
  bottom: 18%;
  left: 10%;
  color: #fff;
  max-width: 460px;
}

.hero-overlay h1 {
  font-size: 2.8rem;
  line-height: 1.2;
}

.hero-overlay p {
  margin-top: 1rem;
  font-size: 1.05rem;
  opacity: 0.9;
}

/* 모바일 */
@media (max-width: 768px) {
  .hero-overlay {
    left: 7%;
    bottom: 14%;
  }

  .hero-overlay h1 {
    font-size: 2rem;
  }
}
</style>
