<template>
  <section id="projects">
    <div class="container">
      <h2 class="section-title">Projektjeim</h2>
      <div class="row projects-wrapper">
        <div class="kucko-project"><a href="https://kuckotanuloszoba.hu" target="_blank">
          <img class="webpage-index" src="/kucko-webpage.jpg" alt="kuckó tanulószoba">
          <p class="website">kuckotanuloszoba.hu</p>
        </a>
      </div>

        <div class="parkhotel-wrapper">
          <a href="https://parkhotel-taltos.com" target=”_blank”>
            <img class="webpage-index" src="/taltos.png" alt="parkhotel-táltos indexkép">
            <p class="website">parkhotel-taltos.com</p>
          </a>
        </div>
      </div>
    </div>  
  </section>
</template>

<style scoped>
.webpage-index { 
  width:          400px;
  border-radius:  10px;
}

.projects-wrapper {
  justify-content:  space-around;
  text-align:       center;
}

.projects-wrapper > div { margin-bottom: 20px; }

.website {
  margin-top:       1.25rem;
  text-transform:   uppercase;
}
</style>