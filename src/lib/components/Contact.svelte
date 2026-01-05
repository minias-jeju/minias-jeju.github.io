<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { SITE } from '$lib/config/site';

  /**
   * 청명 감귤 농장 위치
   * Kakao Maps 공식 좌표계
   * https://apis.map.kakao.com/web/documentation/#LatLng
   */
  const LAT = 33.252452128;
  const LNG = 126.471124226;

  let mapEl: HTMLDivElement;
  let map: kakao.maps.Map;
  let center: kakao.maps.LatLng;

  /** 컨테이너 사이즈 변경 시 지도 중심 보정 */
  function relayout() {
    if (!map || !center) return;
    map.relayout();
    map.setCenter(center);
  }

  onMount(() => {
    if (!window.kakao?.maps || !mapEl) return;

    window.kakao.maps.load(() => {
      center = new window.kakao.maps.LatLng(LAT, LNG);

      map = new window.kakao.maps.Map(mapEl, {
        center,
        level: 3,
        draggable: false,
        scrollwheel: false,
        disableDoubleClickZoom: true
      });

      new window.kakao.maps.Marker({ position: center }).setMap(map);

      new window.kakao.maps.CustomOverlay({
        position: center,
        yAnchor: 1.7,
        content: `
          <div class="kakao-overlay">
            <strong>${SITE.name}</strong>
            <div class="addr">${SITE.address}</div>
          </div>
        `
      }).setMap(map);

      // 최초 렌더 안정화
      setTimeout(relayout, 200);
    });

    window.addEventListener('resize', relayout);
  });

  onDestroy(() => {
    window.removeEventListener('resize', relayout);
  });
</script>

<section id="contact" class="contact-section">
  <div
    bind:this={mapEl}
    id="kakao-map"
    role="region"
    aria-label="청명 감귤 농장 위치 지도"
  ></div>
</section>

<style>
/* =========================
   Layout
========================= */
.contact-section {
  width: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
}

/* =========================
   Kakao Map
========================= */
#kakao-map {
  width: 100vw;
  height: 100vh;
  max-height: 720px;
  position: relative;
  overflow: hidden;
}

/* =========================
   Overlay (외부 SDK DOM)
========================= */
:global(.kakao-overlay) {
  background: #fff;
  border-radius: 14px;
  padding: 12px 16px;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.18);
  font-size: 14px;
  line-height: 1.45;
  white-space: nowrap;
}

:global(.kakao-overlay strong) {
  display: block;
  color: #ff7a00;
  font-weight: 700;
  margin-bottom: 4px;
}

:global(.kakao-overlay .addr) {
  font-size: 13px;
  color: #666;
}

</style>
