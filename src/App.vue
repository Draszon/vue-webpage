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
  </header>

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
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
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

  footer {
    height:           100px;
    display:          flex;
    justify-content:  center;
    align-items:      center;
  }

  .footer-content { font-size: 0.875rem; }
</style>
