<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <main>
    <section class="description">
      <div class="container">
        <h2 class="section-title projects-title">JavaScript projektek</h2>
        <div class="row">
          <p class="title-description">Üdvözöllek a JavaScriptes projektjeim gyűjtőoldalán!</p>
          <p class="title-description">
            Ezen az oldalon találod az általam készített különféle 
            játékokat és interaktív alkalmazásokat, amelyek mindegyike 
            a JavaScript erejét használva készült. Minden projekt egy-egy 
            kreatív kihívás volt számomra, és remélem, hogy neked is 
            annyi örömöt okoznak majd a használatuk során, mint nekem 
            az elkészítésük.
          </p>
          <p class="title-description">
            Az oldalon lehetőséged van bármelyik projektem kipróbálni – 
            csak kattints a számodra legérdekesebbre.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-light">
      <div class="container">
        <div class="row project-row">
          <div class="projects-list-container">
            <div class="actual-project" 
            v-for="game in games" 
            :key="game.name">
              <img class="project-index" :src="game.img" alt="Játék indexkép">
              <p class="project-name">{{ game.name }}</p>
              <RouterLink class="btn" :to="game.path">Kipróbálom</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      games: null
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
    }
  },
  mounted() {
    this.fetchData();
  }
}
</script>

<style scoped>
.description { margin-top: 3.125rem; }
.projects-description-wrapper { margin-top: 6.25rem; }
.project-index { width: 150px; }

.title-description {
  font-size: 1.25rem;
  line-height: 1.875rem;
}

.btn {
  background-color: #47b16d;
  padding: 0.625rem;
  border-radius: 0.3125rem;
  transition: background-color .3s;
}

.project-row {
  display: flex;
  justify-content: center;
  align-items: center;
}

.projects-list-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.actual-project {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.project-name { margin: 10px 0; }

.btn:hover {
  background-color: #339e71;
  transition: .3s;
}
</style>