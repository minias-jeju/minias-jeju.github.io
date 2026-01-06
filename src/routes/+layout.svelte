<script lang="ts">
  import '../app.css';
  import { SITE } from '$lib/config/site';
</script>

<svelte:head>
  <title>{SITE.name} – {SITE.slogan}</title>
  <meta name="description" content={SITE.slogan} />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={SITE.name} />
  <meta property="og:title" content={`${SITE.name} – ${SITE.slogan}`} />
  <meta property="og:description" content={SITE.slogan} />
  <meta property="og:url" content={`https://${SITE.domain}`} />
  <meta property="og:image" content={`https://${SITE.domain}/hero/hero2.png`} />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<slot />
