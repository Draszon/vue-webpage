<script setup>
  import TicTacToe from '../components/TicTacToe.vue';
</script>

<template>
  <section style="margin-top: 60px;">
    <div class="container">
      <div class="row">
        <TicTacToe />
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
