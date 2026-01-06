<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Product from '$lib/components/Product.svelte';
  import Partner from '$lib/components/Partner.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { PRODUCTS } from '$lib/data/products';
  import { SITE } from '$lib/config/site';

  const p = PRODUCTS[0]; // 기본 공유 상품
</script>

<svelte:head>
  <title>{p.name} | {SITE.name}</title>
  <meta property="og:title" content={`${p.name} | ${SITE.name}`} />
  <meta property="og:description" content={p.desc} />
  <meta property="og:image" content={`https://${SITE.domain}${p.image}`} />
</svelte:head>

<Header />

<div class="onepage">
  <section id="hero"><Hero /></section>
  <section id="about"><About /></section>
  <section id="product"><Product /></section>
  <section id="partner"><Partner /></section>
  <section id="contact"><Contact /></section>
</div>

<Footer />
