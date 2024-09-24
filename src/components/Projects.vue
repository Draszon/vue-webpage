<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <section class="bg-light">
    <div class="container">
      <h2 class="section-title">JavaScript projektek</h2>
      <div class="row js">
        <div class="js-projects-wrapper">
          <img class="arrow arrow-left" @click="gameMinus" src="/arrow-left.svg" alt="balra nyíl">
          <div class="actual-jsproject" v-if="games">
            <RouterLink to="/projects" class="project-link">
              <img  class="project-index" :src="games[gameCounter].img" alt="black jack indexkép">
            </RouterLink>
            <RouterLink to="/projects" class="project-link">
              <h3 class="project-title">{{ games[gameCounter].name }}</h3>
            </RouterLink>
            <p class="project-description">{{ games[gameCounter].description }}</p>
          </div>
          <div v-else><p>Nincsenek játékok!</p></div>
          <img class="arrow arrow-right" @click="gamePlus" src="/arrow-right.svg" alt="jobbra nyíl">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      games: null,
      gameCounter: 0
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch("/games.json");
        this.games = await response.json();
      } catch (error) {
        console.error('Hiba a játékok betöltésekor: ', error);
      }
    },
    gameMinus() {
      if (this.games) {
        this.gameCounter--;
        if (this.gameCounter < 0) {
          this.gameCounter = this.games.length - 1;
        }
      }
    },
    gamePlus() {
      if (this.games) {
        this.gameCounter++;
        if (this.gameCounter > this.games.length - 1) {
          this.gameCounter = 0;
        }
      }
    }
  },
  mounted() {
    this.fetchData();
  }
}
</script>

<style scoped>
.webpage-index { 
  width:          25rem;
  border-radius:  10px;
}

.projects-wrapper {
  justify-content:  space-around;
  text-align:       center;
}

.website {
  margin-top:       1.25rem;
  text-transform:   uppercase;
}

.arrow { 
  height:       2.5rem;
  position:     absolute;
  top:          200px;
  cursor:       pointer;
  transition:   height .2s;
}

.arrow:hover {
  height:       2.8125rem;
  transition:   height .2s;
}

.arrow-left { left: 50px; }
.arrow-right { right: 50px; }

.project-index { height: 12.5rem; }

.js-projects-wrapper {
  height:           600px;
  width:            60%;
  display:          flex;
  justify-content:  center;
  align-items:      center;
  position:         relative;
  box-shadow:       0 0 50px -18px hsla(228, 18%, 11%, 0.50);
  padding:          3.125rem;
  border-radius:    0.625rem;
}

.js { justify-content: center; }

.actual-jsproject {
  display:          flex;
  flex-direction:   column;
}

.actual-jsproject a { text-align: center; }

.project-title, .project-description { text-align: center; }

.project-title { 
  font-weight:  500; 
  margin:       2.5rem 0;
  color:        var(--font-dark-color);
}

.project-description { line-height: 23px; }
</style>