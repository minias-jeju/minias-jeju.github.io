<script lang="ts">
  import { onMount } from 'svelte';

  const row1 = [
    { logo: '/images/partner/jeju.png' },
    { logo: '/images/partner/jjnh.jpg' },
     { logo: '/images/partner/hansum.jpg' },
    { logo: '/images/partner/cjdaehan.png' }
  ];

  const row2 = [
    { logo: '/images/partner/hansum.jpg' },    
    { logo: '/images/partner/cjdaehan.png' },    
    { logo: '/images/partner/jjnh.jpg' },
    { logo: '/images/partner/jeju.png' },
  ];

  let track1: HTMLDivElement;
  let track2: HTMLDivElement;

  let offset1 = 0;
  let offset2 = 0;
  let raf: number;

  onMount(() => {
    const speed1 = 0.35;
    const speed2 = 0.18;

    const animate = () => {
      offset1 -= speed1;
      offset2 -= speed2;

      track1.style.transform = `translateX(${offset1}px)`;
      track2.style.transform = `translateX(${offset2}px)`;

      if (Math.abs(offset1) >= track1.scrollWidth / 2) offset1 = 0;
      if (Math.abs(offset2) >= track2.scrollWidth / 2) offset2 = 0;

      raf = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(raf);
  });
</script>

<!-- Fullscreen Section -->
<section id="partner" class="partner-section">
  <div class="partner-container">
    <h2>협력사</h2>

    <div class="partner-slider">

      <!-- Row 1 -->
      <div class="partner-row">
        <div class="partner-track" bind:this={track1}>
          {#each [...row1, ...row1] as p}
            <div class="partner-card">
              <img src={p.logo} alt="협력사 로고" loading="lazy" />
            </div>
          {/each}
        </div>
      </div>

      <!-- Row 2 -->
      <div class="partner-row slow">
        <div class="partner-track" bind:this={track2}>
          {#each [...row2, ...row2] as p}
            <div class="partner-card">
              <img src={p.logo} alt="협력사 로고" loading="lazy" />
            </div>
          {/each}
        </div>
      </div>

    </div>
  </div>
</section>

<style>
/* Fullscreen Section */
.partner-section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* 화면 전체 높이 */
  padding: 0 1rem;
  background: #fafafa;
  text-align: center;
}

.partner-container {
  width: 100%;
  max-width: 1200px;
}

/* 제목 */
.partner-section h2 {
  margin-bottom: 3rem;
  font-size: 2rem;
}

/* Slider */
.partner-slider {
  overflow: hidden;
  display: grid;
  gap: 1.4rem;
}

.partner-row {
  overflow: hidden;
}

.partner-track {
  display: flex;
  gap: 1.4rem;
  width: max-content;
  will-change: transform;
}

.partner-card {
  width: 180px;
  min-width: 180px;
  background: #fff;
  border-radius: 14px;
  padding: 1.4rem 1rem;
  box-shadow: 0 8px 20px rgba(0,0,0,.08);
  display: flex;
  align-items: center;
  justify-content: center;
}

.partner-card img {
  width: 90px;
  height: 90px;
  object-fit: contain;
}

/* Mobile */
@media (max-width: 768px) {
  .partner-card {
    width: 140px;
    min-width: 140px;
  }
  .partner-card img {
    width: 72px;
    height: 72px;
  }
}
</style>
