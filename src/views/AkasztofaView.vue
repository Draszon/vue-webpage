<script setup>
  import Akasztofa from '../components/Akasztofa.vue';
</script>

<template>
  <section style="margin-top: 60px;">
    <div class="container">
      <div class="row">
        <Akasztofa />
      </div>
    </div>
  </section>
</template>

<style scoped>
  .container {
    height: 680px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .row {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
