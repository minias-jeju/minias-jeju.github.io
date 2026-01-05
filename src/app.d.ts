/// <reference types="svelte" />

declare global {
  namespace kakao {
    namespace maps {
      /* =========================
         LatLng
      ========================= */
      class LatLng {
        constructor(lat: number, lng: number);
      }

      /* =========================
         Map Options
      ========================= */
      interface MapOptions {
        center: LatLng;
        level?: number;
        draggable?: boolean;
        scrollwheel?: boolean;
        disableDoubleClickZoom?: boolean;
      }

      /* =========================
         Map
      ========================= */
      class Map {
        constructor(container: HTMLElement, options: MapOptions);

        /** 컨테이너 사이즈 변경 시 레이아웃 재계산 */
        relayout(): void;

        /** 지도 중심 이동 */
        setCenter(latlng: LatLng): void;
      }

      /* =========================
         Marker
      ========================= */
      class Marker {
        constructor(options: { position: LatLng });
        setMap(map: Map | null): void;
      }

      /* =========================
         Custom Overlay
      ========================= */
      class CustomOverlay {
        constructor(options: {
          position: LatLng;
          content: string | HTMLElement;
          xAnchor?: number;
          yAnchor?: number;
        });
        setMap(map: Map | null): void;
      }

      /* =========================
         SDK Loader
      ========================= */
      function load(callback: () => void): void;
    }
  }

  interface Window {
    kakao: typeof kakao;
  }
}

export {};
