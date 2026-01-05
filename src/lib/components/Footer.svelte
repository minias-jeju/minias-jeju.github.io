<script lang="ts">
  import { SITE } from '$lib/config/site';
</script>

<footer class="site-footer">
  <div class="footer-main">
    <p class="meta">
      {SITE.name}  
      {#if SITE.businessNo}
        · 사업자번호 {SITE.businessNo}
      {/if}
      {#if SITE.onlineSalesNo}
        · 통신판매업신고 {SITE.onlineSalesNo}
      {/if}
      <small>©2026 All rights reserved.</small>
    </p>
  </div>
</footer>

<style>
.site-footer {
  background: #222;
  color: #bbb;
  text-align: center;
}

.footer-main {
  padding: 14px;
}
.meta {
  margin-top: 6px;
  font-size: 0.75rem;
  line-height: 1.5;
  opacity: 0.85;
}


/* 모바일 더 슬림 */
@media (max-width: 768px) {
  .meta {
    font-size: 0.7rem;
  }
}
</style>
