<template>
  <section class="tech-section" id="tech">
    <div class="container">
      <h2 class="section-title">Technológiák amiket jelenleg használok</h2>
      <div class="row technology">
        <img class="technology-img" src="/computer-graphic.png" alt="technológiák index">
        <div class="technologies-wrapper">
          <div class="prog-wrapper">
            <img class="technology-index" src="/html5.svg" alt="html logo">
            <p class="technology-name">html</p>
          </div>
          <div class="prog-wrapper">
            <img class="technology-index" src="/css3-alt.svg" alt="css logo">
            <p class="technology-name">css</p>
          </div>
          <div class="prog-wrapper">
            <img class="technology-index" src="/js.svg" alt="js logo">
            <p class="technology-name">js</p>
          </div>
          <div class="prog-wrapper">
            <img class="technology-index" src="/vue-9-logo.svg" alt="vuejs logo">
            <p class="technology-name">vue.js</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.tech-section {
  background-image: linear-gradient(#171923, #363c57, #171923);
}

.technology-index { height: 70px; }

.technology {
  align-items:    center;
  flex-direction: column;
}

.technologies-wrapper {
  width:            100%;
  display:          flex;
  flex-direction:   row;
  flex-wrap:        wrap;
  justify-content:  space-evenly;
}

.prog-wrapper {
  display:            flex;
  flex-direction:     column;
  justify-content:    center;
  align-items:        center;
  text-transform:     uppercase;
  font-weight:        500;
  padding:            1.25rem 3.125rem;
  border-radius:      15px 50px;
  background-color:   var(--section-light-bg);
  color:              var(--font-dark-color)
}

.technology-name { padding-top: 0.625rem; }
</style>