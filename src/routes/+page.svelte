<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Product from '$lib/components/Product.svelte';
  import Partner from '$lib/components/Partner.svelte';  
  import Contact from '$lib/components/Contact.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<div class="onepage">
  <section id="hero"><Hero /></section>
  <section id="about"><About /></section>
  <section id="product"><Product /></section>
  <section id="partner"><Partner /></section>  
  <section id="contact"><Contact /></section>
</div>

<Footer />
