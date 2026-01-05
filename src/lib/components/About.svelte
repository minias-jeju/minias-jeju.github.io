<script lang="ts">
  import { SITE } from '$lib/config/site';
</script>

<section id="about" class="about">
  <!-- 왼쪽 로고 -->
  <div class="company-logo">
    <img src="/images/bnb150.png" alt="회사 로고" />
  </div>

  <!-- 오른쪽 정보 -->
  <div class="company-info">
    <h3>{SITE.name}</h3>
    <ul>
      {#if SITE.slogan}<li> {SITE.slogan}</li>{/if}
      {#if SITE.businessNo}<li> {SITE.businessNo}</li>{/if}
      {#if SITE.onlineSalesNo && SITE.onlineSalesNo !== ''}<li> {SITE.onlineSalesNo}</li>{/if}
      {#if SITE.ceo}<li> {SITE.ceo}</li>{/if}
      {#if SITE.tel}<li> {SITE.tel}</li>{/if}
      {#if SITE.fax && SITE.fax !== ''}<li> {SITE.fax}</li>{/if}
      {#if SITE.email}<li> {SITE.email}</li>{/if}
      {#if SITE.address}<li> {SITE.address}</li>{/if}
    </ul>
  </div>  
</section>
<style>
/* 전체 화면 세션 */
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 90vw;
  min-height: 100vh; /* 화면 전체 */
  padding: 0; 
}
 

/* 로고 */
.company-logo img {
  width: 160px;
  height: 160px;
  object-fit: contain;
  margin-right: 20px;
  border-radius: 12px;
}

/* 회사 정보 */
.company-info {
  display: flex;
  flex-direction: column;
  justify-content: left; /* 카드 높이에 맞춰 세로 중앙 정렬 */
  height: 100%; 
}

.company-info h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.company-info ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: left; /* 리스트 전체 세로 중앙 */
  height: 100%;
}

.company-info li {
  margin-bottom: 0.6rem;
  font-size: 1rem;
  display: flex;        /* 각 항목도 flex */
  align-items: center;  /* 각 행 내용 중앙 정렬 */
  text-align: left;
}

/* 모바일 대응 */
@media (max-width: 768px) {
 

  .company-logo img {
    width: 150px;
    height: 150px;
  }

  .company-info h3 {
    font-size: 1.5rem;
  }

  .company-info li {
    font-size: 0.95rem;
    justify-content: left; /* 모바일은 중앙 정렬 */
  }
}
</style>