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
  <meta property="og:image" content={`https://${SITE.domain}/orange-og.jpg`} />
  <meta property="og:image:secure_url" content={`https://${SITE.domain}/orange-og.jpg`}>
  <meta property="og:image:width" content="1024" />
  <meta property="og:image:height" content="1024" />  
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<slot />
