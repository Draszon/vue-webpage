<script setup>
  import Welcome from '../components/Welcome.vue'
  import Projects from '../components/Projects.vue'
  import Tech from '../components/Tech.vue'
  import Contacts from '../components/Contacts.vue'
  import WebsiteProjects from '../components/WebsiteProjects.vue'
</script>

<template>
  <main>
    <Welcome />
    <WebsiteProjects />
    <Projects :games="games" />
    <Tech />
    <Contacts />
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

</style>