<script setup>
  import Darts from '../components/Darts.vue';
</script>

<template>
  <section style="margin-top: 60px;">
    <div class="container">
      <div class="row">
        <Darts />
      </div>
    </div>
  </section>
</template>

<style scoped>
  .container {
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .row {
    display: flex;
    flex-direction: column;
  }
</style>
