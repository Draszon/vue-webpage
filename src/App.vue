<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1 class="logo">
      <RouterLink to="/">peter - draszon</RouterLink>
    </h1>

    <nav class="pc-menu">
      <RouterLink to="/">Főoldal</RouterLink>
      <a href="#projects">Projektek</a>
      <a href="#tech">Technológiák</a>
      <a href="#contacts">Elérhetőségek</a>
    </nav>

    <div class="mobile-menu-btn">
      <img @click="navOpen()" :class="{ 'mobile-menu-close': mobileMenuOpen }" class="menu-open" src="/menu-open.svg" alt="menü nyitó gomb">
      <img @click="navClose()" :class="{ 'mobile-menu-open': mobileMenuOpen }" class="menu-close" src="/menu-close.svg" alt="menü záró gomb">
    </div>
  </header>

  <nav>
    <div class="mobile-menu" :class="{ 'mobile-open': mobileMenuOpen, 'mobile-close': !mobileMenuOpen }">
      <RouterLink to="/" @click="navClose()" class="menu-item">Főoldal</RouterLink>
      <a @click="navClose()" class="menu-item" href="#projects">Projektek</a>
      <a @click="navClose()" class="menu-item" href="#tech">Technológiák</a>
      <a @click="navClose()" class="menu-item" href="#contacts">Elérhetőségek</a>
    </div>
  </nav>

  <RouterView />

  <footer class="footer">
    <p class="footer-content">©
      {{ currentYear }} DRASZON. Minden jog fenntartva.
    </p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
      mobileMenuOpen: false
    }
  },
  methods: {
    navOpen() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    navClose() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    }
  }
}
</script>

<style scoped>
  .mobile-open { height: 200px !important; }
  .mobile-close { height: 0 !important; }
  .mobile-menu-open { display: block !important; }
  .mobile-menu-close { display: none !important; }

  .logo {
    text-transform:   uppercase;
    font-weight:      600;
    font-size:        1.125rem;
  }

  header {
    z-index:              1;
    background-color:     var(--mian-bg);
    width:                100%;
    height:               3.75rem;
    display:              flex;
    flex-direction:       row;
    justify-content:      space-between;
    align-items:          center;
    padding:              0 1.875rem;
    border-bottom:        2px solid var(--menu-bottom-color);
    position:             fixed;
    top:                  0px;
    backdrop-filter:      blur(3px);
  }

  .pc-menu  {
  display:        flex;
  flex-direction: row;
  height:         100%;
  }

  .pc-menu a {
    height:       100%;
    display:      flex;
    align-items:  center;
    padding:      0 0.625rem;
    font-weight:  500;
    transition:   color .3s;
  }

  .pc-menu a:hover { 
    border-bottom:  1px solid var(--font-light-color);
    color:          hsl(0, 0%, 61%);
    transition:     color .3s;
  }

  .mobile-menu-btn {
    display: none;
  }

  .mobile-menu-btn img {
    position:   fixed;
    height:     2.5rem;
    right:      20px;
    top:        10px;
  }

  .mobile-menu {
    z-index:            1;
    background-color:   var(--section-light-bg);
    font-weight:        500;
    width:              100%;
    position:           fixed;
    top:                60px;
    display:            flex;
    flex-direction:     column;
    height:             0;
    transition:         .5s;
    overflow:           hidden;
  }
  
  .menu-item {
    color:            var(--font-dark-color);
    border-bottom:    1px solid var(--mian-bg);
    width:            100%;
    height:           3.125rem;
    display:          flex;
    align-items:      center;
    padding:          0 1.25rem;
  }
  
  .menu-close { display: none; }

  footer {
    height:           100px;
    display:          flex;
    justify-content:  center;
    align-items:      center;
  }

  .footer-content { font-size: 0.875rem; }

  @media (max-width: 768px) {
    .pc-menu { display: none; }
    .mobile-menu-btn { display: block; }
  }
</style>
